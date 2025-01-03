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
  
  constructor (message, secret){
    this.message = message;
    this.secret = secret;
    this.ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  encrypt(message, secret) {
    if (typeof message === "string" && typeof secret === "string") {
      let encryptMessage = "";
      const upperCaseMessage = message.toUpperCase();
      let secretCharCount = 0;
      let encryptSecret = secret.repeat(Math.ceil(upperCaseMessage.length / secret.length)).substring(0, upperCaseMessage.length).toUpperCase();
      for (let i = 0; i < upperCaseMessage.length; i++) {
        if (/[A-Z]/.test(upperCaseMessage[i])){
          encryptMessage += this.ALPHABET.charAt((this.ALPHABET.indexOf(upperCaseMessage[i]) + this.ALPHABET.indexOf(encryptSecret[secretCharCount])) % 26);  
        } else {
          encryptMessage += upperCaseMessage[i];
          secretCharCount--
        } 
        secretCharCount++;
      }
      return encryptMessage;
    } else {
      throw new Error('Incorrect arguments!')
    } 
  }

  decrypt(message, secret) {
    if (typeof message === "string" && typeof secret === "string") {
      let decryptMessage = "";
      const upperCaseMessage = message.toUpperCase();
      let secretCharCount = 0;
      let encryptSecret = secret.repeat(Math.ceil(upperCaseMessage.length / secret.length)).substring(0, upperCaseMessage.length).toUpperCase();
      for (let i = 0; i < upperCaseMessage.length; i++) {
        if (/[A-Z]/.test(upperCaseMessage[i])){
        let decryptIndex = this.ALPHABET.indexOf(upperCaseMessage[i]) - this.ALPHABET.indexOf(encryptSecret[secretCharCount]);
        let decryptIndexMod = decryptIndex >= 0 ? decryptIndex : decryptIndex + 26;
        decryptMessage += this.ALPHABET.charAt(decryptIndexMod % 26);  
        } else {
          decryptMessage += upperCaseMessage[i];
          secretCharCount--
        } 
        secretCharCount++;
      }
      return decryptMessage;
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
