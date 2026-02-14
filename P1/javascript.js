const quotes = [
    "Honesty is the best policy.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens to you while you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Everything you've ever wanted is on the other side of fear.",
    "The only impossible journey is the one you never begin."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () =>{
    const index = Math.floor(Math.random() * 10);
    quote.textContent = quotes[index];
});