const saisieRoutes = ({ app }) => {
    app.post("/saisie", (req, res) => {
        const {
            body : {id_materiau},        
        } = req;
        console.log("id-materiau", req.body.id_materiau)                     
        res.json({id_materiau});        
    })
    app.get("/saisie", (req, res) => {
        const {query : {id_materiau}} = req;        
        res.json({query});
    });   
}
  
module.exports = saisieRoutes