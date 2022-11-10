const getDogs = async (req, res) => {
    try {
        let response = await fetch(`https://api.thedogapi.com/v1/breeds`)
        let {name} = req.query
        // if(name){
        //     response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        //     console.log("join name")
        // }else{
        //     response = await fetch('https://api.thedogapi.com/v1/breeds')
        //     console.log("join NO name")
        // }
        
        const data = await response.json()
    
        // let dogsInfo = data.map( d => {
        //     return {
        //         id: d.id,
        //         name: d.name,
        //         height: d.height,
        //         weight: d.weight,
        //         age: d.life_span,
        //         temperament: d.temperament
        //     }
        // })
        // res.send(dogsInfo)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getDogs
}