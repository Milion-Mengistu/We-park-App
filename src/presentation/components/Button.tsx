import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
