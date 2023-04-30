import { motion } from "framer-motion";

export const HeroText = () => {
  const text1 = "Music";
  const text2 = "Therapy.";

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: 0.4,
        repeat:'loop',
        staggerChildren: 0.15,
        delayChildren: i * 1
      }
    })
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        damping: 12,
        shiffness: 200
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        shiffness: 200
      }
    },
  };

  return (
    <motion.h1 className="text-[10rem] z-10 mt-8 ml-16 relative font-body leading-[11.5rem] drop-shadow-xl shadow-black text-white" variants={sentence} initial="hidden" animate="visible">
      {text1.split("").map((l, i) => {
        return <motion.span key={l+'_'+i} variants={letter}>
          {l}
        </motion.span>;
      })}
      <br/>
      {text2.split("").map((l, i) => {
        return <motion.span key={l+'_'+i} variants={letter}>
          {l}
        </motion.span>;
      })}
    </motion.h1>
  );
};
