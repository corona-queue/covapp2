import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import QuestionsStore from "../../../stores/questions";

const Test = () => {
  const store = useContext(QuestionsStore);
  return useObserver(() => (
    <div>
      {store.name}
      <button onClick={() => (store.name = "Mike")}>No! I am Mike</button>
    </div>
  ));
};

export default Test;
