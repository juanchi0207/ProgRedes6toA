/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Users: {
    Base: '/',
    Get: '/users',
    Add: '/',
    Update: '/users/:id',
    Delete: '/users/:id',
  },
} as const;
