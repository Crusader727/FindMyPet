import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PublicationPreview } from "./publication-preview";

const name = "Шарик";
const tags = ["Есть Прививки", "Не леняет"];
const descriptionElement = "Приучен к лотку";
const pictures = ['https://im0-tub-ru.yandex.net/i?id=323c9c7273add15d5900d05f83b854fc-l&n=13'];
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
