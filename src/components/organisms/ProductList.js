import Label from "../atoms/Label";
import ImageBlock from "../atoms/ImageBlock";
import TextBlock from "../atoms/TextBlock";

const ProductList = ({ cols, displayContent }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <table className="table table-image table-bordered">
            <thead>
              <tr>
                {cols.map((col) => (
                  <th scope="col">
                    <Label label={col} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayContent.map((row) => (
                <tr>
                  <td>
                    <Label label={row.title} className="" />
                  </td>
                  <td className="w-25">
                    <ImageBlock src={row.imageUrl} alt="Placeholder Image" />
                  </td>
                  <td>
                    <TextBlock text={row.description} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
