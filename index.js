const historyData = []
let coin = parseInt(document.getElementById("total-coin").innerText)

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


//coin features Or Calling Features
function phoneCall(idTxt,idPhone) {
    let coin = parseInt(document.getElementById("total-coin").innerText);
    coin -= 20;
    
    if(coin < 0){
        alert("Insufficient Balance!! For a phone call required minimum 20 coin!")
    }
    else{
        const str1 = document.getElementById(idTxt).innerText;
        const str2 = document.getElementById(idPhone).innerText;
        alert("📞 Calling "+str1+" Service "+str2+"...");
        document.getElementById("total-coin").innerText = coin;
    }
    
}

//getting text and phone number for call history

function getData(idTxt,idPhone) {
    const data ={
        name:document.getElementById(idTxt).innerText,
        date:new Date().toLocaleTimeString(),
        phone:document.getElementById(idPhone).innerText
    }
    historyData.push(data);
    
}

//history generator
function historyGenerator() {

    coin -= 20
    if(coin < 0){
        return;
    }
    else{
        const historyContainer = document.getElementById("history-Container");
        historyContainer.innerHTML = "";
        for(const data of historyData){
            const div = document.createElement("div")
            div.innerHTML = `
            <div class=" mb-[16px] flex justify-between bg-[#FAFAFA] p-4 items-center shadow-md rounded-xl">
                <div class="flex flex-col">
                    <h3 class=" font-semibold text-sm">${data.name}</h3>
                    <h3 class="text-[#5C5C5C]">${data.phone}</h3>
                </div>
                <div>
                    <p>${data.date}</p>
                </div>
            </div>
            `
            historyContainer.appendChild(div)
            
        }
        
    }
    
    
}

document.getElementById("call-for-national-emergency").addEventListener("click",function(){
    phoneCall("national-emergency-txt","national-emergency-phone");
    getData("national-emergency-txt","national-emergency-phone");
    historyGenerator();
});


document.getElementById("call-for-police").addEventListener("click",function(){
    phoneCall("police-help-txt","police-help-phone");
    getData("police-help-txt","police-help-phone");
    historyGenerator();
});

document.getElementById("call-for-fire-service").addEventListener("click",function(){
    phoneCall("fire-service-txt","fire-service-phone");
    getData("fire-service-txt","fire-service-phone");
    historyGenerator();
});

document.getElementById("call-for-ambulance").addEventListener("click",function(){
    phoneCall("ambulance-txt","ambulance-phone");
    getData("ambulance-txt","ambulance-phone");
    historyGenerator();
});

document.getElementById("call-for-woman-help").addEventListener("click",function(){
    phoneCall("woman-help-txt","woman-help-phone");
    getData("woman-help-txt","woman-help-phone");
    historyGenerator();
});

document.getElementById("call-for-Corruption").addEventListener("click",function(){
    phoneCall("Anti-Corruption-txt","Anti-Corruption-phone");
    getData("Anti-Corruption-txt","Anti-Corruption-phone");
    historyGenerator();
});

document.getElementById("call-for-Electricity").addEventListener("click",function(){
    phoneCall("Electricity-Outage-txt","Electricity-Outage-phone");
    getData("Electricity-Outage-txt","Electricity-Outage-phone");
    historyGenerator();
});

document.getElementById("call-for-brac").addEventListener("click",function(){
    phoneCall("brac-txt","brac-phone");
    getData("brac-txt","brac-phone");
    historyGenerator();
});

document.getElementById("call-for-railway").addEventListener("click",function(){
    phoneCall("Bangladesh-Railway-txt","Bangladesh-Railway-phone");
    getData("Bangladesh-Railway-txt","Bangladesh-Railway-phone");
    historyGenerator();
});

//copy && count section

function copyText(id) {
    let text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Number Copied: " + text); 
    });
}
function copyCount(){
    let copyCount = parseInt(document.getElementById("copy").innerText);
    copyCount++;
    document.getElementById("copy").innerText = copyCount;
}

document.getElementById("National-Emergency-copy").addEventListener("click",function(){
    copyText("national-emergency-phone");
    copyCount("National-Emergency-copy");
})

document.getElementById("police-helpline-copy").addEventListener("click",function(){
    copyText("police-help-phone");
    copyCount("police-helpline-copy"); 
})


document.getElementById("Fire-Service-copy").addEventListener("click",function(){
    copyText("fire-service-phone");
    copyCount("Fire-Service-copy");
})

document.getElementById("Ambulance-copy").addEventListener("click",function(){
    
    copyText("ambulance-phone");
    copyCount("Ambulance-copy");
})

document.getElementById("woman-help-copy").addEventListener("click",function(){

    copyText("woman-help-phone");
    copyCount("woman-help-copy");
    
})

document.getElementById("Anti-Corruption-copy").addEventListener("click",function(){
    copyText("Anti-Corruption-phone");
    copyCount("Anti-Corruption-copy");
    
})

document.getElementById("Electricity-Outage-copy").addEventListener("click",function(){
    
    copyText("Electricity-Outage-phone");
    copyCount("Electricity-Outage-copy");
})

document.getElementById("brac-copy").addEventListener("click",function(){

    copyText("brac-phone");
    copyCount("brac-copy");
    
})

document.getElementById("Bangladesh-Railway-copy").addEventListener("click",function(){
    copyText("Bangladesh-Railway-phone");
    copyCount("Bangladesh-Railway-copy");
    
})

//Clear Button

document.getElementById("clear-button").addEventListener("click",function(){

    document.getElementById("history-Container").innerHTML = "";
    
})


