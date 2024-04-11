const authService = require("../service/auth_service.js")

const loginUser = async function(req,res){
    // make a jwt token for the user and then send it back
    try{
        const { username } = req.body;

        if(username === undefined){
            throw  Exception("Invalid Username");
        }

        const signedToken = await authService.signToken(username);

        
    }
}


const logoutUser = async function(req,res){
    // invalidate the jwt token and and send back empty token
}

module.exports = {
    loginUser,
    logoutUser
}