const messagecontrusctor = require("../../utils/messageconstructor")
const typeorm = require("typeorm"); 
const Users = require("../../modules/game/entity/user.entity")
const Usersd = require("../../modules/game/models/user.model").Users
async function checkban(ws,helper) {
    const connection = typeorm.getConnection();
    const userRepository = connection.getRepository(Users);
    const splitted = helper.Message.split(":");

    const user = await userRepository.findOne({
        where: {
            steamid: helper.Message,
        },
    });
    if(user) {
        messagecontrusctor.Id = helper.Id;
        messagecontrusctor.Controller = helper.Controller;
        messagecontrusctor.Message = user.banned ? JSON.stringify({Banned:true}) : JSON.stringify({Banned:false})
        ws.send(JSON.stringify(messagecontrusctor))
    }
    else {
        messagecontrusctor.Id = helper.Id;
        messagecontrusctor.Controller = helper.Controller;
        messagecontrusctor.Message = JSON.stringify({Banned:false})
        ws.send(JSON.stringify(messagecontrusctor))
    }
}

module.exports = checkban;