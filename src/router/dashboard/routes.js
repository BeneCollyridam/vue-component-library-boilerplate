const Data = () => import('@/router/dashboard/views/Data');
const Profile = () => import('@/router/dashboard/views/Profile');
const Messages = () => import('@/router/dashboard/views/Messages');
const Notifications = () => import('@/router/dashboard/views/Notifications');
const Settings = () => import('@/router/dashboard/views/Settings');

const routes = [
  {
    path: 'data',
    name: 'Data',
    component: Data,
  },
  {
    path: 'profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: 'messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: 'notifications',
    name: 'Notifications',
    component: Notifications,
  },
  {
    path: 'settings',
    name: 'Settings',
    component: Settings,
  },
];

export default routes;
