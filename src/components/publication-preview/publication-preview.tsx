import React, { Component, ReactNode } from "react";

// Constants
import { HIS_NAME_MIGHT_BE } from "constants/publication-preview";

// Components
import { MoreIcon } from "components/common/icons/more";
import { DogIcon } from "components/common/icons/dog";
import { LocationIcon } from "components/common/icons/location";
import { LikedIcon } from "components/common/icons/star";

// Types
import { PublicationPreviewProps } from "types/publication-preview";

import * as s from './publication-preview.scss';

interface PublicationPreviewType {
    publicationPreview?: PublicationPreviewProps;
}

export class PublicationPreview<PublicationPreviewType> extends Component {
    static defaultProps = {
        name: '',
        tag: '',
        descriptionElement: '',
        address: '',
        subways: [{ subway: '', color: '' }],
    }

    props: PublicationPreviewProps;

    public render(): ReactNode {
        const { name, tags, descriptionElement, address, subways } = this.props;

        return (
            <div className={s.publication}>
                <div className={s.publicationHeader}>
                    <DogIcon />
                    <div className={s.publicationHeaderName}>
                        <div className={s.publicationHeaderNamePrefixName}>
                            {HIS_NAME_MIGHT_BE}
                        </div>
                        <div className={s.publicationHeaderNamePetName}>
                            {name}
                        </div>
                    </div>
                    <MoreIcon />
                </div>
                <div className={s.publicationImage} style={{ backgroundImage: `url(http://newrussianmarkets.com/wp-content/uploads/2018/10/f2d0f2696e6151d756c59f26a4bf6307.jpg)` }} />
                <div className={s.publicationTags}>
                    {tags.map((tag) =>
                        <div className={s.publicationTagsTag}>
                            {tag}
                        </div>
                    )}
                </div>
                <div className={s.publicationDescription}>
                    <div className={s.publicationDescriptionElement}>
                        {descriptionElement}
                    </div>
                </div>
                <div className={s.publicationFooter}>
                    <LocationIcon />
                    <div className={s.publicationFooterAddress}>
                        {address}
                        {subways.map((subway) =>
                            <div className={s.publicationFooterAddressSubway}>
                                <div style={{ backgroundColor: `${subway.color}` }} className={s.publicationFooterAddressSubwayColor}></div>
                                {subway.subway}
                            </div>
                        )}
                    </div>
                    <LikedIcon />
                </div>
            </div>
        );
    }
}
