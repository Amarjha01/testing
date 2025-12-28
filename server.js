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

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
