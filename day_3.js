/* Day 3
   Run in console of AoC input window  
*/
values=document.body.children[0].innerHTML
valueMap=values.split('\n')
valueTargets = 0
treesFound = ""
width=valueMap[0].length
height=valueMap.length
trees = 0
sX = 0
sY = 0
atY = 0
atX = 0
function nextSlope(details){
    atX+=sX
    atY+=sY
    if(atX>=width) atX=atX-width
    if(atY>=height) return
    if(valueMap[atY][atX]=="#") trees++
}
function slideDown(x,y) {
    atX = 0
    atY = 0
    sX = x
    sY = y
    trees = 0
    valueMap.forEach(nextSlope);
    return trees
}
s0=slideDown(1,1)
s1=slideDown(3,1)
s2=slideDown(5,1)
s3=slideDown(7,1)
s4=slideDown(1,2)
console.log("Tree total:",s0*s1*s2*s3*s4)
