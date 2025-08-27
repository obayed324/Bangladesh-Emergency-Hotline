//RedHeartFunctionality Or redHeartCount
function redHeart(id) {

    let redHeart = parseInt(document.getElementById("red-heart").innerText);
    document.getElementById("red-heart").innerText = ++redHeart;

}

document.getElementById("national-emergency-heart").addEventListener("click",function(){
    redHeart("national-emergency-heart")
});

document.getElementById("police-heart").addEventListener("click",function(){
    redHeart("police-heart")
});
document.getElementById("fire-service-hear").addEventListener("click",function(){
    redHeart("fire-service-hear")
});
document.getElementById("ambulance-heart").addEventListener("click",function(){
    redHeart("ambulance-heart")
});
document.getElementById("woman-help-heart").addEventListener("click",function(){
    redHeart("woman-help-heart")
});
document.getElementById("Corruption-heart").addEventListener("click",function(){
    redHeart("Corruption-heart")
});
document.getElementById("electricity-heart").addEventListener("click",function(){
    redHeart("Corruption-heart")
});
document.getElementById("brac-heart").addEventListener("click",function(){
    redHeart("brac-heart")
});
document.getElementById("railway-heart").addEventListener("click",function(){
    redHeart("railway-heart")
});