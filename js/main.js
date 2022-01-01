var money = prompt ("alisher qancha somingiz bo?", 0) - 0
 
const USD_TO_UZS = 9433.34;
const EURO_TO_UZS = 10354.03;



var isEnough = money >= (500+250)* USD_TO_UZS  + EURO_TO_UZS * 120


if(isEnough){
    console.log("oq yol alisher!!!")  
}else{
    console.log("ozgina sabr qilishingiz kerak")
}