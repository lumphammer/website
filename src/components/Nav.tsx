import { useLocation } from "@solidjs/router";

type LinkProps = {
  to: string;
  children: string;
};

function Link({ to, children }: LinkProps) {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <li class={`border-b-2 ${active(to)} mx-1.5 sm:mx-6`}>
      <a href={to}>{children}</a>
    </li>
  );
}

export default function Nav() {
  return (
    <nav class="bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link>
      </ul>
    </nav>
  );
}
