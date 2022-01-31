function AdsBanner({ width = 970, height = 50 }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
      data-testid="ads-banner"
      className="bg-gray-200 text-center flex justify-center items-center my-5 max-w-full mx-auto"
    >
      <p>
        {width} x {height}
      </p>
    </div>
  );
}

export default AdsBanner;
