const {Client} = require('pg');
const ConnectDB = require('../conDB')

module.exports.insertUser =  async(req, res) => {
    const {id,name} = req.body
    const DB = new Client(ConnectDB);
    await DB.connect();
    await DB.query(`INSERT INTO product VALUES ('${id}','${name}')`);
    await DB.end();
    res.status(200).json({message: 'inserted'});
}