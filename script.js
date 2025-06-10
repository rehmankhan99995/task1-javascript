// var a ="abdur rehman"
// var askname =prompt("Enter your Name")


// for (let i = 0; i < 5; i++) {
//     console.log(i,askname);
//     // console.log(askname)


// }

// let input = prompt("").toLowerCase();  // convert to lowercase
// let spaceIndex = input.indexOf(" ");       // find the space position

// // First word
// for (let i = 0; i < spaceIndex; i++) {
//   console.log(input[i]);
// }

// console.log(""); // print a blank line between words

// Second word — only first 4 characters
// for (let i = spaceIndex + 1; i < spaceIndex + 5; i++) {
//   console.log(input[i]);
// }

// program 1 

//  var askname = prompt('')
//    for (let i = 0; i < askname.length; i++) {
//      console.log(askname[i]);
    
//    }

// program 2 using if else 

//  var cities = ["karachi","lahore","islamabad", "peshawar", "quetta", "multan", "faisalabad", "hyderabad", "gujranwala", "sialkot"];

//  var checkcities = prompt("enter your city").toLowerCase()
  
//  for (let i = 0; i < cities.length; i++) {
//     //  console.log(cities[i]);
//      if (cities[i] == checkcities) {
//           console.log(checkcities + " is in the list of cities.");
//      } else {
        
//      }
//     }
    
    

// program 3 
var fe = prompt("Enter a number to print the pattern");
fe= parseInt(fe); 
// for(let i = fe; i >=1; i--){
//  let star = "";
//  for (let j = 1; j<=i; j++){
//     star += "*";
//  }   
// console.log(star)

// }

for(let i = 1; i <=fe; i++){
 let star = "";
 for (let j = 1; j<=i; j++){
    star += "*";
 }   
console.log(star)

}

 
