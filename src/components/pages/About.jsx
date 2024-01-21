import CommonHero from '../hero/CommonHero';
import Benefits from '../content/benefits/Benefits';
import ProjectCount from '../content/projectCount/ProjectCount';

export default function About() {
  return (
    <div>
      <CommonHero text="About" />
      <Benefits />
      <ProjectCount />
    </div>
  );
}
