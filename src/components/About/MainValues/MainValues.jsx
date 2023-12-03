import Icon from "src/schared/components/Icon";

import mainValues from "./main-values.json";

import css from "./MainValues.module.css";

const MainValues = () => {
  return (
    <ul className={css.list}>
      {mainValues.map(({ title, iconName, text }) => (
        <li key={title} className={css.item}>
          <div className={css.iconTitleWrap}>
            <Icon
              iconName={iconName}
              width="16"
              height="16"
              className={css.icon}
            />
            <h3 className={css.title}>{title}</h3>
          </div>
          <hr className={css.line} />

          <p className={css.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default MainValues;
