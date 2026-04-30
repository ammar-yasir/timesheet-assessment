import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BADGE_VARIANTS } from "@/constants";
import Badge from ".";

describe("Badge component", () => {
  it("renders label correctly", () => {
    render(<Badge id="completed" label="Completed" />);

    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("applies default variant styles", () => {
    render(<Badge id="default" label="Default" />);

    const badge = screen.getByTestId("badge-default");
    expect(badge).toHaveClass(BADGE_VARIANTS.default);
  });

  it("applies provided variant styles", () => {
    render(<Badge id="success" label="Success" variant="success" />);

    const badge = screen.getByTestId("badge-success");
    expect(badge).toHaveClass(BADGE_VARIANTS.success);
  });

  it("applies custom className", () => {
    render(<Badge id="custom" label="Custom" className="bg-black" />);

    const badge = screen.getByTestId("badge-custom");
    expect(badge).toHaveClass("bg-black");
  });
});
