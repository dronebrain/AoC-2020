/* Day 4
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
arrayTst=['byr','iyr','eyr','hgt','hcl','ecl','pid']
valueMap=values.split(/\n\n/)
valid = 0
function testValid(details) {
   if(arrayTst.every(item => details.includes(item+":"))) valid++  
}
valueMap.forEach(testValid)
console.log(valid)
