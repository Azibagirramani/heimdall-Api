const router = require('express').Router()

router.post('/validation', validate_data)
router.delete('/remove-item/:item', remove_data)

/*
Validate data
*/
function validate_data(req, res){
    let errors = [] 
    let keys = [ 'type', 'crux', 'color', 'title' ]
    let { type, crux, color, title } = req.body 
    if(!type) errors.push('Type is Required')
    if(!crux) errors.push('Crux is Required')
    if(!color) errors.push('Color is Required')
    if(!title) errors.push('Title is Required')
    if(errors.length != 0) return res.status(400).json({ errors: errors, "required keys": keys })
    
    return res.json({ data: req.body, "required keys": keys })
}

/*
search and remove
*/
function remove_data(req, res){
    let data = { type: 'durban', crux: 'Indices', color: 'green', title: 'Indict the idiot' };
    let { item } = req.params
    const objectKey = Object.keys(data)
    
    for (let key = 0; key < objectKey.length; key++){
        if(objectKey[key] == item) {
            delete data[item] 
            return res.json({ data: data, 'key removed':item })
        }
    }

    return res.status(400).json({ msg: 'attribute not found', 'key to remove':item})

}

module.exports  = router