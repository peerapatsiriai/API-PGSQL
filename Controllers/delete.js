const {Client} = require('pg');
const ConnectDB = require('../conDB')

module.exports.deleteUser =  async(req, res) => {
    const {id} = req.body
    const DB = new Client(ConnectDB);
    await DB.connect();
    const user = await DB.query(`SELECT * FROM product WHERE id = '${id}'`);
    if(user.rows.length <= 0) {
        return res.status(404).json({message: 'NotFoundUser'})
    }else{
        await DB.query(`DELETE FROM product WHERE id = '${id}'`);
        await DB.end();
        return res.status(200).json({message: 'Deleteed'});
    }
}