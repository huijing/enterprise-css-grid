import { ReactNode, createElement } from "react";

interface GridProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

export default function Grid({
  className = "",
  children,
  tag = "div",
  ...props
}: GridProps) {
  const Wrapper = tag;
  return createElement(
    Wrapper,
    {
      className: `l-grid ${className}`,
      ...props
    },
    children
  );
}
