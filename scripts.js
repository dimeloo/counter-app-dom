const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0

function increase(){
    //get element from html

    count += 1
    counterEl.innerHTML = count
}

//function that decreases
function decrease(){
    count -= 1
    counterEl.innerHTML = count
}

//bonus function that prints total

function multiply(){
    count *= 2
    counterEl.innerHTML = count
}

function divide(){
    count /= 2
    counterEl.innerHTML = count
}

function printTotal(){
    let countStr = count + '  -  '
    totalCount.innerText += countStr
}