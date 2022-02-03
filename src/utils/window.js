export const setupMenu = () => {
  const navLink = document.querySelector(".nav-link");
  const scrollbar = document.querySelector(".nav-scrollbar");

  const linkHeight = navLink.getBoundingClientRect().height;
  scrollbar.style.height = `${linkHeight}px`;
};

export const handleScroll = () => {
  const menu = document.querySelector(".menu");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollbar = document.querySelector(".nav-scrollbar");

  const menuRect = menu.getBoundingClientRect();
  const menuOffsetTop = menuRect.top;

  sections.forEach(section => {
    const offsetTop = section.getBoundingClientRect().top;
    const sectionId = section.getAttribute("id");

    if (offsetTop < 200) {
      navLinks.forEach(link => {
        link.classList.remove("active");

        const linkTarget = link.getAttribute("href").slice(2);

        if (linkTarget === sectionId) {
          const linkOffsetTop = link.getBoundingClientRect().top;

          link.classList.add("active");
          const translateY = `${linkOffsetTop - menuOffsetTop}px`;

          scrollbar.style.transform = `translateY(${translateY})`;
        }
      });
    }
  });
};
