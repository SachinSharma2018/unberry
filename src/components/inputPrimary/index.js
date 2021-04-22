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
    </div>
  );
}

export default InputPrimary;
