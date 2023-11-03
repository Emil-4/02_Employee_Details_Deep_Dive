// Employee Details Implementing Methods//

const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
    
  },
];
console.table(employees);
//Display  particular payout//
const pay =employees.filter(function(payout){
  return payout.payout==="25000"
})
console.log(pay);
const pay1 =employees.filter(function(payout){
  return payout.payout==="30000"
})
console.log(pay1);
const pay2 =employees.filter(function(payout){
  return payout.payout==="35000"
})
console.log(pay2);


//concat //


const Speardout =pay.concat(pay1,pay2);
console.log(Speardout);


//Display  junior Developer//
employees.filter(function(role){
  // console.log(role);
})
const Access =employees.filter(function(role){
  return role.name==="Varun";
})
// console.log(Access);

//Display All Junior developer//
employees.filter(function(role){
  // console.log(role);
});
const Accessall =employees.filter(function(role){
  return role.role==="Junior Web Developer";
})
// console.log(Accessall);



//Display the senior employee_details//
employees.filter(function(role){
  // console.log(role);
});
const AccessSenior =employees.filter(function(role){
  return role.role==="Senior Front End Developer";
})
// console.log(AccessSenior);








//Display Empolyess who are working as a Junior web developer//
const Table = document.querySelector(".List");
Table.innerHTML =JSON.stringify(Access);
// console.log(Table);

//Display all Junior web developer Access dom//
const all =document.querySelector(".AllJunior");
all.innerHTML =JSON.stringify(Accessall);
// console.log(all);

//Display Senior web developer Access Dom//
const Senior =document.querySelector(".Senior");
Senior.innerHTML=JSON.stringify(AccessSenior);
// console.log(AccessSenior);

//Display payout range in Dom//
const Payout =document.querySelector(".Payout");
Payout.innerHTML=JSON.stringify(Speardout );
 console.log(Payout);








 