import { string } from "prop-types";

export interface PublicationPreviewProps {
    id?: string;
    name?: string;
    pictures?: Array<string>;
    tags?: Array<string>;
    kind?: string;
    descriptionElement?: string;
    address?: {
        country?: string,
        city?: string,
        street?: string,
        buildingNumber?: string,
        subways?: Array<{ subway: string, color: string }>
    };
}
