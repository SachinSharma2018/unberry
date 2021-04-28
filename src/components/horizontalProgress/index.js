// styles
import "./styles.scss";

function HorizontalProgress(props) {
  return (
    <div class={`progress progress-bar-horizontal ${props.className}`}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.width}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width: `${props.width}%`}}
      />
    </div>
  );
}

export default HorizontalProgress;
