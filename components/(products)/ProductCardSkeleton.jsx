const ProductCardSkeleton = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="h-96 w-full skeleton "></div>
      <div className="card-body">
        <div className="card-actions w-full h-2 skeleton "></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
