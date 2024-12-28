const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('submit');
const displayText = document.getElementById('displayText')

submitButton.addEventListener('click', () => {
    const inputValue = inputField.value;

    displayText.textContent = `You entered: ${inputValue}`;

    console.log(`User input: ${inputValue}`)
});