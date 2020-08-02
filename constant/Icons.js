import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const LogoIcon = ({ size, color, sw }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 463.6 463.6"
      width={size}
      height={size}
    >
      <polygon
        fill={theme === "dark" ? "red" : "#55c584"}
        points="103.8,91.8 7.8,187.8 231.8,411.8 455.8,187.8 359.8,91.8 "
      />
      <g>
        <path
          fill={theme === "dark" ? "#fff" : "#000"}
          d="M0.6,159c0.8,0.8,0.8,1.6,1.6,2.4l224,224c0,0,0,0,0.8,0c0.8,0.8,0.8,0.8,1.6,1.6h0.8
		c0.8,0,1.6,0.8,2.4,0.8s1.6,0,2.4-0.8h0.8c0.8,0,1.6-0.8,1.6-1.6c0,0,0,0,0.8,0l224-224c0.8-0.8,1.6-1.6,1.6-2.4
		c0.8-1.6,0.8-4,0-6.4c-0.8-0.8-0.8-1.6-1.6-2.4l-96-96c-1.6-1.6-3.2-2.4-5.6-2.4h-256c-2.4,0-4,0.8-5.6,2.4l-96,96
		c-0.8,0.8-1.6,1.6-1.6,2.4C-0.2,155-0.2,156.6,0.6,159z M436.6,147.8h-76.8c-4.8,0-8,3.2-8,8s3.2,8,8,8h76.8L255.8,344.6l80-185.6
		l0,0l0,0c0-0.8,0.8-1.6,0.8-2.4l0,0c0,0,0,0,0-0.8s0-1.6-0.8-2.4v-0.8c0-0.8-0.8-1.6-1.6-2.4l0,0L251,67.8h105.6L436.6,147.8z
		 M107,67.8h121.6l80,80h-12.8c-4.8,0-8,3.2-8,8s3.2,8,8,8h20l-84,196l-84-196h116c4.8,0,8-3.2,8-8s-3.2-8-8-8H155l50.4-50.4
		c3.2-3.2,3.2-8,0-11.2s-8-3.2-11.2,0l-64,64l0,0c-0.8,0.8-0.8,1.6-1.6,2.4v0.8c0,0.8,0,1.6-0.8,2.4c0,0,0,0,0,0.8l0,0
		c0,0.8,0,1.6,0.8,2.4l0,0l0,0l80,185.6L27,163.8h76.8c4.8,0,8-3.2,8-8s-3.2-8-8-8H27L107,67.8z"
        />
        <path
          fill={theme === "dark" ? "#fff" : "#000"}
          d="M98.2,129.4c1.6,1.6,4,2.4,5.6,2.4c1.6,0,4-0.8,5.6-2.4l32-32c3.2-3.2,3.2-8,0-11.2s-8-3.2-11.2,0
		l-32,32C95,121.4,95,126.2,98.2,129.4z"
        />
        <path
          fill={theme === "dark" ? "#fff" : "#000"}
          d="M322.2,97.4l32,32c1.6,1.6,4,2.4,5.6,2.4s4-0.8,5.6-2.4c3.2-3.2,3.2-8,0-11.2l-32-32
		c-3.2-3.2-8-3.2-11.2,0S319,94.2,322.2,97.4z"
        />
        <path
          fill={theme === "dark" ? "#fff" : "#000"}
          d="M231.8,243.8c-4.8,0-8,3.2-8,8v32c0,4.8,3.2,8,8,8c4.8,0,8-3.2,8-8v-32
		C239.8,247,236.6,243.8,231.8,243.8z"
        />
      </g>
    </svg>
  );
};

export const LeftArrow = ({ size, sw }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      viewBox="0 0 24 24"
      strokeWidth={sw ?? 1.5}
      stroke={theme === "dark" ? "#fff" : "#000"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
};
export const RightArrow = ({ size, sw }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      viewBox="0 0 24 24"
      strokeWidth={sw ?? 1.5}
      stroke={theme === "dark" ? "#fff" : "#000"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
};
export const StarIcon = ({ size, color, sw }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <path
        fill={theme === "dark" ? "#fff" : "#000"}
        d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
      ></path>
    </svg>
  );
};

export const GitForkIcon = ({ size, color, sw }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="12" cy="18" r="2" />
    <circle cx="7" cy="6" r="2" />
    <circle cx="17" cy="6" r="2" />
    <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);
