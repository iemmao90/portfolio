import Navbar from '../../components/Navbar';
import './Home.styled.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="main-container">
        <div className="left-container">left-container hej</div>
        <div className="right-top-container">right-top-container</div>
        <div className="right-bottom-container">right-bottom-container</div>
      </section>
    </>
  );
};

export default Home;
