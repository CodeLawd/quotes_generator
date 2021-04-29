let button = document.querySelector("button")
let quotesText = document.querySelector(".quotes")
let quotesAuthor = document.querySelector(".author")
// button.addEventListener('click', generateQuote)

async function generateQuote() {
    let res = await fetch("https://type.fit/api/quotes")
    let response = await res.json()

    
    setInterval(() => {
        let quotesNumber = Math.floor(Math.random() * 1643)
        quotesText.innerHTML = response[quotesNumber].text;
        quotesAuthor.innerHTML = `<b> ~ ${response[quotesNumber].author} ~ </b>`; 
    }, 5000);
    
}
