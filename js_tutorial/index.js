//document.getElementById("count").innerText = 5
// DOM is how to use Javascript to modity website

let count = 0

let countEl = document.getElementById("count-el")

function increase() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById('save-el')
function save() {
    let vari = count + '-'
    saveEl.textContent += vari
    countEl.textContent = 0
    count = 0
    
}


