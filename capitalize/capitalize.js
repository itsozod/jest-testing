function capitalize(string) {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  console.log(capitalize('ozod'));
  
  module.exports = capitalize;