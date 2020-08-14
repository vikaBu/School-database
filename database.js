import pg from "pg";
import dotenv from "dotenv";
import promptSync from 'prompt-sync';
import Knex from "knex";

// create new client {configuration}\dt

const client = Knex({
    client: 'pg',
    connection: {
        user: "postgres",
        host: "localhost",
        database: "new_database",
        password: process.env.POSTGRES_PASSWORD,
    }
});

//connect to database
// make query
// get results for query
// chose down from our client


const getStudentLastName = (name) => {
    return client('student')
        .select()
        .where('last_name', 'like', `%${name}%`)
}

const getHouseList = () => {
    return client('house')
        .select()

}

const addNewHouse = (newhouse) => {
    return client('house')
        .insert({ name: newhouse.name, head_of_house: 3 , points: 0 })
}

// student sample:Susannah Brosini 

/*
const prompt = promptSync();
const guardian_name = prompt("Please enter Guradian last name :");
client('guardian')
.select()
.innerJoin('student','guardian.id', '=', 'student.guardian')
.where('guardian.last_name', 'like', `%${guardian_name}%`)
.then(response => console.log(response));
*/

// guardian sample : Nannette Macellar

/*
const prompt = promptSync();
const houseInput = prompt("Please enter new house name :");
client('house')
.insert({name:houseInput, head_of_house:2, points:0})
.then(response => console.log(response));
*/

/*
const prompt = promptSync();
const teacher = prompt("Please enter teachers last name: ");
client('teacher')
.select()
.join('class','teacher.id', '=', 'class.teacher')
.join('student_class','class.id', '=', 'student_class.class')
.where('teacher.last_name', `${teacher}`)
.then(response => console.log(response));
*/

// teacher sample Shirleen Craufurd

/*
NOT FINISHED
const prompt = promptSync();
const teacher = prompt("Enter class: ")
client('class')
.select()
.join('student_class', 'class.id', '=', 'student_class.class')
.join('student','student.id', '=', 'student_class.student' )
.where('class', )*/



export default { getStudentLastName: getStudentLastName, getHouseList: getHouseList, addNewHouse: addNewHouse };

