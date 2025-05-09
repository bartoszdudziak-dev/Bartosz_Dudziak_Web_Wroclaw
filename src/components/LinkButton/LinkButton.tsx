import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { Link } from "react-router";

type LinkButtonProps = { to: string } & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

function LinkButton({ children, to, ...props }: LinkButtonProps) {
  return (
    <Link to={to}>
      <button {...props}>{children}</button>
    </Link>
  );
}

export default LinkButton;
