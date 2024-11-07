// https://github.com/picocss/picocss.com/blob/7ed4e64aeb63a8c89f849591f30d055e99183387/app/components/icons/ThemeToggle.jsx#L4

import { createSignal, useContext } from "solid-js";
import { ThemeContext } from "~/contexts";

export default function ThemeToggle() {
  // const [theme, setTheme] = createSignal("light");
  const theme = useContext(ThemeContext);
  return <button>{theme()}</button>;
}
