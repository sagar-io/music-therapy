import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavBarItemsBuilder = ({
  name,
  handleActiveItem,
  liStyle,
  active,
}) => {
  return (
    <li>
      <AnchorLink
        href={"#" + name}
        className={liStyle(name)}
        name={name}
        onClick={handleActiveItem}
      >
        {name}
      </AnchorLink>
    </li>
  );
};
