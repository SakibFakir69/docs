


## useRef

```markdown
#useRef

`useRef is a react way access dom in react app / in js we access dom use getElementById 
we can access element and element value use ( current and value ) 
[ current => current use for get element 
value => value use for get element value]

example => we access input value 

1.step 
/// create a use ref 
const num = useRef();

2.step 
/// input box
<input type="number" ref={num}>
/// attach reference of num , that can access input element and value 
console.log(num.current)
console.log(num.current.value)

useState
markdown#useState
`useState is a hook in react functional component use for store data and manage state in component 
every time state update re-render component and update on ui 
"example"
const [ state , setState] = useState(initialValue)
state => hold initial value 
setState => set new value on state 
initialValue => new initial value 

"useCase" => update data => handle form 
const [ name , setName ] = useState('')
console.log(name)
</input onChange={(e)=> setName(e.target.value)}>
`

useEffect
markdown"useEffect"
`
useEffect is a  hook in react functional component , it use to handel side effect in react funtional 
component

#use case 
 1. data fetch 
 2. event subcription
 3. dom manupulation 
 4. setItem on localstroage

mount > first effect run ( when component add to dom )
update > if component state or props change use effect 
unmount > component removed from dom 
`

useReducer
markdown "useReducer"
` useReducer is a react functional component hook use to manage and store complex logic 
'syantax`
<!-- declare reducerFn -->
const reducerFn = (state,type)=>{

    switch(type?.action)
    {
        case 'inc':
        return {state:state.count+1}
        case 'dec':
        return {state: state.count-1}
        default:
        return state;
    }

}
const [ state , distpatch] = useReducer(reducerFn , initalValue);

 # 
 1. reducerFn ->  take current state and action and retuen new state 
 2.state -> store current state 
 3.initalValue -> gave starting value to state 
 4.distpatch ->  perfrom action based on reducer function 
`

useCallback
markdown "useCallback"
` useCallback is react funtional component built in hook , this hook use to prevent re-created
function on every re-render 
react create re-render on every state change and use callback prevent the re-create function 

syntax and example
const [ count , setCount ] = useState(0);
const handleIncrement =useCallback(()=>{
    setCount(count+1)
}[]);
`

memo
markdown "memo"
` memo is a react hook and high order component , memo use to rembember component and prevent from unnessary re-render component

const Child= React.memo(()=>{

    return (
        <div>
        <h1>Hello from child</h1>
       </div>
    )


})


 `
useMemo
markdown "useMemo"
useMemo use to remember value inside useMemeo and useMemo use to optimize performance 
useMemo only care about depedency 
if depedency change useMemo run 

const memo = useMemo(()=>{

    for(let i=0; i<10000; i++)
    {
        console.log(i)
    }

    return i; /// remember this value 

},[count]) // count  change when usememo run
`

useContext 
markdown "useContext"
` useContext - ( useContext is a react component hook , this hook use to avoid props driling , useContext hook make state management easy and simple , to passing data in react app we need follow this step , 1. create a context 2.wrap children and gave value on provider 3.recive value from child) `
useLayoutEffect
markdown "useLayoutEffect"
`useLayoutEffect run on before browser  paint the screen ( means when layout calcuate ) and it run synchronously and code execute line by line `



high order Component
markdown "highorderComponent"
`
high order component- ( high order component take a argument and return new component, high order omponent implementation are 3 step -> 1.create a hoc component 2.show props 3.use hoc component and pass component)
`



axios 
markdown "axios"
`  axios - axios is a js library make http request more easy ( get,post,put,patch,delete ) no need to write extra js for this
 request , and easily we can re-use 
 step to use:
 1.install axios
 2.set up axios ( import axios from axios, const instance =axios.create({baseUrl:""})) 
 3.export base url
 4. const data = baseApi.(get,put,pathc);
 `

 react-router 
 markdown 'react-router'
 `
react-router dom is a js library it provide routing , and we make spa(single page application) website with react router , react router have ( useNavigate use to navigate route, useLocation use to get current path location , navlink to to go link and navlink have own isActive class for better unstand which link have not own IsActive class )

use:
1.install react-router then use data mode 
2. use createBrowserRoute([

    {
        path:'/',
        element:<Home>,
        children:[
            {path:'',element:""},{}
        ]
    },
    {
        path:'',
        element:"
    }

])


 `



Redux
Markdown 'redux'
`
`