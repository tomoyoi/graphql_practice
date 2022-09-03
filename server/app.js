const express = require("express")
const graphqlHttp = require("express-graphql")
const app = express()

app.use('graphql', graphqlHttp())
app.listen(4000, () => {
    console.log('listening port 4000')
})