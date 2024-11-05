import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main>
      <h1>Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p>
        <A href="/">Home</A>
        {" - "}
        <A href="/about">About Page</A>
      </p>
    </main>
  );
}
