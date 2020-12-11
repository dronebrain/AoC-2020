/* Day 10 (Part B)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
numMap=valueMap.map(x=>x*1)
numMap.sort(function(a, b) {
    return a - b;
})
multiplier=[1,1,1,2,4,7]
groups=[[]]
atGroup=0
lastX=0
sets=1
numMap.forEach(x=>{
    if(x-lastX==3) {
        atGroup++
        groups[atGroup]=[]
    }
    groups[atGroup].push(x)
    lastX=x
})
groups.forEach(x => {
    sets*=multiplier[x.length]
})
console.log(sets)