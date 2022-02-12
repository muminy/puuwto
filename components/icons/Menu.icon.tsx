import { ISvgIconProps } from "@/types/global";

export default function MenuIcon({
  size = 24,
  color = "currentColor",
  ...props
}: ISvgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 10H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 15H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
