import React from "react";
import SearchDashBoard from "../SearchDashBoard";
import PreviewCart from "../card/PreviewCart";

type Props = {};

export default function DiscoveryDashBoard({}: Props) {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      {/* top nav */}
      <SearchDashBoard />
      {/* preview list */}
      <div className="grid grid-cols-4 gap-8 mt-20 ml-10">
        <PreviewCart />
        <PreviewCart /> <PreviewCart /> <PreviewCart /> <PreviewCart />{" "}
        <PreviewCart /> <PreviewCart /> <PreviewCart />
        <PreviewCart /> <PreviewCart /> <PreviewCart /> <PreviewCart />{" "}
        <PreviewCart /> <PreviewCart /> <PreviewCart />
      </div>
    </div>
  );
}
