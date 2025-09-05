
import Viewer360 from '@/components/project-detail/360-view';
import { projects } from '@/lib/project-data';

const project = projects[0];

export default function View360ProductDetail() {
  return <Viewer360 project={project} />;
}
