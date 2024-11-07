import { createContext } from "solid-js";

export const ThemeContext = createContext<"light" | "dark" | "unset">("unset");
