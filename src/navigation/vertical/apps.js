import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Book, Bell} from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/email'
  // },
  // {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare size={20} />,
  //   navLink: '/apps/chat'
  // },
  
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'users',
    title: 'Schools',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/school/list'
      }
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/pages/add grades/editNew'
      // }
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  },
  {
    id: 'todo',
    title: 'Grade Management',
    icon: <CheckSquare size={20} />,
    children: [
        {
          id: 'todo',
          title: 'Allocate grades',
          icon: <Circle size={12} />,
          navLink: '/apps/grade management'
        },
        {
          id: 'blogEdit',
          title: 'Add grades',
          // permissions: ['admin', 'editor'],
          icon: <Circle size={12} />,
          // navLink: '/pages/add grades/editNew'
          navLink: '/pages/add grades/editNew'
        }
    ]
    //
  },
  {
    id: 'view',
    title: 'Notification',
    icon: <Bell size={20} />,
    navLink: '/apps/notification/view'
  }
  // {
  //   id: 'invoiceApp',
  //   title: 'Notification New',
  //   icon: <Bell size={20} />,
  //   navLink: '/apps/notifications/view'
  // }
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/list'
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/preview'
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/edit'
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/add'
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  
]
