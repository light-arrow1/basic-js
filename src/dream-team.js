module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let nameAll = '';
  members.forEach(element => {
    if (typeof element == 'string') {
      nameAll += element.trim()[0].toUpperCase();
    }
  }); 
  return nameAll ? nameAll.split('').sort().join('') : false;


  //throw 'Not implemented';
  // remove line with error and write your code here
};