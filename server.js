import express from 'express'

const app = express()


const routes = express.Router()

app.use(routes)

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

routes.get("/welcome" , (req , res)=>{
res.status(200).json({
    message:"Hi! welcome to axeiro."
})
})

app.listen(5000 , ()=>{
    console.log("app is up and running at port 5000");
})