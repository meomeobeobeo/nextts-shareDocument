import { ReactNode } from "react";

export interface Layout {
    children : ReactNode
}
export interface MyIconProps {
    width : number,
    height : number,
    styles? : string
}

export interface SelectSearchComponentProps {
    className? : React.ComponentProps<"div">["className"];
    apiName? : string,
    action? : any,
}
export type ProgressDownLoadAndUploadFileStatus = "success" | "exception" | "normal" | "active"