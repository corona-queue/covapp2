import React from "react";
import PageSetup from "views/PageSetup";
import NextStepsSection from "./NextStepsSection";

export default props => {
  return (
    <PageSetup hideBackground={true}>
      <NextStepsSection />
    </PageSetup>
  );
};
