import React, { useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import WorkPreview from "./WorkPreview";

//Images
import soccerNodeImg from "../public/img/soccernode.webp";
import spaziSostenibiliImg from "../public/img/spazi-sostenibili.webp";
import marioMeleImg from "../public/img/mario-mele.webp";
import chatAppImg from "../public/img/chat-app.webp";

const WorksSection = () => {
  return (
    <section id="works">
      <HeaderTitle title="My Projects" />
      <div className="works">
        <WorkPreview
          backgroundImg={spaziSostenibiliImg}
          number="1"
          link="project/spazisostenibili"
          title="Spazi Sostenibili"
          description="Custom WordPress theme for a blog regarding green and sustainable architecture in Milan"
        />
        <WorkPreview
          backgroundImg={marioMeleImg}
          reversed={true}
          number="2"
          title="Mario Mele Fashion Designer"
          description="Fashion designer personal portfolio. Almost done but still work in progress."
        />
        <WorkPreview
          backgroundImg={soccerNodeImg}
          number="3"
          title="SoccerNode"
          description="Web app where you can check scores and standings of the best european leagues. "
        />
        <WorkPreview
          backgroundImg={chatAppImg}
          reversed={true}
          number="4"
          title="My Chat App"
          description="Real time chat with different rooms available."
        />
      </div>
    </section>
  );
};

export default WorksSection;
