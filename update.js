function update(temp){
    return (Number(temp))
}

function units(temp,From,To){
    if(From === 'Celsius'){
        if(To==='Fahrenheit'){
        return (temp*9/5)+32
        }
        else if(To==='Kelvin'){
        return temp+273.15
        }
    else if(From === 'Fahrenheitt'){
        if(To==='Celsius'){
            return ((temp-32)*5/9)
        }
        else if(To==='Kelvin'){
            return (((temp) - 32) * (5/9))+ 273.15
        }
    }
    else if(From === 'Kelvin'){
        if(To==='Celsius'){
            return temp-273.15
        }
        if(To==='Fahrenheit'){
            return (((temp) - 273.15) * (9/5)) + 32
        }
    }
    }
}
    
module.exports = {
    update,
    units
}
