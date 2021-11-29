const q_carrelage3Routes = ({ app }) => {
    app.post("/carrelage3", (req, res) => {
        const {
            body : {surface, nb_carr},        
        } = req;                                    
        res.json({recevied: {surface, nb_carr}});        
    })    
}
  
module.exports = q_carrelage3Routes