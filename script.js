document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  const filters = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".project-card[data-category]");
  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(item => item.classList.toggle("active", item === button));
      const filter = button.dataset.filter;
      cards.forEach(card => {
        card.hidden = !(filter === "all" || card.dataset.category === filter);
      });
    });
  });
});
