

function handleAddAccount() {
    const fullname = document.getElementById('reg-fullname').value;
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-pass').value;
    const passwordconf = document.getElementById('reg-pass-conf').value;

    if (password != passwordconf){
        alert("password mismatch");
        return;
    }
    const success = StateManager.getInstance().addAccount({ fullname, username, email, phone, password });
    if (success){
        window.location.href = `../sites/welcome.html?from=signup`;
    }
    else{
        alert('Account already exists!');
    }
}

function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginSuccess = StateManager.getInstance().tryLogin(username, password);
    if (loginSuccess) {
        window.location.href = `../sites/welcome.html?from=login`;
    } else {
        alert('Login failed');
    }
}
