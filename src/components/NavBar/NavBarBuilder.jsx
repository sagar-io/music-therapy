import { motion } from "framer-motion";
import { useState } from "react";
import { NavBarItemsBuilder } from "./NavBarItemsBuilder";

export const NavBarBuilder = ({ navData }) => {
  const [active, setActive] = useState(null);

  function handleActiveItem(e) {
    setActive(e.target.name);
  }

  const liStyle = (name) => {
    return active == name
      ? "hover:bg-black hover:text-white active:bg-black active:text-white block py-3 text-white bg-black block"
      : "hover:bg-black hover:text-white active:bg-black active:text-white block py-3 block";
  };

  const liElements = navData.map((item, i) => {
    return (
      <NavBarItemsBuilder
        key={i}
        name={item.name}
        handleActiveItem={handleActiveItem}
        active={active}
        liStyle={liStyle}
      />
    );
  });

  return (
    <motion.nav
      className="bg-teal-400 backdrop-blur-lg text-black h-screen w-1/6 fixed left-0"
      initial={{ x: "-100%", opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h3 className="bg-slate-900 text-white m-0 px-4 py-6 text-center text-xl font-semibold">
        DashBoard
      </h3>
      <ul className="flex flex-col justify-center gap-y-20 h-full text-md text-center">
        {liElements}
      </ul>
    </motion.nav>
  );
};

export default NavBarBuilder;
