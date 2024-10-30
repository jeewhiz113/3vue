import Label from "../atoms/Label";
import AnchorLink from "../atoms/AnchorLink";

const ModuleHeader = ({ label, linkTitle, linkUrl, className }) => {
  return (
    <div className={className}>
      <Label label={label} /> {" | "}{" "}
      <AnchorLink linkTitle={linkTitle} linkUrl={linkUrl} />
    </div>
  );
};

export default ModuleHeader;
