import {motion, useScroll} from "framer-motion"

export const ProgressBar = () => {
    const {scrollYProgress} = useScroll()

  return (
    <motion.div
        className="fixed top-0 left-0 scale-x-0 right-0 origin-left bg-blue-600 h-2 inline-block"
        style={{scaleX: scrollYProgress}}
    >
        
    </motion.div>
  )
}
