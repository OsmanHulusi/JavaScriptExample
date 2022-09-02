/*variable exercise*/
let firstName = "Osman";
let lastName = "Hulusi";
let surname = "AYDIN";
let age= 28;

alert(Boolean(firstName))

console.log("Benim adım " + firstName + " " + lastName + " " + surname + " ve ben " + age + " yaşımdayım")


/*Array Excersize*/

let array=  ["Lepistes", "Yunus", "Sarı Prenses"];
array[3] = "Ful red";

array.push("Mercedes");
alert(array)

/*for loop*/

for (let x = 5; x < 21; x = x + 2){
    console.log(x)
}


/*while döngüsü*/

let x = 0
while (x < 100){
    
    console.log(x)
    x = x + 1
    
}

let variable = ["araba","bisiklet","bilgisayar"];
for (let x = 0; x < variable.length; x = x + 1){
    console.log(variable[x])
}



let numberOne = 50;
let numberTwo = 40;
if (numberTwo > numberOne){
    alert("Bu doğru değil")
}
else if (numberTwo == numberOne){
    alert("Yazılımcı olacaksın bu şekilde gardaş")
}
else {
    alert("şimdi sevinme zamanı ayağa kalk ve bunu kutla")
}


a = 8;
b = 9;
c = "Hulusi";
d = "Hulusi";

if (a<b && c==d){
    alert("bu ifade doğrudur")
}


a = 8;
b= 10;
c = "Hulusi";
d = "Hulusi";

if (a >b || c==d){
    alert("Doğru")
}
