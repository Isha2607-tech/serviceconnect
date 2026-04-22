import hotelIcon from '../assets/icons/hotel.png';
import beautyIcon from '../assets/icons/beauty.png';
import groceryIcon from '../assets/icons/grocery.png';
import milkIcon from '../assets/icons/milk.png';
import electricianIcon from '../assets/icons/electrician.png';
import plumberIcon from '../assets/icons/plumber.png';

export const GROUPED_CATEGORIES = [
  {
    id: 'daily',
    title: 'Daily Needs',
    items: [
      { id: 'grocery', name: 'Grocery', icon: groceryIcon },
      { id: 'milk', name: 'Milk & Milk Products', icon: milkIcon },
      { id: 'medicines', name: 'Medicines', icon: 'https://img.icons8.com/bubbles/180/pill.png' },
      { id: 'electricians', name: 'Electricians', icon: electricianIcon },
      { id: 'plumber', name: 'Plumber', icon: plumberIcon },
    ]
  },
  {
    id: 'food',
    title: 'Food',
    items: [
      { id: 'restaurants', name: 'Restaurants', icon: 'https://img.icons8.com/bubbles/180/restaurant.png' },
      { id: 'delivery', name: 'Home Delivery', icon: 'https://img.icons8.com/bubbles/180/scooter.png' },
    ]
  },
  {
    id: 'hotels',
    title: 'Hotels',
    items: [
      { id: 'hotels_sub', name: 'Hotels', icon: hotelIcon },
      { id: 'hostels', name: 'PG/Hostels', icon: 'https://img.icons8.com/bubbles/180/bed.png' },
    ]
  },
  {
    id: 'beauty',
    title: 'Beauty & Health',
    items: [
      { id: 'beauty_sub', name: 'Beauty', icon: beautyIcon },
      { id: 'gym', name: 'Gym', icon: 'https://img.icons8.com/bubbles/180/dumbbell.png' },
      { id: 'hospitals', name: 'Hospitals', icon: 'https://img.icons8.com/bubbles/180/hospital.png' },
      { id: 'dentists', name: 'Dentists', icon: 'https://img.icons8.com/bubbles/180/tooth.png' },
    ]
  },
  {
    id: 'automobile',
    title: 'Automobile',
    items: [
      { id: 'cars', name: 'New Cars', icon: 'https://img.icons8.com/bubbles/180/car.png' },
      { id: 'sell_cars', name: 'Sell Cars', icon: 'https://img.icons8.com/bubbles/180/money-bag.png' },
    ]
  },
  {
    id: 'home',
    title: 'Home & Living',
    items: [
      { id: 'home_services', name: 'Home Services', icon: 'https://img.icons8.com/bubbles/180/home.png' },
      { id: 'estate', name: 'Estate', icon: 'https://img.icons8.com/bubbles/180/commercial.png' },
      { id: 'contractors', name: 'Contractors', icon: 'https://img.icons8.com/bubbles/180/hammer.png' },
    ]
  },
  {
    id: 'finance',
    title: 'Life Events & Finance',
    items: [
      { id: 'wedding', name: 'Wedding', icon: 'https://img.icons8.com/bubbles/180/diamond-ring.png' },
      { id: 'education', name: 'Education', icon: 'https://img.icons8.com/bubbles/180/education.png' },
      { id: 'loans', name: 'Loans', icon: 'https://img.icons8.com/bubbles/180/money-bag.png' },
      { id: 'pet', name: 'Pet', icon: 'https://img.icons8.com/bubbles/180/dog.png' },
    ]
  }
];
