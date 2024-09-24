let fName ="Edith ";
let mName ="Inigo ";
let lName ="Valdez "
let bDate = "October 20, 2005 ";
let bPlace = "Resonable, Candon City, Ilocos Sur, Phillipene 2710 ";
let addressed = "Patac, Galimuyod,Ilocos Sur,Phillipine 2709. ";
let Course = "bachelor Of science in computer science ";
let Dream = "App Developer";


let fullName = fName.toUpperCase() + mName.toUpperCase() + lName.toUpperCase();

let fulName = fName + mName + lName;
fullName += "was born ";
bDate += "at ";
bPlace += "and currently living at ";
let output1 = fullName + bDate + bPlace + addressed;

fulName += "is taking up "
Course += "and dreams to be "
let output2 = fulName +  Course + Dream;

console.log(output1)
console.log(output2)

