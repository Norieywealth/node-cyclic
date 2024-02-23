const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.send("App is live on cyclic")
})
const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`App is listening on port ${port}`))