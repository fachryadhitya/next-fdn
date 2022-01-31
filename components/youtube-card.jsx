function YoutubeCard({ src, title, className }) {
  return (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={`w-full ${className}`}
    ></iframe>
  );
}

export default YoutubeCard;
