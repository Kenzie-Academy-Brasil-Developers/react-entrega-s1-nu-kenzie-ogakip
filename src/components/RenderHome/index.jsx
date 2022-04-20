import Logo from "../Logo";
import HomeDescription from "../homeDescription";
import imgHome from "../../svg/Group277.svg";
import { motion } from "framer-motion"

const RenderHome = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className="home">
      {window.screen.width < 720 && (
        <div>
          <Logo className={"logoHome"} />
        </div>
      )}
      <div className="homeDescription">
        <div className="boxDescription">
          {window.screen.width > 720 && <Logo className={"logoHome"} />}
          <HomeDescription />
        </div>
      </div>
      <img src={imgHome} alt={"imgHome"} />
    </motion.div>
  );
};
export default RenderHome;
