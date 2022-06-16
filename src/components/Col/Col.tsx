import { ReactNode, createElement } from "react";
import cn from "classnames";

interface ColProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  children: ReactNode;
  colWidth?: "full" | "half" | "third" | "quarter";
  tag?: keyof JSX.IntrinsicElements;
}

export default function Col({
  className = "",
  children,
  colWidth,
  tag = "div",
  ...props
}: ColProps) {
  const Wrapper = tag;

  return createElement(
    Wrapper,
    {
      className: cn({ [`l-grid__item--${colWidth}`]: colWidth }, className),
      ...props
    },
    children
  );
}
