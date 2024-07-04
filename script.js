const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const countryCode = '^(1\\s?)?';
const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const spacesDashes = '[\\s\\-]?';
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
const phoneRegex = new RegExp(
  `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`,
);

const checkValidNumber = (input) => {
  resultsDiv.innerHTML = '';

  if (input === '') {
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    pTag.style.color = '#4d3800';
    pTag.textContent = 'Please provide a phone number';
    resultsDiv.appendChild(pTag);
    return;
  }

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  pTag.style.color = phoneRegex.test(input) ? '#00471b' : '#4d3800';
  pTag.textContent = `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`;
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  if (userInput.value === '') {
    alert('Please provide a phone number');
    return;
  }
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});