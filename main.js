
const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.getElementById("output");
const arr = [];

button.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    const reversedText = text.split('').reverse().join('');
    const newItem = { text: reversedText, key: arr.length + 1 };
    arr.push(newItem);
    input.value = "";

    output.innerHTML = "";

    arr.map((el) => {
        const p = document.createElement("p");
        p.innerHTML = ` key: ${el.key}, text: ${el.text}`;
        output.append(p);
    });

    console.log(input.value);
});