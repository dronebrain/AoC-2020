/* Day 8 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
compMap=valueMap.map(detail=>{
    splits = detail.split(' ')
    return [splits[0],splits[1]*1]
})
processedLines=[]
processedAccum=[]
atLine=0
accumulator = 0
while(processedLines.indexOf(atLine)==-1) {
        processedLines.push(atLine)
        action = compMap[atLine][0]
        accumulator += action=='acc'? compMap[atLine][1]: 0
        atLine += action=='jmp'? compMap[atLine][1]: 1
}
console.log(accumulator)