let x = 10
console.log(x)


// First priority
function chaita(){
    let x = 20
    function chaita2(){
        let y = 30
        console.log(x)
    }
    chaita2()
}
chaita()
