import express from "express"
import cors from "cors"
import { PORT } from "./config/index.js";
import { connectDb } from "./config/db.js";
import IndexRouter from "./routes/index.js"

const app = express();
connectDb()

app.use(cors({ origin: ["http://localhost:3000", "https://blackcoffer-beta.vercel.app"] }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (rew,res)=>{

  return res.send({
    message:"suucess"
  })
});

app.use('/api/v1/', IndexRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
