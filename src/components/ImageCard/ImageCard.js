import './ImageCard.css';

function ImageCard(props) {
    return (
    <div className="card">
          <img alt="calm" src={props.url} />
    </div>
        )
}
export default ImageCard;