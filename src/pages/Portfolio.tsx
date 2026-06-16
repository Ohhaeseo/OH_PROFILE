import { HeroIntro } from "../sections/HeroIntro";
import { PulseFeature } from "../sections/PulseFeature";
import { Work } from "../sections/Work";
import { Capabilities } from "../sections/Capabilities";
import { Timeline } from "../sections/Timeline";
import { Contact } from "../sections/Contact";

export function Portfolio() {
  return (
    <main>
      <HeroIntro />
      <Timeline />
      <Capabilities />
      <PulseFeature />
      <Work />
      <Contact />
    </main>
  );
}
