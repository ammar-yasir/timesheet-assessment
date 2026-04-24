import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import DataTable from "./index";

interface User {
  id: number;
  name: string;
  email: string;
}

describe("DataTable", () => {
  const mockData: User[] = [
    { id: 1, name: "John Doe", email: "john@test.com" },
    { id: 2, name: "Jane Smith", email: "jane@test.com" },
  ];

  const mockColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
  ];

  it("renders table headers", () => {
    render(
      <DataTable<User>
        columns={mockColumns}
        data={mockData}
        onSort={vi.fn()}
      />
    );

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders table rows correctly", () => {
    render(
      <DataTable<User>
        columns={mockColumns}
        data={mockData}
        onSort={vi.fn()}
      />
    );

    expect(screen.getByText("John Doe")).toBeVisible();
    expect(screen.getByText("Jane Smith")).toBeVisible();
    expect(screen.getByText("john@test.com")).toBeVisible();
  });

  it("calls onSort when header is clicked", async () => {
    const onSortMock = vi.fn();
    const user = userEvent.setup();

    render(
      <DataTable<User>
        columns={mockColumns}
        data={mockData}
        onSort={onSortMock}
      />
    );

    await user.click(screen.getByText("Name"));
    expect(onSortMock).toHaveBeenCalledWith("name");
  });

  it("renders custom renderer when provided", () => {
    const customColumns = [
      {
        key: "name",
        label: "Name",
        render: (value: string) => (
          <span data-testid="custom">{value.toUpperCase()}</span>
        ),
      },
    ];

    render(
      <DataTable<User>
        columns={customColumns}
        data={mockData}
        onSort={vi.fn()}
      />
    );

    const elements = screen.getAllByTestId("custom");
    expect(elements[0]).toHaveTextContent("JOHN DOE");
  });
});