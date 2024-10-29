let userInput=prompt(" please choose one weekend")
switch(userInput){
    case "monday":
        alert("monday is lazy day")
        break;
         case "tuesday":
        alert("tuesday normal day")
        break;
         case "wednesday":
        alert("wednesday engertic day")
        break;
         case "thursday":
        alert("thursday common day")
        break;
         case "friday":
        alert("friday is waiting for saturday")
        break;
         case "saturday":
        alert("saturday is weekend to enjoy")
        break;
         case "sunday":
        alert("sunday is funday")
        break;
        default:
        alert("pls choose from above list only!")
}

let a=[1,2,3,4,5]
for(let number of a){
   console.log(number)
}
// o/p:-
1
2
3
4
5


var fruit="apple"

for(var char of fruit){
    
   console.log(char)
} 
// o/p:-
a
p
p
l
l
e

// if we want add string as array the we use above snnipet
var fruit="apple"
var character=[]
for(var char of fruit){
    character.push(char)
   
} 
console.log(character)
// o/p:-['a','p','p','l','e']