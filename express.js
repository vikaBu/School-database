import express from "express";
import dbClient from "./database.js"

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (request, response)=> {
    response.send('Hello World!');
});

app.get("/student/:name", async (request, response) => {
    const name = request.params.name
    const sqlResult = await dbClient.getStudentLastName(name)
    response.json(sqlResult)
})

app.get("/:house", async (request, response) => {
    const house = request.params.house
    const sqlResult = await dbClient.getHouseList(house)
    response.json(sqlResult)
})

app.post("/new/house", async (request, response) => {
     const Newhouse = request.body;
     const sqlResult = await dbClient.addNewHouse(Newhouse)
    response.json(sqlResult)
 })


// const getData = (firstName) => {
//     return{
//         firstName: firstName,
//         lastName:"Buklajeva"

//     };
// }

// app.get('/test/:firstName',(request, response) => {
//     const firstName = request.params.firstName;

//     const jsonToReturn= getData(firstName);
//     response.json(jsonToReturn);

// })

app.listen(port, () => console.log(`App started on port ${port}`));
