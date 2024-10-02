const greetText = document.getElementById("greetText");
let presentTime = new Date().getHours();
// presentTime = 20
const greeting = presentTime >= 5 && presentTime < 12 ? "Good Morning🌤️" : presentTime >= 12 && presentTime < 18 ? "Good Afternoon🌞" : "Good Evening🌥️"
// console.log(greeting);
greetText.innerHTML = `${greeting}Sai Kiran Avusula.`