import Label from "../atoms/Label";
import ImageBlock from "../atoms/ImageBlock";
import TextBlock from "../atoms/TextBlock";
import data from "../../data/data.json";

const ProductDisplay = ({ className }) => {
  const module1 = data[0].module1;
  console.log("productDisplay", module1.module1);
  return (
    <>
      <div className={`container ${className}`}>
        <Label label={module1.subContent[0].title} />
        <div className="row mt-2">
          <div className="col-md-5">
            <ImageBlock
              src={module1.subContent[0].imageUrl}
              alt="Placeholder Image"
            />
          </div>
          <div className="col-md-7">
            <TextBlock text={module1.subContent[0].description} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
