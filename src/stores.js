import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet Lorem',
  },
  {
    id: 2 ,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet Lorem',
  },
  {
    id: 3,
    rating: 7 ,
    text: 'Lorem ipsum dolor sit amet Lorem',
  },
]);