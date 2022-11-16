const validator = require('validator');

function validateLinks(urlLinks){
  console.log(urlLinks);
  urlLinks.forEach(urlLink => {
    let without = urlLink.slice(1, -1);
    let result = validator.isURL(without);
    console.log(result);
    return result;
  })
}

module.exports.validateLinks = validateLinks; 