import { requireAdmin } from '@/lib/auth.guard';

const OverviewPage_06 = async () => {
  await requireAdmin();

  return <div>OverviewPage_06</div>;
};
export default OverviewPage_06;
