const verifyUser = async function(req,res){
    res.status(200).json({
        "message":"hello World"
    })
}

module.exports = {
    verifyUser
}