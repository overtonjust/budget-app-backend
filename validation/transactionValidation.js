/*
    {
        id : nanoid(5),
        item_name: "income",
        amount: 200,
        date: "2024-02-12",
        source: "employer",
        category: "income"
    }
*/

const validateNameAndSource = (req, res, next) => {
    const name = req.body.item_name
    const source = req.body.source
    const regex = /^[a-zA-Z0-9\s]+$/
    if(name === '') {
        res.status(404).json({error: 'Please enter a name'})
    } else if (source === '') {
        res.status(404).json({error: 'Please enter a source'})
    }else if(!name.match(regex)) {
        res.status(404).json({error: 'You may not have special characters in your transaction name'})
    } else if(!source.match(regex)) {
        res.status(404).json({error: 'You may not have special characters as your transaction source'})
    } else {
        next()
    }
}

const validateAmount = (req, res, next) => {
    const number = req.body.amount

    if(number === 0) {
        res.status(404).json({error: 'Please list the amount of your transaction'})
    } else {
        next()
    }
}

module.exports = {validateNameAndSource, validateAmount}