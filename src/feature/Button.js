import React from "react";

import styles from "../assets/scss/Button.module.scss";
import ButtonComponent from "../components/ButtonComponent";

function Button() {
  return (
    <div className={styles.layoutButton}>
      <h4> Challenge 1 - Buttons </h4>

      <div className={styles.boxButton}>
        <ButtonComponent title={"<Button />"} content={"Default"} />
        <ButtonComponent title={"&:hover &:focus"} content={"Default"} active />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button variant=”outline” />"}
          content={"Default"}
          outline
        />
        <ButtonComponent
          title={"&:hover &:focus"}
          content={"Default"}
          outline
          outlineActive
        />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button variant=”text” />"}
          content={"Default"}
          text
        />
        <ButtonComponent
          title={"&:hover &:focus"}
          content={"Default"}
          text
          outlineActive
        />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button disableShadow />"}
          content={"Default"}
          disableShadow
        />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button disabled />"}
          content={"Disable"}
          disable
        />
        <ButtonComponent
          title={"<Button variant=”text” disabled />"}
          content={"Disable"}
          textDisable
          disable
        />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button startIcon=”local_grocery_store” />"}
          content={[
            <span
              class="material-symbols-outlined"
              style={{ paddingRight: "5px" }}
            >
              add_shopping_cart
            </span>,
            "Default",
          ]}
          icon
        />
        <ButtonComponent
          title={"<Button endIcon=”local_grocery_store” />"}
          content={[
            "Default",
            <span
              class="material-symbols-outlined"
              style={{ paddingLeft: "5px" }}
            >
              add_shopping_cart
            </span>,
          ]}
          icon
        />
      </div>

      <div className={styles.boxButton}>
        <ButtonComponent
          title={"<Button size=”sm” />"}
          content={"Default"}
          icon
        />
        <ButtonComponent
          title={"<Button size=”md” />"}
          content={"Default"}
          sizeMd
          icon
        />
        <ButtonComponent
          title={"<Button size=”lg” />"}
          content={"Default"}
          sizeLg
          icon
        />
      </div>

      <div className={styles.boxButton}>
        <div>
          <ButtonComponent
            title={"<Button color=”default” />"}
            content={"Default"}
          />
          <ButtonComponent
            title={"&:hover &:focus"}
            content={"Default"}
            active
          />
        </div>
        <div>
          <ButtonComponent
            title={"<Button color=”primary” />"}
            content={"Default"}
            primary
          />
          <ButtonComponent
            title={"&:hover &:focus"}
            content={"Default"}
            primary
            primaryActive
          />
        </div>
        <div>
          <ButtonComponent
            title={"<Button color=”secondary” />"}
            content={"Secondary"}
            secondary
          />
          <ButtonComponent
            title={"&:hover &:focus"}
            content={"Secondary"}
            secondary
            secondaryActive
          />
        </div>
        <div>
          <ButtonComponent
            title={"<Button color=”danger” />"}
            content={"Danger"}
            danger
          />
          <ButtonComponent
            title={"&:hover &:focus"}
            content={"Danger"}
            danger
            dangerActive
          />
        </div>
      </div>
    </div>
  );
}

export default Button;
