function ArticleCard() {
  return (
    <div className="my-4 w-full md:w-auto lg:w-32%">
      <img
        src="https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg"
        alt="product picture (tonymoly)"
        className="max-w-full h-auto rounded-lg object-center object-cover"
      />

      <div>
        <h3 className="title-font font-bold capitalize text-xl"> 9 Best Facewash for oily skin</h3>
        <div className="flex gap-2">
          <span className="text-black-200">Username </span>
          <span className="text-gray-400">|</span>
          <span className="text-neutral-400">2 hours ago</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
