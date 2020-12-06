/* Day 5 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n\n/)
console.log(valueMap)
totalUnique=0
function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
 }
function reduceAnswerCount(details) {
   details = details.replace(/(\r\n|\n|\r)/gm, "");
   var unique = [...details].filter(onlyUnique)
   totalUnique += unique.length
}
valueMap.forEach(reduceAnswerCount)
console.log("Total Unique Answers:",totalUnique)
