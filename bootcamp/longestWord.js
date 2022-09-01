export default function longestWord(sentence) {
    var arr = sentence.split(' ');
   var sum = 0;
   var storeLong = ''
//    console.log(sentence.split(' '))
   for (var i = 0; i < arr.length; i++) {
     let word = arr[i];
     if (word.length >= sum) {
       sum = word.length
       storeLong = word
     }
   }
//    console.log(sentence)
   return storeLong
 }