type Card = {
  word: string,
  translation: string,
  image: string,
  audioSrc: string
}

interface Category {
  displayName: string;
  categoryImage: string;
  category: string;
  items: Card[];
}

const wordCards: Card[][] = [
  [{
    word: 'cry',
    translation: 'плакать',
    image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/cry.jpg',
    audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dance.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dive.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/draw.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fish.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fly.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/hug.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/jump.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/open.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/play.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/point.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/ride.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/run.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/sing.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/skip.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/swim.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/cat.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/chick.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/chicken.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dog.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/horse.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/pig.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/rabbit.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/sheep.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/bird.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fish1.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/frog.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жираф',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/giraffe.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/lion.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/mouse.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/turtle.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dolphin.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/skirt.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/pants.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/blouse.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dress.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/boot.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/shirt.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/coat.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/shoe.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/sad.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/angry.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/happy.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/tired.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/surprised.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/scared.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/smile.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/laugh.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/laugh.mp3'
    }
  ],
  [
    {
      word: 'black',
      translation: 'чёрный',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/black.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/black.mp3',
    },
    {
      word: 'blue',
      translation: 'синий',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/blue.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/blue.mp3',
    },
    {
      word: 'green',
      translation: 'зелёный',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/green.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/green.mp3',
    },
    {
      word: 'grey',
      translation: 'серый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/grey.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/grey.mp3',
    },
    {
      word: 'orange',
      translation: 'оранжевый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/orange.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/orange.mp3',
    },
    {
      word: 'red',
      translation: 'красный',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/red.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/red.mp3',
    },
    {
      word: 'white',
      translation: 'белый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/white.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/white.mp3',
    },
    {
      word: 'yellow',
      translation: 'желтый',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/yellow.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/yellow.mp3',
    }
  ],
  [
    {
      word: 'apple',
      translation: 'яблоко',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/apple.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/apple.mp3'
    },
    {
      word: 'banana',
      translation: 'банан',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/banana.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/banana.mp3',
    },
    {
      word: 'cherry',
      translation: 'вишня',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/cherry.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/cherry.mp3',
    },
    {
      word: 'lemon',
      translation: 'лимон',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/lemon.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/lemon.mp3',
    },
    {
      word: 'orange',
      translation: 'апельсин',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/orange.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/orange.mp3',
    },
    {
      word: 'pear',
      translation: 'груша',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/pear.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/pear.mp3',
    },
    {
      word: 'pineapple',
      translation: 'ананас',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/pineapple.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/pineapple.mp3',
    },
    {
      word: 'strawberry',
      translation: 'клубника',
      image: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/strawberry.jpg',
      audioSrc: '/stavrovadv-JSFE2021Q1/english-for-kids/audio/strawberry.mp3',
    },
  ],
];

const categories: Category[] = [{
  displayName: 'Action (set A)',
  categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/dance.jpg',
  category: 'actionA',
  items: wordCards[0],
},
  {
    displayName: 'Action (set B)',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/open.jpg',
    category: 'actionB',
    items: wordCards[1],
  },
  {
    displayName: 'Animal (set A)',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/cat.jpg',
    category: 'animalA',
    items: wordCards[2],
  },
  {
    displayName: 'Animal (set B)',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/bird.jpg',
    category: 'animalB',
    items: wordCards[3],
  },
  {
    displayName: 'Clothes',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/blouse.jpg',
    category: 'clothes',
    items: wordCards[4],
  },
  {
    displayName: 'Emotions',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/happy.jpg',
    category: 'emotions',
    items: wordCards[5],
  },
  {
    displayName: 'Colors',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/colors/beige.jpg',
    category: 'colors',
    items: wordCards[6],
  },
  {
    displayName: 'Fruits',
    categoryImage: '/stavrovadv-JSFE2021Q1/english-for-kids/img/fruits/cherry.jpg',
    category: 'fruits',
    items: wordCards[7],
  },
]

export default categories;
