

function handleAddAccount() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-pass').value;
    const passwordconf = document.getElementById('reg-pass-conf').value;

    if (password != passwordconf){
        alert("password mismatch");
        return;
    }
    StateManager.getInstance().addAccount({ username, password });
}

function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginSuccess = StateManager.getInstance().tryLogin(username, password);
    if (loginSuccess) {
        document.getElementById('signup-section').classList.remove('visible');
        document.getElementById('signup-section').classList.add('hidden');
        document.getElementById('login-section').classList.remove('visible');
        document.getElementById('login-section').classList.add('hidden');
        
        document.getElementById('welcome-section').classList.remove('hidden');
        document.getElementById('welcome-section').classList.add('visible');

        setTimeout(function() {window.location.href = '../index.html';}, 5000);

    } else {
        alert('Login failed');
    }
}
