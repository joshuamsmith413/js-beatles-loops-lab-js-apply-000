// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 function theBeatlesPlay(musicians, instruments) {
   let answer = []
   for (let i = 0; i > muscians.length; i++) {
     answer.push(musicians[i] + 'plays' + instruments[i])
   }
   return answer;
 }
