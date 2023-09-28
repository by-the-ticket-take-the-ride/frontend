import HeartIcon from "../components/Icons/HeartIcon";
import PersonIcon from "../components/Icons/PersonIcon";
import TicketIcon from '../components/Icons/TicketIcon';
import ReviewIcon from '../components/Icons/ReviewIcon';

export const tabData = [
  {
    link: '/personal-account/my-tickets',
    text: 'Мои билеты',
    svg: TicketIcon
  },
  {
    link: '/personal-account/favourites',
    text: 'Избранное',
    svg: HeartIcon 
  },
   {
    link: '/personal-account/my-data',
    text: 'Мои данные',
    svg: PersonIcon
  },
   {
    link: '/personal-account/my-reviews',
    text: 'Мои отзывы',
    svg: ReviewIcon
  }
]