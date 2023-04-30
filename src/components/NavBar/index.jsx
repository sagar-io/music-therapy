import { NavBarBuilder } from "./NavBarBuilder";

const landingNavData = {
  a: "Main",
  b: "Description",
  c: "History",
  d: "Blogs",
};
const blogNavData = {
  b: "Merit",
  c: "DeMerit",
};

export const LandingNavBar = () => {
  const { a, b, c, d } = landingNavData;
  return <NavBarBuilder a={a} b={b} c={c} d={d} />;
};

export const BlogNavBar = () => {
  const { a, b, c } = blogNavData;

  return (
    <div>
      <NavBarBuilder a={a} b={b} c={c} />
    </div>
  );
};
