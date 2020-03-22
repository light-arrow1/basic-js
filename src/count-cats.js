  
module.exports = function countCats( matrix ) {
  let number= 0;

  matrix.forEach( element => {
    element.forEach( element => {
    number += +( element === "^^");
    });
  });

  return number;
};
