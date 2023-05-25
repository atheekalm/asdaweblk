import { SvgIconProps } from "@mui/material";

export interface SidebarMenuItem {
    id: string;
    caption: string;
    path?: string;
    icon?: React.ReactElement<SvgIconProps>;
    divider: boolean;
    childrens?: SidebarMenuItem[];
  }