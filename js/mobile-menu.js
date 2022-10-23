(() => {
  const refs = {
    openMobileBtn: document.querySelector(".menu-button-open"),
    closeMobileBtn: document.querySelector(".mobile-menu__button-close"),
    mobile: document.querySelector(".mobile-menu"),
    body: document.querySelector("body"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();