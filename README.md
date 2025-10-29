


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