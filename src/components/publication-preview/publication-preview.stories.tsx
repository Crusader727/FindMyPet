import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PublicationPreview } from "./publication-preview";

storiesOf("Publication Preview", module)
    .add("Дефолтное состояние", () => (
        <PublicationPreview />
    ))
    .add("Отсутствует картинка", () => (
        <PublicationPreview  />
    ));
