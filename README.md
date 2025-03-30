# React Hooks

Hooks are Special functions in react which allows functional components to work as class components.
The functions which starts with word use are called as hooks.

There are 7 main commonly used hooks in React.js:

## 1.) useState:
useState hook in react is used to manaage the state of a variable which changes overtime.

Eg:
### Syntax:
const [var,setterFn]=useState(initialVal);

## 2.) useEffect:
useEffect hook is used for sideEffects of application.

Eg:
1.) Data Fetching
2.) Rendering Lists etc..

useEffect can be used in 3 ways:
i.) without dependency array
ii.) with Empty dependency array.
iii.) with Dependency variables in dependency 

### Syntax:
==>useEffect(callBackFn,dependcyArr)

Eg:
useEffect(()=>{
  console.log("useEffect without dependency array will execute for every change in component in page.");
})


useEffect(()=>{
  console.log("useEffect with empty dependency array will execute only once after component mounted on page.");
},[]);

useEffect(()=>{
  console.log("useEffect with dependencyVar dependency array will execute Whenever the dependency varaibales has changes.");
},[dependecnyVar]);

## 3.) useRef:
useRef hook in react can be used in 2 ways:
1.) It can be used to prevent the un-necessary renders of elements in page.
2.) It can be used to hold a DOM Element.

### Syntax - example :
const inpRef = useRef();
const App=()=>{
  <input ref={inpRef} onChange={(e)=>inputRef.current.value=e.target.value}/>
}
