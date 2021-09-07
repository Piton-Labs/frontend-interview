import faker from 'faker';

export type CardProps = {
  title: string;
  genres: Array<string>,
  imageUrl: string,
  views: number,
  likes: number,
}

let data: CardProps[] = [];

for (let index = 0; index < 30; index++) {
  data.push({
    title: faker.company.companyName(),
    genres: [faker.company.bsNoun(), faker.company.bsNoun(), faker.company.bsNoun(), faker.company.bsNoun()].slice(0, faker.datatype.number(2) + 1),
    imageUrl: faker.image.abstract(429, 350),
    views: faker.datatype.number(100000),
    likes: faker.datatype.number(100000),
  })   
}

export default data;