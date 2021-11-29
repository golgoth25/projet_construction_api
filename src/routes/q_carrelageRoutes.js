const q_carrelageRoutes = ({ app }) => {
    app.post("/carrelage", (req, res) => {
        const {
            body : {longueur_p,largeur_p, longueur_c, largeur_c },        
        } = req;                                    
        res.json({recevied: {
            longueur_p: longueur_p*largeur_p*1.05,
            largeur_p: longueur_p*largeur_p*1.05/((longueur_c/100)*(largeur_c/100))
        }});        
    })    
}
  
module.exports = q_carrelageRoutes