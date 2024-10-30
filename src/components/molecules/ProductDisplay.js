import Label from "../atoms/Label";
import ImageBlock from "../atoms/ImageBlock";
import TextBlock from "../atoms/TextBlock";
import data from "../../data/data.json";

const ProductDisplay = ({ className, displayContent }) => {
  return (
    <div className={`container ${className}`}>
      <Label label={displayContent.title} />
      <div className="row mt-3">
        <div className="col-md-5">
          <ImageBlock src={displayContent.imageUrl} alt="Placeholder Image" />
        </div>
        <div className="col-md-7">
          <TextBlock text={displayContent.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
