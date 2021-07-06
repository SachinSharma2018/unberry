// styles
import "./styles.scss";

function InputPrimary(props) {
  return (
    <div className="input-box-style">
      <input
        className="form-input"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />

      {props.icon && <img src={props.icon} className="input-icon" alt="" />}
    </div>
  );
}

export default InputPrimary;
