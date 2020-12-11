/* Day 7 (Part b)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
repValues=values.replaceAll(' bags', ' bag')
repValues=repValues.replaceAll(' bag,', '')
repValues=repValues.replaceAll(' bag', '')
repValues=repValues.replaceAll('contain ','')
repValues=repValues.replaceAll('.','')
valueMap=repValues.split(/\n/)
bagMap={}
valueMap.map(detail => {
    at = 2
    splits = detail.split(' ')
    holder = splits[0]+" "+splits[1]
    bagObj = {}
    while(at < splits.length && splits[at]!=='no') {
        count = splits[at]
        name = splits[at+1]+" "+splits[at+2]
        at+=3
        bagObj[name] = count
    }
    bagMap[holder]=bagObj 
})
function recursiveBagCount(bagToFind, count, bagCount) {
    bagGroup = bagMap[bagToFind]
    for (const [key, val] of Object.entries(bagGroup)) {
        bagCount += val*1 + recursiveBagCount(key,val,0,0)
    }
    return count * bagCount
}
finalCount = recursiveBagCount('shiny gold',1,0)
console.log(finalCount)