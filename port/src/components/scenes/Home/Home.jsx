import { useEffect } from "react";
import "./Background.css";
import "./ConsoleText.css";
import { useTheme } from "@emotion/react";

export default function Home() {
  const theme = useTheme();

  useEffect(() => {
    const parallax = (event) => {
      const spans = document.querySelectorAll(".parallax-wrap span");

      spans.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="parallax-wrap">
      <span value="-20">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1534/1534067.png"
          className="imgs"
        />
      </span>
      <span value="-10">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1067/1067357.png"
          className="imgs"
        />
      </span>
      <span value="-10">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3823/3823690.png"
          className="imgs"
        />
      </span>
      <span value="20">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3049/3049498.png"
          className="imgs"
        />
      </span>
      <span value="20">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2240/2240744.png"
          className="imgs"
        />
      </span>
      <span value="-20">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9672/9672521.png"
          className="imgs"
        />
      </span>
      <span value="20">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1970/1970285.png"
          className="imgs"
        />
      </span>
      {/* <h2>
        
      </h2> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="../../../../public/assets/profile.png" className="profile" />
        <p className="profile_text">SHANKAR RAO JADAV</p>
        <div className="sub_title">
          <h1>I'm a Full Stack Developer</h1>
        </div>
      </div>
    </div>
  );
}
