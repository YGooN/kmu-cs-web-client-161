console.log("Hello Homework3");

function stringToInt(input) {
    return parseInt(input);
}

function maskNumber(input) {
    var mask = "***********";
    var mask_number = mask.substring(0, 6).concat(input.substring(7, 11));
    return mask_number;
}

function getAverage(input_array) {
    var array = input_array;
    var avg = parseFloat((array[0]+array[1]+array[2]+array[3]+array[4]+array[5])/6)
    return avg;
}

function isMultipleSeven(input) {
    if(input % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function operation(a, b, c) {
    switch(a) {
        case "add":
            return b+c;
        case "substract":
            return b-c;
        case "multiply":
            return b*c;
        case "divide":
            return b/c;
        default:
            console.log("Not Supported");
            return "undefined";
    }
}

function triangleMtn(input) {
    for(var i=1; i<=input; i++) {
        var star = "**********";
        console.log(star.substring(0,i));
    }
}
