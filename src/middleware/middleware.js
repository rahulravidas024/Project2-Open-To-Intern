
const middleware = function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
}

module.exports.middleware = middleware