const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.send("App is live on cyclic")
})

app.get("/api/v1", (req,res)=>{
    console.log("Logging on terminal")
    res.send("API ready for consumption")
})
const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`App is listening on port ${port}`))