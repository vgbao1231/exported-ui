
import ProjectDetail from '@/components/project-detail/project-detail';
import { projects } from '@/lib/project-data';

const project = projects[0];

export default function App() {
  return <ProjectDetail project={project} />;
}
