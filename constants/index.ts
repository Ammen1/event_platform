export const headerLinks = [
  {
    label: 'Sponsor',
    route: '/Sponser',
  },
  {
    label: 'Submit',
    route: '/submit',
  },
  {
    label: 'Bookmarkt',
    route: '/events/Bookmark',
  },
  {
    label: 'Leaderboard',
    route: '/Leaderboard',
  },
 
  {
    label: 'About',
    route: '/About',
  },

]


export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
