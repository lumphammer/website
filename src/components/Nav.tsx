import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

type LinkProps = {
  to: string;
  children: string;
};

function Link({ to, children }: LinkProps) {
  const location = useLocation();

  return (
    <li>
      <a href={to} aria-current={to === location.pathname ? "page" : undefined}>
        {children}
      </a>
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
