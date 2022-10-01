const findSum = function(array) {
    let total = 0;
    
    for (let value of array) {
        total += value;
    }

return total;
}






const findFrequency = function(array) {

const obj = {};
let max = 0;
let mostFreq = null;

    for (let i=0; i < array.length; i++) {
        let letter = array[i];
        
        if (obj[letter]) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    for (let x in obj) {
        if (obj[x] > max){
            max = obj[x];
            mostFreq = x;
        }
        
    }
    return mostFreq;
}





const isPalindrome = function(str) {

  var smallStr = str.toLowerCase();
  
  var reversed = smallStr.split("").reverse().join("");

  if (reversed === smallStr) return true;
  return false
}





const largestPair = function(array) {
    let pairProduct = 0; 
    let i, newMax = 0;
    
    for (i = 0; i < array.length - 1; i++) {
        let pairProduct = array[i] * array[i+1];
        if (pairProduct > newMax) {
            let newMax = pairProduct;
            
        } 
        return pairProduct;
    }
    
console.log(largestPair([1,2,3,4,5]))
}





const removeParenth = function(str) {
    let newPhrase = str.replace("(","").replace(")","");
    
    return newPhrase;
}





const scoreScrabble = function(str) {
    let scoreBoard = {a:1, e:1, i:1, o:1, u:1, l:1, n:1, r:1, s:1, t:1, d:2, g:2, b:3, c:3, m:3, p:3, f:4, h:4, v:4, w:4, y:4, k:5, j:8, x:8, q:10, z:10}, wordScore = 0, i;
    
    for (i = 0; i < str.length; i++) {
        wordScore += scoreBoard[str[i]];
    }
    return wordScore;
}
