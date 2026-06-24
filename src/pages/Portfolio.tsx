import { HeroIntro } from "../sections/HeroIntro";
import { PulseFeature } from "../sections/PulseFeature";
import { ProjectCompass, Work } from "../sections/Work";
import { Capabilities } from "../sections/Capabilities";
import { Timeline } from "../sections/Timeline";
import { Contact } from "../sections/Contact";
import { AcademicRecord } from "../sections/AcademicRecord";

export function Portfolio() {
  return (
    <main>
      <HeroIntro />
      <Timeline />
      <Capabilities />
      <ProjectCompass />
      <PulseFeature />
      <Work />
      <AcademicRecord />
      <Contact />
    </main>
  );
}
