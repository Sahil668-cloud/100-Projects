// ✅ Quiz Questions
const questions = [
    { question: "Which part of the car makes it move?", options: ["Engine", "Wheels", "Steering", "Seats"], answer: "Engine" },
    { question: "What is used to stop a car?", options: ["Brakes", "Horn", "Lights", "Steering"], answer: "Brakes" },
    { question: "What does a car use to turn?", options: ["Steering wheel", "Pedal", "Mirror", "Gear"], answer: "Steering wheel" },
    { question: "Which fuel is most commonly used in cars?", options: ["Petrol", "Diesel", "Water", "Air"], answer: "Petrol" },
    { question: "What does SUV stand for?", options: ["Sport Utility Vehicle", "Small Urban Vehicle", "Super Utility Van", "Speed Utility Vehicle"], answer: "Sport Utility Vehicle" },
    { question: "Which color is usually used for brake lights?", options: ["Red", "Green", "Blue", "Yellow"], answer: "Red" },
    { question: "What is the function of a car battery?", options: ["Power electrical systems", "Stop the car", "Cool the engine", "Move the wheels"], answer: "Power electrical systems" },
    { question: "Which car part shows your speed?", options: ["Speedometer", "Odometer", "Tachometer", "Fuel Gauge"], answer: "Speedometer" },
    { question: "Which part of the car touches the road?", options: ["Tires", "Roof", "Windows", "Doors"], answer: "Tires" },
    { question: "What does AC do in a car?", options: ["Cools air", "Moves car", "Charges battery", "Lights up headlights"], answer: "Cools air" },
    { question: "What part do you press to move the car forward?", options: ["Accelerator", "Brake", "Clutch", "Gear"], answer: "Accelerator" },
    { question: "What part helps you stop the car quickly?", options: ["Brake", "Clutch", "Horn", "Mirror"], answer: "Brake" },
    { question: "Which part shows how much fuel is left?", options: ["Fuel gauge", "Speedometer", "Odometer", "Dashboard"], answer: "Fuel gauge" },
    { question: "What does the horn do?", options: ["Makes sound", "Stops the car", "Opens doors", "Drives the car"], answer: "Makes sound" },
    { question: "What is the gear used for reverse?", options: ["R", "N", "D", "P"], answer: "R" },
    { question: "Which part protects you in a crash?", options: ["Seatbelt", "Mirror", "Steering wheel", "Horn"], answer: "Seatbelt" },
    { question: "What does the windshield do?", options: ["Protects from wind", "Helps stop the car", "Measures speed", "Turns the car"], answer: "Protects from wind" },
    { question: "Which part helps you see behind the car?", options: ["Rearview mirror", "Steering wheel", "Brake", "Headlight"], answer: "Rearview mirror" },
    { question: "Which car brand makes the Civic?", options: ["Honda", "Toyota", "Ford", "BMW"], answer: "Honda" },
    { question: "Which car brand makes the Mustang?", options: ["Ford", "Chevrolet", "Nissan", "Toyota"], answer: "Ford" },
    { question: "Which car brand has four rings as logo?", options: ["Audi", "BMW", "Mercedes", "Volkswagen"], answer: "Audi" },
    { question: "What is a hybrid car?", options: ["Uses petrol and electricity", "Runs on water", "Runs on air", "Runs on diesel only"], answer: "Uses petrol and electricity" },
    { question: "Which part lights the road at night?", options: ["Headlights", "Brakes", "Mirror", "Horn"], answer: "Headlights" },
    { question: "Which part lets you change speed?", options: ["Gear", "Horn", "Brake", "Steering"], answer: "Gear" },
    { question: "What is the parking brake for?", options: ["Keep car parked", "Stop quickly", "Turn the car", "Open doors"], answer: "Keep car parked" },
    { question: "Which fuel is used by diesel cars?", options: ["Diesel", "Petrol", "Water", "Electricity"], answer: "Diesel" },
    { question: "Which car part helps to see sides?", options: ["Side mirrors", "Headlights", "Steering", "Gear"], answer: "Side mirrors" },
    { question: "Which part absorbs bumps while driving?", options: ["Suspension", "Brakes", "Wheels", "Seats"], answer: "Suspension" },
    { question: "What does AWD mean?", options: ["All-Wheel Drive", "Automatic Wheel Direction", "Anti-Wheel Drift", "All-Wheel Distance"], answer: "All-Wheel Drive" },
    { question: "Which part holds the driver?", options: ["Seat", "Pedal", "Gear", "Mirror"], answer: "Seat" },
    { question: "Which car brand makes the Corolla?", options: ["Toyota", "Honda", "Ford", "BMW"], answer: "Toyota" },
    { question: "Which car brand makes the 911?", options: ["Porsche", "Ferrari", "Lamborghini", "BMW"], answer: "Porsche" },
    { question: "Which part shows the engine speed?", options: ["Tachometer", "Speedometer", "Fuel gauge", "Odometer"], answer: "Tachometer" },
    { question: "What part cools the engine?", options: ["Radiator", "Brake", "Tire", "Gear"], answer: "Radiator" },
    { question: "Which part stores fuel?", options: ["Fuel tank", "Battery", "Radiator", "Engine"], answer: "Fuel tank" },
    { question: "What does EV stand for?", options: ["Electric Vehicle", "Extra Vehicle", "Engine Vehicle", "Energy Vehicle"], answer: "Electric Vehicle" },
    { question: "Which car brand has a blue oval logo?", options: ["Ford", "BMW", "Toyota", "Honda"], answer: "Ford" },
    { question: "Which part helps you reverse safely?", options: ["Rearview mirror", "Brake", "Steering", "Headlight"], answer: "Rearview mirror" },
    { question: "What is cruise control?", options: ["Maintain constant speed", "Stop the car", "Turn on AC", "Play music"], answer: "Maintain constant speed" },
    { question: "Which part helps to steer wheels left or right?", options: ["Steering wheel", "Gear", "Brake", "Mirror"], answer: "Steering wheel" },
    { question: "Which part protects the car engine from overheating?", options: ["Radiator", "Tires", "Brake", "Horn"], answer: "Radiator" },
    { question: "Which car brand makes the F-150?", options: ["Ford", "Chevrolet", "Toyota", "Nissan"], answer: "Ford" },
    { question: "Which car brand makes the Supra?", options: ["Toyota", "Honda", "Nissan", "Mazda"], answer: "Toyota" },
    { question: "Which part helps you park uphill?", options: ["Parking brake", "Brake pedal", "Clutch", "Gear"], answer: "Parking brake" },
    { question: "Which car part lights up the back when braking?", options: ["Brake lights", "Headlights", "Fog lights", "Indicators"], answer: "Brake lights" },
    { question: "Which car part helps reduce engine noise?", options: ["Exhaust", "Tire", "Brake", "Suspension"], answer: "Exhaust" },
    { question: "Which car brand makes the Model S?", options: ["Tesla", "Toyota", "Ford", "BMW"], answer: "Tesla" },
    { question: "Which part inflates automatically in a crash?", options: ["Airbag", "Brake", "Horn", "Steering"], answer: "Airbag" },
    { question: "Which part charges in hybrid and electric cars?", options: ["Battery", "Engine", "Radiator", "Fuel tank"], answer: "Battery" },
    { question: "Which car part helps you see at night?", options: ["Headlights", "Tail lights", "Mirror", "Horn"], answer: "Headlights" },
    { question: "Which car brand makes the R8?", options: ["Audi", "BMW", "Ferrari", "Porsche"], answer: "Audi" }
];


