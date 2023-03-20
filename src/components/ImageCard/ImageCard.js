import { motion } from "framer-motion";
import './ImageCard.css';

function ImageCard(props) {

    return (
      
         <div id="pexelsCard" className="card">
            <motion.img 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            key={props.url}
            alt="calm" 
            src={props.url} />
            </div>
           
   )
}
export default ImageCard; 
