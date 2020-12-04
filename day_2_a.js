/* Day 2: A 
   Run in console of AoC input window 
*/

values=document.body.children[0].innerHTML
valueMap=values.split('\n').slice(0,-1)
valueTargets = 0
function processValidity(details){
    detailSplit=details.split(": ")
    rules=detailSplit[0]
    password=detailSplit[1]
    ruleSplit=rules.split(" ")
    countRule=ruleSplit[0].split("-")
    countFrom=countRule[0]
    countTo=countRule[1]
    passRule=ruleSplit[1]
    passRuleCount = countCharacters(passRule,password)
    if(passRuleCount>=countFrom && passRuleCount<=countTo){
        valueTargets+=1
    }
}
// Taken from StackOverflow
function countCharacters(char, string) {
  return string.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
}
valueMap.forEach(processValidity)
console.log(valueTargets)