// DOM Elements
const quizForm = document.getElementById("quizForm");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultContainer = document.getElementById("resultContainer");
const ringProgress = document.getElementById("ringProgress");
const scoreText = document.getElementById("scoreText");

let currentQuestion = 0;
let correct = 0;
let wrong = 0;

// Load current question
function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;

    // Clear previous options
    optionsEl.innerHTML = "";

    // Render options
    q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = "flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-100 transition";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = opt;
        input.className = "hidden";

        const span = document.createElement("span");
        span.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
        span.className = "ml-2 text-gray-800 font-medium";

        label.appendChild(input);
        label.appendChild(span);
        optionsEl.appendChild(label);

        // Clickable box logic
        label.addEventListener("click", () => {
            document.querySelectorAll("#options label").forEach(l => l.classList.remove("bg-blue-200", "border-blue-500"));
            label.classList.add("bg-blue-200", "border-blue-500");
            input.checked = true;
        });
    });

    // Change button text for last question
    quizForm.querySelector("button").textContent =
        currentQuestion === questions.length - 1 ? "Submit" : "Next";
}

// Handle submit
quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an option!");
        return;
    }

    if (selected.value === questions[currentQuestion].answer) {
        correct++;
    } else {
        wrong++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Show final result
function showResult() {
    quizForm.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const total = correct + wrong;
    const percent = Math.round((correct / total) * 100);
    const circumference = 345; // same as SVG circle dasharray
    const offset = circumference - (percent / 100) * circumference;

    ringProgress.style.transition = "stroke-dashoffset 1s ease-out";
    ringProgress.style.strokeDashoffset = offset;

    scoreText.textContent = `✅ Correct: ${correct} | ❌ Wrong: ${wrong}`;
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    correct = 0;
    wrong = 0;
    quizForm.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    loadQuestion();
}

// Initialize
loadQuestion();
