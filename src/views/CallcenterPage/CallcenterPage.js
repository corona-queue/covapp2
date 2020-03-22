import React from "react";
import PageSetup from "views/PageSetup";
import NewTicketSection from "./NewTicketSection";

export default props => {
  return (
    <PageSetup hideBackground={true}>
      <NewTicketSection />
    </PageSetup>
  );
};
