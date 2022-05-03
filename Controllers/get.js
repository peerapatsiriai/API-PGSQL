const {Client} = require('pg');
const ConnectDB = require('../conDB')

module.exports.fetchDataUser =  async(req, res) => {
    const DB = new Client(ConnectDB);
    await DB.connect();
    const datas = await DB.query("SELECT * From product");
    await DB.end();
    return res.json(datas.rows)
}


