/* Day 4
   Run in console of AoC input window 
*/
values=document.body.children[0].innerHTML
arrayTst=['byr','iyr','eyr','hgt','hcl','ecl','pid']
valueMap=values.split(/\n\n/)

valid = 0
function testValid(details) {

   if(arrayTst.every(item => {
      
      if(details.includes(item)) {
         val=details.split(item+":")[1]
         val=val.split(/[ ,\n]{1}/)[0]
         val=val.trim()
         //console.log(item,val)
         if(item == 'byr') {
            if(val.match(/^[0-9]{4}$/)) {
               return (val*1>=1920 && val*1 <= 2002)
            }
         }
         if(item == 'iyr') {
            if(val.match(/^[0-9]{4}$/)) {
               return (val*1>=2010 && val*1 <= 2020)
            }
         }
         if(item == 'eyr') {
            if(val.match(/^[0-9]{4}$/)) {
               return(val*1>=2020 && val*1 <= 2030) 
            }
         }
         if(item == 'hgt') {
            if(val.match(/^[0-9]{3}cm$/)) {
               val=val.split('cm')[0]
               return (val*1 >=150 && val*1 <= 193)
            }
            if(val.match(/^[0-9]{2}in$/)) {
               val=val.split('in')[0]
               return (val*1>=59 && val*1 <= 76)
            }
         }
         if(item == 'hcl') {
            return (val.match(/^#[0-9,a-f]{6}$/))
         }
         if(item == 'ecl') {
            return (val.match(/^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$/)) 
         }
         if(item == 'pid') {
            return (val.match(/^[0-9]{9}$/))
         }
      }
   })) {
      valid++
   }
}
valueMap.forEach(testValid)
console.log(valid)
