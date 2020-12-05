/* Day 5
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
rowPlot= {'F':1,'B':0}
colPlot= {'L':1,'R':0}
valueMap=values.split(/\n/).slice(0,-1)
maxId  = 0
idList = []
function findSpot(detail, span, plot) {
   for (const c of detail) {
      span[plot[c]] = Math.floor((span[0]+span[1])/2)-(plot[c]-1)
   }
   return span[0]
}
function findMaxId(detail) {
   colStr=detail.substring(0,7)
   rowStr=detail.substring(7,10)
   row = findSpot(colStr,[0,127], rowPlot)
   col = findSpot(rowStr,[0,7], colPlot) 
   id = row * 8 + col

   // Carry through
   maxId = Math.max(id, maxId)
   idList.push(id*1)
}

valueMap.forEach(findMaxId)
console.log("Max ID", maxId)
idList.sort(function(a, b) {
   return a - b;
 })
seat = idList.slice(0,-1).filter((x,index)=>{
   return idList[index+1]-x!=1;
})[0]+1
console.log("Your seat", seat)

