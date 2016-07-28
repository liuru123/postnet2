'use strict';

describe("isValidDigit", function () {
    it("return true", function () {
        let example = '|::|:';
        let result = isValidDigit(example);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("return false", function () {
        let example = 'sss|';
        let result = isValidDigit(example);
        let expected = false;
        expect(result).toEqual(expected);
    });
});
describe("matchFiveBarcode", function () {
    it("return true", function () {
        let example = '| |:::: ::||: |';
        let result = matchFiveBarcode(example);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("should return false", function () {
        let example = '|||||  :: ""';
        let result = matchFiveBarcode(example);
        let expected = false;
        expect(result).toEqual(expected);
    });
    it("return false",function () {
        let example='|:::: ::||:';
        let result=matchFiveBarcode(example);
        let expected=false;
        expect(result).toEqual(expected);
    });
});

describe("isHaveFrame", function () {
    it("return true", function () {
        let example = '| |:: |';
        let result = isHaveFrame(example);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("return false", function () {
        let example = '| ';
        let result = isHaveFrame(example);
        let expected = false;
        expect(result).toEqual(expected);
    });
});

describe("isValidLength", function () {
    it("return true", function () {
        let example = '| |||:: ||::| ::||: ||::| :|:|: |:|:: |';
        let result = isValidLength(example);
        let expected = true;
        expect(result).toEqual(expected);
    });
    it("return false", function () {
        let example = '| ||||| |';
        let result = isValidLength(example);
        let expected = false;
        expect(result).toEqual(expected);
    });
    it("return true", function () {
        let example = '| |||:: ||::| ::||: ||::| :|:|: |:|:: |||:: ||::| ::||: ||::| |';
        let result = isValidLength(example);
        let expected = true;
        expect(result).toEqual(expected);
    });
});

describe("divideBarcode", function () {
    it("return the string array", function () {
        let example = '| |||:: ||::| |:|:| |:::| |:||: ::::| |';
        let result = divideBarcode(example);
        let expected = ['|||::', '||::|', '|:|:|', '|:::|', '|:||:', '::::|'];
        expect(result).toEqual(expected);
    });
});


describe("computePost", function () {
    it("return the  number array", function () {
        let exampleString = ['|:|::', '|:::|', '|:|::', '|:::|', '::||:', '::|:|'];
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = computePost(exampleString, items);
        let expected = [9, 7, 9, 7, 3, 2];
        expect(result).toEqual(expected);
    });
    it("return the info  explain the reason error", function () {
        let exampleString = ['|||::', '||::|', '|:|:|', '|:::|', '|:||:', '::::|'];
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

        let result = computePost(exampleString, items);
        let expected = 'the each number > 9 or the exampleString is not correct';
        expect(result).toEqual(expected);
    });
});

describe("checkCD", function () {
    it("should return the right CD", function () {
        let exampleNumber = [9, 7, 9, 7, 3, 2];
        let result = checkCD(exampleNumber);
        let expected = [9, 7, 9, 7, 3, 5];
        expect(result).toEqual(expected);
    });
});

describe("barcodeTransformPost", function () {
    it("return result", function () {
        let example = '| |:|:: |:::| |:|:: |:::| ::||: ::|:| |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeTransformPost(example);
        let expected = [9, 7, 9, 7, 3, 5];
        expect(result).toEqual(expected);
    });
    it("return the error information", function () {
        let example = 'sss';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeTransformPost(example);
        let expected = 'the input is error';
        expect(result).toEqual(expected);
    });
});