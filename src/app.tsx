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
          <Nav />
          <Suspense>{props.children}</Suspense>
          <footer>
            <hr />
            <small>Copyright 2024 Neil de Carteret</small>
          </footer>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
