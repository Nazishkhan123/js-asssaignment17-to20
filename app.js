// -------------ASSAIGNMENT 17 TO 20ARRAYS AND LOOP--------------

// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr =[[]]

// Q2. Declare and initialize a multidimensional array 
// representing the following matrix:
//  var arr =[
//     [0,1,2,3]
//     [1,0,1,2]
//     [2,1,0,1]]
 

  
//  Q3. Write a program to print numeric counting from 1 to 10.

// for (let i=1;i<=10;i++){
// document.write(i)
// document.write("<br>")
// }

// Q4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// let tableNumber = +prompt("Enter a number to show its multiplication table")
// let lengthOfTable = +prompt("Enter length multiplication table") 
// document.write("<h1>Multiplication table of " , tableNumber  ,"<br>" , "Length"  , lengthOfTable)

// for (let i=1;i<=lengthOfTable;i++){
   
//    document.write("<br>")
//    document.write(tableNumber + "x" + i +  "=" + tableNumber*i )

// }

// Q5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits=["apple","banana","mango","orange","strawberry"]

// for (var i=0;i<fruits.length;i++){
// document.write(fruits[i] + "<br>")
// }

// for(var j=0;j<fruits.length;j++){
//    document.write(" Element at index " + j + "  is  " + fruits[j] + "<br>" )
// }

// Q6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h2>counting</h2>")
// for(var i=1;i<=15;i++){
// document.write(i+ ","  )
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h2>Reserve counting</h2>")
// for(var i=10;i>=1;i--){
//    document.write(i+ ",")
//    }
//    // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//    document.write("<h2>Even</h2>")
//    for(var i=0;i<=20;i++){
//       document.write(i++ + ","  )
//       }

//       // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//       document.write("<h2>Odd</h2>")
//    for(var i=1;i<=19;i++){
//       document.write(i++ + ","  )
//       }

//       // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//       document.write("<h2>Series</h2>")
//       for(var i=2;i<=20;i++){
//          document.write(i++ + "k" + ","  )
//          }

//          7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var arr=["cake","apple pie","cookie","chips","patties"]
// var userOutput = prompt("Welcome to our Backery.what do you want to order sir/Mam?")
// var output=false
// for(var i=0;i<arr.length;i++){
// if (userOutput  ===  arr[i]){
//    output=true
//   }

// }
// if (output){
//    document.write(userOutput + " is available at index 2 in our backery")
// }
// else

// document.write(userOutput + " is  not available in our backery")




// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
   

// var arr = [24, 53, 78, 91, 12];
// var largestNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largestNumber) {
//     largestNumber = arr[i];
//   }
// }
// document.write("Array item:" + arr + "<br>")
// document.write("The largest number  is: " +largestNumber);

// Q9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var arr =  [24, 53, 78, 91, 12];
// var smallestNumber = arr[0];

// for (var i=1;i<arr.length;i++){
// if(arr[i]< smallestNumber){
//    smallestNumber = arr [i]
// }
// }
// document.write("Array item:" + arr + "<br>")
// document.write("The smallest number  is: " +smallestNumber);

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

// for (var i=5;i<=100;i=i+5){
// document.write([i] + ",")
// }





