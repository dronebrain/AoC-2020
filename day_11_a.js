/* Day 11 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/).slice(0,-1)
seatMap=[]
nextSeatMap=[]
valueMap.forEach(detail=>{
    seatRow=[...detail].map(space=>{return [space,space]})
    seatMap.push(seatRow)
})
hasChanged=true
times=0
occupied=0
height=seatMap.length
width=seatMap[0].length
seatCount=0
while(hasChanged) {
    hasChanged=false
    for(h=0;h<height;h++) {
        for(w=0;w<width;w++) {
            adjacentCount=0
            isSeat=(seatMap[h][w][0]=='.')?false:true
            if(isSeat) {
                occupied=(seatMap[h][w][0]=='#')?true:false
                if(h+1<height) {
                    adjacentCount+=(seatMap[h+1][w][0]=="#")?1:0
                    if(w+1<width) adjacentCount+=(seatMap[h+1][w+1][0]=="#")?1:0
                    if(w-1>-1) adjacentCount+=(seatMap[h+1][w-1][0]=="#")?1:0
                }
                if(h-1>-1) {
                    adjacentCount+=(seatMap[h-1][w][0]=="#")?1:0
                    if(w+1<width) adjacentCount+=(seatMap[h-1][w+1][0]=="#")?1:0
                    if(w-1>-1) adjacentCount+=(seatMap[h-1][w-1][0]=="#")?1:0
                } 
                if(w+1<width) adjacentCount+=(seatMap[h][w+1][0]=="#")?1:0
                if(w-1>-1) adjacentCount+=(seatMap[h][w-1][0]=="#")?1:0
                if(occupied&&adjacentCount>3) {
                    hasChanged=true
                    seatMap[h][w][1]="L"
                }
                if(!occupied&&adjacentCount==0) {
                    hasChanged=true
                    seatMap[h][w][1]="#"
                }
            }
        }
    }
    seatCount=0
    for(h=0;h<height;h++) {
        for(w=0;w<width;w++) {
            newSpace = seatMap[h][w][1]
            if(newSpace=='#') seatCount++
            seatMap[h][w][0]=newSpace
        }
    }
    times++
}
console.log(seatCount,times)