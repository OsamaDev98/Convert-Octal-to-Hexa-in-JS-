// Octal to Hexa 
function oct_to_hex(octal_number) {
  return parseInt(octal_number, 8).toString(16).toUpperCase();
}
console.log(oct_to_hex(5252));