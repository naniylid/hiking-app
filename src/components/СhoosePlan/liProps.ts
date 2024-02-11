import solo from '../../assets/img/select-items/Solo.svg';
import couple from '../../assets/img/select-items/Couple.svg';
import family from '../../assets/img/select-items/Family.svg';
import friends from '../../assets/img/select-items/Friends.svg';

import docs from '../../assets/img/select-items/Documents.svg';
import aids from '../../assets/img/select-items/Travel-aids.svg';
import clothes from '../../assets/img/select-items/Clothes.svg';
import health from '../../assets/img/select-items/Health.svg';
import all from '../../assets/img/select-items/all.svg';

interface List {
  title: string;
  image: string;
}

export const vacationing: List[] = [
  { image: solo, title: 'Solo' },
  { image: couple, title: 'Couple' },
  { image: family, title: 'Family' },
  { image: friends, title: 'Friends' },
];

export const listOf: List[] = [
  { image: docs, title: 'Documents' },
  { image: aids, title: 'Travel aids' },
  { image: clothes, title: 'Clothes' },
  { image: health, title: 'Health' },
  { image: all, title: 'All' },
];
