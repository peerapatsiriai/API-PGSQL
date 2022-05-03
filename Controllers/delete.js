const {Client} = require('pg');
const ConnectDB = require('../conDB')

module.exports.deleteUser =  async(req, res) => {
    const {id} = req.body
    console.log(id);
    const DB = new Client(ConnectDB);
    await DB.connect();
    await DB.query(`DELETE FROM product WHERE id = '${id}'`);
    await DB.end();
    res.status(200).json({message: 'Deleteed'});
}