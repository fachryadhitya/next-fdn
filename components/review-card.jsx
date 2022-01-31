import Star from './star';
import { useState } from 'react';
import { createDynamicArray } from '../utils/array';

function ReviewCard({ data }) {
  const [fullDescription, SetFullDescription] = useState(false);
  const { desc, image, name } = data?.product ?? {};

  return (
    <div className="md:w-1/2 border-2 rounded-md p-4 relative">
      <div className="flex border-b-2 py-2 mb-2">
        <img
          src={image}
          alt="product picture (tonymoly)"
          className="max-w-full w-20 h-20 rounded-lg object-center object-cover"
        />

        <div>
          <h3 className="title-font font-bold uppercase"> {name} </h3>
          <h4 className="text-md text-gray-700"> {desc} </h4>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="inline-flex">
          {createDynamicArray(Math.round(data?.star))?.map((_, i) => (
            <Star key={i} />
          ))}
        </span>

        <span className="text-sm text-gray-400">2 hours ago</span>
      </div>

      {!fullDescription ? (
        <>
          <p className="line-clamp-3">{data?.comment}</p>
          <button className="text-red-400" type="button" onClick={() => SetFullDescription(!fullDescription)}>
            show more
          </button>
        </>
      ) : (
        <p>{data?.comment}</p>
      )}

      <div className="w-10 h-10 mx-auto items-center justify-center mb-4 absolute bottom-0 -mb-8">
        <img
          src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
          alt="editor profile"
          className="w-24 h-auto rounded-full object-center object-cover"
        />

        <div className="text-black self-baseline">
          <p>{data?.user} </p>
          {/* <small>{data?.profile} </small> */}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
