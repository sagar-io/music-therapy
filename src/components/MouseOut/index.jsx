import { MouseOutBuilder } from "./MouseOutBuilder";
import { motion } from "framer-motion";
import { useMouseLocator } from "./mouseLocator";
import { useRef } from "react";

export const MouseOut = () => {
  const data = [
    {
      img: "assets/shoes-17797.png",
      title: "Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin efficitur quam, non tempus purus molestie aliquam. Quisque nisi sapien, rutrum vitae consequat ac.",
    },
    {
      img: "assets/shoes-17837.png",
      title: "Title 2",
      text: "Sed lacinia consequat turpis, nec pellentesque nibh dictum vitae. Pellentesque rutrum porttitor mi sit amet hendrerit. Sed sagittis feugiat orci ut tempor. Cras bibendum eu ipsum id sagittis.",
    },
    {
      img: "assets/shoes-17851.png",
      title: "Title 3",
      text: "Nunc neque arcu, tincidunt id augue nec, molestie auctor lectus. Ut congue eros vitae scelerisque sagittis. Suspendisse efficitur,",
    },
    {
      img: "assets/shoes-17799.png",
      title: "Title 4",
      text: "Vestibulum risus elit, feugiat non dapibus at, tempor et nunc. Morbi ultrices suscipit purus et semper. Proin posuere tincidunt lectus id mattis. Aliquam gravida magna a tellus accumsan hendrerit. Donec sollicitudin non erat id dignissim.",
    },
  ];

  const elements = data.map((dataSet, id) => (
    <MouseOutBuilder
      img={dataSet.img}
      title={dataSet.title}
      text={dataSet.text}
      key={id}
    />
  ));

  return (
    <>
      <div className="cursor-none grid grid-cols-4 hover:grid-cols-5 bg-slate-180 min-h-screen divide-x-4 divide-teal-500">
        {elements}
      </div>
      <Box/>
    </>
  );
};

const Box = () => {
  const ref = useRef(null);
  const { x, y } = useMouseLocator(ref);

  return (
    <>
      <motion.div
        className="relative rounded-full border-2 border-red-500 block p-8 mx-auto mt-16 w-12 h-12 bg-red-100 text-white"
        ref={ref}
        initial={{ opacity: 0.4, scale: 0.4 }}
        animate={{ x: x , y: y - 85, opacity: 1, scale: 1 }}
        transition={
          {
            duration: 0,
            // type: "spring",
            // stiffness: 100,
            // restDelta: 0.001,
          }
        }
      ></motion.div>
    </>
  );
};

const FunkyBox = () => {
  const ref = useRef(null);
  const { x, y } = useMouseLocator(ref);

  return (
    <>
      <motion.div
        className=" z-10 rounded-full border-2 border-red-500 block p-8 mx-auto mt-16 w-12 h-12 bg-red-100 text-white"
        ref={ref}
        initial={{ opacity: 0.4, scale: 0.4 }}
        animate={{ x, y, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 4,
          restDelta: 0.001,
        }}
      ></motion.div>

      {/* <motion.div
        className="border-2 border-emerald-950 block p-4 mx-auto mt-16 w-min bg-red-400 text-white"
        // initial={{ x: -500, opacity: 0.4, scale: 0.4 }}
        animate={{
          scale: [0.2, 0.4, 0.6, 0.8, 1],
          rotate: [72, 144, 216, 288, 360],
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100}}
        whileHover={{ x: "50%" }}
      >
        Hello
      </motion.div> */}
    </>
  );
};
