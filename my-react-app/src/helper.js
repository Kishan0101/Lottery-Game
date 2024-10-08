function genTicket(n) {
    let array = new Array(n);
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * 10); // Generates numbers from 0 to 9
    }
    return array; // Return the generated array, not the function itself
}

function sum(array) {
    return array.reduce((total, curr) => total + curr, 0); // Change 'sun' to 'total'
}

export { genTicket, sum };
