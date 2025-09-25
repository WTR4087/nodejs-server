const moment = require('moment');

const oneWeekLater = moment().add(7, 'days').format('YYYY年MM月DD日');
console.log('1週間後は:' + oneWeekLater);

//１週間後の日付を表示する
const threeDaysAgo = moment().subtract(3, 'days').format('YYYY/MM/DD');
console.log('３日前は:' + threeDaysAgo);