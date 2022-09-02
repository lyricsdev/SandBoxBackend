const leftplayer = require("./LeftPlayer/index")
const joinplayer = require("./joinplayer/index")
const PickUpMoney = require("./pickupMoney/index")
const TransferMoney = require("./TransferMoney/index")
const BuyEntity = require("./BuyEntity/index")
const checkban = require("./CheckBanned")
function commandHandler(ws,data) {
    let helper = JSON.parse(data)
    try
    {
        switch (helper.Controller) {
            case "joinplayer":
            {
                joinplayer(ws,helper);   
            }
            break;
            case "leftplayer":
            {
                leftplayer(ws,helper);
            }
            break;
            case "PickUpMoney":
            {
                PickUpMoney(ws,helper)
            }
            break;
            case "TransferMoney":
            {
                TransferMoney(ws,helper)
            }
            break;
            case "BuyEntity":
            {
                BuyEntity(ws,helper)
            }
            break;
            case "checkban": 
            {
                checkban(ws,helper);
            }
            case "KickPlayer":
            {
                console.log(helper);
            }
        }
    } catch {
        
    }
}
module.exports = commandHandler;