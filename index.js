import node from "node-fetch";
import fetch from "node-fetch";
import moment from "moment";



//         const catPromise = new Promise((resolve, reject) => {
//             fetch("https://cat-fact.herokuapp.com/facts/random")
//             .then(response => response.json())
//             .then (result => {

//                 if (moment().subtract(2, 'month') < moment(result.updatedAt)) {
//                     resolve(result.text)
//                 }
//                 else { 
//                     reject ( Error ('info is too old to show'))
            
//             }
            
//         });
//     })        

// catPromise.then(console.log).catch(()=> console.log("try again"));



const funCatfact = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const json = await response.json();

    const oneMonthAGO = moment().subtract(60, 'days');
    const updatedAt = moment(json.updatedAt);

    if (oneMonthAGO < updatedAt) {
        return json.text;
    }
    console.warn('fact was too old.. fetching');
    return await funCatfact();
}

funCatfact().then(console.log).catch((Error)=> console.error(Error));