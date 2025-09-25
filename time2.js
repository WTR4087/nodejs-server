const moment = require('moment');

const threeDaysAgo = moment().subtract(10, 'days').calendar();
console.log('10日前は:' + threeDaysAgo);
//３日前の日付を表示する