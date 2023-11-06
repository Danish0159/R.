import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Left from "../../components/left/Left";
import Right from "../../components/right/Right";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="cards">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
