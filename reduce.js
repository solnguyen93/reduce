//reduce
//
//
//extractValue
//
function extractValue(array, k) {
    let newArry = [];
    return array.reduce(function (accumulator, value) {
        newArry.push(value[k]);
        return newArry;
    }, []);
}
const arr1 = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];
console.log(extractValue(arr1, 'name'));
//
//vowelCount
//
function vowelCount(str) {
    let array = str.toLowerCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return array.reduce(function (accumulator, el) {
        if (vowels.includes(el)) {
            if (accumulator[el]) {
                accumulator[el]++;
            } else {
                accumulator[el] = 1;
            }
        }
        return accumulator;
    }, {});
}
console.log(vowelCount('Elie')); // {e:2,i:1};
//
//addKeyAndValue
//
function addKeyAndValue(array, k, v) {
    return array.reduce(function (accumulator, el, idx) {
        accumulator[idx][k] = v;
        return accumulator;
    }, array); //need array as second optional so accumulator starts with it
}

const arr2 = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];
console.log(addKeyAndValue(arr2, 'title', 'Instructor'));
//
//partition
//
function partition(array, callback) {
    return array.reduce(
        function (accumulator, el) {
            !callback(el) ? accumulator[0].push(el) : accumulator[1].push(el);
            return accumulator;
        },
        [[], []]
    );
}

function isEven(val) {
    return val % 2 === 0;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(partition(arr, isEven)); // [[2,4,6,8], [1,3,5,7]];
