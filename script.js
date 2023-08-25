const table = document.querySelector('.table')
const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "Phycisist"
];

function randomPrice() {
    return Math.round(Math.random() * 100 )
}

const price = [randomPrice()]
