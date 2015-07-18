
 ██████╗ ██████╗ ██████╗ ███████╗██████╗ ██████╗ ██╗   ██╗████████╗███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝
██║     ██║   ██║██║  ██║█████╗  ██████╔╝██████╔╝ ╚████╔╝    ██║   █████╗  
██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗██╔══██╗  ╚██╔╝     ██║   ██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║██████╔╝   ██║      ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝    ╚═╝      ╚═╝   ╚══════╝
                                                                           
███████╗██╗  ██╗███████╗██████╗  ██████╗██╗███████╗███████╗███████╗        
██╔════╝╚██╗██╔╝██╔════╝██╔══██╗██╔════╝██║██╔════╝██╔════╝██╔════╝        
█████╗   ╚███╔╝ █████╗  ██████╔╝██║     ██║███████╗█████╗  ███████╗        
██╔══╝   ██╔██╗ ██╔══╝  ██╔══██╗██║     ██║╚════██║██╔══╝  ╚════██║        
███████╗██╔╝ ██╗███████╗██║  ██║╚██████╗██║███████║███████╗███████║        
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝╚══════╝╚══════╝╚══════╝        
                                                                           
                         ██╗      ███████╗                                 
                        ███║      ██╔════╝                                 
                        ╚██║█████╗███████╗                                 
                         ██║╚════╝╚════██║                                 
                         ██║      ███████║                                 
                         ╚═╝      ╚══════╝                                 
                                                

/*************************************************************
Exercise One

Have the function FirstReverse(str) take the str parameter being
passed and return the string in reversed order.
*************************************************************/
function FirstReverse(str) {     var array = [];   for(var i = 1, len
= str.length ; i <= len ; i++){       array.push(str.charAt(len - i));
}   return str = array.join("");

          
}
console.log(FirstReverse("Wow this string will be reversed!"));

//→ !desrever eb lliw gnirts siht woW

/*************************************************************
Exercise Two

Have the function FirstFactorial(num) take the num parameter being
passed and return the factorial of it (ie. if num = 4, return (4 * 3 *
2 * 1)).
*************************************************************/

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
//→ 40320

/*************************************************************
Exercise Three

Using the JavaScript language, have the function LongestWord(sen) take
the sen parameter being passed and return the largest word in the
string. If there are two or more words that are the same length,
return the first word from the string with that length. Ignore
punctuation and assume sen will not be empty.
*************************************************************/

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
//→ Longword

/*************************************************************
Exercise Four

Using the JavaScript language, have the function LetterChanges(str)
take the str parameter being passed and modify it using the following
algorithm. Replace every letter in the string with the letter
following it in the alphabet (ie. c becomes d, z becomes a). Then
capitalize every vowel in this new string (a, e, i, o, u) and finally
return this modified string.
*************************************************************/

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


console.log(LetterChanges("Change These Letterz! zdhnt"));

//→ CIbOhf TIftf LfUUfsA! AEIOU

/*************************************************************
Exercise Five

Using the JavaScript language, have the function
SimpleAdding(num) add up all the numbers from 1 to num. For the test
cases, the parameter num will be any number from 1 to 1000.
*************************************************************/

function SimpleAdding(num) { 
    var array = []
         ,sum = 0;

  for (var i = 1; i <= num ; i++) {
        array.push(i);  
}

  for(var i=0; i< array.length; i++){
        sum += array[i];
}
 
 return sum; 

}


console.log(SimpleAdding(100));

//→ 5050




