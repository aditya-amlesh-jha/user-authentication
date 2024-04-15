const authService = require("../service/auth_service.js");

const verifyUser = async function(req,res){
    try{
        const token = req.headers.authorization;
        const username = req.headers.username;

        if(token === undefined || token.length === 0){
            // raise Exception
        }

        const verifiedToken = authService.verifyToken(token,username);

        if(!verifiedToken){
            // throw Exception
        }

        next();
    }
    catch(error){
        // send not authorized error
    }
}