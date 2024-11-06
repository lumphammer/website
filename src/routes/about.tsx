import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function About() {
  const renderedAt = new Date().toISOString();
  return (
    <main class="container">
      <h1>About Me</h1>
      <p>This is the about page.</p>
      <p>Rendered at {renderedAt}</p>
    </main>
  );
}
