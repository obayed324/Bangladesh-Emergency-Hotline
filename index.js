//RedHeartFunctionality Or redHeartCount
function redHeart(id) {

    let redHeart = parseInt(document.getElementById("red-heart").innerText);
    document.getElementById("red-heart").innerText = ++redHeart;

}
document.getElementById("national-emergency-heart").addEventListener("click",function(){
    redHeart("national-emergency-heart")
})