import React, { Component, ReactNode } from "react";

// Constants
import {HIS_NAME_MIGHT_BE} from "constants/publication-preview";

// Components
import {MoreIcon} from "components/common/icons/more"

// Types
import {PublicationPreviewType} from "types/publication-preview";

import * as s from './publication-preview.scss';

interface PublicationPreviewProps {
    publicationPreview?: PublicationPreviewType;
}

const petName = "Шарик";
// TODO массив строк с тегами
const tag = "Есть Прививки";
const descriptionElement = "Приучен ссать на тапки";

export class PublicationPreview<PublicationPreviewProps> extends Component {

    public render(): ReactNode {
        return (
            <div className={s.publication}>
                <div className={s.publicationHeader}>
                    <div className={s.publicationHeaderPrefixName}>
                        {HIS_NAME_MIGHT_BE}
                    </div>
                    <div className={s.publicationHeaderPetName}>
                        {petName}
                    </div>
                    <MoreIcon />
                </div>
                <div className={s.publicationImage} style={{ backgroundImage: `url(http://newrussianmarkets.com/wp-content/uploads/2018/10/f2d0f2696e6151d756c59f26a4bf6307.jpg)` }} />
                <div className={s.publicationTags}>
                    <div className={s.publicationTagsTag}>
                        {tag}
                    </div>
                </div> 
                <div className={s.publicationDescription}>
                    <div className={s.publicationDescriptionElement}>
                        {descriptionElement}
                    </div>
                </div>
            </div>
        );
    }
}
