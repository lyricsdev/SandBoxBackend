const typeorm = require("typeorm"); 
const Users = require("../../modules/game/entity/user.entity")
const Usersd = require("../../modules/game/models/user.model").Users
async function transfermoney(ws,helper) {
    const connection = typeorm.getConnection();
    const userRepository = connection.getRepository(Users);
    const splitted = helper.Message.split(":");
    const user = await userRepository.findOne({
        where: {
            steamid: splitted[0],
        },
    });
    user.money -= splitted[1];
    await userRepository.save(user)
    const suser = await userRepository.findOne({
        where: {
            steamid: splitted[2],
        },
    });
    suser.money += splitted[1];
    await userRepository.save(suser)
}

module.exports = transfermoney;