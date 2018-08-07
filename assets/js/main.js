function home() {
    document.getElementById('about').style.cssText = 'display: none;'
    document.getElementById('projects').style.cssText = 'display: none;'
    document.getElementById('home').removeAttribute("style");
}

function projects() {
    document.getElementById('home').style.cssText = 'display: none;'
    document.getElementById('about').style.cssText = 'display: none;'
    document.getElementById('projects').removeAttribute("style");
}

function about() {
    document.getElementById('home').style.cssText = 'display: none;'
    document.getElementById('projects').style.cssText = 'display: none;'
    document.getElementById('about').removeAttribute("style");
}