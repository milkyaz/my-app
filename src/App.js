import React, { useState } from "react";
import customizingThemes from "./customizingThemes.json";
import { EuiText, EuiForm, EuiButton, EuiFieldPassword } from "@elastic/eui";
import { css } from "@emotion/react";

function App() {
  // console.log(customizingThemes.base)
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [dual, setDual] = useState(true);

  const {
    base,
    font: {
      weight: { semiBold },
    },
  } = customizingThemes;

  return (
    <div className="password__change">
      <EuiForm component="form" css={css``}>
        <div className="password__one">
          <EuiText
            css={{
              fontSize: base,
              fontWeight: semiBold,
              padding: "5px",
            }}
          >
            Новый пароль
          </EuiText>{" "}
          <EuiFieldPassword
            size=""
            className="password__change"
            placeholder="Введите пароль"
            type={dual ? "dual" : undefined}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            aria-label="Use aria labels when no actual label is in use"
            autoComplete="off"
          />
        </div>
        <div className="password__first">
          <EuiText
            css={{
              fontSize: base,
              fontWeight: semiBold,
              padding: "5px",
            }}
          >
            Повторите пароль
          </EuiText>
          <EuiFieldPassword
            className="password__change"
            placeholder="Введите пароль ещё раз"
            type={dual ? "dual" : undefined}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            aria-label="Use aria labels when no actual label is in use"
            autoComplete="off"
          />
        </div>
        <EuiButton color="text" minWidth={300}>
          Изменить пароль
        </EuiButton>
      </EuiForm>
    </div>
  );
}

export { App };
