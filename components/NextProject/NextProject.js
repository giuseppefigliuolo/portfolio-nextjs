import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { projectsData } from "../../projectsData";
import styles from "./nextProject.module.scss";

const projectsNumber = projectsData.length;

const NextProject = () => {
  const router = useRouter();
  const currentProject = router.query;
  const currentProjectNum = Number(currentProject.id);

  const linkToNextProject = () =>
    currentProjectNum >= projectsNumber
      ? router.pathname.replace("[id]", 1)
      : router.pathname.replace("[id]", currentProjectNum + 1);

  return (
    <div className={styles.nextProject}>
      <Link key={currentProjectNum + 1} href={linkToNextProject()}>
        <a>
          <p>
            <span>
              Next <span className={styles.projectSpan}>Project</span>
            </span>{" "}
            <span className={styles.arrow}>&#8594;</span>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default NextProject;
