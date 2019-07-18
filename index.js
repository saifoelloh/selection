/*
 * 1. Multiples of 3 and 5
 */
function first(limit) {
    let hasil = 0;
    for (let i=1;i<limit;i++) {
        if (i%3==0||i%5==0) {
            hasil += i;
        }
    }

    return hasil;
}

let hasil = first(1000);
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
    const limit = value < 10 ? value : 7;
    for (let i=2;i<limit;i++) {
        if (value%i===0) {
            return value===2 ? value : false;
        }
    }

    return value!==1 ? value : false;
}

function third(limit) {
    let hasil = 0;
    for (let i=1;i<limit;i++) {
        hasil += tr_primary(i); 
    }

    return hasil;
}

hasil = third(2*Math.pow(1000, 2));
console.log(`Third result\t: ${hasil}`);


/*
 *  4. 10001st prime
 */

function fourth(limit) {
    let num = 1, list = 0, val;
    do {
        val = tr_primary(num);
        list += val!==false ? 1 : 0;
        if (list===10000) {
            console.log(`${list} -- ${val}`);
        }
        num++;
    } while (list!==limit);

    return val;
}

hasil = fourth(10001);
console.log(`Fourth result\t: ${hasil}`);
