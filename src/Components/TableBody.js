import '../App.css';
const  TableBody=(props) =>{
    return (
        <tbody>
            {props.data.map((phoneNumber,index)=>
            <tr key={index}>
                <td>{phoneNumber["phoneNumber"]}</td>
                <td>{phoneNumber["country"]}</td>
                <td>{""+phoneNumber["valid"]}</td>
            </tr>
            )}  
        </tbody>      
    );
}
export default TableBody;