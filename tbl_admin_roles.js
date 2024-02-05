const con = require('../Model/model');


const admin_role_post = (req, res)=>{
    const data = req.body
    const sql = `INSERT INTO tbl_admin_roles set ?`
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Admin role data not post...")
            res.json(err)
        } else {
            console.log("Admin data post succesccfully...")
            res.json(result)
        }
    })
}


const admin_role_get = (req, res)=>{
    const roleid = req.params.roleid
    const sql = `Select * from tbl_admin_roles where roleid = ?`
    con.query(sql,roleid,(err, result)=>{
        if(err){
            console.log("Admin role is not getting...")
            res.json(err)
        } else {
            console.log("Admin role is getting...")
            res.json(result);
        }
    })
}

const admin_role_get_byname = (req, res)=>{
    // const rolename = req.params.rolename
    const sql = `Select * from tbl_admin_roles`
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Admin role is not getting...")
            res.json(err)
        } else {
            console.log("Admin role is getting...")
            res.json(result);
        }
    })
}


const admin_role_update = (req, res)=>{
    const data = req.body
    const roleid = req.params.roleid
    const sql = `update tbl_admin_roles set ? where roleid = ?`
    con.query(sql, [data,roleid],(err,result)=>{
        if(err){
            console.log("Admin role id is not update... ")
            res.json(err)
        } else {
            console.log("Admin role id is updated...")
            res.json(result);
        }
    })
}


// const roledelete = ( req, res) => {
//     const sql = `delete  from tbl_admin_users where roleid = ?`
//     const roleid = req.params.roleid;
//     con.query(sql, roleid , (err, result) => {
//        if(err) {
//            console.log("Role id is not deleted...");
//            res.json(err)
//        } else {
//            console.log("Role id is deleted successfully");
//            res.json(result);
//        }
//     })
// }



module.exports={admin_role_post, admin_role_get,admin_role_get_byname,admin_role_update}