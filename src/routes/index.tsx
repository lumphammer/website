import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="container">
      <h1>Hello world!</h1>
      <Counter />
    </main>
  );
}
