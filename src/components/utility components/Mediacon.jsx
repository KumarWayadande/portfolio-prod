const MediaIcon = (prop) => {
  return (
    <div className="media-icon text-xl">
      <a href={prop.link} onClick={prop.onClick}>
        <i className={`${prop.class} text-[#a19e97] hover:text-[#75736e] dark:hover:text-[#b5b2ab]`}></i>
      </a>
    </div>
  );
};

export default MediaIcon;
