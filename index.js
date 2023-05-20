let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let sumSpan = document.getElementById('sum-span');
let count = 0;
let countArray = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    countArray.push(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function sum() {
    // Only sum if countArray has items
    if (countArray.length > 0) {
        let total = 0;
        const sumOfCounts = countArray.reduce((total, item) => total + item);
        sumSpan.textContent = sumOfCounts;
    }
}

function clearAll() {
    count = 0;
    countArray.length = 0;
    countEl.textContent = 0;
    saveEl.textContent = 'Previous entries: ';
    sumSpan.textContent = '';
}
