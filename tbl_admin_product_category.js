const con = require('../Model/model');

const category_post = (req, res)=>{
    const data= req.body;
    const sql = `INSERT into tbl_admin_product_category set ?`
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Category data is not posted...")
            res.json(err)
        } else {
            console.log("Category data is posted...")
            res.json(result)
        }
    })
}

const category_get = (req, res)=>{
    // const categoryid = req.params.categoryid
    const sql = `SELECT * from tbl_admin_product_category `
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Category data is not getting...")
            res.json(err)
        } else {
            console.log("Category data is getting...")
            res.json(result)
        }
    })
}


const category_update = (req, res)=>{
    const data = req.body
    const categoryid = req.params.categoryid
    const sql = `update tbl_admin_product_category set ? where categoryid = ?`
    con.query(sql, [data,categoryid],(err, result)=>{
        if(err){
            console.log("Category data is not updated...")
            res.json(err)
        } else{
            console.log("Category data is updated...")
            res.json(result)
        } 
    })
}

module.exports={category_post,category_get,category_update}