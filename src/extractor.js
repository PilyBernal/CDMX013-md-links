//Extraer enlaces md
const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const filesMd = require('./filesMd');
                                     
function extractMarckdownLinks(filesMd) {
  
  let markdown = readFileSync(filesMd, 'utf8');
  console.log(markdown);
  let regularExpression = /(\[.*\])\((https?)(:\/\/[^\s\)]+)\)/g;
  let links = markdown.match(regularExpression);
  let regularExpression2 = /\((https?)(:\/\/[^\s\)]+)\)/g;
  let urlLinks = markdown.match(regularExpression2); 
  console.log(links);
  return urlLinks;
}

//extractMarckdownLinks('uno.md');

module.exports.extractMarckdownLinks = extractMarckdownLinks;