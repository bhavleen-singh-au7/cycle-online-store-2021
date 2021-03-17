import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://ceblog.s3.amazonaws.com/wp-content/uploads/2017/11/02124002/ecommerce-ux.png";
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        alt="cycle_image"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
