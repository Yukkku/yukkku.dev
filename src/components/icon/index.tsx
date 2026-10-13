import type { JSX } from "solid-js";

export const Icon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => {
  return <svg {...props} viewBox="-20 -20 40 40">
    <path d="M0,-20L10,-10V10L2,18V-2L9,-9V9L-9,-9L0,-18V20L-10,10V-10Z" style={{
      fill: "var(--fg)",
      "fill-rule": "evenodd",
      transform: "scaleX(sqrt(3))"
    }} />
  </svg>;
};

export default Icon;
