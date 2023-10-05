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

    const grades = ["A*", "A", "B", "C", "D", "E"];
    grades.forEach((grade) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `subject${index + 1}`;
      input.value = grade;
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

// Rest of your JavaScript code...
