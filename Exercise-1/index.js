function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [valueAt0, ,valueAt2] = arr;
    return {
        name,
        age,
        valueAt0,
        valueAt2
    };
}
const obj = {
    name: 'John', age: 30, city: 'New York'
};
const arr = [10, 20, 30, 40];

const result = destructureExample(obj, arr);
console.log(result);