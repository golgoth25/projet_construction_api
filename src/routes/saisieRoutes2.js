const saisieRoutes = ({ app }) => {
    app.post("/saisie3", (req, res,next) => {
        const {
            body : {id_materiau, longueur, largeur},        
        } = req;
        
        res.json({recevied: {id_materiau, longueur, largeur}});

        next();
    });
    app.get("/saisie3", (req, res) => {
        const {
            body : {id_materiau, longueur, largeur},
        } = req;
        res.json({recevied: {id_materiau, longueur, largeur}});
    });
}
  
module.exports = saisieRoutes