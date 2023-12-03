const Icon = ({ iconName, className = "", width, height }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/images/svg/sprite.svg#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
