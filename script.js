function generateCard() {
  const programInput = document.getElementById('program');
  const yearInput = document.getElementById('year');
  const nameInput = document.getElementById('name');
  const studentNumberInput = document.getElementById('studentNumber');

  const photoInput = document.getElementById('photo');
  const photo = photoInput.files.length ? URL.createObjectURL(photoInput.files[0]) : 'avatar.jpg';

  const cardContainer = document.getElementById('studentCardContainer');

  const studentCard = document.createElement('div');
  studentCard.classList.add('studentCard');

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.style.backgroundImage = `url(${photo})`;

  const info = document.createElement('div');
  info.classList.add('info');

  const studentInfo = `
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Student Number:</strong> ${studentNumberInput.value}</p>
    <p><strong>Program:</strong> ${programInput.value}</p>
    <p><strong>Year of Entry:</strong> ${yearInput.value}</p>
  `;

  info.innerHTML = studentInfo;

  studentCard.appendChild(avatar);
  studentCard.appendChild(info);

  cardContainer.appendChild(studentCard);

  // Clear the form fields for the next student
  programInput.value = '';
  yearInput.value = '';
  nameInput.value = '';
  studentNumberInput.value = '';
  photoInput.value = ''; // Clear the file input

  // Scroll to the bottom to show the new student card
  window.scrollTo(0, document.body.scrollHeight);
}
