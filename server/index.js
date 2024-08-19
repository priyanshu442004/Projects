import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db/connectdb.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js';
import emailRoute from './routes/email.route.js';
import cors from 'cors';

const app = express();
const port = 3000;


dotenv.config({})
connectdb()

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions))

// Routes
app.use('/api/v1/user',userRoute)
app.use('/api/v1/email',emailRoute)


app.listen(port, () => console.log(`App is listening on port ${port}!`))

    