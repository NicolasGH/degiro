const DeGiro = require('..');

const degiro = DeGiro.create({
    // username: 'your-username',
    // password: 'your-password',
});

degiro.login().then(() => degiro.searchProduct({
    text: 'AAPL',
}))
    .then(console.log);
