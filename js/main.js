// Thêm số vào mảng

var arr = [];

function addNum() {
    var num = Number(document.querySelector("#addNum").value);
    arr.push(num);

    document.querySelector("#txtAddNum").innerHTML = arr;
}

document.querySelector("#btnAddNum").onclick = addNum;


// Bài 1: Tính tổng số dương

function calSumPos() {
    var sum = 0;

    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            sum += arr[index];
        }
    }

    document.querySelector("#txtSum").innerHTML = "Tổng số dương: " + sum;
}

document.querySelector("#btnSum").onclick = calSumPos;


// Bài 2: Đếm số dương

function countPos() {
    var count = 0;

    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            count += 1;
        }
    }

    document.querySelector("#txtCountPos").innerHTML = "Số dương: " + count;
}

document.querySelector("#btnCountPos").onclick = countPos;


// Bài 3: Tìm số nhỏ nhất

function findMin() {
    var min = arr[0];

    for (var index = 1; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }

    document.querySelector("#txtFindMin").innerHTML = "Số nhỏ nhất: " + min;
}

document.querySelector("#btnFindMin").onclick = findMin;


// Bài 4: Tìm số dương nhỏ nhất

function findPosMin() {
    var posArr = arr.filter(function(value) {
        return value > 0;
    });

    var minPos = posArr[0];

    for (var index = 1; index < posArr.length; index++) {
        if (posArr[index] < minPos) {
            minPos = posArr[index];
        }
    }

    document.querySelector("#txtFindPosMin").innerHTML = "Số dương nhỏ nhất: " + minPos;
}

document.querySelector("#btnFindPosMin").onclick = findPosMin;


// Bài 5: Tìm số chẵn cuối cùng

function findLastEven() {
    var lastEven = 0;

    for (var index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 === 0) {
            lastEven = arr[index];
            break;
        }
    }

    document.querySelector("#txtFindLastEven").innerHTML = "Số chẵn cuối cùng: " + lastEven;
}

document.querySelector("#btnFindLastEven").onclick = findLastEven;


// Bài 6: Đổi chỗ

function changeIndex() {
    var arrCopy = arr.slice();
    var index1 = Number(document.querySelector("#index1").value);
    var index2 = Number(document.querySelector("#index2").value);

    var curr;
    arrCopy[curr] = arrCopy[index1];
    arrCopy[index1] = arrCopy[index2];
    arrCopy[index2] = arrCopy[curr];

    document.querySelector("#txtChangeIndex").innerHTML = "Mảng sau khi đổi: " + arrCopy;
}

document.querySelector("#btnChangeIndex").onclick = changeIndex;


// Bài 7: Sắp xếp

function sortUp() {
    var arrCopy = arr.slice();
    arrCopy.sort(function(a, b) {
        return a - b;
    });

    document.querySelector("#txtSortUp").innerHTML = "Mảng sau khi sắp xếp: " + arrCopy;
}

document.querySelector("#btnSortUp").onclick = sortUp;


// Bài 8: Tìm số nguyên tố đầu tiên

function findPrime() {
    var prime = -1;

    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        var isPrime = true;

        if (curr < 2) {
            isPrime = false;
        }

        for (var j = 2; j < Math.sqrt(curr); j++) {
            if (curr % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            prime = curr;
            break;
        }
    }

    document.querySelector("#txtFindFirstPrime").innerHTML = "Số nguyên tố đầu tiên: " + prime;
}

document.querySelector("#btnFindFirstPrime").onclick = findPrime;


// Bài 9: Thêm mảng số thực

var newArr = [];

function addArrNew() {
    var num = Number(document.querySelector("#addNewNum").value);
    newArr.push(num);

    document.querySelector("#txtAddArrNew").innerHTML = newArr;
}

document.querySelector("#btnAddArrNew").onclick = addArrNew;


function countInt() {
    var countInt = 0;

    for (let index = 0; index < newArr.length; index++) {
        var curr = newArr[index];
        if (Number.isInteger(curr)) {
            countInt++;
        }
    }

    document.querySelector("#txtCountInt").innerHTML = "Số nguyên: " + countInt;
}

document.querySelector("#btnCountInt").onclick = countInt;


// Bài 10:  So sánh số lượng số âm và số dương

function compare() {

    var posArr = arr.filter(function(value) {
        return value > 0;
    });
    var negArr = arr.filter(function(value) {
        return value < 0;
    });

    if (negArr.length > posArr.length) {
        document.querySelector("#txtCompare").innerHTML = "Số âm > Số dương ";
    } else if (negArr.length < posArr.length) {
        document.querySelector("#txtCompare").innerHTML = "Số âm < Số dương ";
    } else {
        document.querySelector("#txtCompare").innerHTML = "Số âm = Số dương ";
    }
}

document.querySelector("#btnCompare").onclick = compare;