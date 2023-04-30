import { BlogNavBar } from "../../NavBar";
import { SpecialSectionBuilder } from "./SpecialSectionBuilder";
import { Footer } from "../../Footer/";

export const BlogBuilder = (props) => {
  console.log(props);

  return (
    <div>
      <BlogNavBar />
      <SpecialSectionBuilder
        title="Beneficial Music"
        id='Merit'
        a={props.musicMeritsData[0]}
        b={props.musicMeritsData[1]}
        c={props.musicMeritsData[2]}
        d={props.musicMeritsData[3]}
      />
      <SpecialSectionBuilder
        title="Harmful Music"
        id='DeMerit'
        a={props.musicDeMeritsData[0]}
        b={props.musicDeMeritsData[1]}
        c={props.musicDeMeritsData[2]}
        d={props.musicDeMeritsData[3]}
      />
      <Footer />
    </div>
  );
};
