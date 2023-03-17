import './ImageCard.css';

function ImageCard(props) {
    return (
    <div id="pexelsCard" className="card">
          <img alt="calm" src={props.url} />
    </div>
        )
}
export default ImageCard;