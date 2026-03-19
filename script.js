function startGame(){

let name=document.getElementById("playerName").value.trim();

if(name===""){
alert("Enter your name first!");
return;
}

// hide start
document.getElementById("startScreen").classList.add("hidden");

// show description
document.getElementById("descScreen").classList.remove("hidden");
}

// 👉 SHOW TOPICS (4 BOX)
function showTopics(){

document.getElementById("descScreen").classList.add("hidden");
document.getElementById("topicScreen").classList.remove("hidden");

}
