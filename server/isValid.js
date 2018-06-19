const logger = require("./logger");
module.exports = (req, res, next) =>{
    logger.info("---New request---", {query: req.query});

    //Criar condições para diversos erros e respetivos logs

    return next();
};