/* Day 11 (Part B)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/).slice(0,-1)
//valueMap=values.split(/\n/)
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
                findSeats=[[1,1,1],[1,1,1],[1,1,1]]
                occupied=(seatMap[h][w][0]=='#')?true:false
                j=1
                while(adjacentCount!=8&&(h+j<height || h-j>-1 || w+j<width || w-j>-1)) {
                    if(h+j<height) {
                        if(findSeats[2][1]) {
                            adjacentCount+=(seatMap[h+j][w][0]=="#")?1:0
                            if(seatMap[h+j][w][0]!=".")findSeats[2][1]=0
                        }
                        if(findSeats[2][2]&&w+j<width){
                            adjacentCount+=(seatMap[h+j][w+j][0]=="#")?1:0
                            if(seatMap[h+j][w+j][0]!=".")findSeats[2][2]=0
                        } 
                        if(findSeats[2][0]&&w-j>-1){
                            adjacentCount+=(seatMap[h+j][w-j][0]=="#")?1:0
                            if(seatMap[h+j][w-j][0]!=".")findSeats[2][0]=0
                        }
                    }
                    if(h-j>-1) {
                        if(findSeats[0][1]) {
                            adjacentCount+=(seatMap[h-j][w][0]=="#")?1:0
                            if(seatMap[h-j][w][0]!=".")findSeats[0][1]=0
                        }
                        if(findSeats[0][2]&&w+j<width) {
                            adjacentCount+=(seatMap[h-j][w+j][0]=="#")?1:0
                            if(seatMap[h-j][w+j][0]!=".")findSeats[0][2]=0
                        }
                        if(findSeats[0][0]&&w-j>-1) {
                            adjacentCount+=(seatMap[h-j][w-j][0]=="#")?1:0
                            if(seatMap[h-j][w-j][0]!=".")findSeats[0][0]=0
                        }
                    } 
                    if(findSeats[1][2]&&w+j<width) {
                        adjacentCount+=(seatMap[h][w+j][0]=="#")?1:0
                        if(seatMap[h][w+j][0]!=".")findSeats[1][2]=0
                    }
                    if(findSeats[1][0]&&w-j>-1) {
                        adjacentCount+=(seatMap[h][w-j][0]=="#")?1:0
                        if(seatMap[h][w-j][0]!=".")findSeats[1][0]=0
                    }
                    j++
                }
                if(occupied&&adjacentCount>4) {
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