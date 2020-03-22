import React from "react";
import PageSetup from "views/PageSetup";
import ResultSection from "./ResultSection";
import NextStepsSection from "./NextStepsSection";

export default props => {
  return (
    <PageSetup>
      <ResultSection />
      <NextStepsSection />
    </PageSetup>
  );
};
