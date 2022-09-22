let saldo = 10000
let nombre = prompt('Ingresar nombre')

function entrar(){
    console.log('--- Opciones ---')
    console.log('1: Ver saldo total')
    console.log('2: Registrar gasto')
    console.log('3: Registrar ingreso')
    console.log('4: Salir')

    let op = prompt(`Buenos dias ${nombre}!\n¿Que operación deseas hacer?`)
    switch(op){
        case "1":
            verTotal()
            break
        case "2":
            let nomGasto = prompt(`¿Nombre del gasto, ${nombre}?`)
            registroGasto(nomGasto)
            break
        case "3":
            registroIngreso()
            break
        case "4":
            salir()
            break;
        default:
            alert('Operación invalida...')
            entrar()
    }
}

function verTotal(){
    alert(`El total registrado es de: $${saldo}`)
    console.log(`El total registrado es de: $${saldo}`)
    entrar()
}

function registroGasto(nomGasto){
    let monto = Number(prompt(`¿Cual es el monto?`))

    if (monto <= saldo){
        alert(`Gasto registrado correctamente`)
        console.log(`Se gasto $${monto} en ${nomGasto}.`)
        saldo -= monto
        entrar()
    }else{
        alert(`El gasto supera al saldo total, ${nombre}\nVolve a intentarlo`)
        entrar()
    }
}

function registroIngreso(){
    let nomIngreso = prompt(`¿Nombre del ingreso, ${nombre}?`)
    let monto = Number(prompt(`¿Cual es el monto?`))

    alert(`Ingreso registrado correctamente`)
    console.log(`El ingreso registrado es de: $${monto}.`)
    saldo += monto
    console.log(`El nuevo saldo total es de: $${saldo}`)
    entrar()
}

function salir(){
    alert(`Que tenga un lindo dia, ${nombre}!`)
}

if(nombre===""){
    alert('No dejes este campo vacío')
    nombre = prompt('Ingresar nombre')
}else{
    entrar()
}