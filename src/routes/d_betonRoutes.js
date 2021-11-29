const d_betonRoutes = ({ app }) => {
    app.post("/beton", (req, res) => {
        const {
            body : {id,t_beton},        
        } = req;
        const var1 = 0;                                                    
        res.json({recevied:{id, t_beton}});        
    })    
}
  
module.exports = d_betonRoutes