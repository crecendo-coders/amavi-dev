import loading from "../assets/loading.svg";
const spinnerStyle = {
  "position": "absolute",
  "display": "flex",
  "justify-content": "center",
  "height": "100vh",
  "width": "100vw",
  "background-color": "white",
  "top": 0,
  "bottom": 0,
  "left": 0,
  "right": 0,
}
const Loading = () => (
  <div className={spinnerStyle}>
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;