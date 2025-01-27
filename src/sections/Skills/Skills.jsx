import styles from "./SkillsStyles.module.css"
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg"
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const {theme} = useTheme();
  const checkMarkIcon = (theme === "light" ? checkMarkIconLight : checkMarkIconDark);

  return(
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="HTML" />
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="ReactJS" />
          <SkillList src={checkMarkIcon} skill="Flask" />
          <SkillList src={checkMarkIcon} skill="NodeJS" />
          <SkillList src={checkMarkIcon} skill="ExpressJS" />
          <SkillList src={checkMarkIcon} skill="Material-UI" />
        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Docker" />
          <SkillList src={checkMarkIcon} skill="Google Cloud Platform (GCP)" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
          <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        </div> 
    </section>
  );
};

export default Skills