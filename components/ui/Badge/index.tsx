import React from "react";
import { BadgeVariant } from "./Badge.types";
import { BADGE_VARIANTS } from "@/constants";

interface BadgeProps {
  label: string;
  id?: string;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  id,
  label,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "w-full h-5.5 px-2.5 py-0.5 rounded-md text-xs font-medium";

  return (
    <span
      data-testid={`badge-${id}`}
      className={`${baseStyles} ${BADGE_VARIANTS[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
