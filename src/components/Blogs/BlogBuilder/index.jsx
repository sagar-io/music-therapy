import { BlogNavBar } from "../../NavBar";
import { SpecialSectionBuilder } from "./SpecialSectionBuilder";

export const BlogBuilder = (props) => {
  console.log(props);

  return (
    <div>
      <BlogNavBar />
      <SpecialSectionBuilder
        title="Beneficial Music"
        a={props.musicMeritsData[0]}
        b={props.musicMeritsData[1]}
        c={props.musicMeritsData[2]}
        d={props.musicMeritsData[3]}
      />
      <SpecialSectionBuilder
        title="Harmful Music"
        a={props.musicDeMeritsData[0]}
        b={props.musicDeMeritsData[1]}
        c={props.musicDeMeritsData[2]}
        d={props.musicDeMeritsData[3]}
      />
    </div>
  );
};
