const jwt = require("jsonwebtoken");

const signToken = async function(username){
    try{
        const token = jwt.sign({username},process.env.JWT_SECRET_KEY);
        return token;
    }
    catch(error){
        return null;
    }
}

const verifyToken = async function(token, expectedUsername){
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

        const username = decoded.username;

        if (username === expectedUsername){
            return decoded;
        }

        throw Exception("Credential Breached");

    }
    catch(error){
        return null;
    }
}

module.exports = {
    signToken,
    verifyToken
}