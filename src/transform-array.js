module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
      }    

    var result = [];
    const dnext = '--discard-next';
    const dbnext = '--double-next';
    const dprev = '--discard-prev';
    const dbprev  = '--double-prev';

    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        let next = arr[i + 1];
        let prev = arr[i - 1]; 
        let one = i > 0; 
        let two = i < arr.length - 1;
        let m = 1;
    if (one && prev == dnext) {
         m--;
     }
    if (one && prev == dbnext) {
        m++;
     }      
     if (two && next == dprev) {
        m--;
     }
    if (two && next == dbprev ) {
        m++;
    }          
        if (cur != dnext && cur != dbnext && cur != dprev && cur != dbprev ) {
            for (let j = 1; j <= m; j++) {
                result.push(cur);      }
            if (m < 1 && prev == dnext && next == dprev) {
                result.pop();   }              
        }        
    }
    return result;



   // throw 'Not implemented';

    // remove line with error and write your code here
};
