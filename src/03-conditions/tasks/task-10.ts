/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const studentname: string = "Nadia Putri";
const isActiveStudent: boolean = true;
const tuitionPaid: boolean = true;
const isPassedProgrammingFunndamental: boolean = true;
const isPassedDatabaseSystem: boolean = true;
const gpa: number = 3.45;
const isSeatAvailable: boolean = false;

console.log("==== Student Information ====\n");

if (!isActiveStudent && !tuitionPaid) {
  console.log("Registration Rejected.");
} else {
  if (isPassedDatabaseSystem && isPassedProgrammingFunndamental && gpa) {
    if (isSeatAvailable) {
      console.log("Registration Success");
    } else {
      console.log("Added to waiting list");
    }
  } else {
    console.log("Uknown Error.");
  }
}
