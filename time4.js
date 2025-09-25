const moment = require('moment');

const threeDaysAgo = moment().startOf('hour').fromNow(); 
console.log('今から' + threeDaysAgo);
