import { motion } from "framer-motion";

export const NavBarBuilder = (props) => {
  return (
    <motion.nav 
     className="bg-slate-400 backdrop-blur-lg text-black h-screen w-1/6 fixed left-0"
     initial={{x:'-100%', opacity: 0.2}}
     animate={{x:0, opacity: 1}}
     >
      <h3 className="bg-slate-900 text-white m-0 px-4 py-6 text-center text-xl font-semibold">DashBoard
        
      </h3>
      <ul 
        className="flex flex-col justify-center gap-y-20 h-full p-8"
       >
        <li>
          <a href={"#" + props.a}>{props.b}</a>
        </li>
        <li>
          <a href={"#" + props.b}>{props.c}</a>
        </li>
        <li>
          <a href={"#" + props.c}>{props.d}</a>
        </li>
        <li>
          <a href={"#" + props.d}>{props.a}</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBarBuilder;
