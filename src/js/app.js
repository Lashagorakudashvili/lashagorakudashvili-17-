var img = document.createElement("img");

img.src = "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";

img.alt = "Image Description";

let image = document.querySelector('img');
img.classList.add("image-class");

document.body.appendChild(img);


/*const imagesList = [
    {
        webImage:'https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0',
        guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
        offsetPercentageX: 0,
        offsetPercentageY: 1,
        width: 5656,
        height: 4704,
        //webImage: 'https://www.rijksmuseum.nl/media/482870/21-2-126-1.jpg',
        title: 'The Night Watch',
    },
    {
      webImage: 'https://www.rijksmuseum.nl/media/478362/SK-C-5.jpg',
      title: 'The Anatomy Lesson of Dr. Nicolaes Tulp',
    },
    {
      webImage: 'https://www.rijksmuseum.nl/media/4201/topstukken/0dd9a159-91a4-408d-98c8-36de53655a70.jpg',
      title: 'The Milkmaid',
    },
    {
      webImage: 'https://www.rijksmuseum.nl/media/467332/21-2-148-1.jpg',
      title: 'The Sampling Officials of the Amsterdam Drapers’ Guild',
    },
    {
      webImage: 'https://www.rijksmuseum.nl/media/4135/topstukken/6e0116b5-d6b5-41e5-9131-1f88d1bd3525.jpg',
      title: 'The Threatened Swan',
    },
    {
      webImage: 'https://www.rijksmuseum.nl/media/445824/SK-A-2525.jpg',
      title: 'The Merry Family',
    },
  ];

  const imagesContainer = document.getElementById('images-list');

  const createCard = ({ webImage, title}) => {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = webImage;
    image.alt = title;

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.innerText = title;

    const seeDetailsButton = document.createElement('button');
    seeDetailsButton.className = 'card-button';
    seeDetailsButton.innerText = 'See more details';

    const removeButton = document.createElement('button');
    removeButton.className = 'card-button';
    removeButton.innerText = 'Remove card';

    card.append(image, cardTitle, seeDetailsButton, removeButton);

    return card;
  };

  const cards = imagesList.map(createCard);
  imagesContainer.append(...cards);*/


  const imagesList = [
  {
    webImage: 'https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0',
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: 'The Night Watch',
    longtitle: "The Night Watch, Rembrandt van Rijn, 1642",
  },
  {
    webImage: 'https://www.rijksmuseum.nl/media/478362/SK-C-5.jpg',
    title: 'The Anatomy Lesson of Dr. Nicolaes Tulp',
  },
  {
    webImage: 'https://www.rijksmuseum.nl/media/4201/topstukken/0dd9a159-91a4-408d-98c8-36de53655a70.jpg',
    title: 'The Milkmaid',
  },
  {
    webImage: 'https://www.rijksmuseum.nl/media/467332/21-2-148-1.jpg',
    title: 'The Sampling Officials of the Amsterdam Drapers’ Guild',
  },
  {
    webImage: 'https://www.rijksmuseum.nl/media/4135/topstukken/6e0116b5-d6b5-41e5-9131-1f88d1bd3525.jpg',
    title: 'The Threatened Swan',
  },
  {
    webImage: 'https://www.rijksmuseum.nl/media/445824/SK-A-2525.jpg',
    title: 'The Merry Family',
  },
];

/*const imagesContainer = document.getElementById('images-list');

const createCard = ({ webImage, title, longtitle }) => {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = webImage;
  image.alt = title;

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.innerText = title;

  const cardSubtitle1 = document.createElement('p');
  cardSubtitle1.className = 'card-subtitle';
  cardSubtitle1.innerText = longtitle;

    
  const cardSubtitle2 = document.createElement('p');
  cardSubtitle2.className = 'card-subtitle';
  cardSubtitle2.innerText = 'for more iformation visit';
  const link = document.createElement('a');
  link.href = '#';
  link.innerText = 'here';
  link.style.marginLeft = '0.5em';
  cardSubtitle2.appendChild(link);
  
    
  const seeDetailsButton = document.createElement('button');
  seeDetailsButton.className = 'card-button';
  seeDetailsButton.innerText = 'See more details';

  const removeButton = document.createElement('button');
  removeButton.className = 'card-button';
  removeButton.innerText = 'Remove card';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'card-buttons-container';

  buttonsContainer.append(seeDetailsButton, removeButton);
    
  card.append(image, cardTitle, cardSubtitle1, cardSubtitle2, seeDetailsButton, removeButton);

  return card;
};*/







const imagesContainer = document.getElementById('images-list');

const createCard = ({ webImage, title, longtitle }) => {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = webImage;
  image.alt = title;

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.innerText = title;

  const cardSubtitle1 = document.createElement('p');
  cardSubtitle1.className = 'card-subtitle';
  cardSubtitle1.innerText = longtitle;

  const cardSubtitle2 = document.createElement('p');
  cardSubtitle2.className = 'card-subtitle';
  cardSubtitle2.innerText = 'for more iformation visit';
  const link = document.createElement('a');
  link.href = '#';
  link.innerText = 'here';
  link.style.marginLeft = '0.5em';
  cardSubtitle2.appendChild(link);

  const seeDetailsButton = document.createElement('button');
  seeDetailsButton.className = 'card-button';
  seeDetailsButton.innerText = 'See more details';

  const removeButton = document.createElement('button');
  removeButton.className = 'card-button';
  removeButton.innerText = 'Remove card';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'card-buttons-container';
  buttonsContainer.append(seeDetailsButton, removeButton);

  const textContainer = document.createElement('div');
  textContainer.className = 'card-text-container';
  textContainer.append(cardTitle, cardSubtitle1, cardSubtitle2);

  card.append(image, textContainer, buttonsContainer);
    
  return card;
};

const cards = imagesList.map(createCard);
imagesContainer.append(...cards);





