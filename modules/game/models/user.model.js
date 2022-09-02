class User {
    constructor(id, steamid,money,group,banned) {
        this.id = id;
        this.steamid = steamid;
        this.money = money;
        this.group = group;
        this.banned = banned;
    }
}
module.exports = {
    User: User
};