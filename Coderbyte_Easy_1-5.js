//exercise one
function FirstReverse(str) { 
   var array = [];
  for(var i = 1, len = str.length ; i <= len ; i++){
  		array.push(str.charAt(len - i));
  }
  return str = array.join(""); 

          
}
console.log(FirstReverse("I love coding so much!"));

//exercise two 
function FirstFactorial(num) { 
  			var array = [] 
			for(var i = num; i > -1; i--){
            	array.push(num - i );
            }

    var mult = array.shift();
    
    function multiply (array) {
        var sum=1;
        for (var i=0; i<array.length; i++) {
            sum *= array[i];
        } 
        return sum;
    }
    
  return num = multiply(array); 
         
}   
   

console.log(FirstFactorial(8));


//exercise three

function LongestWord(sen){
	// Remove special characters from string
		var str = sen.replace(/[^a-zA-Z0-9 ]/g, "");
        var array = str.split(" ");;

				for(var i = 0; i <= array.length ; i++  ){

					 array = array.sort(function(a,b){

							return b.length - a.length;
						});

						return array = array.shift();
				}

		return sen = array;

}

console.log(LongestWord("This* is@ a test!! Longword@@"))

//exercise four

function LetterChanges(str){

  var alpha = "abcdefghijklmnopqrstuvwxyz"
  var strClean = "";
 

      for (var i = 0; i < str.length; i++) {
         var strIndex = alpha.indexOf(str[i]);
         if (strIndex == 25){
          strClean += "a" ;
         } else if (strIndex == -1){
          strClean += str[i]
         }else {
          strClean += alpha[strIndex + 1]
         }
      };

    return strClean.replace(/[aeiou]/g, function(vowel){return vowel.toUpperCase();});

}


console.log(LetterChanges("acfghkomz!!!."));



//exercise five

function SimpleAdding(num) { 

  var array = []
  , sum = 0;


  for (var i = 1; i <= num ; i++) {
    array.push(i);
  }
  

  for(var i=0; i< array.length; i++){
    sum += array[i];

 }
 
 return sum  ; 

}


console.log(SimpleAdding(100));







