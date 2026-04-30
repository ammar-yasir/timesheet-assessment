import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Pagination from "./Pagination";

// Using inline mock for react-paginate since it is not being auto-picked by vitest using the __mocks__ directory
vi.mock("react-paginate", () => ({
  default: ({
    pageCount,
    onPageChange,
  }: {
    onPageChange: (page: { selected: number }) => void;
    pageCount: number;
  }) => (
    <div>
      <button onClick={() => onPageChange({ selected: 1 })}>Next Page</button>
      <span>Page Count: {pageCount}</span>
    </div>
  ),
}));
vi.mock("./PageLimit");

describe("Pagination", () => {
  it("renders correctly", () => {
    render(
      <Pagination
        pageCount={5}
        selectedPage={1}
        onPageChange={vi.fn()}
        customLimit={10}
        setCustomLimit={vi.fn()}
      />,
    );
    screen.debug();
    expect(screen.getByText("Limit: 10")).toBeInTheDocument();
    expect(screen.getByText("Page Count: 5")).toBeInTheDocument();
  });

  it("handles page change", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(
      <Pagination
        pageCount={5}
        selectedPage={1}
        onPageChange={onPageChange}
        customLimit={10}
        setCustomLimit={vi.fn()}
      />,
    );

    await user.click(screen.getByText("Next Page"));

    expect(onPageChange).toHaveBeenCalledWith({ selected: 1 });
  });

  it("handles limit change", async () => {
    const user = userEvent.setup();
    const setCustomLimit = vi.fn();

    render(
      <Pagination
        pageCount={5}
        selectedPage={1}
        onPageChange={vi.fn()}
        customLimit={10}
        setCustomLimit={setCustomLimit}
      />,
    );

    await user.click(screen.getByText("Change Limit"));

    expect(setCustomLimit).toHaveBeenCalledWith(20);
  });
});
