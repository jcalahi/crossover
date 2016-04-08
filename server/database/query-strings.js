var queryStrings = {
    createTable: 'CREATE TABLE IF NOT EXISTS Users(ID int NOT NULL AUTO_INCREMENT, Name varchar(25) NOT NULL, Coins int NOT NULL, Breads int NOT NULL, Carrots int NOT NULL, Diamonds int NOT NULL, PRIMARY KEY (ID))',
    insertUser: 'INSERT INTO users(name, coins, breads, carrots, diamonds) VALUES (?, ?, ?, ?, ?)',
    searchUser: 'SELECT name FROM users WHERE name=?',
    selectUser: 'SELECT users.name, users.coins, users.breads, users.carrots, users.diamonds FROM users WHERE name=?'
};

module.exports = queryStrings;
