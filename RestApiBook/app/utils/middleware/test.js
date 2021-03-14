const test = (req, res, next) => {
    console.log("tes")  
    next()  
}

const coba = (bebas) =>  { 
    return (req, res, next) => {
    console.log(bebas);
    next()
    }
}

const coba2 = (test2) => (req, res, next) => {
    console.log(test2)
    next()
}

const demo = () => ("demoExpress")   



module.exports = { test , coba , coba2 }