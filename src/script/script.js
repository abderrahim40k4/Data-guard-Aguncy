const bar = document.getElementById("bar");
const drop = document.getElementById("drop");
bar.addEventListener("onclick", dropin());
function dropin(){
    drop.style.display = "block";
    bar.style.display = "none";
}