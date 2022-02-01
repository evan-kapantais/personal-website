export const handleScroll = () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(section => {
    const offsetTop = section.getBoundingClientRect().top;
    const sectionId = section.getAttribute("id");

    if (offsetTop < 120) {
      navLinks.forEach(link => {
        const linkTarget = link.getAttribute("href").slice(2);
        link.classList.remove("active");
        linkTarget === sectionId && link.classList.add("active");
      });
    }
  });
};
