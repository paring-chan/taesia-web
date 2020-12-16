import React, {ComponentType} from "react";
import {motion} from "framer-motion";

export default (function animateView(Component: ComponentType) : React.FC<any> {
    return (props) => (
        <motion.div exit={{
            opacity: 0
        }} initial={{
            opacity: 0
        }} animate={{
            opacity: 1
        }}>
            <Component {...props}/>
        </motion.div>
    )
})