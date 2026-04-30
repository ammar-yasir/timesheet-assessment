import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Checkbox } from "./Checkbox";
import { getByTestId } from "@/test/utils/getByTestId";

describe("Checkbox", () => {
  it("renders checkbox input", () => {
    render(<Checkbox id="terms" label="Accept Terms" />);

    const checkbox = getByTestId("checkbox-terms");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders label correctly", () => {
    render(<Checkbox id="terms" label="Accept Terms" />);

    const checkbox = getByTestId("checkbox-terms");
    expect(checkbox.nextSibling).toHaveTextContent("Accept Terms");
  });

  it("renders checkbox input with correct id", () => {
    render(<Checkbox id="terms" label="Accept Terms" />);

    const checkbox = getByTestId("checkbox-terms");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("id", "terms");
  });

  it("applies custom className", () => {
    render(
      <Checkbox id="terms" label="Accept Terms" className="custom-class" />
    );

    const checkbox = getByTestId("checkbox-terms");
    expect(checkbox).toHaveClass("custom-class");
  });

  it("toggles checked state on click", async () => {
    const user = userEvent.setup();

    render(<Checkbox id="terms" label="Accept Terms" />);

    const checkbox = getByTestId("checkbox-terms") as HTMLInputElement;

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("forwards ref correctly", () => {
    const ref = { current: null as HTMLInputElement | null };

    render(
      <Checkbox id="terms" label="Accept Terms" ref={ref} />
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("INPUT");
  });
});