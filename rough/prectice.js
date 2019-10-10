
function add(a,b) {
    console.log(a+b);
};

add(10,12);

function mult(a,b) {
    console.log(a*b);
}

mult(5,4);

add(5,4);

function div(a,b) {
    var c = a/b;
    console.log(c);
}

div(4,2);

function sub(a,b) {
    return a-b;
}


sub(10,12);
console.log(sub(10,12));

 function student(name,rollNumber) {
     this.name = name;
     this.rollNumber = rollNumber;
 }

 var obj_student = new student();
console.log(obj_student.name);
console.log(obj_student.rollNumber);





