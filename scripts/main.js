document.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = document.getElementById("current-language");
    const languageDropdown = document.getElementById("language-dropdown");
  
     currentLanguage.addEventListener("click", () => {
      languageDropdown.style.display =
        languageDropdown.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".language-selector")) {
        languageDropdown.style.display = "none";
      }
    });
  
    languageDropdown.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedLanguage = event.target.getAttribute("data-lang");
        currentLanguage.textContent = selectedLanguage; 
        languageDropdown.style.display = "none";
      });
    });
  });
  
  