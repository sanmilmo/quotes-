const quotes = [
    {
        name:'Thomas Mann',
        quote:'A writer is someone for whom writing is more difficult than it is for other people.'
    },
    {
        name:'Stephen King',
        quote:'Quiet people have the loudest minds.'
    },
    {
        name:'Jodi Picoult',
        quote:'You can always edit a bad page. You can’t edit a blank page.'
    },
    {
        name:'Albert Einstein',
        quote:'We have to do the best we are capable of. This is our sacred human responsibility.'
    },
    {
        name:'Johann Wolfgang von Goethe',
        quote:'Magic is believing in yourself, if you can do that, you can make anything happen'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

//access them 
quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
