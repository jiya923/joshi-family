const members = [
{name:"Jagannath",dob:"1951-03-18"},
{name:"Mayaben",dob:"1966-08-15"},
{name:"Hitesh",dob:"1984-10-18"},
{name:"Rita",dob:"1990-02-17"},
{name:"Jiya",dob:"2007-09-23"},
{name:"Moxi",dob:"2011-08-02"},
{name:"Rushank",dob:"2019-05-18"}
];

function daysLeft(date){
    const today = new Date();
    const bday = new Date(today.getFullYear(), new Date(date).getMonth(), new Date(date).getDate());

    if(bday < today){
        bday.setFullYear(today.getFullYear()+1);
    }

    return Math.ceil((bday-today)/(1000*60*60*24));
}

members.sort((a,b)=>daysLeft(a.dob)-daysLeft(b.dob));

console.log("Next Birthday");
console.log("-------------");
console.log("Name :", members[0].name);
console.log("DOB  :", members[0].dob);
console.log("Days Left :", daysLeft(members[0].dob));