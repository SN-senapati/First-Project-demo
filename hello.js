let x = 10
console.log(x)



// First priority
function outer(){
    var z = 10
    function inner(){
        console.log(z)
        var y = 20
        console.log(y)
    }
    inner()
}
outer()