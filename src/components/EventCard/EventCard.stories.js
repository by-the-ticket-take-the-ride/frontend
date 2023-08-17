import EventCard from "./EventCard.jsx";
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'uikit/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    data: {
      description: 'Данные для карточки',
    },
  }
};

export default meta;

export const Primary = {
  args: {
    data: {
      id: '1',
      name: 'Сергей Лазарев',
      image: 'https://www.topnews.ru/wp-content/uploads/2022/04/Sergey-Lazarev-1-1024x768.jpg',
      date: '15 сентября, 19:00',
      location: 'Олимпийский комплекс «Лужники»'
    }
  },
};

