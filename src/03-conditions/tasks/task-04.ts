/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri"
const isPremiumMember: boolean = false;
const isRoomAvailable: boolean = false;

console.log("\n==== Hotel Reservation ====\n")
console.log("Customer Name: " + customerName)
console.log("Is Premium: " + isPremiumMember)

if (isPremiumMember == !true !== isRoomAvailable == !true) {
    const isPremiumMemberResult = isPremiumMember ? true : false;
    console.log(`Got prioritized: ${isPremiumMemberResult}`)
}   else {
    console.log("Sorry, no rooms are available")
}