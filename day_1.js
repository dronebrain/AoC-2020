/* Day 1:
   Run in console of AoC input window
*/
values=document.body.children[0].innerHTML
valueMap=values.split('\n')
valueIntMap=valueMap.map(x => x*1)
valueIntMap.forEach((a,indexA)=>{
   valueIntMap.forEach((b,indexB)=>{
       valueIntMap.forEach((c,indexC)=>{
       if(indexA != indexB && indexA != indexC && indexB != indexC && a+b+c==2020)
        console.log(a,b,c, a*b*c)
   })})
})
