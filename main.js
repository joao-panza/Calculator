
const ce = document.querySelector('.ceKey')
const c = document.querySelector('.cKey')

const display = document.querySelector('.display')
function preencher(valor){
    const ultimoDig = display.value.at(-1)

    if((ultimoDig === '*' || ultimoDig === '/' || ultimoDig === '+' || ultimoDig === '-' || ultimoDig === '.') && 
        (valor === '*' || valor === '/' || valor === '+' || valor === '-' || valor === '.')
    ){
        return;
    }
    display.value += valor
}

const keyBoxes = document.querySelectorAll('.keyBox')
for(i=0;i<keyBoxes.length;i++){
    const svg = keyBoxes[i].firstChild
    keyBoxes[i].addEventListener("mouseover",()=>{svg.style.fill="black"})
    keyBoxes[i].addEventListener("mouseout",()=>{svg.style.fill="white"}) 
}

function apagarTudo(){
    display.value = ''
}

function apagarUltimo(){
    display.value = display.value.slice(0,-1)
}

function calcular(){
    display.value = eval(display.value)
}