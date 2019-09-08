import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PublicationPreview } from "./publication-preview";

const name = "Шарик";
const tags = ["Есть Прививки", "Очко выбрито"];
const descriptionElement = "Приучен ссать на тапки";
const address = 'Ул. Победы Путина д.22'
const subways = [{
    subway: 'Электрозаводская',
    color: '#666666'
}]

storiesOf("Publication Preview", module)
    .add("Дефолтное состояние", () => (
        <PublicationPreview
            name={name}
            tags={tags}
            descriptionElement={descriptionElement}
            address={address}
            subways={subways}
        />
    ))
    .add("Отсутствует картинка", () => (
        <PublicationPreview />
    ));
