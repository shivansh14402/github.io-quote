
const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const body = document.querySelector("body")

let curr = 0;

const quotes = [
    {author:"Marilyn Monroe", text:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", color: "#3d3c4c"},
    {author:"Albert Einstein", text:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", color: "#3f3e31"},
    {author:"Bernard M. Baruch", text:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", color: "#0e2f1f"},
    {author:"William W. Purkey", text:"You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.", color: "#2c5f30"},
    {author:"Dr. Seuss", text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.", color: "#4e6165"},
    {author:"J.K. Rowling", text:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", color: "#103119"},
    {author:"Albert Camus", text:"Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend", color: "#061e53"},
    {author:"C.S. Lewis", text:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .", color: "#922820"},
    {author:"Maya Angelou", text:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", color: "#744960"},
    {author:"Ralph Waldo Emerson", text:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", color: "#744700"},
]


newQuote.addEventListener('click', function(){
    let quote = quotes[curr];

    text.textContent = quote.text;
    author.textContent = quote.author;
    
    text.style.color = quote.color;
    author.style.color = quote.color;
    body.style.backgroundColor = quote.color;
    newQuote.style.backgroundColor = quote.color;

    if(curr === quotes.length - 1){
        curr = 0;
        return;
    }

    curr++;
})