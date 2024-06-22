function navigateToPage() {
  window.location.href = 'sites/select.html'; 
}


let sidemenu = document.getElementById("navbar");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-150px";
}



function navigateToPageLogging(){
  window.location.href = 'sites/login.html';
}

function navigateToPageSignup(){
  window.location.href = 'sites/signup.html';
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
      const loadingOverlay = document.getElementById('loading-overlay');
      loadingOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto'; 

      // login related
      const buttondiv = document.getElementById('loggin-buttons');
      const log = StateManager.getInstance().isLoggedIn();
      this.alert(log);
      if (!log){
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
        const h3 = document.createElement('h3');
        h3.innerHTML = `${acc.username}`;
        
        const b1 = document.createElement('button');
        b1.type = "button";
        b1.className = "h-btn1 btn-secondary rounded-pill px-3";
        b1.onclick = function(){StateManager.getInstance().signOut(); location.reload();}
        b1.innerHTML = "Sign Out";

        const dummy = document.createElement('div');
        dummy.appendChild(h3);
        dummy.appendChild(b1);
        buttondiv.replaceChildren(dummy);
      }
  });
});


