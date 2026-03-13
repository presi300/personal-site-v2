{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    bun2nix = {
      url = "github:nix-community/bun2nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, bun2nix }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      bun2nix-lib = bun2nix.packages.${system}.default;

      # 1. Define the APP build
      nextApp = bun2nix-lib.mkDerivation {
        pname = "next-app";
        version = "1.0.0";
        src = ./.;
        bunDeps = bun2nix-lib.fetchBunDeps {
          bunNix = ./bun.nix;
          src = ./.;
        };
        buildPhase = ''
          export HOME=$TMPDIR
          export NEXT_TELEMETRY_DISABLED=1
          bun run build
        '';
        installPhase = ''
          mkdir -p $out/share/next-app
          cp -r .next public package.json node_modules $out/share/next-app/
        '';
      };

    in {
      # 2. Define the DOCKER IMAGE
      packages.${system}.default = pkgs.dockerTools.buildLayeredImage {
        name = "next-app-docker";
        tag = "latest";
        contents = [ pkgs.bun pkgs.bash ]; # Standard environment
        
        config = {
          Cmd = [ "${pkgs.bun}/bin/bun" "run" "start" ];
          WorkingDir = "${nextApp}/share/next-app";
          ExposedPorts = { "3000/tcp" = {}; };
        };
      };
    };
}
