var typed = new Typed(".multiple-text", {
  strings: ["Backend Developer", "Frontend Developer", "MERN Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
})
const hamburger = document.getElementById("hamburger")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active")
})

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Prevent actual form submission

    // Get the values from the form fields
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.")
      return
    }

    // Open email client (pre-filling email content)
    const subject = `Message from ${name}`
    const body = `${message}`
    window.location.href = `mailto:maityramesh907@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })

  const moreAboutBtn = document.getElementById("moreAboutBtn")
  const moreAboutSection = document.getElementById("moreAboutSection")

  moreAboutBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (
      moreAboutSection.style.display === "none" ||
      moreAboutSection.style.display === ""
    ) {
      moreAboutSection.style.display = "block"
      moreAboutBtn.innerText = "Show Less"
    } else {
      moreAboutSection.style.display = "none"
      moreAboutBtn.innerText = "More About Me"
    }
  })

