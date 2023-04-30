import {motion} from 'framer-motion'

export const SpecialSectionBuilder = (props) => {
  return (
    <div id={props.id} className="float-right w-10/12 flex align-middle justify-center h-screen mb-64">
      <motion.div 
      className="bg-yellow-500 flex align-middle self-center justify-center w-80 h-80 rounded-full shadow-2xl relative"
      initial={{opacity:0, scale:0, rotate: 180}}
      animate={{opacity:1, scale: 1}}
      whileInView={{opacity:1, scale: 1, rotate:0}}
      transition={{duration: 1,stiffness: 100, type:"spring"}}
      >
        <p className="self-center text-4xl font-comfotaa text-center text-white">{props.title}</p>
        <div className="absolute rounded-md bg-red-50 shadow-lg p-4 -top-20 left-[0] translate-x-[-100%]">
          {props.a}
        </div>
        <div className="absolute rounded-md bg-red-50 shadow-lg p-4 -bottom-20 left-0 translate-x-[-100%]">
          {props.b}
        </div>
        <div className="absolute rounded-md bg-red-50 shadow-lg p-4 -top-20 right-0 translate-x-[100%]">
          {props.c}
        </div>
        <div className="absolute rounded-md bg-red-50 shadow-lg p-4 -bottom-20 right-0 translate-x-[100%]">
          {props.d}
        </div>
      </motion.div>
    </div>
  );
};
