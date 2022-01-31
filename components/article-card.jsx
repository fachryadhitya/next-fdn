function ArticleCard({ data }) {
  const { image, author, published_at, title } = data ?? {};
  return (
    <div className="my-4 w-full md:w-auto lg:w-32%">
      <img
        src={image}
        alt="product picture"
        className="max-w-full h-auto rounded-lg object-center object-cover"
      />

      <div>
        <h3 className="title-font font-bold capitalize text-xl"> {title}</h3>
        <div className="flex gap-2">
          <span className="text-black-200">{author} </span>
          <span className="text-gray-400">|</span>
          <span className="text-neutral-400">{published_at}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
