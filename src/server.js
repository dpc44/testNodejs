// yarn init => lay package.json


//yarn add express
//add type module vao package.json (de  import express)
import express, { response } from 'express'

const app = express();
// chèn middleware
// định dạng body từ text thành json
app.use(express.json())
//yarn add cors => mở chặn cho phép FE gọi API từ 
import cors from 'cors';
app.use(cors({}));

app.listen(8080);

//chay  file BE => node server.js
//yarn add nodemon

//Get => url : localhost:8080/ demo
//endpoint = demo
// tham số 1: tên endpoint
// tham số 2: arrow function
// id, userName, email, phone, sex
app.get("/demo", (req, res) => {

    //C1: lấy từ URL
    // query string - /demo?id=123&email=caophat132890@gmail.com
    // query params - /demo/123/caophat130896@gmail.com (app.get("/demo/:id/:email"))
    //destructering
    // let { id, email } = req.query;

    // let { id2, email2 } = req.params;
    //http://localhost:8080/demo/123/caophat130896@gmail.com?id=123&email=caophat130896@gmail.com
    // C2: lấy từ json
    let { id, userName, email, phone, sex } = req.body;

    // BE trả dữ liệu
    res.send({ id, userName, email, phone, sex})
})



// localhost:8080/video/get-video
import rootRoute from './routes/rootRoutes.js';
// localhost:8080/video/get-video
app.use(rootRoute);
