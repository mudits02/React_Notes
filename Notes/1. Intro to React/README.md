# Basics of React

1. ***React.createElement*** is used in React to create elements , works the sam eway as in JS(using JS APIs) but behind the scenes works deifferently.<br><br>
2. 
```
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from Javascript";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
```
Above is used to print Hello World in in HTML using Javascript<br><br>

3. So , we see that for **createElement** we are using ***React*** because it is a core React operation and we are just creating the element but when we are creatinga root , then we use ***ReactDOM*** because we are rendering or changing something in the DOM.<br><br>
4. In React, the term ***root*** typically refers to the root DOM node that serves as the entry point for a React application. This is the DOM element where the React component tree is rendered. In a typical React application, this is done using the ***ReactDOM.createRoot*** or ***ReactDOM.render*** method in conjunction with a div element with an id attribute, often named "root" or "app."<br><br>
5. The empty object inside ***React.createElement()*** (second parameter) is the place where we pass the attributes we want to give to the React element for example id , class , styles , etc.<br><br>
6. React.CreateElement is basically an Object and it becomes an HTML at the behind by the React<br><br>
7. When we log the heading on the console , we find that it is basically ***createElement*** of JS being rendered in background , so at the end , React behind the scenes uses JS APIs to a great extent.<br><br>
8. Inside ***React.createElement()*** , the third arguement is the child of the element we are creating , so when we want ti create nested divs or something else , we just create the Element there.<br><br>
9. If we want to add multiple children in the third arguement of the ***React.createElement()*** , we can do it using an array.<br><br>
10. **React** is library and not a framework because it can work on a small portion or a separate portion of even a tag of HTML , so you need not to get the entire project to be loaded to use react , can be used in a single tag<br><br>
11. If we say add something inside the **root** div of the HTML we are trying to render react , for a milisecond we see the original thing written in the HTMl and then it gets overwritten by react. This effect is called **Flash of Unstyled / Initial Content**. The initial HTML is rendered by the browser before React loads, and once React initializes, it replaces the root container’s content, causing a brief flash.<br><br>
12. See the following code -> 
````HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Primitive React</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script>
        
        const heading = React.createElement("h1", {
            id:"heading"
        }, "Hello World From React");

        const heading2 = React.createElement("h2", {
            id: "heading2", onclick:() => {alert("heading 2 clicked")}
        }, "Hello World from Heading2")

        const heading3 = React.createElement("h3", {
            id:"heading3"
        },"Hello World from Heading3")

        const container = React.createElement("div", {
            id:"container-div"
        },[
            heading, heading2, heading3
        ])

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(container);
    </script>
  </body>
</html>
````
If u see , we have created multiple heading and then rendered them on a single container and then rendered them. But one doubt while exploration that why cant we create a **root** div using ***createElement()*** and then pass it in ***createRoot()***. This is because ***createRoot()*** expects us to pass **Real DOM** in it and not **Virtual DOM**. And what we create using ***createElement()*** is **Virtual DOM**, so it throws an error.<br><br>