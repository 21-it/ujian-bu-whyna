/**
 * A software company records daily employee attendance.
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time,
 * total working hours, and whether the employee was present on that day.
 *
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 *
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  employeeName: string;
  date: Date;
  checkInTime: Date;
  checkOutTime: Date;
  totalWorkingHours: number;
  present: boolean;
};

const attendance: Attendance = {
  employeeId: "E001",
  employeeName: "John Doe",
  date: new Date("2023-10-01"),
  checkInTime: new Date("2023-10-01T09:00:00"),
  checkOutTime: new Date("2023-10-01T17:00:00"),
  totalWorkingHours: 8,
  present: true,
};

console.log(attendance);
