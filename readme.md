Question 1 answer:
getElementById – used for getting a specific element by its id(return a single element, not a collection).
 
getElementsByClassName – used for getting an HTMLCollection of  elements by class name (live collection).
 
querySelector – works like getElementById in that it returns only the first match, but it uses a CSS selector (not just id).
 
querySelectorAll – used for getting a NodeList of all matches for a CSS selector (static,not live).
 
JavaScript Interview Questions - Short Answers
2. How do you create and insert a new element into the DOM?
You can create a new element with document.createElement(), add content or attributes, and insert it using methods like appendChild(), append(), prepend(), before(), or after().

<body>
    <ul id="list">
        <li>Mehedi</li>
    </ul>

    <script>
        const newItem = document.createElement("li");

        newItem.textContent = "I am  Obayed"

        document.getElementById("list").appendChild(newItem)
    </script>
</body>
 
3. What is Event Bubbling and how does it work?
Event bubbling is when an event starts from the target element and propagates upward through its ancestors in the DOM tree.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       
        #parent{
            border: 2px solid red;
            border-radius: 5px;
            margin-bottom: 20px;
            padding: 40px;
        }
        #first-child{
            border: 2px solid rgb(0, 0, 0);
            border-radius: 5px;
            margin: 40px;
            padding: 40px;
        }
        #grand-child{
            border: 2px solid yellowgreen;
            border-radius: 5px;
            margin: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div id="parent">
        <h1>My father</h1>
        <div id="first-child">
            <h2>It's me</h1>
            <div id="grand-child">
                <h3>It's my child</h1>
            </div>
        </div>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click",function(){
            alert("I am the Parent");
        })
        document.getElementById("first-child").addEventListener("click",function(){
            alert("I am the Child");
        })
        document.getElementById("grand-child").addEventListener("click",function(){
            alert("I am the grand Child");
        })
    </script>
</body>
</html>
 
4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is attaching a single event listener to a parent element to manage events on its child elements. It is useful for performance and handling dynamically added elements.

<body>
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      
      <script>
        document.getElementById("list").addEventListener("click", function(event) {
          if (event.target.tagName === "LI") {
            alert(event.target.textContent);
          }
        });
      </script>
      
</body>
 
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default browser behavior (e.g., link navigation, form submit). stopPropagation() stops the event from bubbling up or capturing further in the DOM.