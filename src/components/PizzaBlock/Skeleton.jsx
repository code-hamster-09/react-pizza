import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="309" rx="17" ry="17" width="280" height="88" />
    <rect x="1" y="428" rx="8" ry="8" width="91" height="27" />
    <rect x="127" y="414" rx="25" ry="25" width="152" height="45" />
    <rect x="0" y="260" rx="13" ry="13" width="280" height="27" />
  </ContentLoader>
);

export default PizzaSkeleton;
