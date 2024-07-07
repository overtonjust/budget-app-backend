const { nanoid } = require('nanoid')

module.exports = [ 
    {
        id : nanoid(5),
        item_name: "income",
        amount: 200,
        date: "2024-07-12",
        source: "employer",
        category: "Income"
    },
    {
        id: nanoid(5),
        item_name: "T-Shirt",
        amount: -40,
        date: "2024-07-06",
        source: "Old Navy",
        category: "Shopping"
    },
    {
        id: nanoid(5),
        item_name: "Groceries",
        amount: -80,
        date: "2024-07-06",
        source: "Acme",
        category: "Food & Drink"
    },
    {
        id: nanoid(5),
        item_name: "Movies",
        amount: -14,
        date: "2024-07-06",
        source: "Regal Cinemas",
        category: "Entertainment"
    },
    {
        id: nanoid(5),
        item_name: "Electic Bill",
        amount: -100,
        date: "2024-09-06",
        source: "Central Hudson",
        category: "Expenses"
    }
]