/* Day 9 (Part B)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
numMap=valueMap.map(x=>x*1)
console.log(numMap)
atLeft = 0
atRight = 0
adding = true
target = 776203571
sum = numMap[atLeft]
times = 0
while(sum != target) {
    if(adding) atRight++
    else atLeft++
    sum += (adding)?numMap[atRight]:0-numMap[atLeft-1]
    adding = (adding && sum > target)? false: 
             (!adding && sum < target)? true : adding
    times++
}
max = 0
min = numMap[atLeft]
for(x=atLeft; x<atRight; x++) {
    max = Math.max(max,numMap[x])
    min = Math.min(min,numMap[x])
}
console.log(min+max)
