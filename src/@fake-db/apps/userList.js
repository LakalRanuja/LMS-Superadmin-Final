import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      id: 1,
      fullName: 'Ananda College',
      company: 'Yotz PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'anandaCollege',
      country: 'Sri Lanka',
      contact: '(479) 232-9151',
      email: 'ananda@gmail.com',
      currentPlan: 'Classes',
      status: 'inactive',
      PrinName: 'Mr. Namal',
      stuCount: '3000',
      teaCount: '200',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 2,
      fullName: 'DS. Senanayake College',
      company: 'Skinder PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'senanayakeCollege',
      country: 'Sri Lanka',
      contact: '(472) 607-9137',
      email: 'senanayake@gmail.com',
      currentPlan: 'Classes',
      status: 'active',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 3,
      fullName: 'Royal College',
      company: 'Oozz PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'royalCollege',
      country: 'Sri Lanka',
      contact: '(321) 264-4599',
      email: 'royal@gmail.com',
      currentPlan: 'Classes',
      status: 'active',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 4,
      fullName: 'Dharmapala College',
      company: 'Oozz PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'dharmapalaCollege',
      country: 'Sri Lanka',
      contact: '(923) 690-6806',
      email: 'dharmapala@gmail.com',
      currentPlan: 'Classes',
      status: 'inactive',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 5,
      fullName: 'Isipathana College',
      company: 'Aimbo PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'isipathanaCollege',
      country: 'Sri Lanka',
      contact: '(669) 914-1078',
      email: 'isipathana@gmail.com',
      currentPlan: 'Classes',
      status: 'inactive',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 6,
      fullName: 'Mahanama College',
      company: 'Jaxbean PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'mahanamaCollege',
      country: 'Sri Lanka',
      contact: '(958) 973-3093',
      email: 'mahanama@gmail.com',
      currentPlan: 'Classes',
      status: 'active',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 7,
      fullName: 'Ashoka College',
      company: 'Jazzy PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'ashokaCollege',
      country: 'Sri Lanka',
      contact: '(825) 977-8152',
      email: 'ashoka@gmail.com',
      currentPlan: 'Classes',
      status: 'active',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 8,
      fullName: 'Sen. Johns College',
      company: 'Pixoboo PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'johnsCollege',
      country: 'Sri Lanka',
      contact: '(187) 440-0934',
      email: 'senJohns@gmail.com',
      currentPlan: 'Classes',
      status: 'inactive',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 9,
      fullName: 'Sen. Sebastian College',
      company: 'Tekfly PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'sebasitianCollege',
      country: 'Sri Lanka',
      contact: '(978) 146-5443',
      email: 'sebastian@gmail.com',
      currentPlan: 'Classes',
      status: 'active',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    },
    {
      id: 10,
      fullName: 'Sen. Prince of Wales',
      company: 'Gigashots PVT LTD',
      role: 'anadaCollege@gmail.com',
      username: 'walesCollege',
      country: 'Sri Lanka',
      contact: '(589) 284-6732',
      email: 'wales@gmail.com',
      currentPlan: 'Classes',
      status: 'inactive',
      PrinName: 'Mr. Namal',
      hours: '4 h',
      avatar: ''
    }
    // {
    //   id: 11,
    //   fullName: 'Jonah Wharlton',
    //   company: 'Eare PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'jwharltona',
    //   country: 'Sri Lanka',
    //   contact: '(176) 532-6824',
    //   email: 'jwharltona@oakley.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 12,
    //   fullName: 'Seth Hallam',
    //   company: 'Yakitri PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'shallamb',
    //   country: 'Sri Lanka',
    //   contact: '(234) 464-0600',
    //   email: 'shallamb@hugedomains.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/5.png').default
    // },
    // {
    //   id: 13,
    //   fullName: 'Yoko Pottie',
    //   company: 'Leenti PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'ypottiec',
    //   country: 'Philippines',
    //   contact: '(907) 284-5083',
    //   email: 'ypottiec@privacy.gov.au',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 14,
    //   fullName: 'Maximilianus Krause',
    //   company: 'Digitube PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'mkraused',
    //   country: 'Democratic Republic of the Congo',
    //   contact: '(167) 135-7392',
    //   email: 'mkraused@stanford.edu',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // },
    // {
    //   id: 15,
    //   fullName: 'Zsazsa McCleverty',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'zmcclevertye',
    //   country: 'France',
    //   contact: '(317) 409-6565',
    //   email: 'zmcclevertye@soundcloud.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/2.png').default
    // },
    // {
    //   id: 16,
    //   fullName: 'Bentlee Emblin',
    //   company: 'Yambee PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'bemblinf',
    //   country: 'Spain',
    //   contact: '(590) 606-1056',
    //   email: 'bemblinf@wired.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 17,
    //   fullName: 'Brockie Myles',
    //   company: 'Wikivu PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'bmylesg',
    //   country: 'Poland',
    //   contact: '(553) 225-9905',
    //   email: 'bmylesg@amazon.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 18,
    //   fullName: 'Bertha Biner',
    //   company: 'Twinte PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'bbinerh',
    //   country: 'Yemen',
    //   contact: '(901) 916-9287',
    //   email: 'bbinerh@mozilla.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 19,
    //   fullName: 'Travus Bruntjen',
    //   company: 'Cogidoo PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'tbruntjeni',
    //   country: 'France',
    //   contact: '(524) 586-6057',
    //   email: 'tbruntjeni@sitemeter.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 20,
    //   fullName: 'Wesley Burland',
    //   company: 'Bubblemix PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'wburlandj',
    //   country: 'Honduras',
    //   contact: '(569) 683-1292',
    //   email: 'wburlandj@uiuc.edu',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 21,
    //   fullName: 'Selina Kyle',
    //   company: 'Wayne Enterprises',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'catwomen1940',
    //   country: 'USA',
    //   contact: '(829) 537-0057',
    //   email: 'irena.dubrovna@wayne.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 22,
    //   fullName: 'Jameson Lyster',
    //   company: 'Quaxo PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'jlysterl',
    //   country: 'Ukraine',
    //   contact: '(593) 624-0222',
    //   email: 'jlysterl@guardian.co.uk',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/8.png').default
    // },
    // {
    //   id: 23,
    //   fullName: 'Kare Skitterel',
    //   company: 'Ainyx PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'kskitterelm',
    //   country: 'Poland',
    //   contact: '(254) 845-4107',
    //   email: 'kskitterelm@washingtonpost.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/3.png').default
    // },
    // {
    //   id: 24,
    //   fullName: 'Cleavland Hatherleigh',
    //   company: 'Flipopia PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'chatherleighn',
    //   country: 'Brazil',
    //   contact: '(700) 783-7498',
    //   email: 'chatherleighn@washington.edu',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/2.png').default
    // },
    // {
    //   id: 25,
    //   fullName: 'Adeline Micco',
    //   company: 'Topicware PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'amiccoo',
    //   country: 'France',
    //   contact: '(227) 598-1841',
    //   email: 'amiccoo@whitehouse.gov',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 26,
    //   fullName: 'Hugh Hasson',
    //   company: 'Skinix PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'hhassonp',
    //   country: 'China',
    //   contact: '(582) 516-1324',
    //   email: 'hhassonp@bizjournals.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 27,
    //   fullName: 'Germain Jacombs',
    //   company: 'Youopia PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'gjacombsq',
    //   country: 'Zambia',
    //   contact: '(137) 467-5393',
    //   email: 'gjacombsq@jigsy.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/10.png').default
    // },
    // {
    //   id: 28,
    //   fullName: 'Bree Kilday',
    //   company: 'Jetpulse PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'bkildayr',
    //   country: 'Portugal',
    //   contact: '(412) 476-0854',
    //   email: 'bkildayr@mashable.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 29,
    //   fullName: 'Candice Pinyon',
    //   company: 'Kare PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'cpinyons',
    //   country: 'Sweden',
    //   contact: '(170) 683-1520',
    //   email: 'cpinyons@behance.net',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 30,
    //   fullName: 'Isabel Mallindine',
    //   company: 'Voomm PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'imallindinet',
    //   country: 'Slovenia',
    //   contact: '(332) 803-1983',
    //   email: 'imallindinet@shinystat.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 31,
    //   fullName: 'Gwendolyn Meineken',
    //   company: 'Oyondu PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'gmeinekenu',
    //   country: 'Moldova',
    //   contact: '(551) 379-7460',
    //   email: 'gmeinekenu@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 32,
    //   fullName: 'Rafaellle Snowball',
    //   company: 'Fivespan PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'rsnowballv',
    //   country: 'Philippines',
    //   contact: '(974) 829-0911',
    //   email: 'rsnowballv@indiegogo.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/5.png').default
    // },
    // {
    //   id: 33,
    //   fullName: 'Rochette Emer',
    //   company: 'Thoughtworks PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'remerw',
    //   country: 'North Korea',
    //   contact: '(841) 889-3339',
    //   email: 'remerw@blogtalkradio.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/8.png').default
    // },
    // {
    //   id: 34,
    //   fullName: 'Ophelie Fibbens',
    //   company: 'Jaxbean PVT LTD',
    //   role: 'anadaCollege@gmail.com',
    //   username: 'ofibbensx',
    //   country: 'Indonesia',
    //   contact: '(764) 885-7351',
    //   email: 'ofibbensx@booking.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 35,
    //   fullName: 'Stephen MacGilfoyle',
    //   company: 'Browseblab PVT LTD',
    //   role: 'maintainer',
    //   username: 'smacgilfoyley',
    //   country: 'Japan',
    //   contact: '(350) 589-8520',
    //   email: 'smacgilfoyley@bigcartel.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 36,
    //   fullName: 'Bradan Rosebotham',
    //   company: 'Agivu PVT LTD',
    //   role: 'subscriber',
    //   username: 'brosebothamz',
    //   country: 'Belarus',
    //   contact: '(882) 933-2180',
    //   email: 'brosebothamz@tripadvisor.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 37,
    //   fullName: 'Skip Hebblethwaite',
    //   company: 'Katz PVT LTD',
    //   role: 'admin',
    //   username: 'shebblethwaite10',
    //   country: 'Canada',
    //   contact: '(610) 343-1024',
    //   email: 'shebblethwaite10@arizona.edu',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // },
    // {
    //   id: 38,
    //   fullName: 'Moritz Piccard',
    //   company: 'Twitternation PVT LTD',
    //   role: 'maintainer',
    //   username: 'mpiccard11',
    //   country: 'Croatia',
    //   contact: '(365) 277-2986',
    //   email: 'mpiccard11@vimeo.com',
    //   currentPlan: 'enterprise',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 39,
    //   fullName: 'Tyne Widmore',
    //   company: 'Yombu PVT LTD',
    //   role: 'subscriber',
    //   username: 'twidmore12',
    //   country: 'Finland',
    //   contact: '(531) 731-0928',
    //   email: 'twidmore12@bravesites.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 40,
    //   fullName: 'Florenza Desporte',
    //   company: 'Kamba PVT LTD',
    //   role: 'author',
    //   username: 'fdesporte13',
    //   country: 'Ukraine',
    //   contact: '(312) 104-2638',
    //   email: 'fdesporte13@omniture.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 41,
    //   fullName: 'Edwina Baldetti',
    //   company: 'Dazzlesphere PVT LTD',
    //   role: 'maintainer',
    //   username: 'ebaldetti14',
    //   country: 'Haiti',
    //   contact: '(315) 329-3578',
    //   email: 'ebaldetti14@theguardian.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 42,
    //   fullName: 'Benedetto Rossiter',
    //   company: 'Mybuzz PVT LTD',
    //   role: 'editor',
    //   username: 'brossiter15',
    //   country: 'Indonesia',
    //   contact: '(323) 175-6741',
    //   email: 'brossiter15@craigslist.org',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 43,
    //   fullName: 'Micaela McNirlan',
    //   company: 'Tambee PVT LTD',
    //   role: 'admin',
    //   username: 'mmcnirlan16',
    //   country: 'Indonesia',
    //   contact: '(242) 952-0916',
    //   email: 'mmcnirlan16@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 44,
    //   fullName: 'Vladamir Koschek',
    //   company: 'Centimia PVT LTD',
    //   role: 'author',
    //   username: 'vkoschek17',
    //   country: 'Guatemala',
    //   contact: '(531) 758-8335',
    //   email: 'vkoschek17@abc.net.au',
    //   currentPlan: 'team',
    //   status: 'active',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 45,
    //   fullName: 'Corrie Perot',
    //   company: 'Flipopia PVT LTD',
    //   role: 'subscriber',
    //   username: 'cperot18',
    //   country: 'China',
    //   contact: '(659) 385-6808',
    //   email: 'cperot18@goo.ne.jp',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   PrinName: 'Mr. Namal',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/3.png').default
    // },
    // {
    //   id: 46,
    //   fullName: 'Saunder Offner',
    //   company: 'Skalith PVT LTD',
    //   role: 'maintainer',
    //   username: 'soffner19',
    //   country: 'Poland',
    //   contact: '(200) 586-2264',
    //   email: 'soffner19@mac.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 47,
    //   fullName: 'Karena Courtliff',
    //   company: 'Feedfire PVT LTD',
    //   role: 'admin',
    //   username: 'kcourtliff1a',
    //   country: 'China',
    //   contact: '(478) 199-0020',
    //   email: 'kcourtliff1a@bbc.co.uk',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 48,
    //   fullName: 'Onfre Wind',
    //   company: 'Thoughtmix PVT LTD',
    //   role: 'admin',
    //   username: 'owind1b',
    //   country: 'Ukraine',
    //   contact: '(344) 262-7270',
    //   email: 'owind1b@yandex.ru',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 49,
    //   fullName: 'Paulie Durber',
    //   company: 'Babbleblab PVT LTD',
    //   role: 'subscriber',
    //   username: 'pdurber1c',
    //   country: 'Sweden',
    //   contact: '(694) 676-1275',
    //   email: 'pdurber1c@gov.uk',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   hours: '4 h',
    //   avatar: ''
    // },
    // {
    //   id: 50,
    //   fullName: 'Beverlie Krabbe',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'editor',
    //   username: 'bkrabbe1d',
    //   country: 'China',
    //   contact: '(397) 294-5153',
    //   email: 'bkrabbe1d@home.pl',
    //   currentPlan: 'company',
    //   status: 'active',
    //   hours: '4 h',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.unshift(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      users: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
