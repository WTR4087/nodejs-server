const moment = require('moment');

const oneWeekLater = moment().add(3, 'days').calendar();
console.log('３日後は:' + oneWeekLater);