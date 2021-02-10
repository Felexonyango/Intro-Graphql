const express = require('express')
const cors = require('cors')
const app = express();
const database = require('./graphql/schema')

const { graphqlHTTP } = require('express-graphql')

app.use('/graphql', graphqlHTTP({
    schema: database,
    graphiql: true

}));

app.use(cors())
app.listen(5000, () => console.log("server is running  at port 5000"))