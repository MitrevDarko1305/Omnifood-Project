console.log("hello world");

const myname = "Darko Mitrev";
console.log(myname);

/* Javascript code to set current year */
const year = document.querySelector(".year");
const currentyear = new Date().getFullYear();
console.log(currentyear);

/* Make the mobile navigation work */
const iconmobilenavigationmenu = document.querySelector(".mobile-navigation");
(".nav-open");

const iconmobilenavigationclose = document.querySelector(".mobile-navigation");
(".nav-open");

const header = document.querySelector(".header");
iconmobilenavigationmenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");

  iconmobilenavigationclose.addEventListener("click", function () {});
});

/*Close and Open the Mobile Navigation when Clicked*/

const navLinks = document.querySelectorAll(".main-nav-link"); // Select all menu links

// Close navigation when a menu link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

/* Sticky Navigation */
const herosection = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(herosection);

/* Should compress the pictures in the Shopping-Cards project in Squosh.com */
/* I will compress my images in html to webp files. Webp is nowdays globally supported and compress the images to really low sizes */
/* Check also what needs to be fixed from the lighthouse assesstment for Shopping-Cards project and start fixing it to make accessability higher */

/* Omnifood Project*/
/* Compress the images through Squosh.com to finish the website project and get it ready to be deployed to Netlify */
