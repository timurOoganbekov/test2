function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}

    console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]
//////// 1 - ^^^



function fibonacciWithDelay(prev, curr) {
    if (curr > 144) return;
    console.log(curr);
    setTimeout(fibonacciWithDelay, 1000, curr, prev + curr);
}

fibonacciWithDelay(0, 1);
// /////// 2 - ^^^



async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        products.forEach(product => console.log(product.title));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchProductTitles();
// ///// 3 - ^^^

const buttons = document.querySelectorAll('button')

for(let i = 0; i<buttons.length; i++){
    buttons[i].onclick = () => {
        document.body.style.backgroundColor = buttons[i].innerText
    }
}
// /////// 4 - ^^^



const toggleButton = document.querySelector('#toggleButton')
const block = document.querySelector('#block')

toggleButton.addEventListener('click', () => {
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
});
/////////5^^^^^



const counter = document.querySelector('#counter')

let count = 0;

const intervalId = setInterval(() => {
    count += 1;
    counter.textContent = count;

    if (count >= 100) {
        clearInterval(intervalId);
    }
}, 1);
////////6^^^^^
