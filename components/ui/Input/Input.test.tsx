import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";
import { describe, expect, it } from "vitest";
import { getByTestId } from "@/test/utils/getByTestId";

describe("Input component", () => {
  it("renders label and input", () => {
    render(<Input id="email" label="Email" />);

    expect(getByTestId("input-email")).toBeInTheDocument();
  });

  it("renders helper text when no error", () => {
    render(
      <Input
        id="email"
        label="Email"
        helperText="We'll never share your email"
      />,
    );

    expect(getByTestId("input-email").nextSibling).toHaveTextContent(
      "We'll never share your email",
    );
  });

  it("renders error message and hides helper text", () => {
    render(
      <Input
        id="email"
        label="Email"
        helperText="Helper text"
        error={{ message: "Email is required", type: "required" }}
      />,
    );

    expect(getByTestId("input-email").nextSibling).toHaveTextContent(
      "Email is required",
    );
  });

  it("applies error styling when error is present", () => {
    render(
      <Input
        id="email"
        label="Email"
        error={{ message: "Error", type: "required" }}
      />,
    );

    const input = getByTestId("input-email") as HTMLInputElement;
    expect(input).toHaveClass("border-red-500");
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();

    render(<Input id="email" label="Email" />);

    const input = getByTestId("input-email") as HTMLInputElement;

    await user.type(input, "test@example.com");

    expect(input).toHaveValue("test@example.com");
  });
});
