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
    in {
      packages.${system}.default = bun2nix-lib.mkDerivation {
        pname = "next-app";
        version = "1.0.0";
        src = ./.;

        # 1. This tells Nix exactly what to download based on your bun.nix
        bunDeps = bun2nix-lib.fetchBunDeps {
          bunNix = ./bun.nix;
          src = ./.;
        };

        # 2. Build instructions
        # Note: bun2nix-lib.mkDerivation handles 'bun install' for you!
        buildPhase = ''
          export HOME=$TMPDIR
          bun run build
        '';

        installPhase = ''
          mkdir -p $out
          cp -r .next public package.json node_modules $out/
        '';
      };
    };
}
