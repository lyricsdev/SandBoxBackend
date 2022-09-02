const typeorm = require("typeorm");
function setup()
{
    typeorm.createConnection({
        type: "mysql",
        host: "",
        port: 3306,
        username: "",
        password: "",
        database: "",
        entities: [
          require("./game/entity/user.entity"),
        ],
        synchronize: true,
    }).then(connection => {
        console.log("Connected to database");
        
    }
    ).catch(error => {
        console.log("Error: " + error);
    })
}
exports.setup = setup;