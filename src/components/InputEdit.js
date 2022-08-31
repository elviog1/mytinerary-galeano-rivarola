function EditInput(props){
    const allCities = props.data


    const select =(item) =>(
         <option value={item.name}>{item.name}</option>
    )

    return(
        <>
           {allCities.map(select)}
        </>
    )
}

export default EditInput