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
      /* if (!log){
        const b1 = document.createElement('button');
        b1.type = "button";
        b1.className = "h-btn1 btn-secondary rounded-pill px-3";
        b1.onclick = navigateToPageLogging;
        b1.innerHTML = "Login";
        const b2 = document.createElement('button');
        b2.type = "button";
        b2.className = "h-btn2 btn-secondary rounded-pill px-3";
        b2.onclick = navigateToPageSignup;
        b2.innerHTML = "Sign Up";
        const dummy = document.createElement('div');
        dummy.appendChild(b1);
        dummy.appendChild(b2);  
        buttondiv.replaceChildren(dummy);
      }
      else{
        const acc = StateManager.getInstance().getCurrentAccount();
        const h3 = document.createElement('h5');
        h3.innerHTML = `${acc.username}`;
        h3.className = "col-6";
        const b1 = document.createElement('button');
        b1.type = "button";
        b1.className = "col-6 h-btn1 btn-secondary rounded-pill px-1";
        b1.onclick = function(){StateManager.getInstance().signOut(); location.reload();}
        b1.innerHTML = "Sign Out";

        const dummy = document.createElement('div');
        dummy.className = "row";
        dummy.appendChild(h3);
        dummy.appendChild(b1);
        buttondiv.replaceChildren(dummy);
      } */
  });
});