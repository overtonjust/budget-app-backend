const { nanoid } = require('nanoid')

module.exports = [ 
    {
        id : nanoid(5),
        item_name: "income",
        amount: 200,
        date: "12/2/24",
        from: "employer",
        category: "income"
    },
    {
        id: nanoid(5),
        item_name: "T-Shirt",
        date: "6/5/24",
        from: "Old Navy",
        category: "Shopping"
    },
    {
        id: nanoid(5),
        item_name: "Groceries",
        date: "6/8/24",
        from: "Acme",
        category: "Food"
    }
]