function listenForClicks() {
  document.addEventListener("click", (e) => {
    console.log(e.target.id);
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      return;
    }
  })
}

listenForClicks();
