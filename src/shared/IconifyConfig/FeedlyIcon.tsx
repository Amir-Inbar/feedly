import {ICON} from "./IconifyConfig.tsx";

export type IconName = keyof typeof ICON;

interface FeedlyIcon {
    className?: string;
    icon: IconName
}

export const FeedlyIcon = ({className, icon}: FeedlyIcon) => <span className={className}
>{ICON[icon]}</span>;
