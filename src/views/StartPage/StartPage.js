import React from "react";
import PageSetup from "views/PageSetup";
import OverviewSection from "views/StartPage/OverviewSection";

export default function Components(props) {
  return (
    <PageSetup startPage={true}>
      <OverviewSection />
    </PageSetup>
  );
}
