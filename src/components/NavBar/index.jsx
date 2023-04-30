import { NavBarBuilder } from "./NavBarBuilder";

const landingNavData = [
  { name: "Main" },
  { name: "Description" },
  { name: "History" },
  { name: "Blogs" },
];

const blogNavData = [{ name: "Merit" }, { name: "DeMerit" }];

export const LandingNavBar = () => {
  return <NavBarBuilder navData={landingNavData} />;
};

export const BlogNavBar = () => {
  return <NavBarBuilder navData={blogNavData} />;
};
