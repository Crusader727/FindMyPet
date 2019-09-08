import { string } from "prop-types";

export interface PublicationPreviewProps {
    name?: string;
    tags?: Array<string>;
    descriptionElement?: string;
    address?: string;
    subways?: Array<{ subway: string, color: string }>;
}
