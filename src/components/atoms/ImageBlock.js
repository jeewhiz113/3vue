const ImageBlock = ({ src, alt, className }) => {
  return (
    <div className={`image-block ${className}`}>
      <img src={src} alt={alt} className="img-fluid" />
    </div>
  );
};

export default ImageBlock;
