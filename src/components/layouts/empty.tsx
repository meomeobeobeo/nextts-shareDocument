import { Layout } from "@/model";
import React from "react";
import "@style/global.scss";

export default function EmptyLayout(props: Layout) {
  return <>{props.children}</>;
}
        