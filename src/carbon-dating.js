const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity)!= "string") {
    return false;
  } 
  var sa = parseFloat(sampleActivity);
  if (isNaN(sa)) { return false;}

  if (sa <= 0 || sa > MODERN_ACTIVITY) {
    return false;
  } else {
 var number =  Math.ceil(Math.log(MODERN_ACTIVITY / sa) / 0.693 * HALF_LIFE_PERIOD );
  return number ;
} 
 // throw 'Not implemented';
  // remove line with error and write your code here
};
