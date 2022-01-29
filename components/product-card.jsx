function ProductCard({ withProfileImage, noBorder }) {
  return (
    <>
      <div className={`w-full md:w-1/3 lg:w-48% xl:w-18% ${!noBorder && 'border-2'} rounded-lg relative my-6`}>
        {withProfileImage && (
          <div className="w-20 h-auto inline-flex items-center justify-center text-indigo-500 mb-4 absolute top-0 -mt-8 ml-12">
            <img
              src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
              alt="editor profile"
              className="w-12 h-12 rounded-full object-center object-cover"
            />

            <div className="ml-4 text-black self-baseline">
              <p>Arinda </p>
              <small>Arinda </small>
            </div>
          </div>
        )}

        <div className="bg-white p-4 rounded-lg ">
          <img
            className="h-40 rounded w-full object-contain object-center mb-6 max-w-full"
            src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
            alt="content"
          />
          <span className="flex items-center">
            <span className="mr-2">4.9</span>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="ml-2">(2)</span>
          </span>
          <h2 className="text-lg text-gray-900 font-medium title-font my-4 uppercase">Val by Valerie uhuy</h2>
          <p className="leading-relaxed text-base line-clamp-2">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
