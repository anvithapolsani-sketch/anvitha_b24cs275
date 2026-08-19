var stdStr = '{"name":"Anvi","age":20,\
"courses":["Node.js","MongoDB"],\
"rollno":101,"college":"ABCclg"}';

var stdObj = JSON.parse(stdStr);

console.log(stdObj.name);
console.log(stdObj.courses);
console.log(stdObj.rollno);