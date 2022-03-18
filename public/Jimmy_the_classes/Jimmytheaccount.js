class Account {
    #username;
    #password;
    #id;
    #fishingData;
    
    constructor(username, password) {
  
      this.#username = username;
  
      this.#password = password;
  
      this.#id = "";
      for (var i = 0; i < 8; i++) {
        this.#id += String.fromCharCode(Math.random() * 0x10000);
      }
  
      this.#fishingData = {};
    };
  
    get getID() {
      return this.#id;
    };
    
    pushData(data) {
      try {
        this.#fishingData[data.month] = data;
      } catch(err) {
        console.log(err);
      }
    };
  
    getData(month) {
      try {
        return this.#fishingData[month];
      } catch(err) {
        return null;
      }
    }
  
    get getUsername() {
      return this.#username;
    };
  };
  
  module.exports = Account;