function Thead(){
    return(
        <>
        <tr><th>name</th></tr>
        <tr><th>age</th></tr>

        </>
    )
}

 function Tbody(props){
    const{char}=props
    var row=char.map(ch=>{
      return <tr><td>{ch.name}</td><td>{ch.age}</td></tr>
    })
    return(
        <>
        {row}
        </>
    )
 }


 function Table(){
    const char=[{name:"vinoth",age:16},
    {name:"arun9",age:9},
    {name:"jingly",age:17},]

    
    return(
        <>
        <table>
            <Thead></Thead>
            <Tbody char={char}></Tbody>
        </table>
        </>
    )
 }
 export default Table