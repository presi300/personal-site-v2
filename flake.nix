{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  #yes, I am vibecoding ts, you try finding documentation for building nextjs with nix

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      nextApp = pkgs.stdenv.mkDerivation {
        pname = "personal-site-v2";
        version = "1.0.0";
        src = ./.;
        nativeBuildInputs = [ pkgs.bun ];
        buildPhase = ''
          export HOME=$TMPDIR
          bun install --frozen-lockfile
          bun run build
        '';
        installPhase = ''
          mkdir -p $out
          cp -r .next public package.json node_modules $out/
        '';
      };

    in {
      packages.${system}.default = pkgs.dockerTools.buildLayeredImage {
        name = "personal-site-v2";
        tag = "latest";
        contents = [ pkgs.bun pkgs.bash pkgs.coreutils ];
        config = {
          Cmd = [ "${pkgs.bun}/bin/bun" "run" "start" ];
          WorkingDir = "${nextApp}";
          ExposedPorts = { "3000/tcp" = {}; };
        };
      };
    };
}
