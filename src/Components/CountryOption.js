import '../App.css';
const  CountryOption=(props)=> {
    return (
    <div className="radio">
        <label>
        <input
            className="option-input radio"
            type="radio"
            value={props.country}
            checked={props.selectedOption === props.country}
            onChange={props.onValueChange}
        />
        {props.country}
        </label>
  </div>
    );
}
export default CountryOption;