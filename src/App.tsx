import Layout from "./Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import { AppContext } from "./context";
import { useState } from "react";

const App = () => {
  const [appState, setAppState] = useState<any>(null);
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
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
