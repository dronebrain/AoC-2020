/* Day 7 (Part A)
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
valueMap=values.split(/\n/)
searchBag=['shiny gold bag']
possibleBagList = []
possibleBags = []
function containsSearchBag(details) {
    searchBag.forEach(b=>{
        if(details.startsWith(b)) {
            possibleBag = details.split('bag')[0]+'bag'
            if(possibleBagList.indexOf(possibleBag)<0) {
                possibleBags.push(possibleBag)
                possibleBagList.push(possibleBag)
            }
        }
    })
}
while(searchBag.length>0){
    possibleBags=[]
    valueMap.forEach(containsSearchBag)
    searchBag=[...possibleBags]
}
console.log(possibleBagList.length)