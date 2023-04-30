import { HeroText } from "./HeroText"
import { MiniMusicPlayer } from "./MiniMusicPlayer"

export const Main = () => {
  return (
    <div className="float-right w-10/12 text-teal-400 h-screen" style={{background: "url('assets/gt-1.jpg') no-repeat", backgroundSize: "cover"}}>
         <HeroText />
         <MiniMusicPlayer/>
    </div>
  )
}
