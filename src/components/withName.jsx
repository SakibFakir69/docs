

const withName = (OriginalComponent)=>{
    // take original component

    const NewComponent = (props)=>{
        return <OriginalComponent {...props} name="sakib" role="admin"  />
    }
    return NewComponent;

}
export default  withName;