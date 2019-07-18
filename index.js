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
