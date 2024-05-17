import "./animatii.css";

const WelcomeAnimation = () => {
  const text = "Bine a-ți venit";
  const characters = text.split("");

  return (
    <div className="welcome-container">
      <ul className="fly-in-text">
        {characters.map((char, index) => (
          <li
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              fontSize: "52px",
              fontFamily: "cursive",
            }}
            className="text-white font-cursive"
          >
            {char !== " " ? char : "\u00A0"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomeAnimation;
