function navigateToPage() {
  window.location.href = 'sites/procedural_select.html'; 
}


let sidemenu = document.getElementById("navbar");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-150px";
}



function navigateToLocation() {
  var url = "https://maps.app.goo.gl/4CTNhWY4pZ2j8tjGA";
  
  window.location.href = url;
  
}


function navigateToPageLogging(){
  window.location.href = 'sites/login.html';
}

function navigateToPageSignup(){
  window.location.href = 'sites/signup.html';
}

function signOut(){
  StateManager.getInstance().signOut(); 
  location.reload();
}


document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
      const loadingOverlay = document.getElementById('loading-overlay');
      loadingOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto'; 

      // login related
      const login = document.getElementById('loggin-buttons');
      const signout = document.getElementById('username-signout');
      const usrname = document.getElementById('username');
      const log = isLoggedIn();

      if (log){
        signout.style.display = "display";
        login.style.display = "none";
        usrname.innerHTML = `${getCurrentAccount().username} <i class="fas fa-user">`;
      }
      else{
        signout.style.display = "none";
        login.style.display = "display";
      }
  });
});