import { atom } from "jotai";

export default function useLocalStorageAtom(key, initialValue) {
  // Initialize the state from localStorage
  const getInitialValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const baseAtom = atom(getInitialValue());

  // Atom to read and write the value
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const newValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  );

  return derivedAtom;
}
