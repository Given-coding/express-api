export default function wordLengths(sentence) {
    var arr = sentence.split(' ');
    var sum = 0;
    var storeShort = ''
    var myarr = arr.map(w => w.length)
  for (var i = 0; i < myarr.length; i++) {
    //let word = arr[i];
        //if (word.length = sum) {
        //sum = word.length
        //storeShort = word
    sum = sum + myarr[i]
  }
return sum
}