// TODO: ASYNCHRONY

// console.log("Me despierto")
// console.log("Me lavo la cara")
// console.log("Pongo la cafetera")
// for (let time = 120; time >= 0; time--){
//     console.log(time)
//     if (time === 0)    console.log("El cafe esta listo")   
// }
// console.log("Desayuno")
// console.log("Me pongo a trabajar")  

// TODO: SetTimeout()  ==> Difererir la ejecucion de una tarea en el tiempo

// console.log("Me despierto")
// console.log("Me lavo la cara")
// console.log("Pongo la cafetera")
// setTimeout( () => {
//     console.log("El cafe esta listo")
// }, 5000)
// console.log("Me doy un baño")
// console.log("Desayuno")


// TODO: setTimeout Examples

// Ejemplo 1

// console.log("Mario")
// console.log("Juan")
// console.log("Pedro")

// Ejemplo 2

// setTimeout(() => console.log("Mario"),1000) 
// console.log("Juan")
// console.log("Pedro")

// Ejemplo 3

// setTimeout(() => console.log("Mario"),0) 
// console.log("Juan")
// console.log("Pedro")

// Ejemplo 4

// setTimeout (() => console.log("Mario"),0)

// for (let index = 0 ; index <= 5000; index ++){
//     console.log(index)
//     if (index === 5000) console.log("Juan")
// }

// console.log("Pedro")


// TODO: PROMESAS

// Ejemplo 1

// const pagarConTarjeta = (precio) => {
//     const limite = 10000
//     for (let index = 0; index < 3000; index++) {
//         console.log("Conectando ...") 
//     }

//     precio < limite ? console.log("Compra Aprobada") : console.log("Compra Rechazada")
// }

// console.log(pagarConTarjeta(1000))

// Ejemplo 2
// const pagarConTarjeta = (precio) => {
//     const limite = 10000
//    console.log("Conectando ...")
//    setTimeout(() => {
//     precio < limite ? console.log("Compra Aprobada") : console.log("Compra Rechazada")
//    },2000)
// }

// console.log(pagarConTarjeta(1000))


// TODO: Las promesas tienen 3 estados (Pendiente, Resuelta, Rechazada)

// const pagarConTarjeta = (precio, isConected) => new Promise((resolve, reject) => {
//     const limite = 10000
//     if (! isConected) return
//     console.log("Procesando el pago")
//     setTimeout ( () =>{
//     precio <= limite ? resolve("Compra Aprobada") : reject("Compra Rechazada")},3000)
// })

// console.log(pagarConTarjeta(100000, true).then((respuesta) => {
//     console.log(respuesta)
// }).catch((error) =>console.log(error)))
// console.log("Otra Tarea")

// TODO: Async-Await
// const pagarConTarjeta = (precio, isConected) => new Promise((resolve, reject) => {
//     const limite = 10000
//     if (! isConected) return
//     console.log("Procesando el pago")
//     setTimeout ( () =>{
//     precio <= limite ? resolve("Compra Aprobada") : reject("Compra Rechazada")},3000)
// })

// const procesarPago = async ()  => {
//     try{
//         const respuesta = await pagarConTarjeta(100000,true)
//         console.log(respuesta)
//     } catch (error) {
//         console.log(error)
//     }

// }

// // procesarPago()
// console.log("Otra tarea")
// console.log("Otra tarea")
// console.log("Otra tarea")
// console.log("Otra tarea")
// console.log("Otra tarea")

// const allPromises = [pagarConTarjeta(100,true), pagarConTarjeta(100,true), pagarConTarjeta(10000,true)]

// Promise.all(allPromises)

// const procesarPagos = async ()  => {
//     try{
//         const respuesta = await Promise.all(allPromises)
//         console.log(respuesta)
//     } catch (error) {
//         console.log(error)
//     }
// }

// procesarPagos()



// TODO: FETCH

// const getDataFromApi = async () => {
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const jsonResponse = await response.json()
//     console.log(jsonResponse)
//     } catch(error){
//         console.log("ERROR=>", error)
//     }
// }

// getDataFromApi()



// TODO: Asincronismo y CALL STACK - Part II

// Ejemplo 1

// const asyncOperation = new Promise ((resolve) => resolve())

// asyncOperation.then((resolvedValue) => console.log("Mario"))
// console.log("Juan")
// console.log("Pedro")

// Ejemplo 2
// const asyncOperation = fetch ("https://jsonplaceholder.typicode.com/todos/1")
// asyncOperation.then((resolvedValue) => console.log("Mario"))
// console.log("Juan")
// console.log("Pedro")


// Ejemplo 3
// async function fetchSomething (){
//     await new Promise ((resolve) => {
//         setTimeout (() => {
//             console.log("Mario")
//             resolve()
//         },10)
//     })

//     console.log("Juan")
// }

// fetchSomething()

// console.log("Pedro")


// Ejemplo 4
// setTimeout(() => console.log("Mario"),5)

// const promise = new Promise((resolve) => {
//     setTimeout(() => resolve(),10)
// })

// promise.then(() => console.log("Juan"))
// console.log("Pedro")

// Ejemplo 5

// setTimeout(() => console.log("Marios"),0)
// const promise = Promise.resolve()
// promise.then(() => console.log("Juan"))
// console.log("Pedro")

// TODO: El callback Queue siempre elije primero una promesa antes que un setTimeout


// TODO: EJERCICIOS!!

// TODO: EJERCICIOS 1
// Vamos a simular una carrera entre 3 personas, Juan, Marios y Martin. El orden de largada sera el siguiente:
// console.log("Juan")
// console.log("Mario")
// console.log("Martin")

// El orden de llegada se determina conforme el nombre de cada uno vaya apareciendo en la consola, de modo que el ganador sera aquel cuto nombre sea el primero en aparecer.

// Actividad: Utilizando solamente setTimeout y sin alterar el orden de largada, escribir el codigo necesario para obtener los siguientes resultados:

//Vuelta 1
// Mario
// Martin
// Juan

// setTimeout(()=> console.log("Juan"),10) 
// console.log("Mario")
// console.log("Martin")

// Vuelta 2
// Juan
// Martin
// Mario

// console.log("Juan")
// setTimeout(()=> console.log("Mario"),10) 
// console.log("Martin")

// Vuelta 3
// Martin
// Juan
// Mario

// setTimeout (() => {
//     console.log("Juan")
//     setTimeout (()=> console.log("Mario"),0)
// },0)
// console.log("Martin")



// Vuelta 4
// Mario
// Juan
// Martin

// setTimeout(()=> console.log("Juan"),5)
// console.log("Mario")
// setTimeout (() => console.log("Martin"),10)


// TODO: EJERCICIO 2

// Utilizando setTimeout, crear una funcion que actue como un temporizador, haciendo una cuenta regresiva desde el numero de segundos que se pase como argumentos hasta llegar a 0, Para ese ejercicios no se puede utilizar ningun tipo de loop (for, while, etc)
// PISTA: Para resolver el ejercicio, pueden investigar un poco sobre funciones recursivas

const temporizador = (second) => {
    setTimeout(() => {
        if (second < 0) return
            console.log(second)
            temporizador(second - 1)


            
    },1000)
}

temporizador(10)