document.getElementById('akanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!birthdate || !gender) return displayResult("Please fill out all fields correctly.");

  const date = new Date(birthdate);
  const dayOfWeek = date.getDay();

  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };

  const akanName = gender === 'male' ? akanNames.male[dayOfWeek] : akanNames.female[dayOfWeek];

  displayResult(`Your Akan name is <strong>${akanName}</strong>`);
});

function displayResult(message) {
  document.getElementById('result').innerHTML = message;
}
