var timer = document.getElementById("timer");
var questionDisplayed = document.getElementById("question");

var questions = [{
    title: "Which of the following is not a valid data type in Javascript?",
    choices: ["1.) Number", "2.) String", "3.) Boolean", "4.) Array"],
    answer: "4.) Array"
},
{
    title: "If/else statements contain their conditional logic within:",
    choices: ["1.) Quotes", "2.) Curly brackets", "3.) Parenthesis", "4.) Square brackets"],
    answer: "3.) Parenthesis"
},
{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["1.) <scripting>", "2.) <javascript>", "3.) <js>", "4.) <script>"],
    answer: "4.) <script>"
},
{
    title: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n\n <p id="demo">This is a demonstration.</p>',
    choices: ['1.) document.getElementById("demo").innerHTML = "Hello World!";',
        '2.) document.getElementByName("p").innerHTML = "Hello World!";',
        '3.) #demo.innerHTML = "Hello World!";',
        '4.) document.getElement("p").innerHTML = "Hello World!";'],
    answer: '1.) document.getElementById("demo").innerHTML = "Hello World!";'
},
{
    title: 'Where is the correct place to insert a JavaScript?',
    choices: ["1.) The <body> section", "2.) The <head> section", "3.) Both the <head> section and the <body> section are correct", "4.) The <footer> section"],
    answer: "3.) Both the <head> section and the <body> section are correct"
},
{
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: ['1.) <script src="xxx.js">', '2.) <script name="xxx.js">', '3.) <script href="xxx.js">', '4.) <script class="xxx.js"></script>'],
    answer: '1.) <script src="xxx.js">'
},
{
    title: 'The external Javascript file must contain the <script> tag.',
    choices: ["1.) True", "2.) False", "3.) Potato?", "4.) Potato."],
    answer: "2.) False"
}, 
{
    title: 'How do you write "Hello World" in an alert box?',
    choices: ['1.) msgBox("Hello World!");', '2.) alert("Hello World!");', '3.) msg("Hello World!");', '4.) alertBox("Hello World");'],
    answer: '2.) alert("Hello World!");'
},
{
    title: 'How do you create a function in JavaScrpt?',
    choices: ["1.) function myFunction()", "2.) function = myFunction()", "3.) function:myFunction()", "4.) function == myFunction()"],
    answer: "1.) function myFunction()"
},
{
    title: 'How do you call a function named "myFunction"?',
    choices: ['1.) call myFunction()', '2.) myFunction()', '3.) call function myFunction()', '4.) myFunction() = call'],
    answer: '2.) myFunction()'
},
{
    title: 'How to write an IF statement in JavaScript?',
    choices: ['1.) if i = 5 then', '2.) if (i==5)', '3.) if i = 5', '4.) if i == 5 then'],
    answer: '2.) if (i==5)'
},
{
    title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    choices: ['1.) if (i != 5)', '2.) if i =! 5 then', '3.) if (i <> 5)', '4.) if i <> 5'],
    answer: '1.) if (i != 5)'
},
{
    title: 'How does a WHILE loop start?',
    choices: ['1.) while i = 1 to 10', '2.) while (i <= 10)', '3.) while (i <= 10; i++)', '4.) while (i <= 10)(i++)'],
    answer: '2.) while (i <= 10)'
},
{
    title: 'How does a FOR loop start?',
    choices: ['1.) for (i = 0; i <= 5)', '2.) for i = 1 to 5', '3.) for (i = 0; i <= 5; i++)', '4.) for (i <= 5; i++)'],
    answer: '3.) for (i = 0; i <= 5; i++)'
},
{
    title: 'How can you add a comment in a JavaScript?',
    choices: ['1.) <!--This is a comment-->', '2.) //This is a comment', "3.) 'This is a comment", '4.) %%This is a comment'],
    answer: '2.) //This is a comment'
},
{
    title: 'How to insert a comment that has more than one line?',
    choices: ['1.) //This comment has\\nmore than one line//', '2.) <!--This comment has\\nmore than one line-->', '3.) /*This comment has\\nmore than one line*/', '4.) %%This comment has\\nmore than one line%%'],
    answer: '3.) /*This comment has\\nmore than one line*/'
},
{
    title: 'What is the correct way to write a JavaScript array?',
    choices: ['1.) var colors = "red", "green", "blue"', '2.) var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', '3.) var colors = (1:"red, 2:"green", 3:"blue")', '4.) var colors = ["red", "green", "blue"]'],
    answer: '4.) var colors = ["red", "green", "blue"]'
},
{
    title: 'How do you round the number 7.25 to the nearest integer?',
    choices: ['1.) round(7.25)', '2.) Math.round(7.25)', '3.) rnd(7.25)', '4.) Math.rnd(7.25)'],
    answer: '2.) Math.round(7.25)'
},
{
    title: 'How do you find the number with the highest value of x and y?',
    choices: ['1.) Math.ceil(x,y)', '2.) Math.max(x,y)', '3.) ceil(x,y)', '4.) top(x,y)'],
    answer: '2.) Math.max(x,y)'
},
{
    title: 'What event occurs when the user clicks on an HTML element?',
    choices: ['1.) onclick', '2.) onchange', '3.) onmouseover', '4.) onmouseclick'],
    answer: '1.) onclick'
},
{
    title: 'How do you declare a JavaScript variable?',
    choices: ['1.) variable carName;', '2.) var carName;', '3.) v carName;', '4.) variable = carName;'],
    answer: '2.) var carName;'
},
{
    title: 'Which operator is used to assign a value to a variable?',
    choices: ['1.) x', '2.) -', '3.) *', '4.) ='],
    answer: '4.) ='
},
{
    title: 'What will the following code return: Boolean(10 > 9)',
    choices: ['1.) true', '2.) false','3.) NaN', '4.) null'],
    answer: '1.) true'
},
{
    title: 'Is JavaScript case sensitive?',
    choices: ['1.) Yes', '2.) No', '3.) Potato?', '4.) Potato.'],
    answer: '1.) Yes'
}];

console.log(questions[1].title);