import { createDynamicArray } from '../utils/array';
import Star from './star';
function ProductCard({ withProfileImage, noBorder, data, matchSkin, styles }) {
  const { description, image, name, rating } = data?.product ?? {};

  return (
    <>
      <div
        className={`w-full md:w-1/3 lg:w-48% xl:w-18% ${!noBorder && 'border-2'} rounded-lg relative my-6 ${styles}`}
      >
        {withProfileImage && (
          <div className="w-20 h-auto inline-flex items-center justify-center text-indigo-500 mb-4 absolute top-0 -mt-10 ml-12">
            <img
              src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
              alt="editor profile"
              className="w-12 h-12 rounded-full object-center object-cover"
            />

            <div className="ml-4 text-black self-baseline">
              <p className="capitalize text-black">{data?.editor} </p>
              <small className="text-neutral-500">{data?.role} </small>
            </div>
          </div>
        )}

        <div className="bg-white p-4 rounded-lg ">
          <img className="h-40 rounded w-full object-contain object-center mb-6 max-w-full" src={image} alt="content" />
          {matchSkin && <p className="text-base text-red-800 capitalize"> match skin type </p>}
          <span className="flex items-center">
            <span className="mr-2">{rating}</span>
            {createDynamicArray(Math.round(rating))?.map((_, i) => (
              <Star key={i} />
            ))}

            <span className="ml-2">(2)</span>
          </span>
          <h2 className="text-lg text-gray-900 font-medium title-font my-2 uppercase">{name}</h2>
          <p className="leading-relaxed text-base line-clamp-2">{description}</p>
          <p className="text-base text-neutral-400"> Rosy Beige</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
