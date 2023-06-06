import React from "react";
import clsx from "clsx";

import styles from "../assets/scss/Button.module.scss";

function ButtonComponent({
  title,
  content,
  active,
  outline,
  outlineActive,
  text,
  textDisable,
  disableShadow,
  disable,
  icon,
  sizeMd,
  sizeLg,
  primary,
  primaryActive,
  secondary,
  secondaryActive,
  danger,
  dangerActive,
}) {
  const classes = clsx(styles.btn, {
    [styles.btnDefaultActive]: active,
    [styles.btnDisable]: disable,
    [styles.btnOutline]: outline,
    [styles.btnOutlineActive]: outlineActive,
    [styles.btnText]: text,
    [styles.btnTextDisable]: textDisable,
    [styles.btnDisableShadow]: disableShadow,
    [styles.btnIcon]: icon,
    [styles.btnSizeMd]: sizeMd,
    [styles.btnSizeLg]: sizeLg,
    [styles.btnPrimary]: primary,
    [styles.btnPrimaryActive]: primaryActive,
    [styles.btnSecondary]: secondary,
    [styles.btnSecondaryActive]: secondaryActive,
    [styles.btnDanger]: danger,
    [styles.btnDangerActive]: dangerActive,
  });
  return (
    <div className={styles.btnComponent}>
        <p> {title} </p>
        <button className={classes}> {content} </button>
    </div>
  );
}

export default ButtonComponent;
