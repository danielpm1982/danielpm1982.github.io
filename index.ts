const setH4ElementDateTime = function(): void {
    const H4ElementDateTime = document.getElementById('H4ElementDateTime')
    const baseText = H4ElementDateTime!.textContent
    H4ElementDateTime!.textContent = baseText! + new Date()
    setInterval(() => {
        H4ElementDateTime!.textContent = baseText! + new Date()
    }, 1000)
}
function setAllTechnologiesImg(): void{
    const allTechnologiesImg = document.getElementById("allTechnologiesImg")
    allTechnologiesImg!.onclick = (e: Event) => {
        document.location.assign("/content/content.html")
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setH4ElementDateTime()
    setAllTechnologiesImg()
    document.getElementsByTagName("body")[0].style.display = "initial"
})
