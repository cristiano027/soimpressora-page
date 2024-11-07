document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetID = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      
      if (targetElement) {
          const boxLimit = targetElement.getBoundingClientRect().top + window.scrollY - 250; // Ajuste o valor "20" conforme necessário
          window.scrollTo({
              top: boxLimit,
              behavior: "smooth"
          });
      }
  });
});
