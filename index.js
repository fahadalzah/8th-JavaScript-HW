// ------------------------ Task 1 ----------------------- \\
alert("------------------ Task 1 ------------------")
{
    function add(x) {
        if (x >= 10) {
            alert(x + 10)
        }else{
            alert("number less than 10")
        }
    }
    opr = (value, opration) =>{
        return opration(value)
    }
    let result = opr(Number(prompt("Your Number")), add)
}
// ------------------------ Task 2 ----------------------- \\
alert("------------------ Task 2 ------------------")
function javascript_boot_camp(Teach) {
    alert(`"This javaScript BootCamp with ${Teach} OK?"`)
    Teach = "Samah"
    alert(`"This javaScript BootCamp with ${Teach} OK?"`)
}
javascript_boot_camp("Ali")
// ------------------------ Task 3 ----------------------- \\
alert("------------------ Task 3 ------------------")
function average(x, y) {
    let z = x + y
    alert("The Average Of The Numbers You Wrote Is " + z/2)
}
average(Number(prompt("Enter The Value Of X")), Number(prompt("Enter The Value Of Y")))
