import { NextResponse } from "next/server";
import { mockTimesheets } from "../../route";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const timesheetId = (await params).id;

  const timesheet = mockTimesheets.find(
    (t) => t.id === Number(timesheetId)
  );

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    data: timesheet.tasks,
  });
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const timesheetId = (await params).id;
  const body = await req.json();

  const timesheet = mockTimesheets.find(
    (t) => t.id === Number(timesheetId)
  );

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 }
    );
  }

  const newTask = {
    id: Math.floor(Math.random() * 1000),
    name: body.name,
    description: body.description,
    projectName: body.projectName,
    hoursLogged: body.hours,
  };

  timesheet.tasks.push(newTask);

  return NextResponse.json({
    message: "Task created successfully.",
    data: newTask,
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const timesheetId = (await params).id;
  const { searchParams } = new URL(req.url);
  const taskId = Number(searchParams.get("taskId"));

  const timesheet = mockTimesheets.find(
    (t) => t.id === Number(timesheetId)
  );

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 }
    );
  }

  const taskIndex = timesheet.tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return NextResponse.json(
      { message: "Task not found" },
      { status: 404 }
    );
  }

  const deletedTask = timesheet.tasks.splice(taskIndex, 1);

  return NextResponse.json({
    message: "Task deleted successfully",
    data: deletedTask[0],
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const timesheetId = (await params).id;
  console.log("TimesheetID PATCH", timesheetId)
  const { searchParams } = new URL(req.url);
  const taskId = Number(searchParams.get("taskId"));
  console.log("taskId PATCH", taskId)

  const body = await req.json();

  const timesheet = mockTimesheets.find(
    (t) => t.id === Number(timesheetId)
  );

  if (!timesheet) {
    return NextResponse.json(
      { message: "Timesheet not found" },
      { status: 404 }
    );
  }

  console.log("Timesheet FOUND", timesheet.tasks)

  const task = timesheet.tasks.find(
    (task) => task.id === taskId
  );

  if (!task) {
    return NextResponse.json(
      { message: "Task not found" },
      { status: 404 }
    );
  }

  console.log("TASK FOUND")

  // Update fields (partial update support)
  task.name = body.name ?? task.name;
  task.description = body.description ?? task.description;
  task.projectName = body.projectName ?? task.projectName;
  task.hoursLogged = body.hours ?? task.hoursLogged;

  return NextResponse.json({
    message: "Task updated successfully",
    data: task,
  });
}