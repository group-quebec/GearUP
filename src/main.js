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
      const login1 = document.getElementById('loggin-buttons-1');
      const login2 = document.getElementById('loggin-buttons-2');
      const signout1 = document.getElementById('username-signout-1');
      const signout2 = document.getElementById('username-signout-2');
      const usrname1 = document.getElementById('username-1');
      const usrname2 = document.getElementById('username-2');
      const log = isLoggedIn();

      if (log){
        signout1.style.display = "block";
        signout2.style.display = "block";
        login1.style.display = "none";
        login2.style.display = "none";
        usrname1.innerHTML = `${getCurrentAccount().username} <i class="fas fa-user">`;
        usrname2.innerHTML = `${getCurrentAccount().username} <i class="fas fa-user">`;
      }
      else{
        signout1.style.display = "none";
        signout2.style.display = "none";
        login1.style.display = "block";
        login2.style.display = "block";
      }
  });
});