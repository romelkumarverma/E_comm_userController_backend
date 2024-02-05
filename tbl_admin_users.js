const con = require("../Model/model")
const bcrypt = require('bcrypt');


const userpost = (req, res) => {
    // const sql =   `INSERT INTO tbl_admin_users SET ?`
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        console.log(req.body)
        const data = {
            uid: req.body.uid,
            name: req.body.name,
            email: req.body.email,
            password: hash,
            mobile: req.body.mobile,
            photo: req.file.filename,
            aadhar: req.body.aadhar,
            doj: req.body.doj,
            dob: req.body.dob,
            qualification: req.body.qualification,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            //status:req.body.status 
        }
        // const data = [
        //     req.body.uid,
        //      req.body.name,
        //      req.body.email,
        //     hash,
        //      req.body.mobile,
        //      req.file.originalname,
        //      req.body.aadhar,
        //    req.body.doj,
        //      req.body.dob,
        //      req.body.qualification,
        //      req.body.address,
        //      req.body.state,
        //      req.body.city,
        //      req.body.pin,
        //     //status:req.body.status 
        // ]
        //     const sql = `INSERT INTO tbl_admin_users(u_id,u_name,email,password,mobile,photo,aadhar,doj,qualification,address,state,city,pin,status) 
        //     VALUES ('${req.body.u_id}','${req.body.u_name}','${req.body.email}','${hash}','${req.body.mobile}'
        //     , '${req.body.photo}', '${req.body.aadhar}', '${req.body.doj}', '${req.body.qualification}', '${req.body.state}'
        //     ${req.body.city},'${req.file.pin}',${req.body.status})`;
        //  })

        const sql = 'INSERT INTO tbl_admin_users SET ?'

        con.query(sql, data, (err, result) => {
            if (err) {
                console.log("Data not posted...")
                res.json(err)
            } else {
                console.log("Data posted...")
                res.json(result)
            }
        })
    })
}


const userget = (req, res) => {
    const sql = `select * from tbl_admin_users`
    //const id = req.params.uid;
    con.query(sql, (err, result) =>{
        if(err) {
            console.log("User data is not getting...");
            res.json(err)
        } else {
            console.log("Data get successfully...")
            res.json(result);
        }
    })
}


const userupdate =(req, res) => {
    const sql = `update tbl_admin_users set ? where uid = ?`
    const data = req.body;
    const id = req.params.uid;
    con.query(sql, [data, id], (err, result) => {
        if(err) {
            console.log("User data is not updated...");
            res.json(err)
        } else {
            console.log("Data updated successfully...")
            res.json(result);
        }
    })
}


const userdelete = ( req, res) => {
     const sql = `delete  from tbl_admin_users where uid = ?`
     const id = req.params.uid;
     con.query(sql, id , (err, result) => {
        if(err) {
            console.log("User data is not deleted...");
            res.json(err)
        } else {
            console.log("User data is deleted successfully");
            res.json(result);
        }
     })
}


///     Status Active/ Deactive     //////

const userstatusupdate = (req, res) => {
    const id=req.query.uid
    const status=req.query.status
    const sql=`update tbl_admin_users set status = ? where uid = ?`
    con.query(sql, [status,id], (err, result) => {
        if(err) {
            console.log("User status is not update...");
            res.json(err)
        } else {
            console.log("User status is updated successfully");
            res.json(result);
        }
    })
}



module.exports = { userpost, userget, userupdate, userdelete, userstatusupdate }