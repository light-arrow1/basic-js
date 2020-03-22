module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';}
  if (Object.prototype.toString.call(date) !== '[object Date]') {
     throw new Error(); }

  if(date.getMonth() < 2 || date.getMonth() == 11) {
     return 'winter'; }
  if(date.getMonth() >= 2 && date.getMonth() < 5) { 
    return 'spring'; }
  if(date.getMonth() >= 5 && date.getMonth() < 8) {
    return 'summer'; }
  if(date.getMonth() >= 8 && date.getMonth() < 11) { 
    return 'autumn'; }

 // throw 'Not implemented';
  // remove line with error and write your code here
};
