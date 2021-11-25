let x = document.getElementById("a");
let y = document.getElementById("b");
function add(){
    add_total=parseInt(x.value) + parseInt(y.value)
    console.log(add_total);
    document.getElementById("c").value=add_total
}
function sub(){
    add_total=parseInt(x.value) - parseInt(y.value)
    console.log(add_total);
    document.getElementById("c").value=add_total
}
function mult(){
    add_total=parseInt(x.value) * parseInt(y.value)
    console.log(add_total);
    document.getElementById("c").value=add_total
}
function per(){
    add_total=parseInt(x.value) % parseInt(y.value)
    console.log(add_total);
    document.getElementById("c").value=add_total
}