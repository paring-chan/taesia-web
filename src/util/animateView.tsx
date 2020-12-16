import React, {ComponentType} from "react";
import {motion} from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    show: {
        opacity: 1,
        x: 0
    }
}

export default (function animateView(Component: ComponentType) : React.FC<any> {
    return (props) => (
        <motion.div exit="hidden" variants={variants} initial="hidden" animate="show">
            <Component {...props}/>
        </motion.div>
    )
})