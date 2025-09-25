const moment = require('moment');

const birthday = moment('2008-02-27'); // 誕生日を設定　（例；２００８年５月１４日）
const age = moment().diff(birthday, 'years');

console.log('貴方の年齢は:' + age + '歳です');