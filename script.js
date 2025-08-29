const callHistory = [];

// function to all heart icon
function handleHeartIcon(){
    const heartCount = parseInt(document.getElementById("heart-count").innerText);
    const totalHeart = heartCount + 1;
    document.getElementById("heart-count").innerText = totalHeart;
}

// function to call btn 
function handleCallBtn(id1,id2){
    const coinCount = parseInt(document.getElementById("coin-count").innerText);

    if(coinCount < 20){
        alert("You need to have at least 20 coins to make a call.")
        return
    }

    const totalCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = totalCoin;
    
    const serviceName = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;
    alert('📞' + serviceName + ' : ' + serviceNumber);

    const data = {
        name: serviceName,
        number: serviceNumber,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data);

    const callHistoryContainer = document.getElementById("call-history-container")

    for(const history of callHistory){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="w-full bg-[#FAFAFA] flex justify-between items-center rounded-[7px] mt-4 p-3">
                <div>
                    <h2 class="text-sm font-semibold">${data.name}</h2>
                    <p>${data.number}</p>
                </div>
                <p class="text-sm font-semibold">${data.time}</p>
            </div>
        `
        callHistoryContainer.appendChild(div)
        return
    }
}

// function to all copy btn 
function handleCopyBtn(id){
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied successfully.");
    })
    .catch(err => {
        console.error("Failed to copy")
    })


    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const totalCopy = copyCount + 1;
    document.getElementById("copy-count").innerText = totalCopy;
}

// heart icon functionality
document.getElementById("heart-icon-1").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-2").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-3").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-4").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-5").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-6").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-7").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-8").addEventListener("click", function(){
    handleHeartIcon();
})
document.getElementById("heart-icon-9").addEventListener("click", function(){
    handleHeartIcon();
})


// call btn functionality
document.getElementById("call-btn-1").addEventListener("click", function(){
    handleCallBtn("service-name-1", "service-number-1")
    
})

document.getElementById("call-btn-2").addEventListener("click", function(){
    handleCallBtn("service-name-2", "service-number-2")
})

document.getElementById("call-btn-3").addEventListener("click", function(){
    handleCallBtn("service-name-3", "service-number-3")
})

document.getElementById("call-btn-4").addEventListener("click", function(){
    handleCallBtn("service-name-4", "service-number-4")
})

document.getElementById("call-btn-5").addEventListener("click", function(){
    handleCallBtn("service-name-5", "service-number-5")
})

document.getElementById("call-btn-6").addEventListener("click", function(){
    handleCallBtn("service-name-6", "service-number-6")
})

document.getElementById("call-btn-7").addEventListener("click", function(){
    handleCallBtn("service-name-7", "service-number-7")
})

document.getElementById("call-btn-8").addEventListener("click", function(){
    handleCallBtn("service-name-8", "service-number-8")
})

document.getElementById("call-btn-9").addEventListener("click", function(){
    handleCallBtn("service-name-9", "service-number-9")
})

// clear btn functionality
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("call-history-container").innerHTML = ""
})

// copy btn functionality
document.getElementById("copy-btn-1").addEventListener("click", function(){
    handleCopyBtn("service-number-1");
})

document.getElementById("copy-btn-2").addEventListener("click", function(){
    handleCopyBtn("service-number-2");
})

document.getElementById("copy-btn-3").addEventListener("click", function(){
    handleCopyBtn("service-number-3");
})
document.getElementById("copy-btn-4").addEventListener("click", function(){
    handleCopyBtn("service-number-4");
})

document.getElementById("copy-btn-5").addEventListener("click", function(){
    handleCopyBtn("service-number-5");
})

document.getElementById("copy-btn-6").addEventListener("click", function(){
    handleCopyBtn("service-number-6");
})

document.getElementById("copy-btn-7").addEventListener("click", function(){
    handleCopyBtn("service-number-7");
})

document.getElementById("copy-btn-8").addEventListener("click", function(){
    handleCopyBtn("service-number-8");
})

document.getElementById("copy-btn-9").addEventListener("click", function(){
    handleCopyBtn("service-number-9");
})
