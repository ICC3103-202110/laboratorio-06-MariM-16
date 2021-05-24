var prompt = require('prompt-sync')({sigint:true});  
var figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')

function get_title(){
    return chalk.blue( 
        figlet.textSync(
            'Unit Converter App', 
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
};

function ValueQ(varia){
    return inquirer.prompt([
      {
        name: 'Option',
        type: 'confirm',
        message: 'Left temperature is source? ',
        default: false,
        
      },
      {
        name: 'Temperature',
        type: 'input',
        message: 'Temperature value to convert? ',
        default: "",
      },
      {
        type: 'list',
        name: 'Unit',
        message: 'From? ',
        choices: ['Celsius', 'Fahrenheit', 'Kelvin']
      },
      {
        type: 'list',
        name: 'Convert',
        message: 'To? ',
        choices: ['Celsius', 'Fahrenheit', 'Kelvin']
      }
    ])
  }

function view(){
    return {
      title: get_title()
    }
  }
  module.exports = {
    view,
    ValueQ
  }