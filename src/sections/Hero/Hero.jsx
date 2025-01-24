import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();
  
  const themeIcon = (theme === "light" ? sun : moon);
  const githubIcon = (theme === "light" ? githubLight : githubDark);
  const linkedinIcon = (theme === "light" ? linkedinLight : linkedinDark);

  return (
    <section className={styles.container} id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile Picture of Jason McCauley"></img>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}></img>
        </div>
        <div className={styles.info}>
            <h1>Jason<br></br>McCauley</h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://github.com/jasonmccauley/" target="_blank">
                    <img src={githubIcon} alt="GitHub icon"></img>
                </a>
                <a href="https://linkedin.com/in/jsonmccauley/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"></img>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing web applications that drive technological innovation.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
