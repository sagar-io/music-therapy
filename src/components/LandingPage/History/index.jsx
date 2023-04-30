import { motion } from "framer-motion";

export const History = () => {
  return (
    <div id="History" className="float-right w-10/12 p-8">
      <h1 className="text-5xl pb-48 text-center">History</h1>
      <div className="flex gap-8">
        <div className="flex flex-col gap-[50rem] after:absolute after:w-1 after:right-0 after:h-full after:bg-blue-600 relative">
          <motion.div
            className=" text-black text-lg mxl p-8 after:absolute after:bg-orange-600  after:right-5 after:z-[-20] relative after:top-[50%] z-[-1] after:w-24 after:h-24 after:rotate-45"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className=" text-5xl text-black font-bold text-right pb-12">By 5000 BC :</h1>
            <p className="text-center text-white bg-orange-600 p-8 rounded-lg">
              Apollo is the ancient Greek god of music and of medicine and his
              son Aesculapius was said to cure diseases of the mind by using
              song and music. Plato said that music affected the emotions and
              could influence the character of an individual. Aristotle taught
              that music affects the soul and described music as a force that
              purified the emotions. Aulus Cornelius Celsus advocated the sound
              of cymbals and running water for the treatment of mental
              disorders.
            </p>
          </motion.div>
          <motion.div
            className=" text-black text-lg mxl p-8 after:absolute after:bg-orange-600  after:right-5 after:z-[-20] relative after:top-[50%] z-[-1] after:w-24 after:h-24 after:rotate-45"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className=" text-5xl text-black  font-bold text-right pb-12">After 1900 :</h1>
            <p className="text-center text-white bg-orange-600 p-8 rounded-lg">
              Music therapy in the 20th and 21st centuries, as an
              evidence-based, allied healthcare profession, grew out of the
              aftermath of World Wars I and II, when, particularly in the United
              Kingdom and United States, musicians would travel to hospitals and
              play music for soldiers with war-related emotional and physical
              trauma. Using music to treat the mental and physical ailments of
              active duty military and veterans was not new.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.div
            className=" text-black text-lg p-8 after:absolute after:bg-orange-600  after:left-5 after:z-[-20] relative after:top-[50%] z-[-1] after:w-24 after:h-24 after:rotate-45"
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.6, stiffness: 100, type: "spring" }}
          >
            <h1 className=" text-5xl text-black font-bold text-left pb-12">17th - 19th century :</h1>
            <p className="text-center text-white bg-orange-600 p-8 rounded-lg">
              Some books on music and medicine drew on the Brunonian system of
              medicine, arguing that the stimulation of the nerves caused by
              music could directly improve or harm health. Throughout the 19th
              century an impressive number of books and articles were authored
              by physicians in Europe and the United States discussing use of
              music as a therapeutic agent to treat both mental and physical
              illness
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
