import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  const [id, setId] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      await fetch(
        `https://api.vevioz.com/api/widget/mp3/${id.substring(
          17,
          id.length - 0
        )}`
      ).then((res) => {
        if (res.url) {
          setDownloadLink(res.url);
        }
      });
      setLoading(false);
    } catch (e) {
      setError(e);
      console.log(e);
      setLoading(false);
    }
  };

  const ErrorHandling = () => {
    if (error) {
      <h1>There is an Error</h1>;
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className="App">
        <div className="content">
          <h2 className="title">
            Enter Your Video Link Below
            <i className="fa-brands fa-searchengin"></i>
          </h2>
          <input
            type="text"
            placeholder="Enter Valid Youtube Video Link"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="video-search" onClick={handleSubmit}>
            Search Video
          </button>
        </div>
        {ErrorHandling()}
        {downloadLink && (
          <div className="randerd-div">
            <h2 className="title">
              Greate! Video Founded <span className="emoji">👍</span>
            </h2>
            <a href={downloadLink}>
              <button>Click Here</button>
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
