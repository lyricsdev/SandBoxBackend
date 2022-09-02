const EntitySchema = require("typeorm").EntitySchema; 
const Users = require(".././models/user.model").Users; 

module.exports = new EntitySchema({
    name: "Users",
    target: Users,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        steamid: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        money: {
            type: "int",
            nullable: false
        },
        group: {
            type: "varchar",
            length: 255,
        },
        banned: {
            type: "bool",
            default: false
        },
    }
});