import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PublicationPreview } from "./publication-preview";

const name = "Шарик";
const tags = ["Есть Прививки", "Не леняет"];
const descriptionElement = "Приучен к лотку";
const pictures = ['http://newrussianmarkets.com/wp-content/uploads/2018/10/f2d0f2696e6151d756c59f26a4bf6307.jpg'];
const address = {
    country: 'Россия',
    city: 'Москва',
    street: 'Ул. Победы Путина д.22',
    buildingNumber: '25',
    subways: [{
        subway: 'Электрозаводская',
        color: '#666666',
    }],
};

storiesOf("Publication Preview", module)
    .add("Дефолтное состояние", () => (
        <PublicationPreview
            name={name}
            tags={tags}
            descriptionElement={descriptionElement}
            address={address}
            pictures={pictures}
        />
    ))
    .add("Нет имени", () => (
        <PublicationPreview
            tags={tags}
            descriptionElement={descriptionElement}
            address={address}
            pictures={pictures}
        />
    ));
