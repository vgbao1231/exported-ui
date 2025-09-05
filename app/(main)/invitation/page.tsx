
import Invitation from '@/components/project-detail/invitation';
import { projects } from '@/lib/project-data';

const project = projects[0];

export default function InvitationProductDetail() {
  return <Invitation project={project} />;
}
