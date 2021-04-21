import mock from '../mock'
const data = {
  accountSetting: {
    general: {
      avatar: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default,
      username: 'Sampath',
      fullName: 'Lakmal',
      email: 'sampath@gmail.com',
      company: '0701234569'
    },
    info: {
      bio: '',
      dob: null,
      country: 'Sri lanka',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: require('@src/assets/images/avatars/11-small.png').default,
          id: 'johndoe'
        },
        google: {
          profileImg: require('@src/assets/images/avatars/3-small.png').default,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
}

mock.onGet('/account-setting/data').reply(() => [200, data.accountSetting])
