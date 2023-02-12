// MENU SWITCHING EFFECT
let introSection = document.getElementById("intro")
let skillsSection = document.getElementById("skills")
let projectsSection = document.getElementById("projects")
let contactSection = document.getElementById("contact")
let introSectionPosition = introSection.scrollHeight
let skillsSectionPosition = skillsSection.scrollHeight + introSectionPosition
let projectsSectionPosition = projectsSection.scrollHeight + skillsSectionPosition
let contactSectionPosition = contactSection.scrollHeight + projectsSectionPosition
let introLink = document.getElementsByClassName("header-link")[0]
let skillsLink = document.getElementsByClassName("header-link")[1]
let projectsLink = document.getElementsByClassName("header-link")[2]
let contactLink = document.getElementsByClassName("header-link")[3]

const setActiveLink = () => {
    for (let i = 0; i < document.getElementsByClassName("header-link").length; i++) {
        document.getElementsByClassName("header-link")[i].style.color = "grey";
    }
    if (window.scrollY > -1 && window.scrollY < introSectionPosition) {
        introLink.style.color = "green"
    } else if (window.scrollY > introSectionPosition && window.scrollY < skillsSectionPosition) {
        skillsLink.style.color = "green"
    } else if (window.scrollY > skillsSectionPosition && window.scrollY < projectsSectionPosition) {
        projectsLink.style.color = "green"
    } else {
        contactLink.style.color = "green"
    }
}

const getValue = ()=>{
    data = {
        body: document.getElementsByClassName("form-input")[0].value,
        message: document.getElementsByClassName("form-area")[0].value
    }
    localStorage.setItem("msg-data", JSON.stringify(data))
}

setActiveLink()

document.addEventListener("scroll", ()=>{
    setActiveLink()
})

const findSection = (x) => {
    if (x === 1) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } else if (x === 2) {
        window.scrollTo({
            top: introSectionPosition + 1,
            behavior: "smooth"
        })
        setActiveLink()
    } else if (x === 3) {
        window.scrollTo({
            top: skillsSectionPosition + 1,
            behavior: "smooth"
        })
    } else if (x === 4) {
        window.scrollTo({
            top: projectsSectionPosition + 1,
            behavior: "smooth"
        })
    }
}