const nameLabel = document.getElementById('name-label');
const usernameLabel = document.getElementById('username-label');
const passwordLabel = document.getElementById('password-label');
const nameInput = document.getElementById('name-input');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('btn-login');
const registerButton = document.getElementById('btn-register');

if (loginButton) {
    loginButton.addEventListener('click', function() {
        let name, key, username, password, exist = false;
    
        // Name
        if (!localStorage.getItem('name')) name = [];
        else name = JSON.parse(localStorage.getItem('name'));

        // Username
        if (!localStorage.getItem('username')) username = [];
        else username = JSON.parse(localStorage.getItem('username'));
    
        // Password
        if (!localStorage.getItem('password')) password = [];
        else password = JSON.parse(localStorage.getItem('password'));
    
        for (let i = 0; i < username.length; i++) {
            if (username[i] === usernameInput.value) {
                exist = true;
                key = i;
                break;
            }
        }
    
        if (usernameInput.value === '' || passwordInput === '') {
            alert('Username dan password tidak dapat kosong.');
        } else {
            if (exist) {
                if (password[key] === passwordInput.value) {
                    alert("Login berhasil.");
                    window.location = 'companyprofile.html';
                    localStorage.setItem('temp', JSON.stringify(name[key]));
                } else {
                    alert('Password yang anda masukkan salah.');
                }
            } else {
                alert('Username tidak terdapat di database.');
            }
        }
    });
}

if (registerButton) {
    registerButton.addEventListener('click', function() {
        let name, username, password;
        
        // Name
        if (!localStorage.getItem('name')) name = [];
        else name = JSON.parse(localStorage.getItem('name'));
        name.push(nameInput.value);
        localStorage.setItem('name', JSON.stringify(name));

        // Username
        if (!localStorage.getItem('username')) username = [];
        else username = JSON.parse(localStorage.getItem('username'));
        username.push(usernameInput.value);
        localStorage.setItem('username', JSON.stringify(username));
        
        // Password
        if (!localStorage.getItem('password')) password = [];
        else password = JSON.parse(localStorage.getItem('password'));
        password.push(passwordInput.value);
        localStorage.setItem('password', JSON.stringify(password));
    
        if (usernameInput.value === '' || passwordInput === '') {
            alert('Username dan password tidak dapat kosong.');
        } else {
            alert('Akun berhasil dibuat.');
            window.location = 'login.html';
        }
    });
}