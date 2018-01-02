
function getN(n) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve("g" + n);
        }, n);
    });
}

function *gen() {
    var data1 = yield getN(1000);
    console.log(data1);
    var data2 = yield getN(2000);
    console.log(data2);
    var data3 = yield getN(3000);
    console.log(data3);
}

iter(gen());

function iter(it, value) {
    var va;
    if (value) {
        va = it.next(value);
    } else {
        va = it.next();
    }
    if (!va.done) {
        va.value.then(function (data) {
            iter(it, data);
        });
    }
}