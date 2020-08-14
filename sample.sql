SELECT student.first_name as student_first_name , guardian.first_name FROM guardian
JOIN student
ON guardian.id = student.guardian
WHERE guardian.last_name='Jeger';


const prompt = promptSync();
console.log("please enter a number between 1 and 5")
console.log("1 - Find students matching a given last name")
console.log("2 - Get students based on a guardian's name ")
console.log("3 - Create a new House ")
console.log("4 - Show the classes for a given teacher. ")
console.log("5 - Show the students in a class (ordered by mark) ")
const option = prompt("Please choose your option: ")
if (option == 1 ){
const name = prompt("Please enter your last name: ");
client('student')
.select()
.where('last_name', name)
.then(response => console.log(response));
}
else if (option == 2 ){
    const guardianName = prompt("Please enter the guardian's name: ");
    client('guardian')
}


DROP TABLE IF EXISTS student_class;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS house;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS guardian;
​
CREATE TABLE IF NOT EXISTS teacher (
    id              serial primary key,
    title           varchar(16) not null,
    first_name      varchar(128) not null,
    last_name       varchar(128) not null
);
​
CREATE TABLE IF NOT EXISTS guardian (
    id              serial primary key,
    title           varchar(16) not null,
    first_name      varchar(128),
    last_name       varchar(128) not null,
    phone_number    varchar(32),
    email           varchar(128)
);
​
CREATE TABLE IF NOT EXISTS house (
    id              serial primary key,
    name            varchar(32) not null,
    head_of_house   int REFERENCES teacher(id) not null,
    points          int not null
);
​
CREATE TABLE IF NOT EXISTS student (
    id              serial primary key,
    first_name      varchar(128) not null,
    last_name       varchar(128) not null,
    start_year      int not null,
    house           int REFERENCES house(id) not null,
    guardian        int REFERENCES guardian(id) not null
);
​
CREATE TABLE IF NOT EXISTS class (
    id              serial primary key,
    year            int not null,
    subject         varchar(64) not null,
    teacher         int REFERENCES teacher(id)
);
​
CREATE TABLE IF NOT EXISTS student_class (
    class           int REFERENCES class(id),
    student         int REFERENCES student(id),
    mark            int,
    
    PRIMARY KEY (class, student)
