'use strict';
function isValidDigit(example) {
    let pattern = /^[\|: ]+$/;
    return example.match(pattern) !== null;
}

function matchFiveBarcode(example){
   let temp=example.substring(2,example.length-2);
         let temps = temp.split(' ');

        for (let item of temps) {
            if (item.length !== 5)
                return false;
        }
        return true;
}

function isHaveFrame(example) {
    let str1 = example.substring(0, 2);
    let str2 = example.substring(example.length - 2);
    return str1 === '| ' && str2 === ' |';
}
function isValidLength(example) {
    let temp = example.split(' ');
    if (temp.length === 8 || temp.length === 12)
        return true;
    else
        return false;
}

function divideBarcode(example) {
    let result = [];
    let temp = example.substring(2, example.length - 2);
    let temps = temp.split(' ');
    for (let item of temps) {
        result.push(item);
    }
    return result;
}
function loadAllItems() {
    return ['||:::', ':::||',
        '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

}
function computePost(exampleString, items) {
    let result = [];
    exampleString.forEach(function (example) {
        let index = items.indexOf(example);
        result.push(index);
    });
    if (result.indexOf(-1) !== -1) {
        return 'the each number > 9 or the exampleString is not correct';
    }
    else {
        return result;
    }
}

function checkCD(exampleNumber) {

    let sum = 0;
    sum = exampleNumber.reduce(function (a, b) {
        return a + b;
    });
    if (sum % 10 === 0) {
        return exampleNumber;
    }
    else {
        exampleNumber[exampleNumber.length - 1] += 10 - sum % 10;
        exampleNumber.splice(exampleNumber.length - 1, exampleNumber[exampleNumber.legnth - 1]);
    }
    return exampleNumber;
}

function barcodeTransformPost(example) {


    let info = isValidDigit(example);
    let info1 = matchFiveBarcode(example);
    let info2 = isHaveFrame(example);
    let info3 = isValidLength(example);
    if (info === false || info1===false  ||  info2 === false || info3 === false) {
        return 'the input is error';
    }
    let exampleString = divideBarcode(example);
    let items = loadAllItems();
    let exampleNumber = computePost(exampleString, items);
    return checkCD(exampleNumber);
}
