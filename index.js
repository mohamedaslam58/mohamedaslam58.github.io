document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("text-[#D4AF37]");
      link.classList.remove("text-gray-300");
    } else {
      link.classList.remove("text-[#D4AF37]");
      link.classList.add("text-gray-300");
    }
  });
});

function toggleFooterAcc(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    icon.style.transform = "rotate(0deg)";
  }
}

tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        darkBg: "#0F0F11",
        cardBg: "#1A1A1E",
      },
    },
  },
};
