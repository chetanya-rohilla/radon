function trim(str) {
    str = str.trim()
    console.log(str)
}

function changeToUpperCase(str) {
    str = str.toUpperCase()
    console.log(str);
}

function changeToLowerCase(str) {
    str = str.toLowerCase()
    console.log(str);
}

module.exports.trim = trim
module.exports.changeToUpperCase = changeToUpperCase
module.exports.changeToLowerCase = changeToLowerCase