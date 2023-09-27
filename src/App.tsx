import Layout from "./Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import { AppContext } from "./context";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <AppContext.Provider value={{ query, setQuery }}>
      <Layout>
        <Header />
        <div className="content-section light-scroll-bar">
          <Sidebar />
          <Content />
        </div>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
