// MENU SWITCHING EFFECT
let introSection = document.getElementById("intro")
let skillsSection = document.getElementById("skills")
let servicesSection = document.getElementById("services")
let projectsSection = document.getElementById("projects")
let contactSection = document.getElementById("contact")
let introSectionPosition = introSection.scrollHeight
let skillsSectionPosition = skillsSection.scrollHeight + introSectionPosition
let servicesSectionPosition = servicesSection.scrollHeight + skillsSectionPosition
let projectsSectionPosition = projectsSection.scrollHeight + servicesSectionPosition
let contactSectionPosition = contactSection.scrollHeight + projectsSectionPosition
let introLink = document.getElementsByClassName("header-link")[0]
let skillsLink = document.getElementsByClassName("header-link")[1]
let servicesLink = document.getElementsByClassName("header-link")[2]
let projectsLink = document.getElementsByClassName("header-link")[3]
let contactLink = document.getElementsByClassName("header-link")[4]

const setActiveLink = () => {
    for (let i = 0; i < document.getElementsByClassName("header-link").length; i++) {
        document.getElementsByClassName("header-link")[i].style.color = "grey";
    }
    if (window.scrollY > -1 && window.scrollY < introSectionPosition) {
        introLink.style.color = "green"
    } else if (window.scrollY > introSectionPosition && window.scrollY < skillsSectionPosition) {
        skillsLink.style.color = "green"
    } else if (window.scrollY > skillsSectionPosition && window.scrollY < servicesSectionPosition) {
        servicesLink.style.color = "green"
    } else if (window.scrollY > skillsSectionPosition && window.scrollY < projectsSectionPosition) {
        projectsLink.style.color = "green"
    } else {
        contactLink.style.color = "green"
    }
}

let form = document.querySelector(".contact-form")

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let emailPhone = document.getElementsByClassName("form-input")[0].value
    let message = document.getElementsByClassName("form-area")[0].value
    let errorMessage = document.querySelector(".error-message")
    errorMessage.style.display = "none"

    if (!emailPhone || emailPhone == "") {
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Check email or phone"
        return
    }
    if (!message || message == "") {
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Check message"
        return
    }
    data = {
        emailPhone: document.getElementsByClassName("form-input")[0].value,
        message: document.getElementsByClassName("form-area")[0].value
    }

    axios.post("https://backend.leadaccessnow.com/contactnorman", data)
    .then(response => {
        if (response.status === 201) {
            errorMessage.style.color = "green"
            errorMessage.innerHTML = "Sent successfully!"
            errorMessage.style.display = "block"
        } else {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "Error contacting Norman"
        }
    })
    .catch(error => {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Error contacting Norman"
    })
})

// let submitButton = document.querySelector(".form-submit")

// submitButton.addEventListener("click", (e)=>{
//     e.preventDefault();
//     form.submit()
// })

setActiveLink()

document.addEventListener("scroll", ()=>{
    setActiveLink()
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    history.replaceState({}, document.title, window.location.href.split('#')[0])
}