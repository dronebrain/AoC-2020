/* Day 6 (Part B)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n\n/)
totalGroupAnswers = 0
groups = []
function inEachGroup(value) {
   for(var x = 0; x < groups.length; x++ ) {
      if(groups[x].indexOf(value)=== -1) return false
   }
   return true
}
function reduceAnswerCount(details) {
   details = details.trim()
   groups = details.split(/\n/)
   shortestGroup=0
   for(var x = 0; x < groups.length; x++) {
      if(groups[x].length <= shortestGroup);
      shortestGroup = x 
   }
   groups[shortestGroup] = groups[shortestGroup].replace(/(\r\n|\n|\r)/gm, "");
   var foundInEachGroup = [...groups[shortestGroup]].filter(inEachGroup)
   totalGroupAnswers += foundInEachGroup.length
}
valueMap.forEach(reduceAnswerCount)
console.log("Total Overlapping Group Answers:", totalGroupAnswers)
