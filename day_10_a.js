/* Day 10 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
numMap=valueMap.map(x=>x*1)
numMap.sort(function(a, b) {
    return a - b;
})
count_one = 0
count_three = 0
volts = 0
numMap.forEach(x=>{
    diff=x-volts
    if(diff==1)count_one++
    if(diff==3)count_three++
    volts+=diff
})
console.log(count_one*(count_three+1))