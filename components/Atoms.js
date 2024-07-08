import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const selectedAccent = atomWithStorage("AccColor", {
  color: "#9fa1a2",
  id: 8,
});
