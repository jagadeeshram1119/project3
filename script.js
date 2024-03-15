document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   
    console.log('Username:', username);
    console.log('Password:', password);

    const userExists = usersArray.some(user => user.username === username && user.password === password);

    if (userExists) {
        console.log('Login successful!');
        
        window.location.href = "Act.html";
    } else {
        console.error('Error: User not found or incorrect password. Please sign up.');
        alert("User not found or incorrect password. Please sign up.");
        
    }
});

const usersArray = [
    { username: 'aa', password: '123' },
    { username: 'bb', password: '123' },
   
];
