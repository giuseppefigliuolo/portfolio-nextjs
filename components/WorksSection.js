import React, { useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import WorkPreview from "./WorkPreview";

//Images
import soccerNodeImg from "../public/img/soccernode.jpg";
import spaziSostenibiliImg from "../public/img/spazi-sostenibili.png";
import marioMeleImg from "../public/img/mario-mele.png";
import chatAppImg from "../public/img/chat-app.png";

const WorksSection = () => {
  return (
    <section id="works">
      <HeaderTitle title="I miei lavori" />
      <div className="works">
        <WorkPreview
          backgroundImg={spaziSostenibiliImg}
          number="1"
          link="project/spazisostenibili"
          title="Spazi Sostenibili"
        />
        <WorkPreview
          backgroundImg={marioMeleImg}
          reversed={true}
          number="2"
          title="Mario Mele Fashion Designer"
        />
        <WorkPreview
          backgroundImg={soccerNodeImg}
          number="3"
          title="SoccerNode"
        />
        <WorkPreview
          backgroundImg={chatAppImg}
          reversed={true}
          number="4"
          title="My Chat App"
        />
      </div>
    </section>
  );
};

export default WorksSection;
