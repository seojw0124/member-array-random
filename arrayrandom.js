var member1="Gabi",member2="Jade",member3="Rulu",member4="Lala",member5="Lucy",member6="Chaz",member7="Peony",member8="Pascal",member9="Ben"

const shuffle = () => ( Math.random() - 0.5 );
const members = [member1,member2,member3,member4,member5,member6,member7,member8,member9];
const shuffled = [...members].sort(shuffle);

var result = [];
for(i=0; i<shuffled.length; i+=3) result.push(shuffled.slice(i, i+3));
console.log("result", result)