const db = require('./server/db');
const {
  Student,
  Campus
} = require('./server/db/models/');

const campuses = [{
    name: 'Earth',
    imageUrl: '/planets/earth'
  },
  {
    name: 'Jupiter',
    imageUrl: '/planets/jupiter'
  },
  {
    name: 'Mars',
    imageUrl: '/planets/mars'
  },
  {
    name: 'Mercury',
    imageUrl: '/planets/mercury'
  },
  {
    name: 'Neptune',
    imageUrl: '/planets/neptune'
  },
  {
    name: 'Saturn',
    imageUrl: '/planets/saturn'
  },
  {
    name: 'Uranus',
    imageUrl: '/planets/uranus'
  },
  {
    name: 'Venus',
    imageUrl: '/planets/venus'
  },
];

const names = ["Adam Sy", "Alex Cantu", "Carlos Marin", "Andres Mendoza", "Brandon Alford", "Carson Maher", "Chris Bi", "Christian Diaz", "Daniel Tai", "David Lee", "Dominic Tey", "Drew Kohnle", "Elijah Chang", "Frank Martinez", "Garrett Macnee", "George Goodwin", "Henry C. Chen", "Isaac Kuo", "Isaac Tsou", "Jacob Roberts", "Jasper Han", "Jasper Kuhn", "Jesse Avila", "Jonathan Robbins", "Josh Carbunck", "Josh Cherng", "Josue Pacheco", "Julius Chang", "Luke Cui", "Marcus Couch", "Mark Fan", "Micah Sy Lato", "Nestor Zepeda", "Nkhosi Gama", "Peter Ho", "Rafael Diaz", "Rick Petkau", "Rui Jiang", "Ryan Li", "Samuel Gutierrez", "Samuel Kwong", "Samuel Swei", "Samuel Yeh", "Stephen Kwan", "Titus Ting", "Will Wang", "William Jeng", "Yi Sun", "Austin Anderson", "Brian Muller", "Sean David", "Carlos Salamanca", "Charles Pan", "Chris Jackson", "Jacob Lin", "Clarence So", "Connor Robinson", "Daniel Jenkins", "Daniel Martin", "David Hanson", "David Ye", "Ebenezer Lee", "Ben Findeisen", "Eric Song", "Joseph Hernandez", "Joe Yu", "Joshua Tjokrosurjo", "Kenny Nguyen", "Mark Allijohn", "Ray Ding", "Ryan Armstrong", "Sven Lee", "Tommy Lockwood", "Abraham Goshay", "Andrew Jen", "Austin Zhang", "Basel Almachraki", "Benjamin Liu", "Bill Yeh", "Christian Yu", "Christopher Valencia", "Daniel Wu", "David Sun", "David Welk", "Dennis Huang", "Dhaval Kashyap", "Ed Galaska", "Edgardo Mendoza", "Enoch Huang", "Eric Pan", "George Ashebo", "Henry Chen", "Jack Hu", "Jack Ji", "Allen Liu", "Jason Yeung", "Jasper Duan", "JayWynn Dueck", "Jeff Yang", "Jeffrey Cheung", "Johnathan Lin", "Johnny Stone", "Johnny Zhao", "Jonathan Karr", "Drew Hawthorn", "Jun Heo", "Justin Washington", "Kevin Sung", "Kevin Yum", "Kyle Yen", "Matthew Lee", "Luke Lu", "Marvin Igwe", "Matt Martin", "Matthew Au", "Nathan Bodrug", "Michael Cofino", "Miles Mistler", "Misael Trejo", "Mauricio Gonzalez", "Nazarite Goh", "Andreas Andreas", "Ben Wang", "Daniel Teng", "David Tai", "Dustin Davis", "Ian Wolf", "Jacob Chen", "Jarrod Frankum", "Jean Jeong", "John Ferrante", "Jonathan Tey", "Joseph Duque", "Joseph Meng", "Joshua Obidah", "Julian Arango", "Kevin Ger", "Leo Medina", "Michael Ng", "Paul Sutton", "Peter Cheng", "Philip Lam", "Rodney Rodriguez", "Samuel Chiu", "Joon Jo", "Terry Hung", "Adilenne Garcia", "Amy Cantu", "Allison Lin", "Amanda Vetter", "Amarachi Ibe", "Amber Petrillo", "Amber Sun", "Amy Yung", "Ana Carolina Corey", "Liliana Marin", "Angela Oliva", "Anna Bachand", "April Park", "Boeun Lee", "Brenda Penner", "Bridget Dou", "Charimar Valentin", "Chili Lee", "Christa Jeschke", "Claire Huang", "Clara Lee", "Connie Chen", "Crystal Cabral", "Crystal Goh", "Dana Martin", "Daniela Cheung", "Deborah Chen", "Elisa Melo", "Elizabeth Chan", "Elizabeth Gonzales", "Eunice Tay", "Flor Manzanares", "Grace Liang", "Hannah Lee", "Hannah Penner", "Isabel Mora", "Janine Xiang", "Jenny Liang", "Jessica Chen", "Joanna Pan", "Joanna Rumbley", "Joanna Tan", "Joy Herman", "Julia Chung", "JZ Hung", "Kaylin Wiseman", "Keila Rios", "Kelli Mann", "Annie Liang", "Anastasia David", "Cindy Mariano", "Jura Lin", "Elim Oh", "Emily Hu", "Gabrielle Pryor", "Johanna Findeisen", "Rachael Hernandez", "Janis Freeman", "Jenn Phu", "Joanna Wiguna", "Lydia Lim", "Megan Ku", "Nuria Dubon", "Priscilla Wang", "Rachel Chavana", "Rebecca Y. Chen", "Sandy Wang", "Shirleen Fang", "Yang Cheng", "Zoe Zhang", "Aaliyah Shen", "Abby Miner", "Abib Cao", "Alice Qin", "Alice Wu", "Amanda Sulistyo", "Amber Jamerson", "Angela Wang", "Ann Huang", "Anna Johnsen", "Anna Olson", "Athena Clark", "Camille Bianan", "Caric Chow", "Carmen Delgado", "Carrie Chambers", "Chelsea Corpuz", "Christie Pagan", "Danielle Jones", "Elaine Hoang", "Elim Feng", "Emily Liu", "Eve Wang", "Gladicel Flores", "Grace Cheng", "Grace Jou", "Hannah Oh", "Indigo Lu", "Jackie Arevalo", "Jacqueline Elizondo", "Jessica Yoon", "Jinhee Han", "Joana Morales", "Tiffany Liu", "Joo Hee Eom", "Hannah Hawthorn", "Joyce Low", "Claire Lee", "Kaitlin Hairston", "Karina Lozada", "Katya Becker", "Kayla Guilliams", "Laura Wilde", "Lisa Matamoros", "Lisa Welk", "Lorena Roca", "Lydia Wong", "Mary Amelia Fichter", "Angel Vattakunnel", "Benedicta Lee", "Conomy Wang", "Ellie Hsu", "Erika Yang", "Esther Tsai", "Grace Sun", "Hannah Smith", "Lisa Lin", "Melody Yang", "Meng Ge", "Peace Lu", "Rachel Woo", "Renewing Xu", "Rossy Ramos", "Sara Petkau", "Sarah Li", "Sarah Olson", "Sarah Yu", "Tam Le", "Nayeon Jo", "Viviana Figueroa", "Ya-Chien Chan", "Yi Yuan"];

const students = [];

names.map(name => {
  let [firstName, lastName] = name.split(' ');
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  let gpa = parseFloat((Math.random() * 4).toFixed(2));
  let campusId = Math.floor(Math.random() * 7) + 1;
  students.push({
    firstName,
    lastName,
    email,
    gpa,
    campusId
  });
});

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus)))
  .then(() =>
    Promise.all(students.map(student =>
      Student.create(student)
    ))
  );

const main = () => {
  console.log('Syncing db...');
  db.sync({
      force: true
    })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Seeding done!');
      db.close();
      return null;
    });
};

main();
