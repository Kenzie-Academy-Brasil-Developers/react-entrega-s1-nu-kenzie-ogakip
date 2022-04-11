import "./style.css";

const Logo = ({ className }) => {
  return (
    <div className="logoBox">
      <h1 className={className}>
        <p>
          <span>Nu</span> Kenzie
        </p>
      </h1>
    </div>
  );
};

export default Logo;
