const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct = true) {
    this.direct = direct;
  }
  
  encrypt(message, secret) {
    if (typeof message !== "string" || typeof secret !== "string")
      throw new Error('Incorrect arguments!');

    const upperCaseMessage = message.toUpperCase();
    const encryptSecret = secret.toUpperCase();

    let encryptMessage = "";
    let secretIdx = 0;
    for (let i = 0; i < upperCaseMessage.length; i++) {
      let ch;
      if (/[A-Z]/.test(upperCaseMessage[i])) {
        ch = this.ALPHABET[(upperCaseMessage.charCodeAt(i) - 65 + encryptSecret.charCodeAt(secretIdx) - 65) % 26];
       
        //this.ALPHABET.charAt((this.ALPHABET.indexOf(upperCaseMessage[i]) + this.ALPHABET.indexOf(encryptSecret[secretCharCount])) % 26);
        secretIdx = (secretIdx + 1) % encryptSecret.length;
      } else {
        ch = upperCaseMessage[i];
      } 

      if (this.direct)
        encryptMessage += ch;
      else encryptMessage = ch + encryptMessage;
    }
    return encryptMessage;
  }

  decrypt(message, secret) {
    if (typeof message !== "string" || typeof secret !== "string")
      throw new Error('Incorrect arguments!');

    const upperCaseMessage = message.toUpperCase();
    const encryptSecret = secret.toUpperCase();

    let secretIdx = 0;
    let decryptMessage = "";
    for (let i = 0; i < upperCaseMessage.length; i++) {
      let ch;
      if (/[A-Z]/.test(upperCaseMessage[i])) {
        ch = this.ALPHABET[(upperCaseMessage.charCodeAt(i) - 65 - (encryptSecret.charCodeAt(secretIdx) - 65) + 26) % 26];

        secretIdx = (secretIdx + 1) % encryptSecret.length;
      } else {
        ch = upperCaseMessage[i];
      } 

      if (this.direct)
        decryptMessage += ch;
      else decryptMessage = ch + decryptMessage;
    }
    return decryptMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
