function listenForClicks() {
  document.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      return;
    }
    console.log(e.target.id);
  })
}
