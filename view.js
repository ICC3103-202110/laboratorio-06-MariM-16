var figlet = require('figlet');
 
const chalk = require('chalk');

figlet.text('Unit Converter App', {
    horizontalLayout: 'fitted',
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: false
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log( chalk.yellow(data));
    
});