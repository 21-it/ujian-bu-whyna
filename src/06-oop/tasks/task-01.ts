/**
 * A school wants to create a simple student profile system.
 * Every student has a student ID, name, age, major, and current grade level.
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 *
 * The program should allow the school to create multiple student objects with different information.
 * Student Tasks
 * Create a class named with "Student"
 *
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 *
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */

class Mokleters {
  public mokletId: string;
  public name: string;
  public age: number;
  public major: string;
  public grade: number;

  constructor(
    mokletId: string,
    name: string,
    age: number,
    major: string,
    grade: number,
  ) {
    this.mokletId = mokletId;
    this.name = name;
    this.age = age;
    this.major = major;
    this.grade = grade;
  }

  public showProfile(): void {
    console.log(`Student ID: ${this.mokletId}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Major: ${this.major}`);
    console.log(`Grade: ${this.grade}`);
  }
}

const moklet: Mokleters[] = [
  new Mokleters("ST001", "Lionel Messi", 17, "Software Engineering", 11),

  new Mokleters("ST002", "Cristiano Ronaldo", 18, "Computer Science", 12),

  new Mokleters("ST003", "Neymar Junior", 16, "Game Development", 10),
];

for (const student of moklet) {
  student.showProfile();
}
