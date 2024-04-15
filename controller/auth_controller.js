const authService = require("../service/auth_service.js")

const loginUser = async function(req,res){
    // make a jwt token for the user and then send it back
    try{

        const { username } = req.body;

        if(username === undefined || username.length === 0){
            throw  Exception("Invalid Username");
        }

        const signedToken = await authService.signToken(username);


        res.status(200).json({signedToken});

    }
    catch(error){
        console.log("Eror")
    }
}


const logoutUser = async function(req,res){
    // invalidate the jwt token and and send back empty token
    try{
        const token = req.headers.authorization;
        
        if(token === undefined || token.length === 0){
            throw Exception("Invalid Token");
        }
        
        // check if already in blacklist token

        // add to blacklist token

        
    }
    catch(error){

    }
}

module.exports = {
    loginUser,
    logoutUser
}