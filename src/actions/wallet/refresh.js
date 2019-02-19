import loadDashboard from './loadDashboard';

export default async ({ push }) => {
  push('/loading');

  loadDashboard();
};
