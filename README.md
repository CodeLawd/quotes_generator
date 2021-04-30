So without further ado, let's get started.

**What is Asynchronous Function?**

An async function can contain an await expression, that pauses the execution of the function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

In simpler terms, Asynchronous function is a function that allows you to execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.

> Who can wait quietly while the mud settles?

> Who can remain still until the moment of action?

> **Laozi, Tao Te Ching**

Having established that, let's move on to the fun part.

If you just want to skip the tutorial and dive into the code, I’ve created this  [repository](https://github.com/CodeLawd/quotes_generator) for you with setup instructions

I am not going to really explain the HTML and CSS aspect as I believe you should already know it.

1. Open your terminal and create a directory using the following command

```
$ mkdir quotes-generator
$ cd quotes-generator
```
2. Create an index.html, styles.css and app.js file using the following command
```
$ touch index.html styles.css app.js
```
3. In the index.html file, paste the following code snippets 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inspirational Quotes Generator </title>
    <link rel="stylesheet" href="style.css">
</head>
<body onload="generateQuote()">
    <div class="container">
        <h1>Inspirational Quotes</h1>
        <div class="quote">
            <p class="quotes">Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.</p>
            <p class="author button"> ~ Lao Tzu ~</p>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

**Note: I have linked the styles.css and app.js file in our index.html file**

4. In the styles.css file, paste the following code snippet
```
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #0A0A23;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
.button {
    padding: 10px 30px;
    cursor: pointer;
    background-color:  #0A0A23;
    border: none;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    width: auto
}
.container {
    background-color: #fff;
    height: 100%;
    margin-top: 15%;
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: rgb(0, 0, 0, 0.5);
}
.quote {
    max-width: 500px;
    width: 500px
}
```

Now, when you refresh, you should get something that looks like this 👇

![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1619699984096/ffFXV3Bai.png)

**The first part is done, unto the next.**

You would have noticed that the quotes and the authors name been displayed in the preview is hardcoded, but instead we would auto generate them instead using the `fetch api.`

In the app.js file, let's create 2 variables (quotesText and quotesAuthor)
```
let quotesText = document.querySelector(".quotes")
let quotesAuthor = document.querySelector(".author")
```
The `quotesText` would be used to store the quotes and the `quotesAuthor` would be used to store the author's name.

What we are doing is just getting the text within the paragraph that has the `quotes` and `author` class.

Now the next thing to do is to create an async function
```
async function generateQuote() {
    let res = await fetch("https://type.fit/api/quotes")
    let response = await res.json()
    console.log(response)
}
```

**Now let me explain the code.**

We just created a traditional function but we added the `async` keyword in front of it. The `api` we are getting the quotes from is `https://type.fit/api/quotes`.
What we did is to use `fetch` to fetch the quotes from that api and we converted what we got back from the api to a json format and saved it to the variable `response`.
On the next line, I logged the result out and you should see an array of size 1643 👇

![array.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1619774455010/JlPATD-kN.png)

Now, what we want is not to just log out the result we get back but to display individual quotes say every 5 sec.

Now, since we have saved our quotes in the variable `response`, we can now use the setInterval() method to display individual quote every 5 secs.

Add this code snippet after the console.log().
```
setInterval(() => {
      let quotesNumber = Math.floor(Math.random() * 1643)
      quotesText.innerHTML = response[quotesNumber].text;
      quotesAuthor.innerHTML = `<b> ~ ${response[quotesNumber].author} ~ </b>`;
  }, 5000);
```

Let me quickly explaian what's happening.
Since we got back an array of 1643, I generated a reandom number between 0 and 1643 and stored that random number in a variable called `quotesNumber`.

Next thing we did was to extract the quote text and set it to the variable we created earlier `quotesText` and also extract the author's name and store it in the variable `quotesAuthor` and set the interval to 5000 milliseconds which is equal to 5 seconds.


So, the final code should look like this.
```
let quotesText = document.querySelector(".quotes");
let quotesAuthor = document.querySelector(".author");

async function generateQuote() {
  let res = await fetch("https://type.fit/api/quotes");
  let response = await res.json();

  console.log(response);
  setInterval(() => {
      let quotesNumber = Math.floor(Math.random() * 1643)
      quotesText.innerHTML = response[quotesNumber].text;
      quotesAuthor.innerHTML = `<b> ~ ${response[quotesNumber].author} ~ </b>`;
  }, 5000);
}
```

This is the final result,  [Inspirational Qutes Generator](https://codelawd.github.io/quotes_generator/) 
