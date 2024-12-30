const HeadingContainer = (prop) => {
  return (
    <div className="heading mt-20 sm:w-[100%] md:w-[65%] px-2">{prop.children}</div>
  );
};

export default HeadingContainer;
