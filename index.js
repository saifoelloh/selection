/*
 * 1. Multiples of 3 and 5
 */
function first(limit=1000) {
    let hasil = 0;
    for (let i=1;i<limit;i++) {
        if (i%3==0&&i%5==0) {
            hasil += i;
        }
    }

    return hasil;
}

let hasil = first();
console.log(`First result\t: ${hasil}`);


/*
 * 2. Sum square difference
 */
function sec_natural(limit) {
    let result = 0;
    for (let i=1;i<=limit;i++) {
        result += Math.pow(i,2);
    }

    return result;
}

function sec_sum(limit) {
    let temp=0;
    for (let i=1;i<=limit;i++) {
        temp += i;
    }

    return Math.pow(temp, 2);
}

function second(limit) {
    const res1 = sec_natural(limit);
    const res2 = sec_sum(limit);

    return res2 - res1;
}

hasil = second(100);
console.log(`Second result\t: ${hasil}`);


/*
 *  3. Summation of primes
 */
function tr_primary(value) {
    for (let i=2;i<10;i++) {
        if (value%i==0&&value!==2) {
            return false;
        }

    }

    return value===1 ? false : value;
}

function third(limit) {
    let hasil = 0;
    let val = 0;
    for (let i=1;i<limit;i++) {
        hasil += tr_primary(i); 
    }

    return hasil;
}

hasil = third(2000000);
console.log(`Third result\t: ${hasil}`);
