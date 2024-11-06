import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <header>
            <div class="container">
              <div>Lumphammer</div>
              <Nav />
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
  );
}
