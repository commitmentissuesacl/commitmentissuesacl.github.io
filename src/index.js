const userNameForm = document.getElementById('user-name');
const destinationForm = document.getElementById('destination-form');

const user = {
    name: '',

};

userNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userNameForm);
    user.name = formData.get('name');
    userNameForm.hidden = true;
    destinationForm.hidden = false;
});