import { useState } from "react";
import "./Sidebar.css";
import TextInput from "./TextInput";
import Filters from "./Filters";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  return (
    <aside className="sidebar light-scroll-bar">
      <TextInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, edu, exp or #tag"
      />
      <div className="filters">
        <div className="filter-frame">
          <h3>Filters</h3>
          <p>{0} Selected</p>
        </div>
        <Filters />
      </div>
    </aside>
  );
};

export default Sidebar;
