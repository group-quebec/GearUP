function toggleForms() {
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    signupSection.classList.toggle('hidden');
    signupSection.classList.toggle('visible');
    loginSection.classList.toggle('hidden');
    loginSection.classList.toggle('visible');
  }