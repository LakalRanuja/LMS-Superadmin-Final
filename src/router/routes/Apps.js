import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  // {
  //   path: '/apps/email',
  //   exact: true,
  //   appLayout: true,
  //   className: 'email-application',
  //   component: lazy(() => import('../../views/apps/email'))
  // },
  // {
  //   path: '/apps/email/:folder',
  //   exact: true,
  //   appLayout: true,
  //   className: 'email-application',
  //   component: lazy(() => import('../../views/apps/email')),
  //   meta: {
  //     navLink: '/apps/email'
  //   }
  // },
  // {
  //   path: '/apps/email/label/:label',
  //   exact: true,
  //   appLayout: true,
  //   className: 'email-application',
  //   component: lazy(() => import('../../views/apps/email')),
  //   meta: {
  //     navLink: '/apps/email'
  //   }
  // },
  // {
  //   path: '/apps/email/:filter',
  //   component: lazy(() => import('../../views/apps/email')),
  //   meta: {
  //     navLink: '/apps/email'
  //   }
  // },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/grade management',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  // ------------------------------------------------------------------------------

  // {
  //   path: '/apps/notifications',
  //   exact: true,
  //   appLayout: true,
  //   className: 'todo-application',
  //   component: lazy(() => import('../../views/apps/notification'))
  // },
  // {
  //   path: '/apps/todo/:filter',
  //   appLayout: true,
  //   exact: true,
  //   className: 'todo-application',
  //   component: lazy(() => import('../../views/apps/notification')),
  //   meta: {
  //     navLink: '/apps/todo'
  //   }
  // },
  // {
  //   path: '/apps/todo/tag/:tag',
  //   appLayout: true,
  //   className: 'todo-application',
  //   component: lazy(() => import('../../views/apps/notification')),
  //   meta: {
  //     navLink: '/apps/todo'
  //   }
  // },

  // ------------------------------------------------------------------------------
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/school/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/school/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/school/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/school/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/school/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/apps/notification/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/managesubject/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  }, 
  {
    path: '/apps/notification/view/content',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/managesubject/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  }
]

export default AppRoutes
