const saisieRoutes = ({ app }) => {
    app.get("/saisie", (req, res,next) => {
        const {
            body : {id_materiau, longueur, largeur},        
        } = req;
        
        res.json({recevied: {id_materiau, longueur, largeur}});

        next();
    });    
}
  
module.exports = saisieRoutes