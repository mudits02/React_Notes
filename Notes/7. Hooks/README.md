# Hooks

1. Hooks -> Normal JS utility functions.<br><br>
2. Two important hooks -> useState() , useEffect()<br><br>
3. Whenever a state variable is updated , React **Re-renders** the component<br><br>
4. Read about Reconcilitaion Algoritm (React fiber) in my notebook and also the internet.<br><br>
5. Virtual DOM is the representation of the DOM. If we do say console.log(<Body />) , we will see the virtual dom being printed in the console. It will be print as a React Element(like an object). So that object is the React Virtual DOM. Its a normal JS object.<br><br>
6. Diff Algorithm basically finds the difference between the old virtual DOM and the new virtual DOM created after the event or whatever. Its like 'git diff'.<br><br>
7. [Read more about react fiber](https://github.com/acdlite/react-fiber-architecture)
8. When we declare **useState()** , it basically is destructuring of array that is taking place , **useState()** basically is an array with 2 var inside it.<br><br>
```Js
const [filteredList, setFilteredList] = useState(resList);
```
This actually means the following code
```JS
const arr = useState(resList);

const filteredList = arr[0];
const setFilteredList = arr[1];
```