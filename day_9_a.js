/* Day 9 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
numMap=valueMap.map(x=>x*1)
currentTwentyFive=numMap.filter((x,index)=>index<25)
atCheckPoint=25
function findTwoSum(cP) {
    target=numMap[cP]
    for(a = 0; a<24; a++) {
        for(b = 1; b < 25; b++) {
            if(target==currentTwentyFive[a]+currentTwentyFive[b]) return true
        }
    }
}
times=0
while(atCheckPoint < numMap.length && findTwoSum(atCheckPoint)) {
    console.log(currentTwentyFive)
    currentTwentyFive=currentTwentyFive.slice(1)
    currentTwentyFive.push(numMap[atCheckPoint])
    console.log("--",currentTwentyFive)
    atCheckPoint++
    times++
}
console.log(numMap[atCheckPoint])
