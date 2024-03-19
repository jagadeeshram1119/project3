
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
console.log(username);

console.log(password);
const newUser = {
    username: username,
    password: password,
};

const existingUser = usersArray.find(user => user.username === newUser.username);

if (existingUser) {
    console.log(`User ${newUser.username} already exists.`);
} else {
    usersArray.push(newUser);
    console.log(`User ${newUser.username} added successfully.`);
}

console.log(usersArray);

});
const usersArray = [
    { username: 'aa', password: '123' },
    { username: 'bb', password: '123' },
   
];
