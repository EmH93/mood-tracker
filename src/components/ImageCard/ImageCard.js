import { motion, AnimatePresence, animate } from "framer-motion";
import './ImageCard.css';

function ImageCard(props) {

    const image = document.getElementById("ImageCard")
    animate(image, { bounce: 0.6}, { duration: 3 })

    return (
        <AnimatePresence>
         <motion.div 
            id="pexelsCard" className="card">
            <img alt="calm" src={props.url} />
            </motion.div>
            </AnimatePresence>
   )
}
export default ImageCard; 

// animate={{rotate: 360}}
//             transition={{type: "spring", duration: 5, bounce: 0.6 }}
//             exit={{type: "spring", duration: 5, bounce: 0.6 }}