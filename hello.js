let x = 10
console.log(x)


// Task code 101

function hello(){
    console.log("helo")
}
hello()
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

function hello(){
    var value = 34
    console.log(value)
}
hello()


function hello(){
    var z = 10
    console.log(z)
}
hello()



