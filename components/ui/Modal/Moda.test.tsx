import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Modal } from ".";

describe("Modal", () => {
  it("renders when open", () => {
    render(
      <Modal isOpen={true} onOpenChange={vi.fn()} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal isOpen={false} onOpenChange={vi.fn()} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <Modal isOpen={true} onOpenChange={vi.fn()}>
        <div>Custom Body</div>
      </Modal>
    );

    expect(screen.getByText("Custom Body")).toBeInTheDocument();
  });

  it("calls onOpenChange when close button is clicked", async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Modal
        isOpen={true}
        onOpenChange={handleOpenChange}
        title="Test Modal"
      >
        <div>Content</div>
      </Modal>
    );

    const closeButton = screen.getByRole("button");

    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalled();
  });

  it("renders trigger and opens modal when clicked", async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Modal
        isOpen={false}
        onOpenChange={handleOpenChange}
        title="Test Modal"
        trigger={<button>Open Modal</button>}
      >
        <div>Content</div>
      </Modal>
    );

    const trigger = screen.getByText("Open Modal");

    await user.click(trigger);

    expect(handleOpenChange).toHaveBeenCalled();
  });

  it("renders close button", () => {
    render(
      <Modal isOpen={true} onOpenChange={vi.fn()}>
        <div>Content</div>
      </Modal>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});