const con = require('../Model/model')

const subcategory_Post = (req, res)=>{
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/'

    const data = {
        categoryid:req.body.categoryid,
        subcategoryid:req.body.subcategoryid,
        subcategoryname:req.body.subcategoryname,
        photo:fullUrl+req.file.filename
    }
    const sql = `INSERT into tbl_admin_subcategory set ?`
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Subcategory is not posted");
            res.json(err)
        } else {
            console.log("Subcategory is posted...");
            res.json(result)
        }
    })
}


const subcategory_get = (req, res)=>{
    //const categoryid = req.params.categoryid;
    // const sql = `SELECT * from  tbl_admin_subcategory where categoryid = ?`
    const sql = `SELECT * from  tbl_admin_subcategory`
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Subcategory is not getting");
            res.json(err);
        } else {
            console.log("Subcategory is getting...");
            res.json(result);
        }
    })
}


const subcategory_update = (req, res)=>{
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/images/'
    const data = {
        subcategoryname:req.body.subcategoryname,
        photo:fullUrl+req.file.filename
    }
    const categoryid = req.params.categoryid;
    const sql = `Update tbl_admin_subcategory set ? where categoryid = ?`
    con.query(sql, [data, categoryid],(err, result)=>{
        if(err){
            console.log("Subcategory is not updated");
            res.json(err)
        } else {
            console.log("Subcategory is updated..");
            res.json(result);
        }
    })
}

module.exports = { subcategory_Post, subcategory_get, subcategory_update}