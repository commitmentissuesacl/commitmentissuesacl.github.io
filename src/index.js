const userNameForm = document.getElementById('user-name');
const destinationForm = document.getElementById('destination-form');
const destinationDropdown = document.getElementById('destination-dropdown');
const userNameDisplay = document.getElementById('user-name-display');
const userNameContainer = document.getElementById('user-name-container');

const user = {
    name: '',
    age: '',
    sex: '',
    location: '',
    completed: [{}]
};

/*if user already exists:
check local storage for user object
if no user object exists in local storage, then show the name form and set event listener
if a user object exists, then hide the userNameForm,unhide the userNameContainer and update
its text content, and unhide destinationForm
*/
userNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userNameForm);
    user.name = formData.get('name');
    userNameForm.hidden = true;
    destinationForm.hidden = false;

    const userJson = JSON.stringify(user);
    window.localStorage.setItem('user', userJson);

    userNameContainer.hidden = false;
    userNameDisplay.textContent = user.name;
});

destinationDropdown.addEventListener('change', function() {
    const formData = new FormData(destinationForm);
    const destinationChoice = formData.get('destination-dropdown');
    console.log(destinationChoice);

    window.location = './map.html?destination=' + encodeURIComponent(destinationChoice);

});