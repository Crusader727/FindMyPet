import React, { Component, ReactNode } from "react";

// Constants
import { HIS_NAME_MIGHT_BE, NAMES_ARRAY } from "constants/publication-preview";

// Components
import { MoreIcon } from "components/common/icons/more";
import { DogIcon } from "components/common/icons/dog";
import { LocationIcon } from "components/common/icons/location";
import { LikedIcon } from "components/common/icons/star";

// Utils
import { isEmpty } from "utils/isEmpty";
import { randomName } from "utils/randomName"

// Types
import { PublicationPreviewProps } from "types/publication-preview";

import * as s from './publication-preview.scss';

interface PublicationPreviewType {
    publicationPreview?: PublicationPreviewProps;
}

export class PublicationPreview<PublicationPreviewType> extends Component {
    props: PublicationPreviewProps;

    public render(): ReactNode {
        const { name, pictures, tags, descriptionElement, address } = this.props;

        return (
            <div className={s.publication}>
                <div className={s.publicationHeader}>
                    <div className={s.publicationHeaderRight}>
                        <div className={s.publicationHeaderRightIconWrapper}>
                            <DogIcon className={s.publicationHeaderRightIconWrapperIcon} />
                        </div>
                        <div className={s.publicationHeaderRightName}>
                            {isEmpty(name) ?
                                <div className={s.publicationHeaderRightNamePrefixName}>
                                    {HIS_NAME_MIGHT_BE}
                                    <div>
                                        {randomName(NAMES_ARRAY)}
                                    </div>
                                </div> :
                                <div className={s.publicationHeaderRightNamePetName}>
                                    {name}
                                </div>
                            }
                        </div>
                    </div>
                    <MoreIcon />
                </div>
                <div className={s.publicationImage} style={{ backgroundImage: `url(${pictures[0]})` }} />
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
                    <div className={s.publicationFooterLeft}>
                        <LocationIcon className={s.publicationFooterLeftAddressIcon} />
                        <div className={s.publicationFooterLeftAddress}>
                            <div className={s.publicationFooterLeftAddressStreet}>
                                {address.street}
                            </div>
                            {address.subways.map((subway) =>
                                <div className={s.publicationFooterLeftAddressSubway}>
                                    <div style={{ backgroundColor: `${subway.color}` }} className={s.publicationFooterLeftAddressSubwayColor}></div>
                                    {subway.subway}
                                </div>
                            )}
                        </div>
                    </div>
                    <LikedIcon />
                </div>
            </div>
        );
    }
}
