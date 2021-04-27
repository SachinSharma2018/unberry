// styles
import "./styles.scss";

function VerticalProgress(props) {
  return (
    <div class="progress progress-bar-vertical">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow={props.height}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{height: `${props.height}%`}}
      />
    </div>
  );
}

export default VerticalProgress;
