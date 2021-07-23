import '../App.css';
const  StateOption=(props)=> {
    return (
    <div className="radio">
        <label>
        <input
            className="option-input radio"
            type="radio"
            value={props.state}
            checked={props.selectedOption === props.state}
            onChange={props.onValueChange}
        />
        {props.state}
        </label>
  </div>
    );
}
export default StateOption;