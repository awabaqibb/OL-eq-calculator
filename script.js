// Define an object to map grades to their values
const gradeValues = {
  "A*": 94,
  A: 95,
  B: 75,
  C: 65,
  D: 55,
  E: 45,
};

// Define an object to specify custom marks for certain subjects and grades
const customMarks = {
  Maths: {
    "A*": 95,
  },
  Islamiat: {
    "A*": 95,
  },
  Urdu: {
    "A*": 93,
  },
};

// Define an array of subject names
const subjects = [
  "Maths",
  "English",
  "Urdu",
  "Pak Std",
  "Islamiat",
  "Optional#1",
  "Optional#2",
  "Optional#3",
];

// Function to generate radio buttons for subjects
function generateSubjectRadios() {
  const subjectRadios = document.getElementById("subjectRadios");

  subjects.forEach((subject, index) => {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const label = document.createElement("label");
    label.textContent = `${subject} Grade :`;

    const gradeOptions = document.createElement("div");
    gradeOptions.classList.add("grade-options");

    const grades = Object.keys(gradeValues);
    grades.forEach((grade) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `subject${index + 1}`;
      input.value = gradeValues[grade];
      input.id = `subject${index + 1}-${grade}`;

      const gradeLabel = document.createElement("label");
      gradeLabel.textContent = grade;
      gradeLabel.setAttribute("for", `subject${index + 1}-${grade}`);

      gradeOptions.appendChild(input);
      gradeOptions.appendChild(gradeLabel);
    });

    div.appendChild(label);
    div.appendChild(gradeOptions);
    subjectRadios.appendChild(div);
  });
}

// Call the function to generate radio buttons
generateSubjectRadios();

// Function to calculate the total grade
function calculateGrades() {
  const totalGradeSpan = document.getElementById("totalGrade");
  const percentageSpan = document.getElementById("percentage");

  const subjectValues = [];

  // Collect the selected grades for all subjects
  for (let i = 1; i <= subjects.length; i++) {
    const selectedGrade = document.querySelector(
      `input[name="subject${i}"]:checked`
    );
    if (!selectedGrade) {
      alert(`Please select a grade for ${subjects[i - 1]}.`);
      return; // Exit if any subject is not selected
    }

    const subjectName = subjects[i - 1];
    const grade = selectedGrade.nextSibling.textContent.trim(); // Get the grade text
    const customMark =
      customMarks[subjectName] && customMarks[subjectName][grade];
    const value =
      customMark !== undefined ? customMark : parseInt(selectedGrade.value);

    subjectValues.push(value);
  }

  // Calculate the sum of grades
  const totalGrade = subjectValues.reduce((acc, value) => acc + value, 0);

  // Calculate the percentage
  const maxTotal =
    Object.values(gradeValues).reduce((acc, value) => acc + value, 0) *
    subjects.length;
  const percentage = (totalGrade / maxTotal) * 100;

  // Display the results
  totalGradeSpan.textContent = totalGrade;
  percentageSpan.textContent = percentage.toFixed(2); // Display percentage with 2 decimal places
}

// Attach the calculateGrades function to the button click event
const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", calculateGrades);
