/* Day 8 (Part B)
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
function pathIt(atLine) {
    while(processedLines.indexOf(atLine)==-1) {
            processedLines.push(atLine)
            action = compMap[atLine][0]
            accumulator += action=='acc'? compMap[atLine][1]: 0
            atLine += action=='jmp'? compMap[atLine][1]: 1
            processedAccum.push(accumulator)
            if(atLine == compMap.length) {
                console.log("aruu")
                return true
            } 
    }
}
pathIt(0)
firstPassProcessedLines=[...processedLines]
firstPassProcessedLines.some((lineNum,index)=>{
    atLine=lineNum
    accumulator=processedAccum[index]
    atLine += action=='jmp'? 1:compMap[lineNum][1]
    return pathIt(atLine)
})
console.log(accumulator)