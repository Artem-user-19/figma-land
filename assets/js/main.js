const bar = document.querySelector(".bar")
let wraper = document.querySelector(".wraper")
let fabar = document.querySelector(".fa-bars")
let heading = document.querySelector(".heading")
const button = document.querySelector(".logbut")

console.log(wraper)

bar.onclick = () => {
    if (wraper.style.display == "none") {
        wraper.style.display = "block"
        wraper.classList.toggle("app")
    } else {
        wraper.style.display = "none"
    }
};