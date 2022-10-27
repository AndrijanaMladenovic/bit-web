
//Prvi zadatak//

var a = 3;
var b = 4;
var c = 5;

if(a === b , a === c , b == c ){
  console.log('trougao je je jednakostranican')
}
else{
  console.log('trougao je ravan')
}
//Drugi zadatak//
var x = 4;
var y = 5 ; 
var z = x + y;
var u = x * y;
var i = x / y ;
var p = x % y ; 
console.log (z);
console.log (u);
console.log (i);
console.log (p);

//Treci zadatak//

var v = 91 >= 100;
var n = 81 >= 90;
var m = 71 >= 80 ;
var t = 51 >= 60;

var ocena = 40;

if (ocena < 51){console.log('Student nije polozio ispit')
}
else if (ocena >= 51 && ocena <= 60){
  console.log('Student je polozio ispit sa ocenom t'  )
}else if (ocena >= 71 && ocena <=80){
  console.log('Student je polozio ispit sa ocenom m')
}else if (ocena >= 81 && ocena <= 90){
  console.log('Student je polozio ispit sa ocenom n')
} else if (ocena >=91){
  console.log('Student je polozio ispit sa najvecom ocenom')
}

//Cetvti zadatak//

var r = 5 ;
var q = 'dog';

  if(q == "sheep" && r > 1 ){console.log(r + "" + q + "s")}
  else if(q == "sheep" && r == 1){
  console.log(r + q)}

  else if( q == "geese" && r > 1 ){
  console.log (r + q +'s')}
  else if (q == "geese" && r == 1){
    console.log (r + q)}

  else if (q == "dog" && r == 1){
    console.log (r + q)}
  else if( q == "dog" && r > 1 ){
    console.log (r + q +'s')}

  else if (q == "cat" && r == 1){
    console.log (r + q)}
  else if( q == "cat" && r > 1 ){
    console.log (r + q +'s')}



//peti zadatak//

var age = 20;
var license = 18 ;
var difference = license - age;

if(age >= license){
  console.log('You are old enough to drive')
}else{
  console.log(difference+'years to drive')
}

var Andrijana = 27;
var Pera = 25;
var stariji = Pera - Andrijana ;
var mladji = Andrijana - Pera ;
if(Pera > Andrijana){
  console.log("He is",   stariji   ,"Years older than me");
}else if ( Andrijana == Pera){
  console.log('You are the same age')
}
else {
  console.log("He is" , mladji , "years younger than me")
} 

// Sesti zadatak 

var dogX  = 'German Shpherd' ;
var dogC = 'German Shpherd' ;
var dogV = 'German Shpherd' ; 
var dogB = 'German Shpherd' ;
var dogN = 'German Shpherd' ;

var dog = 'German Shpherd';

if(dogX && dogC && dogB && dogV && dogN === dog){
  console.log("This is German Shepherd called Neo")
}else{console.log("That is a mixed breed")}

