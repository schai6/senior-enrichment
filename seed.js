const db = require('./server/db');
const {
  Student,
  Campus
} = require('./server/db/models/');

const campuses = [{
    name: 'Earth',
    imageUrl: '/planets/earth.jpg',
    description: `Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago.[24][25][26] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]`
  },
  {
    name: 'Jupiter',
    imageUrl: '/planets/jupiter.jpg',
    description: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity.[11] The Romans named it after their god Jupiter.[12] When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,[13] and making it on average the third-brightest object in the night sky after the Moon and Venus.`
  },
  {
    name: 'Mars',
    imageUrl: '/planets/mars.jpg',
    description: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet"[14][15] because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.[16] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.`
  },
  {
    name: 'Mercury',
    imageUrl: '/planets/mercury.jpg',
    description: `Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.

    Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth. Seen from Earth, this cycle of phases reoccurs approximately every 116 days, the so-called synodic period. Although Mercury can appear as a bright star-like object when viewed from Earth, its proximity to the Sun often makes it more difficult to see than Venus.`
  },
  {
    name: 'Neptune',
    imageUrl: '/planets/neptune.jpg',
    description: `Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[d] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.`
  },
  {
    name: 'Saturn',
    imageUrl: '/planets/saturn.jpg',
    description: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.[10][11] It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive.[12][13][14] Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.`
  },
  {
    name: 'Uranus',
    imageUrl: '/planets/uranus.jpg',
    description: `Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons.[12] It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.[12] The interior of Uranus is mainly composed of ices and rock.[11]`
  },
  {
    name: 'Venus',
    imageUrl: '/planets/venus.jpg',
    description: `Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[13][14] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.`
  }
];

const names = ["Adam Sy", "Alex Cantu", "Carlos Marin", "Andres Mendoza", "Brandon Alford", "Carson Maher", "Chris Bi", "Christian Diaz", "Daniel Tai", "David Lee", "Dominic Tey", "Drew Kohnle", "Elijah Chang", "Frank Martinez", "Garrett Macnee", "George Goodwin", "Henry C. Chen", "Isaac Kuo", "Isaac Tsou", "Jacob Roberts", "Jasper Han", "Jasper Kuhn", "Jesse Avila", "Jonathan Robbins", "Josh Carbunck", "Josh Cherng", "Josue Pacheco", "Julius Chang", "Luke Cui", "Marcus Couch", "Mark Fan", "Micah Sy Lato", "Nestor Zepeda", "Nkhosi Gama", "Peter Ho", "Rafael Diaz", "Rick Petkau", "Rui Jiang", "Ryan Li", "Samuel Gutierrez", "Samuel Kwong", "Samuel Swei", "Samuel Yeh", "Stephen Kwan", "Titus Ting", "Will Wang", "William Jeng", "Yi Sun", "Austin Anderson", "Brian Muller", "Sean David", "Carlos Salamanca", "Charles Pan", "Chris Jackson", "Jacob Lin", "Clarence So", "Connor Robinson", "Daniel Jenkins", "Daniel Martin", "David Hanson", "David Ye", "Ebenezer Lee", "Ben Findeisen", "Eric Song", "Joseph Hernandez", "Joe Yu", "Joshua Tjokrosurjo", "Kenny Nguyen", "Mark Allijohn", "Ray Ding", "Ryan Armstrong", "Sven Lee", "Tommy Lockwood", "Abraham Goshay", "Andrew Jen", "Austin Zhang", "Basel Almachraki", "Benjamin Liu", "Bill Yeh", "Christian Yu", "Christopher Valencia", "Daniel Wu", "David Sun", "David Welk", "Dennis Huang", "Dhaval Kashyap", "Ed Galaska", "Edgardo Mendoza", "Enoch Huang", "Eric Pan", "George Ashebo", "Henry Chen", "Jack Hu", "Jack Ji", "Allen Liu", "Jason Yeung", "Jasper Duan", "JayWynn Dueck", "Jeff Yang", "Jeffrey Cheung", "Johnathan Lin", "Johnny Stone", "Johnny Zhao", "Jonathan Karr", "Drew Hawthorn", "Jun Heo", "Justin Washington", "Kevin Sung", "Kevin Yum", "Kyle Yen", "Matthew Lee", "Luke Lu", "Marvin Igwe", "Matt Martin", "Matthew Au", "Nathan Bodrug", "Michael Cofino", "Miles Mistler", "Misael Trejo", "Mauricio Gonzalez", "Nazarite Goh", "Andreas Andreas", "Ben Wang", "Daniel Teng", "David Tai", "Dustin Davis", "Ian Wolf", "Jacob Chen", "Jarrod Frankum", "Jean Jeong", "John Ferrante", "Jonathan Tey", "Joseph Duque", "Joseph Meng", "Joshua Obidah", "Julian Arango", "Kevin Ger", "Leo Medina", "Michael Ng", "Paul Sutton", "Peter Cheng", "Philip Lam", "Rodney Rodriguez", "Samuel Chiu", "Joon Jo", "Terry Hung", "Adilenne Garcia", "Amy Cantu", "Allison Lin", "Amanda Vetter", "Amarachi Ibe", "Amber Petrillo", "Amber Sun", "Amy Yung", "Ana Carolina Corey", "Liliana Marin", "Angela Oliva", "Anna Bachand", "April Park", "Boeun Lee", "Brenda Penner", "Bridget Dou", "Charimar Valentin", "Chili Lee", "Christa Jeschke", "Claire Huang", "Clara Lee", "Connie Chen", "Crystal Cabral", "Crystal Goh", "Dana Martin", "Daniela Cheung", "Deborah Chen", "Elisa Melo", "Elizabeth Chan", "Elizabeth Gonzales", "Eunice Tay", "Flor Manzanares", "Grace Liang", "Hannah Lee", "Hannah Penner", "Isabel Mora", "Janine Xiang", "Jenny Liang", "Jessica Chen", "Joanna Pan", "Joanna Rumbley", "Joanna Tan", "Joy Herman", "Julia Chung", "JZ Hung", "Kaylin Wiseman", "Keila Rios", "Kelli Mann", "Annie Liang", "Anastasia David", "Cindy Mariano", "Jura Lin", "Elim Oh", "Emily Hu", "Gabrielle Pryor", "Johanna Findeisen", "Rachael Hernandez", "Janis Freeman", "Jenn Phu", "Joanna Wiguna", "Lydia Lim", "Megan Ku", "Nuria Dubon", "Priscilla Wang", "Rachel Chavana", "Rebecca Y. Chen", "Sandy Wang", "Shirleen Fang", "Yang Cheng", "Zoe Zhang", "Aaliyah Shen", "Abby Miner", "Abib Cao", "Alice Qin", "Alice Wu", "Amanda Sulistyo", "Amber Jamerson", "Angela Wang", "Ann Huang", "Anna Johnsen", "Anna Olson", "Athena Clark", "Camille Bianan", "Caric Chow", "Carmen Delgado", "Carrie Chambers", "Chelsea Corpuz", "Christie Pagan", "Danielle Jones", "Elaine Hoang", "Elim Feng", "Emily Liu", "Eve Wang", "Gladicel Flores", "Grace Cheng", "Grace Jou", "Hannah Oh", "Indigo Lu", "Jackie Arevalo", "Jacqueline Elizondo", "Jessica Yoon", "Jinhee Han", "Joana Morales", "Tiffany Liu", "Joo Hee Eom", "Hannah Hawthorn", "Joyce Low", "Claire Lee", "Kaitlin Hairston", "Karina Lozada", "Katya Becker", "Kayla Guilliams", "Laura Wilde", "Lisa Matamoros", "Lisa Welk", "Lorena Roca", "Lydia Wong", "Mary Amelia Fichter", "Angel Vattakunnel", "Benedicta Lee", "Conomy Wang", "Ellie Hsu", "Erika Yang", "Esther Tsai", "Grace Sun", "Hannah Smith", "Lisa Lin", "Melody Yang", "Meng Ge", "Peace Lu", "Rachel Woo", "Renewing Xu", "Rossy Ramos", "Sara Petkau", "Sarah Li", "Sarah Olson", "Sarah Yu", "Tam Le", "Nayeon Jo", "Viviana Figueroa", "Ya-Chien Chan", "Yi Yuan"];

const students = [];

names.map(name => {
  let [firstName, lastName] = name.split(' ');
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  let gpa = parseFloat((Math.random() * 4).toFixed(2));
  let campusId = Math.floor(Math.random() * 8) + 1;
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
