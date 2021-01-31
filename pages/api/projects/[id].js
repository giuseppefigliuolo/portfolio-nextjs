import { projectsData } from "../../../projectsData";

// in questo caso destrutturiamo req -> che contiene query, che contiene id
export default function handler({ query: { id } }, res) {
  const filtered = projectsData.filter((project) => project.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `I'm sorry, I couldn't find the project` });
  }
}
