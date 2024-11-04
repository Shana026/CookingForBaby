import babyfoursixmonths from './assets/baby4-6months.jpg'
import babysixheightmonths from './assets/baby6-8months.jpg'
import babyninetwelvemonths from './assets/baby9-12months.jpg'
import babytwelvemonthsandplus from './assets/baby12+months.jpg'
import sweet from './assets/sweet.jpg'
import meal from './assets/meal.jpg'
import fingerFood from './assets/finger_food.jpg'
import pumpkinSoup from './assets/pumpkin_soup.jpg'
import soup from './assets/soup.jpg'
import pancakes from './assets/pancakes.jpg'
import potatoFries from './assets/potato_fries.jpg'
import fruitsCompote from './assets/fruits_compote.jpg'
import cookies from './assets/cookies.jpg'
import chickenSoup from './assets/chicken_soup.jpg'
import baby2 from './assets/baby2.jpg'

export const categoriesData = [
  { name: '4-6 months', image: babyfoursixmonths },
  { name: '6-8 months', image:  babysixheightmonths},
  { name: '9-12 months', image: babyninetwelvemonths },
  { name: '12+ months', image: baby2 },
  { name: 'Soup', image: soup },
  { name: 'Meal', image: meal },
  { name: 'Finger Food', image: fingerFood },
  { name: 'Sweet', image: sweet },
];

export const recipesData = [
  {
    id: '1',
    name: 'Fruits Compote',
    age: 4,
    image: fruitsCompote,
    categories: ['4-6 months', '6-8 months', '9-12 months', '12+ months', 'Sweet'],
    description: 'Cook and mix all the fruits',
    ingredients: ['Apple', 'Pear', 'Banana'],
  },
  {
    id: '2',
    name: 'Pancakes',
    age: 8,
    image: pancakes,
    categories: ['6-8 months', '9-12 months', '12+ months', 'Sweet'],
    description: 'Mix all the ingredients',
    ingredients: ['4 cas of flour', '1 egg', '1 applesauce'],
  },
  {
    id: '3',
    name: 'Pumpkin Soup',
    age: 4,
    image: pumpkinSoup,
    categories: ['4-6 months', '6-8 months', '9-12 months', '12+ months', 'Soup'],
    description: '',
    ingredients: ['Potato', 'Pumpkin', 'Carrot'],
  },
  {
    id: '4',
    name: 'Potato fries',
    age: 9,
    image: potatoFries,
    categories: ['9-12 months', '12+ months', 'Finger Food'],
    description: '',
    ingredients: ['potato', 'oil'],
  },
  {
    id: '5',
    name: 'Cookies',
    age: 12,
    image: cookies,
    categories: ['12+ months', 'Finger Food', 'Sweet'],
    description: '',
    ingredients: ['flour', 'egg', 'sugar'],
  },
  {
    id: '6',
    name: 'Chicken Soup',
    age: 6,
    image: chickenSoup,
    categories: ['6-8 months', '9-12 months', '12+ months', 'Soup', 'Meal'],
    description: '',
    ingredients: ['potato', 'carrot', 'chicken'],
  },
];
