const API_KEY = "live_2JRHuoO83YXVW5DUeaJ1fNqauvOOfvQ9uZjoQ3HP0i9GuVcWQBIDxvO9g4rFciEj"

//=============== GET DOGS ===============

const getDogs = async (req, res) => {
    try {
        let response = []
        let {name} = req.query
        if(name){
            response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)
        }else{
            response = await fetch(`https://api.thedogapi.com/v1/breeds`)
        }
        
        const data = await response.json()
    
        let dogsInfo = data.map( d => {
            return {
                id: d.id,
                name: d.name,
                height: d.height,
                weight: d.weight,
                age: d.life_span,
                temperament: d.temperament
            }
        })
        res.status(200).send(dogsInfo)

    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getDogs
}