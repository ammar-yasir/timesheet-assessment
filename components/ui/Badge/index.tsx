import React from "react";
import { BadgeVariant } from "./Badge.types";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "w-full h-5.5 px-2.5 py-0.5 rounded-md text-xs font-medium";

  const variants: Record<BadgeVariant, string> = {
    success: "bg-green-100 text-green-800",
    error: "bg-pink-100 text-pink-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    default: "bg-gray-100 text-gray-800",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {label}
    </span>
  );
};

export default Badge;