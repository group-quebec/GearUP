function navigateToPage() {
  window.location.href = 'sites/sanjana.html'; 
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
      const loadingOverlay = document.getElementById('loading-overlay');
      loadingOverlay.classList.add('hidden');
      document.body.style.overflow = 'auto'; 
  });
});


  