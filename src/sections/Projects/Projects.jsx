import styles from "./ProjectsStyles.module.css";
import cerebralTalk from "../../assets/cerebralTalk.jpg"
import bandit from "../../assets/bandit.jpg"
import spotifyCleanPlaylistBot from "../../assets/spotifyCleanPlaylistBot.jpg"
import autonomousNavigationRobot from "../../assets/autonomousNavigationRobot.jpg"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={cerebralTalk} link="https://github.com/jasonmccauley/CerebralTalk" h3="CerebralTalk" p="EEG processing and thought classification"/> 
          <ProjectCard src={bandit} link="https://github.com/jasonmccauley/BANDIT" h3="BANDIT" p="Fast-paced multiplayer word game"/> 
          <ProjectCard src={spotifyCleanPlaylistBot} link="https://github.com/jasonmccauley/Spotify_Clean_Playlist_Bot" h3="Spotify Clean Playlist Bot" p="Converts explicit songs into clean versions"/> 
          <ProjectCard src={autonomousNavigationRobot} link="https://github.com/jasonmccauley/Autonomous_Navigation_Robot" h3="Autonomous Navigation Robot" p="Obstacle-avoiding robot with precise navigation"/> 
        </div>
    </section>
  )
}

export default Projects