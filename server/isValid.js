const logger = require("./logger");
module.exports = (req, res, next) =>{
    logger.info("Incoming request query", {query: req.query});

    //Criar condições para diversos erros e respetivos logs

    return next();
};