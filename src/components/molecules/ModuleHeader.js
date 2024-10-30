import Label from "../atoms/Label";
import AnchorLink from "../atoms/AnchorLink";

const ModuleHeader = ({ label, linkTitle, linkUrl }) => {
  return (
    <div>
      <Label label={label} /> {" | "}{" "}
      <AnchorLink linkTitle={linkTitle} linkUrl={linkUrl} />
    </div>
  );
};

export default ModuleHeader;
