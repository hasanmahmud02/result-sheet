var marks = Number(prompt(" Input Your Mark  "));

if(marks <= 100 && marks >= 90){
document.write("Congratulations! You  got golden A+");

}else if(marks <= 89 && marks >= 80){
document.write("Congratulations! You  got A+");

}else if(marks <= 79 && marks >= 70){
document.write("Congratulations! You  got A");

}else if(marks <= 69 && marks >= 60){
document.write("Congratulations! You  got B+");

}else if(marks <= 59 && marks >= 50){
document.write("Congratulations! You got B");

}else if(marks <= 49 && marks >= 40){
document.write("Congratulations! You  got C+");

}else if(marks <= 39 && marks >= 33){
document.write("Congratulations! You  got C");

}else if(marks <= 32){
document.write("You failed the exam");

}else{
document.write("Please input a valid number!!!")
}