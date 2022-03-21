import  express  from "express";
import { customersRouter } from "./controllers/customers-controllers.js";
import cors from 'cors';


const app = express ();

app.use(express.json())
app.use(cors())

app.use('/app', customersRouter)

app.listen(5000, () =>{
    console.log('Server started on port 5000');
})











// import connection from './db.js';


//   connection.query(
//     'SELECT * FROM customers',
//     (err, results) => {
//         if (err) {
//             console.log((err));
//         }else {
//             console.log(results)
//         }
      
//     }
//   );