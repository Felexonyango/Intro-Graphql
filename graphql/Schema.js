const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull

} = require('graphql')
    ///dummy data
const customers = [{
            id: '1',
            name: "Felix",
            email: "felexonyango@gmail.com",
            age: 56
        },
        {
            id: '2',
            name: "john",
            email: "john@gmail.com",
            age: 34
        },
        {
            id: '3',
            name: "wafula",
            email: "wafula@gmail.com",
            age: 90
        }
    ]
    //customer type 
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }

})

//RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            // to fetch customer  by id 
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                //loop through customers and get each customer  with id and return in resolver functon 

                for (let i = 0; i < customers.length; i++) {
                    if (customers[1].id == args.id) {
                        return customers[1]
                    }
                }

            }
        },
        // to fetch all customers from the endpoint =dummy data
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args) {

                return customers
            }

        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery

})