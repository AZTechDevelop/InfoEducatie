import "./animatii.css";

const Welcome = () => {
  const text = "Bine a-ți venit";
  const caractere = text.split("");

  return (
    <div className="welcome-container">
      <ul className="fly-in-text">
        {caractere.map((char, index) => (
          <li
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              fontSize: "52px",
              fontFamily: "cursive",
            }}
            className="text-white font-cursive sm:text-md md:text-lg lg:text-xl "
          >
            {char !== " " ? char : "\u00A0"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Welcome;
