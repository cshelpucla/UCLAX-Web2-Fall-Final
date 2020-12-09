const express = require('express');
const router = express.Router();

/* Response handler */
const responseHandler = require('../common/responseHandler.js')

const AuctionModel = require('./AuctionModel.js')

router.get('/current', (req,res) => { 
    
    console.log('Retreived 222 Current Auction'); 

    const RH = responseHandler ({
        title: 'Current Auction',
        payloadKey: 'currentAuction',
        routerResp: res,
    })

    AuctionModel
        .findOne({status: 'current'})
        .then(RH.dbResp)
        .catch(RH.dbError)

    /*    
    AuctionModel
        .findOne({status: 'current'})
        .then((data) => {
            RH.dbResp = data
            console.log('Retrieved data', RH.dbResp); 
        })
        .catch(RH.dbError)


    AuctionModel.findOne({status: 'current'}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          });
    */      

});

module.exports = router;