import Star from './star';
import { useState } from 'react';

function ReviewCard() {
  const [fullDescription, SetFullDescription] = useState(false);
  return (
    <div className="md:w-1/2 border-2 rounded-md p-4 relative">
      <div className="flex border-b-2 py-2 mb-2">
        <img
          src="https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg"
          alt="product picture (tonymoly)"
          className="max-w-full w-20 h-20 rounded-lg object-center object-cover"
        />

        <div>
          <h3 className="title-font font-bold uppercase"> Title </h3>
          <h4 className="text-md text-gray-700"> Title </h4>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <Star />
        <span className="text-sm text-gray-400">2 hours ago</span>
      </div>

      {!fullDescription ? (
        <>
          <p className="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cum, minus explicabo, magni iure sapiente
            molestias tempore ut porro modi accusamus optio neque iusto laborum voluptas natus necessitatibus nihil
            delectus!
          </p>
          <button className="text-red-400" type="button" onClick={() => SetFullDescription(!fullDescription)}>
            show more
          </button>
        </>
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cum, minus explicabo, magni iure sapiente
          molestias tempore ut porro modi accusamus optio neque iusto laborum voluptas natus necessitatibus nihil
          delectus!
        </p>
      )}

      <div className="w-10 h-10 mx-auto items-center justify-center mb-4 absolute bottom-0 -mb-8">
        <img
          src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
          alt="editor profile"
          className="w-24 h-auto rounded-full object-center object-cover"
        />

        <div className="text-black self-baseline">
          <p>Arinda </p>
          <small>arinde </small>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
