
const ce = document.querySelector('.ceKey')
const c = document.querySelector('.cKey')

function preencher(valor){
    document.getElementsByClassName('display').value += valor
}

// Zero button - SVG hover
const zero = document.querySelector('.zeroKey')
const zeroSvg = document.querySelector('.zeroSvg')
zero.addEventListener("mouseover",()=>{zeroSvg.style.fill="black"})
zero.addEventListener("mouseout",()=>{zeroSvg.style.fill="white"})

// Equal button - SVG hover
const equal = document.querySelector('.equalKey')
const equalSvg = document.querySelector('.equalSvg')
equal.addEventListener("mouseover",()=>{equalSvg.style.fill="black"})
equal.addEventListener("mouseout",()=>{equalSvg.style.fill="white"})

// One button - SVG hover
const one = document.querySelector('.oneKey')
const oneSvg = document.querySelector('.oneSvg')
one.addEventListener("mouseover",()=>{oneSvg.style.fill="black"})
one.addEventListener("mouseout",()=>{oneSvg.style.fill="white"})
one.addEventListener("click",preencher(1))

// Two button - SVG hover
const two = document.querySelector('.twoKey')
const twoSvg = document.querySelector('.twoSvg')
two.addEventListener("mouseover",()=>{twoSvg.style.fill="black"})
two.addEventListener("mouseout",()=>{twoSvg.style.fill="white"})

// Three button - SVG hover
const three = document.querySelector('.threeKey')
const threeSvg = document.querySelector('.threeSvg')
three.addEventListener("mouseover",()=>{threeSvg.style.fill="black"})
three.addEventListener("mouseout",()=>{threeSvg.style.fill="white"})

// Sum button - SVG hover
const sum = document.querySelector('.plusKey')
const plusSvg = document.querySelector('.plusSvg')
sum.addEventListener("mouseover",()=>{plusSvg.style.fill="black"})
sum.addEventListener("mouseout",()=>{plusSvg.style.fill="white"})

// Four button - SVG hover
const four = document.querySelector('.fourKey')
const fourSvg = document.querySelector('.fourSvg')
four.addEventListener("mouseover",()=>{fourSvg.style.fill="black"})
four.addEventListener("mouseout",()=>{fourSvg.style.fill="white"})

// Five button - SVG hover
const five = document.querySelector('.fiveKey')
const fiveSvg = document.querySelector('.fiveSvg')
five.addEventListener("mouseover",()=>{fiveSvg.style.fill="black"})
five.addEventListener("mouseout",()=>{fiveSvg.style.fill="white"})

// Six button - SVG hover
const six = document.querySelector('.sixKey')
const sixSvg = document.querySelector('.sixSvg')
six.addEventListener("mouseover",()=>{sixSvg.style.fill="black"})
six.addEventListener("mouseout",()=>{sixSvg.style.fill="white"})

// Minus button - SVG hover
const minus = document.querySelector('.minusKey')
const minusSvg = document.querySelector('.minusSvg')
minus.addEventListener("mouseover",()=>{minusSvg.style.fill="black"})
minus.addEventListener("mouseout",()=>{minusSvg.style.fill="white"})

// Seven button - SVG hover
const seven = document.querySelector('.sevenKey')
const sevenSvg = document.querySelector('.sevenSvg')
seven.addEventListener("mouseover",()=>{sevenSvg.style.fill="black"})
seven.addEventListener("mouseout",()=>{sevenSvg.style.fill="white"})

// Eight button - SVG hover
const eight = document.querySelector('.eightKey')
const eightSvg = document.querySelector('.eightSvg')
eight.addEventListener("mouseover",()=>{eightSvg.style.fill="black"})
eight.addEventListener("mouseout",()=>{eightSvg.style.fill="white"})

// Nine button - SVG hover
const nine = document.querySelector('.nineKey')
const nineSvg = document.querySelector('.nineSvg')
nine.addEventListener("mouseover",()=>{nineSvg.style.fill="black"})
nine.addEventListener("mouseout",()=>{nineSvg.style.fill="white"})

// Multiply button - SVG hover
const multiply = document.querySelector('.asteriskKey')
const asteriskSvg = document.querySelector('.asteriskSvg')
multiply.addEventListener("mouseover",()=>{asteriskSvg.style.fill="black"})
multiply.addEventListener("mouseout",()=>{asteriskSvg.style.fill="white"})

// Backspace button - SVG hover
const x = document.querySelector('.xKey')
const backspaceSvg = document.querySelector('.backspaceSvg')
x.addEventListener("mouseover",()=>{backspaceSvg.style.fill="black"})
x.addEventListener("mouseout",()=>{backspaceSvg.style.fill="white"})

// Divide button - SVG hover
const divide = document.querySelector('.divideKey')
const divideSvg = document.querySelector('.divideSvg')
divide.addEventListener("mouseover",()=>{divideSvg.style.fill="black"})
divide.addEventListener("mouseout",()=>{divideSvg.style.fill="white"})

