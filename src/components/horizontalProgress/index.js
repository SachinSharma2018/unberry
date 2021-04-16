// styles
import "./styles.scss";

function HorizontalProgress(props) {
  return (
    <div class="progress progress-bar-horizontal">
      <div
        class="progress-bar"
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
