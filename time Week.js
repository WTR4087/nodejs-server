const moment = require('moment');

const dayOfWeek = moment().format('dddd'); // 英語で表示されます（例：Wednesday)

console.log('今日は' + dayOfWeek + ' です');