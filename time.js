const moment = require('moment');

const now = moment("20111031", "YYYYMMDD").fromNow();

console.log('今の時間は:' + now);