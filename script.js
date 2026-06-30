// ===========================
// JOSHI FAMILY TREE
// script.js
// ===========================

const members = [

{
name:"Jagannath",
relation:"Grand Father",
birthday:"10 Jan 1955",
blood:"nk",
phone:"9687254584",
village:"Patan",
image:"images/jagannath.png"
},

{
name:"Mayaben",
relation:"Grand Mother",
birthday:"15 Aug 1960",
blood:"nk",
phone:"6354846815",
village:"Patan",
image:"images/mayaben.png"
},

{
name:"Hitesh",
relation:"Father",
birthday:"18 Oct 1984",
blood:"A+",
phone:"9427678251",
city:"ahmedabad",
image:"images/hitesh.png"
},

{
name:"Rita",
relation:"Mother",
birthday:"17 Feb 1990",
blood:"nk",
phone:"9409465078",
city:"Ahmedabad",
image:"images/rita.png"
},

{
name:"Jiya",
relation:"Daughter",
birthday:"23 Sep 2007",
blood:"nk",
phone:"8758605205",
city:"Ahmedabad",
image:"images/jiya.png"
},

{
name:"Moxi",
relation:"Daughter",
birthday:"02 Aug 2011",
blood:"nk",
city:"Ahmedabad",
image:"images/moxi.png"
},

{
name:"Rushank",
relation:"Son",
birthday:"18 May 2019",
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

document.getElementById("village").innerHTML=members[i].village;

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

let list="";

members.forEach(member=>{

list+=`

<div class="card">

<h3>${member.name}</h3>

<p>${member.birthday}</p>

</div>

`;

});

document.getElementById("birthdayList").innerHTML=list;

// ===========================
// WELCOME
// ===========================

window.onload=function(){

showMember(0);

console.log("Joshi Family Tree Loaded");

};
