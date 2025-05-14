const navButtons = document.querySelectorAll("[data-nav-button]");

navButtons.forEach((navButton) =>{
   navButton.addEventListener("click", () =>{
      const navButtonId = navButton.dataset.navButton;
      navButtons.forEach((navButton2)=> {
         navButton2.classList.remove("active");
      });
      navButton.classList.add("active");

      const navButtonTarget = document.querySelector(`#${navButtonId}`);
      navButtonTarget.scrollIntoView({
                behavior:"smooth",
                block:"start",
      });
   });
});