import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createContext, createEffect, createSignal, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.scss";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./contexts";

// const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

export default function App() {
  const [theme, setTheme] = createSignal<"light" | "dark" | "unset">("unset");

  createEffect(() => {
    console.log("theme", theme());
  });

  return (
    <ThemeContext.Provider value={theme()}>
      <Router
        root={(props) => (
          <>
            <header>
              <div class="container">
                <div>Lumphammer</div>
                <Nav />
                <ThemeToggle />
              </div>
            </header>
            <Suspense>{props.children}</Suspense>
            <footer>
              <div class="container">
                <hr />
                <small>Copyright 2024 Neil de Carteret</small>
                {" / "}
                <small>Rendered at {new Date().toISOString()}</small>
              </div>
            </footer>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </ThemeContext.Provider>
  );
}
