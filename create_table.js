
const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'sukantahui',
        database: 'marigold'
    }
}




const knex = require('knex')(options);

knex.schema.createTable('cars', (table) => {
    table.bigincrements('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });