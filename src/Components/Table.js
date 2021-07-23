import '../App.css';
const  Table=(props)=> {
    return (
    <table className="phoneNumbers"> 
        {props.children}
    </table>
    );
}
export default Table;