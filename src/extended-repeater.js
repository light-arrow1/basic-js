module.exports = function repeater(str, options) {


    function repeat(str, separator, repa) {
        var answ = str;
        for (let index = 1; index < repa; index++) {
            answ += separator;
            answ += str;
        }    
        return answ || '';    
    }
    var sub = repeat(options.addition, options.additionSeparator || '|', options.additionRepeatTimes);
    return repeat(str + sub, options.separator || '+', options.repeatTimes);
    //throw 'Not implemented';
    // remove line with error and write your code here
};
  