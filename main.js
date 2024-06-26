const seatCapacity = parseInt(prompt("Enter the seat capacity number: "));

if (seatCapacity <= 5) {
  console.log(" Small");
  console.log("Total: 5000");
} else if (seatCapacity <= 10) {
  console.log(" Medium");
  console.log("Total: 8000");
} else if (seatCapacity <= 15) {
  console.log(" Large");
  console.log("Total: 12000");
} else if (seatCapacity <= 20) {
  console.log(" Medium x 2");
  console.log("Total: 16000");
} else if (seatCapacity <= 25) {
  console.log(" Large x 2");
  console.log("Total: 24000");
} else if (seatCapacity <= 30) {
  console.log(" Medium x 3");
  console.log("Total: 24000");
} else {
  console.log("Invalid seat capacity number");
}
