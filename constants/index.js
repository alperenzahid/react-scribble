export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const NAV_MENU_ITEM = [
  { key: 'Home', path: '/', notify: 0, selectedIcon: 'HomeFill' },
  {
    key: 'Explore',
    path: '/exploreit',
    notify: false,
    selectedIcon: 'ExploreFill'
  },
  {
    key: 'Notifications',
    path: '/notifications',
    notify: 3,
    selectedIcon: 'NotificationsFill'
  },
  {
    key: 'Messages',
    path: '/messages',
    notify: 44,
    selectedIcon: 'MessagesFill'
  },
  {
    key: 'Bookmarks',
    path: '/bookmarks',
    notify: 6,
    selectedIcon: 'BookmarksFill'
  },
  { key: 'Lists', path: '/lists', selectedIcon: 'ListsFill' },
  { key: 'Profile', path: '/profile', notify: 1, selectedIcon: 'ProfileFill' },
  { key: 'More', path: '/more', selectedIcon: 'More' }
]
