const numBtn = document.getElementsByClassName("numBTN")
const res = document.getElementById("resultado")
const borrBtn = document.getElementsByClassName("borrBTN")
const opBtn = document.getElementsByClassName("opBTN")
const igualBtn = document.getElementById("igual")
const ansBtn = document.getElementById("ans")

let ans = 0

for (let i = 0; i < numBtn.length; i++){
numBtn[i].addEventListener("click",(e)=>{
    btnAction(numBtn[i].textContent)
})
}

for (let i = 0; i < borrBtn.length; i++){
    borrBtn[i].addEventListener("click",(e)=>{
        borrar(borrBtn[i].textContent)
    })
}

for (let i = 0; i < opBtn.length; i++){
    opBtn[i].addEventListener("click",(e)=>{
        signo(opBtn[i].textContent)
    })
}

igualBtn.addEventListener("click",()=>{
    res.value = calcular(res.value)
})

ansBtn.addEventListener("click",(e)=>{
    btnAction(ansBtn.textContent)
})

var luegoDeIgual = false

function btnAction(value) {
    if (luegoDeIgual == true) {
        res.value = ""
        luegoDeIgual = false
    }
    switch (value){
        case "1":
            res.value += value
            break
        case "2":
            res.value += value
            break
        case "3":
            res.value += value
            break
        case "4":
            res.value += value
            break
        case "5":
            res.value += value
            break
        case "6":
            res.value += value
            break
        case "7":
            res.value += value
            break
        case "8":
            res.value += value
            break
        case "9":
            res.value += value
            break
        case "0":
            res.value += value
            break
        case "ANS":
            res.value += value
            break
        case ".":
            res.value += value
            break
        case "a":
            res.value += "ANS"
            break
        case "π":
            res.value += value
            break
    }
}

function borrar(value) {
    if (luegoDeIgual == true) {
        res.value = ""
        luegoDeIgual = false
    }
    let cortado;
    if (value == "DEL"){
        cortado = res.value.substring(0,(res.value.length - 1))
        res.value = cortado
    }else res.value = ""
}

function signo(value) {
    if (luegoDeIgual == true) {
        res.value = "ANS"
        luegoDeIgual = false
    }
    if (res.value.endsWith("+") || res.value.endsWith("-") ||
        res.value.endsWith("x") || res.value.endsWith("/")) {
        res.value = res.value.substring(0,(res.value.length-1))
    }
    switch (value){
        case "+":
            res.value += value
            break
        case "-":
            res.value += value
            break
        case "x":
            res.value += value
            break
        case "/":
            res.value += value
            break
        case "*":
            res.value += "x"
            break
    }
}


function operar(num1,num2,op){
    let valor1 = num1
    let valor2 = num2
    if (valor1 == "π") valor1 = Math.PI
    if (valor2 == "π") valor2 = Math.PI
    if (valor1 == "ANS") valor1 = parseFloat(ans)
    if (valor2 == "ANS") valor2 = parseFloat(ans)
    if (op == "+") return valor1 + valor2
    else if (op == "-") return valor1 - valor2
    else if (op == "x") return valor1 * valor2
    else if (op == "/") return valor1 / valor2
}

