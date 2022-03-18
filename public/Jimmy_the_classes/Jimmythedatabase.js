const Account = require('./account.js');

class DataBase {
  #dataBase;
  #size;
  constructor() {
    this.#dataBase = {};
    this.#size = 0;
  };
  
  add(name, password) {
    let newAccount = new Account(name, password);
    this.#dataBase[newAccount.getUsername] = newAccount;
    this.#size += 1;
  };

  exists(name) {
    if (this.#dataBase[name] == undefined) {
      return false;
    }
    return true;
  };

  getSize() {
    return this.#size;
  };

  pushData(name, data) {
    this.#dataBase[name].pushData(data);
  }

  getData(name, month) {
    return this.#dataBase[name].getData(month);
  }
};

module.exports = DataBase;