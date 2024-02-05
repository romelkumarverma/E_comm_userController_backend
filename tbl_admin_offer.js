const con = require('../Model/model')

const offer_post = (req, res)=>{
    const data = req.body;
    const sql = `INSERT INTO tbl_admin_offer SET ?`
    con.query(sql, data,(err, result)=>{
        if(err){
            console.log("Offer is not posted...");
            res.json(err);
        } else {
            console.log("Offer is Posted...");
            res.json(result);
        }
    })
}

const offer_get = (req, res)=>{
    const sql = `SELECT * from tbl_admin_offer`
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Offer is not getting...");
            res.json(err);
        } else {
            console.log("Offer is getting...")
            res.json(result);
        }
    })
}

const offer_update = (req, res)=>{
    const status=req.query.status
    const offerid=req.query.offerid;
   
    const sql = `UPDATE tbl_admin_offer SET status = ? WHERE offerid = ?`
    con.query(sql, [status,offerid],(err, result)=>{
        if(err){
            console.log("Offer is not updated...")
            res.json(err)
        } else {
            console.log("Offer is updating...")
            res.json(result);
        }
    })
}


module.exports = {offer_post, offer_get,offer_update};