const multiplicarPorsiMismo= (a,b)=>{
    const resultado = a*b
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(resultado)
    },1000)
})
}
multiplicarPorsiMismo(2,2)
    .then (result=>console.log(result + ' Procesado'))

