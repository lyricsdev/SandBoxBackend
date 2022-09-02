const typeorm = require("typeorm"); 
const Users = require("../../modules/game/entity/user.entity")
const Usersd = require("../../modules/game/models/user.model").Users
let messagecontrusctor = {
    Id: 0,
    Controller: "",
    Message : null
}
async function joinplayer(ws,data) {
    const connection = typeorm.getConnection();
    const userRepository = connection.getRepository(Users);
    const user = await userRepository.findOne({
        where: {
            steamid: data.Message,
        },
    });
        if(user)
        {
            messagecontrusctor.Id = data.Id;
            messagecontrusctor.Controller = data.Controller;
            messagecontrusctor.Message = JSON.stringify({PlayerId:user.steamid,money:user.money,command:"setplayer"})
            return ws.send(JSON.stringify(messagecontrusctor))
        }
        var newuser = {
            steamid: data.Message,
            money: 2000,
            group: "player"
        }
        await userRepository.save(newuser);
        messagecontrusctor.Id = data.Id;
        messagecontrusctor.Controller = data.Controller;
        messagecontrusctor.Message = JSON.stringify({PlayerId:newuser.steamid,money:newuser.money,command:"firstjoin"})
        return ws.send(JSON.stringify(messagecontrusctor))
    
}
module.exports = joinplayer;