const calcular = (string) =>{
    let calculo = string
    let op = ""
    let otroOp;
    let lugaresMul = []
    let lugaresDiv = []
    let lugaresRes = []
    let lugaresSum = []
    if (isNaN(ans)){
        ans = 0
    }

    if (!(calculo.includes("x") || calculo.includes("/") || calculo.includes("-") || calculo.includes("+"))){
        luegoDeIgual = true
        if (calculo.includes("π")){
            ans = Math.PI
            return ans
        }
        else if (!(calculo.includes("ANS"))){
            ans = parseFloat(string)
            return ans
        }
        else if (calculo.includes("ANS")){
            ans = ans
            return ans
        }else {
        ans = "pelotudo"
        return "Error"
        }
    }
    
    for (let i = 0; calculo.includes("x"); i++){
        lugaresMul[i] = calculo.lastIndexOf("x")
        calculo = calculo.slice(0,lugaresMul[i])
    }
    calculo = string
    lugaresMul.forEach(un=>{
        if (lugaresMul[un] == -1) lugaresMul[un] = undefined
    })
    calculo = string
    for (let i = 0; calculo.includes("/"); i++){
        lugaresDiv[i] = calculo.lastIndexOf("/")
        calculo = calculo.slice(0,lugaresDiv[i])
    }
    lugaresDiv.forEach(un=>{
        if (lugaresDiv[un] == -1) lugaresDiv[un] = undefined
    })
    calculo = string
    for (let i = 0; calculo.includes("+"); i++){
        lugaresSum[i] = calculo.lastIndexOf("+")
        calculo = calculo.slice(0,lugaresSum[i])
    }
    calculo = string
    for (let i = 0; calculo.includes("-"); i++){
        lugaresRes[i] = calculo.lastIndexOf("-")
        calculo = calculo.slice(0,lugaresRes[i])
    }
    calculo = string    
    
    let lugaresMulEx = lugaresMul.join(",")
    lugaresMulEx = lugaresMulEx.split(",")
    let lugaresDivEx = lugaresDiv.join(",")
    lugaresDivEx = lugaresDivEx.split(",")
    let lugaresResEx = lugaresRes.join(",")
    lugaresResEx = lugaresResEx.split(",")
    let lugaresSumEx = lugaresSum.join(",")
    lugaresSumEx = lugaresSumEx.split(",")
    for (let i = 0; i < lugaresMulEx.length;i++) lugaresMulEx[i] = parseFloat(lugaresMulEx[i])
    for (let i = 0; i < lugaresDivEx.length;i++) lugaresDivEx[i] = parseFloat(lugaresDivEx[i])
    for (let i = 0; i < lugaresResEx.length;i++) lugaresResEx[i] = parseFloat(lugaresResEx[i])
    for (let i = 0; i < lugaresSumEx.length;i++) lugaresSumEx[i] = parseFloat(lugaresSumEx[i])
    if (isNaN(lugaresMulEx[0])) lugaresMulEx = []
    if (isNaN(lugaresDivEx[0])) lugaresDivEx = []
    if (isNaN(lugaresResEx[0])) lugaresResEx = []
    if (isNaN(lugaresSumEx[0])) lugaresSumEx = []

    let lugaresLength = lugaresMul.length + lugaresDiv.length + lugaresRes.length + lugaresSum.length
    let separar = []

    for (let i = 0;  i < parseFloat(lugaresLength); i++){
        separar[i] = Math.min(...lugaresMulEx,...lugaresDivEx,...lugaresResEx,...lugaresSumEx)

        if      (lugaresMulEx.includes(separar[i])){lugaresMulEx.pop()}
        else if (lugaresDivEx.includes(separar[i])){lugaresDivEx.pop()}
        else if (lugaresResEx.includes(separar[i])){lugaresResEx.pop()}
        else if (lugaresSumEx.includes(separar[i])){lugaresSumEx.pop()}
    }

    let separarLength = separar.length
    let separarEx = separar
    let calculoEx = calculo
    let numArray = []

    for (let i = 0; i < separarLength; i++){
        if (i == 0 && calculoEx.substring(0,separarEx[0]) == "ANS"){
            numArray.unshift(calculoEx.substring(0,separarEx[0]))
        }
        else if (i == 0 && calculoEx.substring(0,separarEx[0]) == "π"){
            numArray.unshift(calculoEx.substring(0,separarEx[0]))
        }
        else if (i == 0) numArray.unshift(parseFloat(calculoEx.substring(0,separarEx[0])))
        numero = separar[i]
        if      (lugaresMul.includes(numero)) {numArray.push("x")}
        else if (lugaresDiv.includes(numero)) {numArray.push("/")}
        else if (lugaresRes.includes(numero)) {numArray.push("-")}
        else if (lugaresSum.includes(numero)) {numArray.push("+")}
        
        if (calculo.substring(separar[i]+1,separar[i+1]) == "π"){
            numArray.push(calculo.substring(separar[i]+1,separar[i+1]))
        } 
        else if (calculo.substring(separar[i]+1,separar[i+1]) == "ANS"){
            numArray.push(calculo.substring(separar[i]+1,separar[i+1]))
        }else numArray.push(parseFloat(calculo.substring(separar[i]+1,separar[i+1])))
    }
    let cantidad = numArray.length
    let numArrayEx = numArray
    numArrayEx = numArrayEx

    while (numArrayEx.length != 1  && (numArrayEx.includes("x") || numArrayEx.includes("/") || numArrayEx.includes("-") || numArrayEx.includes("+"))){
        if (numArrayEx.includes("x") && (numArrayEx.indexOf("x") < numArrayEx.indexOf("/") || numArrayEx.indexOf("/") == -1)){
            numArrayEx.splice(numArrayEx.indexOf("x")-1,3,operar(
                        numArrayEx[numArrayEx.indexOf("x")-1],numArrayEx[numArrayEx.indexOf("x")+1],
                        numArrayEx[numArrayEx.indexOf("x")]))
        }
        else if (numArrayEx.includes("/") && (numArrayEx.indexOf("/") < numArrayEx.indexOf("x") || numArrayEx.indexOf("x") == -1)){
            numArrayEx.splice(numArrayEx.indexOf("/")-1,3,operar(
                numArrayEx[numArrayEx.indexOf("/")-1],numArrayEx[numArrayEx.indexOf("/")+1],
                numArrayEx[numArrayEx.indexOf("/")]))
        }
        else if (numArrayEx.includes("+") && (numArrayEx.indexOf("+") < numArrayEx.indexOf("-") || numArrayEx.indexOf("-") == -1)){
            numArrayEx.splice(numArrayEx.indexOf("+")-1,3,operar(
                numArrayEx[numArrayEx.indexOf("+")-1],numArrayEx[numArrayEx.indexOf("+")+1],
                numArrayEx[numArrayEx.indexOf("+")]))
        }
        else if (numArrayEx.includes("-") && (numArrayEx.indexOf("-") < numArrayEx.indexOf("+") || numArrayEx.indexOf("+") == -1)){
            numArrayEx.splice(numArrayEx.indexOf("-")-1,3,operar(
                numArrayEx[numArrayEx.indexOf("-")-1],numArrayEx[numArrayEx.indexOf("-")+1],
                numArrayEx[numArrayEx.indexOf("-")]))
        }
    }
    if (isNaN(numArrayEx[0])){
        numArrayEx[0] = "syntax error"
        ans = ans
        luegoDeIgual = true
        return numArrayEx[0]
    }
    else if (numArrayEx[0] > 1e50){
        numArrayEx[0] = "overflow"
        ans = ans
        luegoDeIgual = true
        return "muy grande >-<"        
    }
    else {
        ans = parseFloat(numArrayEx[0])
        luegoDeIgual = true
        return numArrayEx[0]
    }
}

/* Con teclado */

window.addEventListener("keydown",(e)=>{
    if (e.key == "+" || e.key == "/" || e.key == "-" || e.key == "*"){
        signo(e.key)
    }
    btnAction(e.key)
    if (e.key == "Backspace"){
        borrar("DEL")
    }
    if (e.key == "Enter"){
        luegoDeIgual = true
        res.value = calcular(res.value)
    }
})