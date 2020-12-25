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
        document.location.assign("/content.html")
    }
}
function setSecurityInfoParagraph(): void{
    const securityInfoParagraph = document.getElementById("securityInfoParagraph")
    const footerMainPage = document.getElementById("footerMainPage")
    let anchorElement: HTMLAnchorElement
    let timeout: number
    footerMainPage!.onmouseover = (e: Event) => {
        if(timeout){
            clearTimeout(timeout)
        }
        securityInfoParagraph!.innerHTML = "SSL/TLS Secured: all communication between your browser and this site is encrypted and secured by GitHub Pages Services.<br>All DNS records from <strong>danielpm1982.com</strong> domain point out to GitHub Pages Servers IP addresses, using GitHub subdomain: <strong><a class='black' href='https://danielpm1982.github.io'>https://danielpm1982.github.io</a></strong> .<br>For more details, click on the padlock at the left corner of your browser URL field and checkout the SSL Certificate."
        footerMainPage!.style.backgroundColor = "white"
        footerMainPage!.style.color = "black"
        footerMainPage!.style.padding = "0.3em 1.5em 0.3em 1.5em"
        if(anchorElement){
            anchorElement = securityInfoParagraph!.firstChild as HTMLAnchorElement
            anchorElement.style.color = "black"
        }
    }
    footerMainPage!.onmouseout = (e: Event) => {
        timeout = setTimeout(() => {
            securityInfoParagraph!.textContent = 'SSL/TLS Secured [...]'
            footerMainPage!.style.backgroundColor = "transparent"
            footerMainPage!.style.color = "white"
            footerMainPage!.style.padding = "none"
        }, 3000);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setH4ElementDateTime()
    setAllTechnologiesImg()
    setSecurityInfoParagraph()
    document.getElementsByTagName("body")[0].style.display = "initial"
})
