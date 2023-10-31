const User = require('../models/jornalist');


async function createJournalist(jornalist:Jornalist) {
    return Promise.resolve({status: true});
}


module.export({functioncreateJournalist})