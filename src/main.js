function navigateToPage() {
  window.location.href = 'sites/select.html'; 
}

function navigateToPageLogging(){
  window.location.href = 'sites/login.html';
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
      const loadingOverlay = document.getElementById('loading-overlay');
      loadingOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto'; 
  });
});


  