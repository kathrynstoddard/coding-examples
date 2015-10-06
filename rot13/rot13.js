/**
 * rot13.js
 *
 * Kathryn Stoddard
 * kathryn.stoddard@gmail.com
 *
 * Creates an encryption for plaintext, based on a key and message
 * provided by the user as command line arguments.
 */

if (process.argv.length !== 4) {
  console.error('Usage: Node rot13.js <key> <message>');
  process.exit(1);
}

var decipher = function (key, cipher) {
  // Initialize variable for deciphered text
  var msg = '';

  // Initialize variable n for loop
  var n = cipher.length;

  for (var i = 0; i < n; i ++) {
    // Initialize variables to convert between alpha and ascii integer
    var atoi;
    var itoa;

    if (cipher.charCodeAt(i) >= 65 && cipher.charCodeAt(i) <= 90) {
      // Uses key to decipher text, converts from ascii values
      atoi = (cipher.charCodeAt(i) - 65 + key) % 26;

      // Calculates correct ascii value after being deciphered
      itoa = atoi + 65;

      msg += String.fromCharCode(itoa);

      // Prints correct ascii value to the console
    } else if (cipher.charCodeAt(i) >= 97 && cipher.charCodeAt(i) <= 122) {
      // Uses key to decipher text, converts from ascii values
      atoi = (cipher.charCodeAt(i) - 97 + key) % 26;

      // Calculates correct ascii value after being deciphered
      itoa = atoi + 97;

      msg += String.fromCharCode(itoa);

      // Prints correct ascii value to the console
    } else {
      msg += cipher[i];
    }
  }
      return msg;
}

console.log(decipher(parseInt(process.argv[2]), process.argv[3]));
