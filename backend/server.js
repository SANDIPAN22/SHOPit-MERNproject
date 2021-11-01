const app= require('./app')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const apiContainer=require('./routes/product')

dotenv.config({path: 'backend/config/config.env'})

mongoose.connect(process.env.DB_URI)
.then(()=>console.log("DB connected"))
.catch((e)=>console.log(`db failed because ${e}`))

app.use('/api/v1',apiContainer)

app.listen(process.env.PORT, ()=>console.log(`app is running at port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`))
