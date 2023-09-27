import Layout from "./Layout";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";

const App = () => {
  return (
    <Layout>
      <Header />
      <div className="content-section light-scroll-bar">
        <Sidebar />
        <Content />
      </div>
    </Layout>
  );
};

export default App;
