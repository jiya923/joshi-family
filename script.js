// ===========================
// JOSHI FAMILY TREE
// script.js
// ===========================

const members = [

{
name:"Jagannath",
relation:"Grand Father",
birthday:"1955-03-18",
blood:"nk",
phone:"9687254584",
village:"Patan",
image:"images/jagannath.png"
},

{
name:"Mayaben",
relation:"Grand Mother",
birthday:"1969-08-15",
blood:"nk",
phone:"6354846815",
village:"Patan",
image:"images/mayaben.png"
},

{
name:"Hitesh",
relation:"Father",
birthday:"1984-10-18",
blood:"A+",
phone:"9427678251",
city:"ahmedabad",
image:"images/hitesh.png"
},

{
name:"Rita",
relation:"Mother",
birthday:"1990-02-17",
blood:"nk",
phone:"9409465078",
city:"Ahmedabad",
image:"images/rita.png"
},

{
name:"Jiya",
relation:"Daughter",
birthday:"2007-09-23",
blood:"nk",
phone:"8758605205",
city:"Ahmedabad",
image:"images/jiya.png"
},

{
name:"Moxi",
relation:"Daughter",
birthday:"2011-08-02",
blood:"nk",
city:"Ahmedabad",
image:"images/moxi.png"
},

{
name:"Rushank",
relation:"Son",
birthday:"2019-05-18",
blood:"nk",
city:"Ahmedabad",
image:"images/rushank.png"
}

];

// ===========================
// SHOW MEMBER
// ===========================

function showMember(i){

document.getElementById("profileImg").src=members[i].image;

document.getElementById("name").innerHTML=members[i].name;

document.getElementById("relation").innerHTML=members[i].relation;

document.getElementById("birthday").innerHTML=members[i].birthday;

document.getElementById("blood").innerHTML=members[i].blood;

document.getElementById("phone").innerHTML=members[i].phone;

document.getElementById("village").innerHTML =
members[i].village || members[i].city || "";

}

// ===========================
// SEARCH MEMBER
// ===========================

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

// ===========================
// DARK MODE
// ===========================

document.getElementById("darkBtn").onclick=function(){

document.body.classList.toggle("dark");

};

// ===========================
// FAMILY CHAT
// ===========================

function sendMessage(){

let input=document.getElementById("message");

let chat=document.getElementById("chatBox");

if(input.value=="") return;

chat.innerHTML +=

"<div class='message'>"+input.value+"</div>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}
// ===========================
// UPCOMING BIRTHDAYS
// ===========================

const birthdayList = document.getElementById("birthdayList");

birthdayList.innerHTML = "";

const today = new Date();

let nextIndex = -1;
let minDays = 366;

// Find nearest birthday
members.forEach((member,index)=>{

let birthday = new Date(member.birthday);

birthday.setFullYear(today.getFullYear());

if(birthday < today){

birthday.setFullYear(today.getFullYear()+1);

}

let days = Math.ceil((birthday - today)/(1000*60*60*24));

if(days < minDays){

minDays = days;

nextIndex = index;

}

});

// Show cards

members.forEach((member,index)=>{

let birthday = new Date(member.birthday);

birthday.setFullYear(today.getFullYear());

if(birthday < today){

birthday.setFullYear(today.getFullYear()+1);

}

let days = Math.ceil((birthday - today)/(1000*60*60*24));

birthdayList.innerHTML += `

<div class="birthdayCard ${index===nextIndex ? "upcoming" : ""}">

<img src="${member.image}" alt="${member.name}">

<h3>${member.name}</h3>

<p>${member.relation}</p>

<p>${member.birthday}</p>

${index===nextIndex ? `<div class="birthdayBadge">🎂 Birthday in ${days} days</div>` : ""}

</div>

`;

});

// ===========================
// WELCOME
// ===========================
window.onload=function(){

showMember(0);

console.log("Joshi Family Tree Loaded");

// Birthday cards are already generated above.

};

};
