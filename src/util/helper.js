function printDate() {
    let date = new Date
    console.log(date.getDate());
}

function printMonth() {
    let date = new Date
    console.log(date.getMonth() + 1);
}

function getBatchInfo() {
    console.log("Radon, W3D1, the topic for today is Nodejs module system");
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo