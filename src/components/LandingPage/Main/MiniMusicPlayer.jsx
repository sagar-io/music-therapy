import AudioPlayer from "react-cl-audio-player";
import {motion} from 'framer-motion'

export const MiniMusicPlayer = () => {
  const songs = [
    {
      url: "assets/m1.mp3",
      cover: 'assets/gt-1.jpg',
      artist: {
        name: "Feel the Soothing !",
        song: "Album",
      },
    },
    {
      url: "assets/m2.mp3",
      cover: 'assets/gt-1.jpg',
      artist: {
        name: "You are recovering now !",
        song: "Song",
      },
    },
    {
      url: "assets/m3.mp3",
      cover: 'assets/gt-1.jpg',
      artist: {
        name: "You're all good !",
        song: "Collection",
      },
    },
  ];

  return (
    <motion.div 
    className="float-left scale-75 mt-[-10rem] text-black"
    initial={{opacity: 0, scale: 0}}
    animate= {{opacity: 1, scale: 0.75}}
    transition={{duration: 1.5, type: "spring"}}
    >
      <AudioPlayer songs={songs} autoplay="true" />
    </motion.div>
  );
};
