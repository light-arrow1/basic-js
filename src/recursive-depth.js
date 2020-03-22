module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let dep = 1;     
        while (arr.some(element => {
            return Array.isArray(element)})) {
           dep++;
            arr = arr.flat();
         } 
        return dep;
      //  throw 'Not implemented';
        // remove line with error and write your code here
    }
};