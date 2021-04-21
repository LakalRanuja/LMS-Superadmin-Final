import mock from '../mock'
import { paginateArray, sortCompare } from '../utils'

const data = {
  invoices: [
    // {
    //   id: 4987,
    //   issuedDate: '13 Dec 2019',
    //   client: {
    //     address: '7777 Mendez Plains',
    //     company: 'Hall-Robbins PLC',
    //     companyEmail: 'don85@johnson.com',
    //     country: 'Srilanka',
    //     contact: '(616) 865-4180',
    //     name: 'Jordan Stevenson'
    //   },
    //   service: 'Software Development',
    //   total: 3428,
    //   avatar: '',
    //   invoiceStatus: 'Paid',
    //   balance: '$724',
    //   dueDate: '23 Apr 2019'
    // },
    // {
    //   id: 4988,
    //   issuedDate: '17 Jul 2019',
    //   client: {
    //     address: '04033 Wesley Wall Apt. 961',
    //     company: 'Mccann LLC and Sons',
    //     companyEmail: 'brenda49@taylor.info',
    //     country: 'Haiti',
    //     contact: '(226) 204-8287',
    //     name: 'Stephanie Burns'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 5219,
    //   avatar: require('@src/assets/images/avatars/10-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: 0,
    //   dueDate: '15 Dec 2019'
    // },
    // {
    //   id: 4989,
    //   issuedDate: '19 Oct 2019',
    //   client: {
    //     address: '5345 Robert Squares',
    //     company: 'Leonard-Garcia and Sons',
    //     companyEmail: 'smithtiffany@powers.com',
    //     country: 'Denmark',
    //     contact: '(955) 676-1076',
    //     name: 'Tony Herrera'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 3719,
    //   avatar: require('@src/assets/images/avatars/1-small.png').default,
    //   invoiceStatus: 'Paid',
    //   balance: 0,
    //   dueDate: '03 Nov 2019'
    // },
    // {
    //   id: 4990,
    //   issuedDate: '06 Mar 2020',
    //   client: {
    //     address: '19022 Clark Parks Suite 149',
    //     company: 'Smith, Miller and Henry LLC',
    //     companyEmail: 'mejiageorge@lee-perez.com',
    //     country: 'Cambodia',
    //     contact: '(832) 323-6914',
    //     name: 'Kevin Patton'
    //   },
    //   service: 'Software Development',
    //   total: 4749,
    //   avatar: require('@src/assets/images/avatars/9-small.png').default,
    //   invoiceStatus: 'Sent',
    //   balance: 0,
    //   dueDate: '11 Feb 2020'
    // },
    // {
    //   id: 4991,
    //   issuedDate: '08 Feb 2020',
    //   client: {
    //     address: '8534 Saunders Hill Apt. 583',
    //     company: 'Garcia-Cameron and Sons',
    //     companyEmail: 'brandon07@pierce.com',
    //     country: 'Martinique',
    //     contact: '(970) 982-3353',
    //     name: 'Mrs. Julie Donovan MD'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 4056,
    //   avatar: require('@src/assets/images/avatars/10-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: '$815',
    //   dueDate: '30 Jun 2019'
    // },
    // {
    //   id: 4992,
    //   issuedDate: '26 Aug 2019',
    //   client: {
    //     address: '661 Perez Run Apt. 778',
    //     company: 'Burnett-Young PLC',
    //     companyEmail: 'guerrerobrandy@beasley-harper.com',
    //     country: 'Botswana',
    //     contact: '(511) 938-9617',
    //     name: 'Amanda Phillips'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 2771,
    //   avatar: '',
    //   invoiceStatus: 'Paid',
    //   balance: 0,
    //   dueDate: '24 Jun 2019'
    // },
    // {
    //   id: 4993,
    //   issuedDate: '17 Sep 2019',
    //   client: {
    //     address: '074 Long Union',
    //     company: 'Wilson-Lee LLC',
    //     companyEmail: 'williamshenry@moon-smith.com',
    //     country: 'Montserrat',
    //     contact: '(504) 859-2893',
    //     name: 'Christina Collier'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 2713,
    //   avatar: '',
    //   invoiceStatus: 'Draft',
    //   balance: '$407',
    //   dueDate: '22 Nov 2019'
    // },
    // {
    //   id: 4994,
    //   issuedDate: '11 Feb 2020',
    //   client: {
    //     address: '5225 Ford Cape Apt. 840',
    //     company: 'Schwartz, Henry and Rhodes Group',
    //     companyEmail: 'margaretharvey@russell-murray.com',
    //     country: 'Oman',
    //     contact: '(758) 403-7718',
    //     name: 'David Flores'
    //   },
    //   service: 'Template Customization',
    //   total: 4309,
    //   avatar: require('@src/assets/images/avatars/9-small.png').default,
    //   invoiceStatus: 'Paid',
    //   balance: 'Best',
    //   dueDate: '10 Feb 2020'
    // },
    // {
    //   id: 4995,
    //   issuedDate: '26 Jan 2020',
    //   client: {
    //     address: '23717 James Club Suite 277',
    //     company: 'Henderson-Holder PLC',
    //     companyEmail: 'dianarodriguez@villegas.com',
    //     country: 'Cambodia',
    //     contact: '(292) 873-8254',
    //     name: 'Valerie Perez'
    //   },
    //   service: 'Software Development',
    //   total: 3367,
    //   avatar: require('@src/assets/images/avatars/2-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: 0,
    //   dueDate: '24 Dec 2019'
    // },
    // {
    //   id: 4996,
    //   issuedDate: '15 Jan 2020',
    //   client: {
    //     address: '4528 Myers Gateway',
    //     company: 'Page-Wise PLC',
    //     companyEmail: 'bwilson@norris-brock.com',
    //     country: 'Guam',
    //     contact: '(956) 803-2008',
    //     name: 'Susan Dickerson'
    //   },
    //   service: 'Software Development',
    //   total: 4776,
    //   avatar: require('@src/assets/images/avatars/9-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: '$305',
    //   dueDate: '02 Jun 2019'
    // },
    // {
    //   id: 4997,
    //   issuedDate: '27 Sep 2019',
    //   client: {
    //     address: '4234 Mills Club Suite 107',
    //     company: 'Turner PLC Inc',
    //     companyEmail: '',
    //     country: 'United States Virgin Islands',
    //     contact: '(716) 962-8635',
    //     name: 'Kelly Smith'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 3789,
    //   avatar: require('@src/assets/images/avatars/4-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: '$666',
    //   dueDate: '18 Mar 2020'
    // },
    // {
    //   id: 4998,
    //   issuedDate: '31 Jul 2019',
    //   client: {
    //     address: '476 Keith Meadow',
    //     company: 'Levine-Dorsey PLC',
    //     companyEmail: '',
    //     country: 'Syrian Arab Republic',
    //     contact: '(523) 449-0782',
    //     name: 'Jamie Jones'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 5200,
    //   avatar: require('@src/assets/images/avatars/5-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: 0,
    //   dueDate: '17 Jan 2020'
    // },
    // {
    //   id: 4999,
    //   issuedDate: '14 Feb 2020',
    //   client: {
    //     address: '56381 Ashley Village Apt. 332',
    //     company: 'Hall, Thompson and Ramirez LLC',
    //     companyEmail: '',
    //     country: 'Ukraine',
    //     contact: '(583) 470-8356',
    //     name: 'Ruben Garcia'
    //   },
    //   service: 'Software Development',
    //   total: 4558,
    //   avatar: require('@src/assets/images/avatars/7-small.png').default,
    //   invoiceStatus: 'Paid',
    //   balance: 0,
    //   dueDate: '01 Oct 2019'
    // },
    // {
    //   id: 5000,
    //   issuedDate: '21 May 2019',
    //   client: {
    //     address: '6946 Gregory Plaza Apt. 310',
    //     company: 'Lambert-Thomas Group',
    //     companyEmail: '',
    //     country: 'Vanuatu',
    //     contact: '(366) 906-6467',
    //     name: 'Ryan Meyer'
    //   },
    //   service: 'Template Customization',
    //   total: 3503,
    //   avatar: require('@src/assets/images/avatars/9-small.png').default,
    //   invoiceStatus: 'Paid',
    //   balance: 0,
    //   dueDate: '22 May 2019'
    // },
    // {
    //   id: 5001,
    //   issuedDate: '30 Jun 2019',
    //   client: {
    //     address: '64351 Andrew Lights',
    //     company: 'Gregory-Haynes PLC',
    //     companyEmail: '',
    //     country: 'Romania',
    //     contact: '(320) 616-3915',
    //     name: 'Valerie Valdez'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 5285,
    //   avatar: require('@src/assets/images/avatars/2-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: '-$202',
    //   dueDate: '02 Aug 2019'
    // },
    // {
    //   id: 5002,
    //   issuedDate: '21 Jun 2019',
    //   client: {
    //     address: '5702 Sarah Heights',
    //     company: 'Wright-Schmidt LLC',
    //     companyEmail: '',
    //     country: 'Costa Rica',
    //     contact: '(435) 899-1963',
    //     name: 'Melissa Wheeler'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 3668,
    //   avatar: require('@src/assets/images/avatars/6-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: '$731',
    //   dueDate: '15 Dec 2019'
    // },
    // {
    //   id: 5003,
    //   issuedDate: '30 Dec 2019',
    //   client: {
    //     address: '668 Robert Flats',
    //     company: 'Russell-Abbott Ltd',
    //     companyEmail: '',
    //     country: 'Congo',
    //     contact: '(254) 399-4728',
    //     name: 'Alan Jimenez'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 4372,
    //   avatar: '',
    //   invoiceStatus: 'Sent',
    //   balance: '-$344',
    //   dueDate: '17 Sep 2019'
    // },
    // {
    //   id: 5004,
    //   issuedDate: '27 May 2019',
    //   client: {
    //     address: '55642 Chang Extensions Suite 373',
    //     company: 'Williams LLC Inc',
    //     companyEmail: '',
    //     country: 'Saint Pierre and Miquelon',
    //     contact: '(648) 500-4338',
    //     name: 'Jennifer Morris'
    //   },
    //   service: 'Template Customization',
    //   total: 3198,
    //   avatar: require('@src/assets/images/avatars/7-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: '-$253',
    //   dueDate: '16 Aug 2019'
    // },
    // {
    //   id: 5005,
    //   issuedDate: '30 Jul 2019',
    //   client: {
    //     address: '56694 Eric Orchard',
    //     company: 'Hudson, Bell and Phillips PLC',
    //     companyEmail: '',
    //     country: 'Uruguay',
    //     contact: '(896) 544-3796',
    //     name: 'Timothy Stevenson'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 5293,
    //   avatar: '',
    //   invoiceStatus: 'Past Due',
    //   balance: 0,
    //   dueDate: '01 Aug 2019'
    // },
    // {
    //   id: 5006,
    //   issuedDate: '10 Jun 2019',
    //   client: {
    //     address: '3727 Emma Island Suite 879',
    //     company: 'Berry, Gonzalez and Heath Inc',
    //     companyEmail: '',
    //     country: 'Israel',
    //     contact: '(236) 784-5142',
    //     teacher: 'Sampath',
    //     name: 'Erik Hayden'
    //   },
    //   service: 'Template Customization',
    //   total: 5612,
    //   avatar: require('@src/assets/images/avatars/6-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: '$883',
    //   dueDate: '12 Apr 2019'
    // },
    // {
    //   id: 5007,
    //   issuedDate: '01 Feb 2020',
    //   client: {
    //     address: '953 Miller Common Suite 580',
    //     company: 'Martinez, Fuller and Chavez and Sons',
    //     companyEmail: '',
    //     country: 'Cook Islands',
    //     contact: '(436) 717-2419',
    //     teacher: 'Sampath',
    //     name: 'Katherine Kennedy'
    //   },
    //   service: 'Software Development',
    //   total: 2230,
    //   avatar: require('@src/assets/images/avatars/1-small.png').default,
    //   invoiceStatus: 'Sent',
    //   balance: 0,
    //   dueDate: '19 Nov 2019'
    // },
    // {
    //   id: 5008,
    //   issuedDate: '22 Mar 2020',
    //   client: {
    //     address: '808 Sullivan Street Apt. 135',
    //     company: 'Wilson and Sons LLC',
    //     companyEmail: '',
    //     country: 'Nepal',
    //     contact: '(489) 946-3041',
    //     teacher: 'Sampath',
    //     name: 'Monica Fuller'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 2032,
    //   avatar: require('@src/assets/images/avatars/8-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: 0,
    //   dueDate: '30 Nov 2019'
    // },
    // {
    //   id: 5009,
    //   issuedDate: '30 Nov 2019',
    //   client: {
    //     address: '25135 Christopher Creek',
    //     company: 'Hawkins, Johnston and Mcguire PLC',
    //     companyEmail: '',
    //     country: 'Kiribati',
    //     contact: '(274) 246-3725',
    //     teacher: 'Sampath',
    //     name: 'Stacey Carter'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 3128,
    //   avatar: require('@src/assets/images/avatars/3-small.png').default,
    //   invoiceStatus: 'Paid',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '10 Sep 2019'
    // },
    // {
    //   id: 5010,
    //   issuedDate: '06 Jan 2020',
    //   client: {
    //     address: '81285 Rebecca Estates Suite 046',
    //     company: 'Huynh-Mills and Sons',
    //     companyEmail: '',
    //     country: 'Swaziland',
    //     contact: '(258) 211-5970',
    //     teacher: 'Sampath',
    //     name: 'Chad Davis'
    //   },
    //   service: 'Software Development',
    //   total: 2060,
    //   avatar: require('@src/assets/images/avatars/2-small.png').default,
    //   invoiceStatus: 'Downloaded',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '08 Dec 2019'
    // },
    // {
    //   id: 5011,
    //   issuedDate: '01 Jun 2019',
    //   client: {
    //     address: '3102 Briggs Dale Suite 118',
    //     company: 'Jones-Cooley and Sons',
    //     companyEmail: '',
    //     country: 'Congo',
    //     contact: '(593) 965-4100',
    //     teacher: 'Sampath',
    //     name: 'Chris Reyes'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 4077,
    //   avatar: '',
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '01 Feb 2020'
    // },
    // {
    //   id: 5012,
    //   issuedDate: '30 Oct 2019',
    //   client: {
    //     address: '811 Jill Skyway',
    //     company: 'Jones PLC Ltd',
    //     companyEmail: '',
    //     country: 'Brazil',
    //     contact: '(585) 829-2603',
    //     teacher: 'Sampath',
    //     name: 'Laurie Summers'
    //   },
    //   service: 'Template Customization',
    //   total: 2872,
    //   avatar: require('@src/assets/images/avatars/4-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '18 Oct 2019'
    // },
    // {
    //   id: 5013,
    //   issuedDate: '05 Feb 2020',
    //   client: {
    //     address: '2223 Brandon Inlet Suite 597',
    //     company: 'Jordan, Gomez and Ross Group',
    //     companyEmail: '',
    //     country: 'Congo',
    //     contact: '(527) 351-5517',
    //     teacher: 'Sampath',
    //     name: 'Lindsay Wilson'
    //   },
    //   service: 'Software Development',
    //   total: 3740,
    //   avatar: require('@src/assets/images/avatars/10-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '01 Nov 2019'
    // },
    // {
    //   id: 5014,
    //   issuedDate: '01 Dec 2019',
    //   client: {
    //     address: '08724 Barry Causeway',
    //     company: 'Gonzalez, Moody and Glover LLC',
    //     companyEmail: '',
    //     country: 'Equatorial Guinea',
    //     contact: '(628) 903-0132',
    //     teacher: 'Sampath',
    //     name: 'Jenna Castro'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 3623,
    //   avatar: '',
    //   invoiceStatus: 'Downloaded',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '23 Sep 2019'
    // },
    // {
    //   id: 5015,
    //   issuedDate: '16 Apr 2019',
    //   client: {
    //     address: '073 Holt Ramp Apt. 755',
    //     company: 'Ashley-Pacheco Ltd',
    //     companyEmail: '',
    //     country: 'Seychelles',
    //     contact: '(847) 396-9904',
    //     teacher: 'Sampath',
    //     name: 'Wendy Weber'
    //   },
    //   service: 'Software Development',
    //   total: 2477,
    //   avatar: require('@src/assets/images/avatars/7-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '01 Apr 2019'
    // },
    // {
    //   id: 5016,
    //   issuedDate: '24 Jan 2020',
    //   client: {
    //     address: '984 Sherry Trail Apt. 953',
    //     company: 'Berry PLC Group',
    //     companyEmail: '',
    //     country: 'Ireland',
    //     contact: '(852) 249-4539',
    //     teacher: 'Sampath',
    //     name: 'April Yates'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 3904,
    //   avatar: '',
    //   invoiceStatus: 'Paid',
    //   balance: '$951',
    //   class: '8 A',
    //   dueDate: '30 Sep 2019'
    // },
    // {
    //   id: 5017,
    //   issuedDate: '24 Feb 2020',
    //   client: {
    //     address: '093 Jonathan Camp Suite 953',
    //     company: 'Allen Group Ltd',
    //     companyEmail: '',
    //     country: 'Netherlands',
    //     contact: '(917) 984-2232',
    //     teacher: 'Sampath',
    //     name: 'Daniel Marshall PhD'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 3102,
    //   avatar: require('@src/assets/images/avatars/1-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: '-$153',
    //   class: '8 A',
    //   dueDate: '25 Aug 2019'
    // },
    // {
    //   id: 5018,
    //   issuedDate: '29 Feb 2020',
    //   client: {
    //     address: '4735 Kristie Islands Apt. 259',
    //     company: 'Chapman-Schneider LLC',
    //     companyEmail: '',
    //     country: 'Cocos (Keeling) Islands',
    //     contact: '(670) 409-3703',
    //     teacher: 'Sampath',
    //     name: 'Randy Rich'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 2483,
    //   avatar: require('@src/assets/images/avatars/5-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '10 Jul 2019'
    // },
    // {
    //   id: 5019,
    //   issuedDate: '07 Aug 2019',
    //   client: {
    //     address: '92218 Andrew Radial',
    //     company: 'Mcclure, Hernandez and Simon Ltd',
    //     companyEmail: '',
    //     country: 'Macao',
    //     contact: '(646) 263-0257',
    //     teacher: 'Sampath',
    //     name: 'Mrs. Jodi Chapman'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 2825,
    //   avatar: require('@src/assets/images/avatars/8-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: '-$459',
    //   class: '8 A',
    //   dueDate: '14 Oct 2019'
    // },
    // {
    //   id: 5020,
    //   issuedDate: '10 May 2019',
    //   client: {
    //     address: '2342 Michelle Valley',
    //     company: 'Hamilton PLC and Sons',
    //     companyEmail: '',
    //     country: 'Somalia',
    //     contact: '(751) 213-4288',
    //     teacher: 'Sampath',
    //     name: 'Steven Myers'
    //   },
    //   service: 'Unlimited Extended License',
    //   total: 2029,
    //   avatar: require('@src/assets/images/avatars/4-small.png').default,
    //   invoiceStatus: 'Past Due',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '28 Mar 2019'
    // },
    // {
    //   id: 5021,
    //   issuedDate: '02 Apr 2019',
    //   client: {
    //     address: '16039 Brittany Terrace Apt. 128',
    //     company: 'Silva-Reeves LLC',
    //     companyEmail: '',
    //     country: 'Slovakia (Slovak Republic)',
    //     contact: '(655) 649-7872',
    //     teacher: 'Sampath',
    //     name: 'Charles Alexander'
    //   },
    //   service: 'Software Development',
    //   total: 3208,
    //   avatar: '',
    //   invoiceStatus: 'Sent',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '06 Sep 2019'
    // },
    // {
    //   id: 5022,
    //   issuedDate: '02 May 2019',
    //   client: {
    //     address: '37856 Olsen Lakes Apt. 852',
    //     company: 'Solis LLC Ltd',
    //     companyEmail: '',
    //     country: 'Brazil',
    //     contact: '(402) 935-0735',
    //     teacher: 'Sampath',
    //     name: 'Elizabeth Jones'
    //   },
    //   service: 'Software Development',
    //   total: 3077,
    //   avatar: '',
    //   invoiceStatus: 'Sent',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '09 May 2019'
    // },
    // {
    //   id: 5023,
    //   issuedDate: '23 Mar 2020',
    //   client: {
    //     address: '11489 Griffin Plaza Apt. 927',
    //     company: 'Munoz-Peters and Sons',
    //     companyEmail: '',
    //     country: 'Argentina',
    //     contact: '(915) 448-6271',
    //     teacher: 'Sampath',
    //     name: 'Heidi Walton'
    //   },
    //   service: 'Software Development',
    //   total: 5578,
    //   avatar: require('@src/assets/images/avatars/9-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '23 Jul 2019'
    // },
    // {
    //   id: 5024,
    //   issuedDate: '28 Sep 2019',
    //   client: {
    //     address: '276 Michael Gardens Apt. 004',
    //     company: 'Shea, Velez and Garcia LLC',
    //     companyEmail: '',
    //     country: 'Philippines',
    //     contact: '(817) 700-2984',
    //     teacher: 'Kevin',
    //     name: 'Christopher Allen'
    //   },
    //   service: 'Software Development',
    //   total: 2787,
    //   avatar: require('@src/assets/images/avatars/1-small.png').default,
    //   invoiceStatus: 'Partial Payment',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '25 Sep 2019'
    // },
    // {
    //   id: 5025,
    //   issuedDate: '21 Feb 2021',
    //   client: {
    //     address: '633 Bell Well Apt. 057',
    //     company: 'Adams, Simmons and Brown Group',
    //     companyEmail: '',
    //     country: 'Martinique',
    //     contact: '(266) 611-9482',
    //     teacher: 'Sulochana',
    //     name: 'Joseph Oliver'
    //   },
    //   service: 'UI/UX Design & Development',
    //   total: 5591,
    //   avatar: '',
    //   invoiceStatus: 'Downloaded',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '07 Jun 2019'
    // },
    // {
    //   id: 5026,
    //   issuedDate: '24 May 2020',
    //   client: {
    //     address: '1068 Lopez Fall',
    //     company: 'Williams-Lawrence and Sons',
    //     companyEmail: '',
    //     country: 'Mexico',
    //     contact: '(739) 745-9728',
    //     teacher: 'Udawattha',
    //     name: 'Megan Roberts'
    //   },
    //   service: 'Template Customization',
    //   total: 2783,
    //   avatar: require('@src/assets/images/avatars/6-small.png').default,
    //   invoiceStatus: 'Draft',
    //   balance: 0,
    //   class: '8 A',
    //   dueDate: '22 Oct 2019'
    // },
    {
      id: 5027,
      issuedDate: '13 Jan 2021',
      client: {
        address: '86691 Mackenzie Light Suite 568',
        company: 'Deleon Inc LLC',
        companyEmail: '',
        country: 'Costa Rica',
        contact: '(682) 804-6506',
        teacher: 'Niroth',
        name: 'Sen. john College'
      },
      service: 'Template Customization',
      total: 2719,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      class: '2 A',
      dueDate: '04 Feb 2020'
    },
    {
      id: 5028,
      issuedDate: '18 May 2020',
      client: {
        address: '86580 Sarah Bridge',
        company: 'Farmer, Johnson and Anderson Group',
        companyEmail: '',
        country: 'Cameroon',
        contact: '(775) 366-0411',
        teacher: 'Prasad',
        name: 'Sen. Sebastian College'
      },
      service: 'Template Customization',
      total: 3325,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 'Good',
      class: '4 E',
      dueDate: '02 Mar 2020'
    },
    {
      id: 5029,
      issuedDate: '29 Oct 2020',
      client: {
        address: '49709 Edwin Ports Apt. 353',
        company: 'Sherman-Johnson PLC',
        companyEmail: '',
        country: 'Macedonia',
        contact: '(510) 536-6029',
        teacher: 'Supun',
        name: 'Prince of wales College'
      },
      service: 'Template Customization',
      total: 3851,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      class: '9 C',
      dueDate: '25 Aug 2019'
    },
    {
      id: 5030,
      issuedDate: '07 Apr 2020',
      client: {
        address: '3856 Mathis Squares Apt. 584',
        company: 'Byrd LLC PLC',
        companyEmail: '',
        country: 'Congo',
        contact: '(253) 230-4657',
        teacher: 'Gayan',
        name: 'Ds Senanayake College'
      },
      service: 'Template Customization',
      total: 5565,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 0,
      class: '6 D',
      dueDate: '06 Mar 2020'
    },
    {
      id: 5031,
      issuedDate: '21 Aug 2020',
      client: {
        address: '141 Adrian Ridge Suite 550',
        company: 'Stone-Zimmerman Group',
        companyEmail: '',
        country: 'Falkland Islands (Malvinas)',
        contact: '(612) 546-3485',
        teacher: 'Lasith',
        name: 'Dharmapala College'
      },
      service: 'Template Customization',
      total: 3313,
      avatar: '',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      class: '3 E',
      dueDate: '09 Jun 2019'
    },
    {
      id: 5032,
      issuedDate: '31 May 2020',
      client: {
        address: '01871 Kristy Square',
        company: 'Yang, Hansen and Hart PLC',
        companyEmail: '',
        country: 'Germany',
        contact: '(203) 601-8603',
        teacher: 'Gehan',
        name: 'Mahanama College'
      },
      service: 'Template Customization',
      total: 5181,
      avatar: '',
      invoiceStatus: 'Past Due',
      balance: 0,
      class: '1 A',
      dueDate: '22 Oct 2019'
    },
    {
      id: 5033,
      issuedDate: '12 Jul 2020',
      client: {
        address: '075 Smith Views',
        company: 'Jenkins-Rosales Inc',
        companyEmail: '',
        country: 'Colombia',
        contact: '(895) 401-4255',
        teacher: 'Lakshitha',
        name: 'Isipathana College'
      },
      service: 'Template Customization',
      total: 2869,
      avatar: '',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      class: '13 E',
      dueDate: '22 Mar 2020'
    },
    {
      id: 5034,
      issuedDate: '10 Jul 2020',
      client: {
        address: '2577 Pearson Overpass Apt. 314',
        company: 'Mason-Reed PLC',
        companyEmail: '',
        country: 'Paraguay',
        contact: '(602) 336-9806',
        teacher: 'Sunimal',
        name: 'Nalanda College'
      },
      service: 'Unlimited Extended License',
      total: 4836,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      class: '5 C',
      dueDate: '22 Oct 2019'
    },
    {
      id: 5035,
      issuedDate: '20 Jul 2020',
      client: {
        address: '1770 Sandra Mountains Suite 636',
        company: 'Foster-Pham PLC',
        companyEmail: '',
        country: 'Western Sahara',
        contact: '(936) 550-1638',
        teacher: 'Kamal',
        name: 'Royal College'
      },
      service: 'UI/UX Design & Development',
      total: 4263,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 'Best',
      dueDate: '12 Jun 2019',
      class: '10 B'
    },
    {
      id: 5036,
      issuedDate: '19 Apr 2020',
      client: {
        address: '78083 Laura Pines',
        company: 'Richardson and Sons LLC',
        companyEmail: '',
        country: 'Bhutan',
        contact: '(687) 660-2473',
        teacher: 'Sampath',
        name: 'Ananda College'
      },
      service: 'Unlimited Extended License',
      total: 3171,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 'Best',
      dueDate: '25 Sep 2019',
      class: '8 A'
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/invoice/invoices').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, status = null } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.invoices
    .filter(
      invoice =>
        /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
        (invoice.client.companyEmail.toLowerCase().includes(queryLowered) ||
          invoice.client.name.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
    )
    .sort(sortCompare('id'))
    .reverse()
  /* eslint-enable  */

  return [
    200,
    {
      allData: data.invoices,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet(/\/api\/invoice\/invoices\/\d+/).reply(config => {
  // // Get event id from URL
  const invoiceId = Number(config.url.substring(config.url.lastIndexOf('/') + 1))

  const invoiceIndex = data.invoices.findIndex(e => e.id === invoiceId)
  const responseData = {
    invoice: data.invoices[invoiceIndex],
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905'
    }
  }
  return [200, responseData]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/invoice/delete').reply(config => {
  // Get invoice id from URL
  let invoiceId = config.id

  // Convert Id to number
  invoiceId = Number(invoiceId)

  const invoiceIndex = data.invoices.findIndex(t => t.id === invoiceId)
  data.invoices.splice(invoiceIndex, 1)

  return [200]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/api/invoice/clients').reply(() => {
  const clients = data.invoices.map(invoice => invoice.client)
  return [200, clients.slice(0, 5)]
})
