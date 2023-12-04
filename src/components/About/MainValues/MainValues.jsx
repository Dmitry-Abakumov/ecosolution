import Icon from "src/schared/components/Icon";

import mainValues from "./main-values.json";

import css from "./MainValues.module.css";

const MainValues = () => {
  return (
    <>
      <div className={css.mainValues}>
        {mainValues.map(({ title, iconName, text }) => (
          <div key={title} className={`${css.card} value${title}`}>
            <div className={css.iconTitleWrap}>
              <Icon iconName={iconName} className={css.icon} />
              <h3 className={css.title}>{title}</h3>
            </div>
            <hr className={css.divne} />

            <p className={css.text}>{text}</p>
          </div>
        ))}

        <picture className={css.windGeneratorEngineersImg}>
          <source
            srcSet="/images/desktop/wind-generator-engineers-desktop.jpg"
            media="(min-width: 1280px)"
          />
          <img
            className={css.img}
            alt="Wind generator engineers"
            src="/images/tablet/wind-generator-engineers-tablet.jpg"
            loading="lazy"
          />
        </picture>
        <picture className={css.solarPanelEngineersImg}>
          <source
            srcSet="/images/desktop/solar-panel-engineer-desktop.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/images/tablet/solar-panel-engineer-tablet.jpg"
            media="(min-width: 768px)"
          />
          <img
            className={css.img}
            alt="Solar panel engineers"
            src="/images/tablet/solar-panel-engineer-tablet.jpg"
            loading="lazy"
          />
        </picture>
      </div>
    </>
  );
};

export default MainValues;
