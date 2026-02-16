"use strict";
exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fifty.65926278.svg","height":122,"width":122});

/***/ }),

/***/ 9395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ queryValidator),
/* harmony export */   "wi": () => (/* binding */ defaultQuery),
/* harmony export */   "yK": () => (/* binding */ defaultQuestions)
/* harmony export */ });
/* harmony import */ var _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1573);

const MAX_QUESTIONS = 10;
const MIN_QUESTIONS = 4;
const TIMES = [
    10,
    20,
    30,
    60
];
const DEFAULT_TIME = 20;
const DEFAULT_QUESTIONS = 5;
const INFINITY_MODE = false;
const TIME_MODE = false;
function queryValidator(query) {
    const { questions , time , infinitymode , timemode , categories  } = query;
    const urlQueries = {};
    if (questions && Number(questions)) {
        if (Number(questions) > MAX_QUESTIONS) urlQueries.questions = MAX_QUESTIONS;
        else if (Number(questions) < MIN_QUESTIONS) urlQueries.questions = MIN_QUESTIONS;
        else urlQueries.questions = Number(questions);
    } else urlQueries.questions = DEFAULT_QUESTIONS;
    if (time && Number(time)) {
        if (Number(time) > TIMES[TIMES.length - 1]) urlQueries.time = TIMES[TIMES.length - 1];
        else if (Number(time) < TIMES[0]) urlQueries.time = TIMES[0];
        else urlQueries.time = Number(time);
    } else urlQueries.time = DEFAULT_TIME;
    if (infinitymode) {
        if (infinitymode === "true" || infinitymode === true) urlQueries.infinitymode = true;
        else urlQueries.infinitymode = false;
    } else urlQueries.infinitymode = INFINITY_MODE;
    if (timemode) {
        if (timemode === "true" || timemode === true) urlQueries.timemode = true;
        else urlQueries.timemode = false;
    } else urlQueries.timemode = TIME_MODE;
    if (categories) {
        const categoriesArray = typeof categories === "string" ? categories.split(",") : categories;
        const categoriesArrayFiltered = categoriesArray.filter((category)=>_assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id).includes(category));
        if (categoriesArrayFiltered.length > 0) urlQueries.categories = categoriesArrayFiltered;
        else urlQueries.categories = _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id);
    } else urlQueries.categories = _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id);
    return urlQueries;
}
const defaultQuestions = {
    minQuestions: MIN_QUESTIONS,
    maxQuestions: MAX_QUESTIONS
};
const defaultQuery = {
    questions: DEFAULT_QUESTIONS,
    time: DEFAULT_TIME,
    infinitymode: INFINITY_MODE,
    timemode: TIME_MODE,
    categories: _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id)
};


/***/ }),

/***/ 5101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useBoundStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _useWildcards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8811);
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3939);
/* harmony import */ var _useQuestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useBoundStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((...a)=>({
        ...(0,_useWildcards__WEBPACK_IMPORTED_MODULE_1__/* .useWildcardsStore */ .A)(...a),
        ...(0,_useQueries__WEBPACK_IMPORTED_MODULE_2__/* .useQueriesStore */ .I)(...a),
        ...(0,_useQuestions__WEBPACK_IMPORTED_MODULE_3__/* .useQuestionsStore */ .n)(...a)
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useQueriesStore)
/* harmony export */ });
/* harmony import */ var _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9395);

const useQueriesStore = (set)=>({
        queries: _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_0__/* .defaultQuery */ .wi,
        setQueries: (queries)=>set({
                queries
            })
    });


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useQuestionsStore)
});

;// CONCATENATED MODULE: ./src/assets/questions.json
const questions_namespaceObject = JSON.parse('{"History":[{"question":"In what year did the Berlin Wall fall?","answers":["1989","1991","1987","1993"],"correctAnswer":"1989"},{"question":"The first Roman emperor to become a Christian was:","answers":["Constantine","Augustus","Julius Caesar","Nero"],"correctAnswer":"Constantine"},{"question":"According to ancient legends, who founded Rome?","answers":["Romulus and Remus","Julius Caesar","Augustus","Marcus Aurelius"],"correctAnswer":"Romulus and Remus"},{"question":"Which civilization was responsible for the construction of Machu Picchu?","answers":["Aztecs","Mayans","Incas","Inuit"],"correctAnswer":"Incas"},{"question":"Who was the first woman to win a Nobel Prize?","answers":["Marie Curie","Mother Teresa","Margaret Thatcher","Indira Gandhi"],"correctAnswer":"Marie Curie"},{"question":"Which of these countries was not a part of the Soviet Union?","answers":["Ukraine","Georgia","Poland","Belarus"],"correctAnswer":"Poland"},{"question":"By what other name is the Eastern Roman Empire known?","answers":["The Byzantine Empire","The Ottoman Empire","The Persian Empire","The Holy Roman Empire"],"correctAnswer":"The Byzantine Empire"},{"question":"Which country was the first to send a satellite into space?","answers":["Russia","USA","China","France"],"correctAnswer":"Russia"},{"question":"Who was the first explorer to circumnavigate the globe?","answers":["Christopher Columbus","Vasco da Gama","Magellan","Francis Drake"],"correctAnswer":"Magellan"},{"question":"What was the name of the document that established the United Nations?","answers":["The Treaty of Versailles","The Geneva Convention","The Charter of the United Nations","The Magna Carta"],"correctAnswer":"The Charter of the United Nations"},{"question":"What is the name of the goddess of victory in Greek mythology?","answers":["Nike","Puma","Adidas","Aphrodite"],"correctAnswer":"Nike"},{"question":"How many operas did Beethoven compose?","answers":["1","26","165","7"],"correctAnswer":"1"},{"question":"What philosopher said \\"I think, therefore I am\\"?","answers":["Descartes","Plato","Aristotle","Socrates"],"correctAnswer":"Descartes"},{"question":"Which of these is not one of the Seven Wonders of the Ancient World?","answers":["The Great Library of Alexandria","Colossus of Rhodes","Lighthouse of Alexandria","Temple of Artemis"],"correctAnswer":"The Great Library of Alexandria"},{"question":"Which of these is not a Greek god or goddess?","answers":["Aphrodite","Hera","Athena","Loki"],"correctAnswer":"Loki"}],"Entertainment":[{"question":"What is the name of the clown in the movie \\"It\\"?","answers":["Pennywise","Bozo","Krusty","Joker"],"correctAnswer":"Pennywise"},{"question":"What is the name of the fictional continent where the events of the TV series \\"Game of Thrones\\" take place?","answers":["Westeros","Essos","Sothoryos","Ulthos"],"correctAnswer":"Westeros"},{"question":"Who played the role of Batman in the 2008 movie \\"The Dark Knight\\"?","answers":["Christian Bale","Ben Affleck","George Clooney","Val Kilmer"],"correctAnswer":"Christian Bale"},{"question":"What is the name of the fairy in the Disney movie \\"Peter Pan\\"?","answers":["Tinker Bell","Wendy","Vidia","Navi"],"correctAnswer":"Tinker Bell"},{"question":"What is the name of the tiger that appears in the movie \\"Life of Pi\\"?","answers":["Richard Parker","Tony","Shere Khan","Pi Patel"],"correctAnswer":"Richard Parker"},{"question":"Who wrote the novel \\"One Hundred Years of Solitude\\"?","answers":["Gabriel García Márquez","Jorge Luis Borges","Isabel Allende","Octavio Paz"],"correctAnswer":"Gabriel García Márquez"},{"question":"Which of these is not a race or species in the video game \\"World of Warcraft\\"?","answers":["Kokiri","Undead","Huargen","Troll"],"correctAnswer":"Kokiri"},{"question":"How does Alice wane for the first time in the Disney movie \\"Alice in Wonderland\\"?","answers":["She drinks a potion","She eats a cake","She falls down a hole","She walks through a mirror"],"correctAnswer":"She drinks a potion"},{"question":"Who is the owner of Garfield in the comic strip \\"Garfield\\"?","answers":["Jon Arbuckle","Odie","Nermal","Liz Wilson"],"correctAnswer":"Jon Arbuckle"},{"question":"In which of these animes does the main character carry his sister in a box?","answers":["Kimetsu no Yaiba","Elfen Lied","Code Geass","Made in Abyss"],"correctAnswer":"Kimetsu no Yaiba"},{"question":"Where is the weak point of the titans in the anime \\"Attack on Titan\\"?","answers":["Nape","Head","Heart","Back"],"correctAnswer":"Nape"},{"question":"How many puppies does Perdita give birth to in the Disney movie \\"101 Dalmatians\\"?","answers":["15","101","99","8"],"correctAnswer":"15"},{"question":"How many dragon balls are there in the anime \\"Dragon Ball\\"?","answers":["7","8","6","12"],"correctAnswer":"7"},{"question":"In which of these movies are there aliens?","answers":["The Great Wall","Big Heroes 6","Duplicity","Braveheart"],"correctAnswer":"The Great Wall"},{"question":"What is the name of Misa Amane\'s shinigami in the anime \\"Death Note\\"?","answers":["Rem","Ryuk","Sidoh","Gelus"],"correctAnswer":"Rem"}],"Geography":[{"question":"What is the capital city of Australia?","answers":["Sydney","Melbourne","Canberra","Brisbane"],"correctAnswer":"Canberra"},{"question":"How many stars appear on the flag of the People\'s Republic of China?","answers":["4","5","6","3"],"correctAnswer":"5"},{"question":"What continent is Saudi Arabia on?","answers":["Asia","Africa","Europe","South America"],"correctAnswer":"Asia"},{"question":"What is the name of the official language in China?","answers":["Mandarin","Cantonese","Hokkien","Hakka"],"correctAnswer":"Mandarin"},{"question":"Which of these European countries is further west?","answers":["Spain","Italy","Greece","Germany"],"correctAnswer":"Spain"},{"question":"How many oceans are there on Earth?","answers":["5","6","7","8"],"correctAnswer":"5"},{"question":"What is the capital of Colombia?","answers":["Bogotá","Medellín","Cali","Barranquilla"],"correctAnswer":"Bogotá"},{"question":"Which country is the smallest in the world","answers":["Vatican City","Monaco","Nauru","Tuvalu"],"correctAnswer":"Vatican City"},{"question":"What is the largest country in Africa by land area?","answers":["Algeria","Sudan","Libya","Congo"],"correctAnswer":"Algeria"},{"question":"What is the highest mountain in America?","answers":["Mount Denali","Mount Logan","Mount Saint Elias","Pico de Orizaba"],"correctAnswer":"Mount Denali"},{"question":"Which city is located both in Europe and Asia?","answers":["Istanbul","Moscow","Kiev","Nicosia"],"correctAnswer":"Istanbul"},{"question":"What is the name of the world\'s largest reef system, located in Australia?","answers":["Great Barrier Reef","Belize Barrier Reef","Mesoamerican Barrier Reef","Andros Barrier Reef"],"correctAnswer":"Great Barrier Reef"},{"question":"Which river is the longest in the world?","answers":["Nile","Amazon","Yangtze","Mississippi"],"correctAnswer":"Amazon"},{"question":"Which country is the largest by land area?","answers":["Russia","Canada","China","United States"],"correctAnswer":"Russia"},{"question":"How many states are part of the United States?","answers":["50","51","48","53"],"correctAnswer":"50"},{"question":"Which of these countries is not in Europe?","answers":["Georgia","Moldova","Armenia","Azerbaijan"],"correctAnswer":"Armenia"},{"question":"What is the official currency of India?","answers":["Rupee","Ruble","Rial","Real"],"correctAnswer":"Rupee"},{"question":"In which country is Mount Everest located?","answers":["Nepal","China","India","Pakistan"],"correctAnswer":"Nepal"}],"Science":[{"question":"What is the chemical symbol for gold?","answers":["Au","Ag","Cu","Fe"],"correctAnswer":"Au"},{"question":"What is the triangle that has three equal sides called?","answers":["Equilateral","Isosceles","Scalene","Right"],"correctAnswer":"Equilateral"},{"question":"What is an oviparous?","answers":["An animal that lays eggs","An animal that gives birth","An animal that flies","An animal that lives in the water"],"correctAnswer":"An animal that lays eggs"},{"question":"Cartography is the study of what?","answers":["Maps","Cars","Cats","Carpets"],"correctAnswer":"Maps"},{"question":"If 50 is 100%, what is 90%?","answers":["45","10","100","50"],"correctAnswer":"45"},{"question":"How many legs does a fly have?","answers":["6","4","8","2"],"correctAnswer":"6"},{"question":"What is the smallest unit of matter?","answers":["Atom","Molecule","Cell","Electron"],"correctAnswer":"Atom"},{"question":"What element do all acids contain?","answers":["Hydrogen","Oxygen","Helium","Nitrogen"],"correctAnswer":"Hydrogen"},{"question":"What is the name of the process by which plants convert sunlight into energy?","answers":["Photosynthesis","Respiration","Digestion","Fermentation"],"correctAnswer":"Photosynthesis"},{"question":"What is the name of the force that pulls objects toward each other?","answers":["Gravity","Magnetism","Friction","Electricity"],"correctAnswer":"Gravity"},{"question":"What is the metal found in the center of the earth?","answers":["Iron","Nickel","Copper","Zinc"],"correctAnswer":"Iron"},{"question":"What are diamonds made of?","answers":["Carbon","Glass","Silver","Platinum"],"correctAnswer":"Carbon"},{"question":"What is the name of the process by which a solid turns into a gas without passing through the liquid state?","answers":["Sublimation","Evaporation","Condensation","Freezing"],"correctAnswer":"Sublimation"},{"question":"What is the name of the protein that gives skin, hair, and nails their strength?","answers":["Keratin","Collagen","Elastin","Myosin"],"correctAnswer":"Keratin"},{"question":"How many chemical elements are there on the periodic table?","answers":["118","92","104","113"],"correctAnswer":"118"},{"question":"What is the first element on the periodic table?","answers":["Hydrogen","Helium","Lithium","Oxygen"],"correctAnswer":"Hydrogen"},{"question":"What vitamin can be synthesized when exposed to sunlight?","answers":["Vitamin D","Vitamin A","Vitamin C","Vitamin E"],"correctAnswer":"Vitamin D"},{"question":"Every how many years does Halley\'s Comet pass the earth?","answers":["75","86","96","106"],"correctAnswer":"75"},{"question":"What is the only even prime number?","answers":["2","14","6","8"],"correctAnswer":"2"},{"question":"-3 + 10 ÷ 2","answers":["2","1","4","3.5"],"correctAnswer":"2"},{"question":"What does the gallon measure?","answers":["Volume","Weight","Distance","Time"],"correctAnswer":"Volume"},{"question":"What does the newton measure?","answers":["Force","Weight","Distance","Time"],"correctAnswer":"Force"}],"Technology":[{"question":"Which company developed the programming language Java?","answers":["Sun Microsystems","Microsoft","Apple","IBM"],"correctAnswer":"Sun Microsystems"},{"question":"How many bits is a byte?","answers":["8","4","16","32"],"correctAnswer":"8"},{"question":"How many megabytes is a gigabyte?","answers":["1024","1000","100","Depends on the size of the file"],"correctAnswer":"1024"},{"question":"What is the name of the open-source operating system based on the Linux kernel?","answers":["Ubuntu","Windows","macOS","Android"],"correctAnswer":"Ubuntu"},{"question":"What is the name of the first computer?","answers":["ENIAC","UNIVAC I","Z1","Colossus"],"correctAnswer":"ENIAC"},{"question":"What is the name of the web browser developed by Google?","answers":["Chrome","Firefox","Safari","Opera"],"correctAnswer":"Chrome"},{"question":"What is the name of the programming language used to create web pages?","answers":["JavaScript","CSS","PhP","Python"],"correctAnswer":"JavaScript"},{"question":"The \\".WAV\\" is a format of?","answers":["Audio","Video","Image","Document"],"correctAnswer":"Audio"},{"question":"What is the name of the first computer virus?","answers":["Creeper","Elk Cloner","Rabbit","Stoned"],"correctAnswer":"Creeper"},{"question":"How many laws of robotics (or Asimov\'s laws) are there?","answers":["3","4","2","6"],"correctAnswer":"3"},{"question":"What is the name of the first video game console?","answers":["Magnavox Odyssey","Atari 2600","Nintendo Entertainment System","Sega Genesis"],"correctAnswer":"Magnavox Odyssey"},{"question":"What is the best-selling video game in history?","answers":["Minecraft","Tetris","Wii Sports","Grand Theft Auto V"],"correctAnswer":"Minecraft"},{"question":"What color are the pigs in the video game \\"Angry Birds\\"?","answers":["Green","Red","Yellow","Blue"],"correctAnswer":"Green"},{"question":"Which of these is not a champion in the video game \\"League of Legends\\"?","answers":["Gang-il","Ahri","Teemo","Ryze"],"correctAnswer":"Gang-il"},{"question":"How many points do the grapes give in the video game \\"Pacman\\"?","answers":["1000","700","100","400"],"correctAnswer":"1000"},{"question":"What is the name of the main character in the video game \\"The Legend of Zelda\\"?","answers":["Link","Zelda","Ganon","Ganondorf"],"correctAnswer":"Link"}],"Art":[{"question":"Who painted the famous artwork \\"The Starry Night\\"?","answers":["Vincent van Gogh","Leonardo da Vinci","Pablo Picasso","Michelangelo"],"correctAnswer":"Vincent van Gogh"},{"question":"Which sculptor made the famous sculpture \\"David?\\"?","answers":["Michelangelo","Donatello","Leonardo da Vinci","Raphael"],"correctAnswer":"Michelangelo"},{"question":"What is the best-selling album in history?","answers":["Thriller","Back in Black","The Dark Side of the Moon","Bat Out of Hell"],"correctAnswer":"Thriller"},{"question":"How many strings does a guitar have?","answers":["Six","Four","Twelve","Eight"],"correctAnswer":"Six"},{"question":"What is the name of the famous statue that depicts the Greek goddess of love and beauty?","answers":["Venus de Milo","David","The Thinker","Laocoön and His Sons"],"correctAnswer":"Venus de Milo"},{"question":"What band is the author of the song \\"Believer\\"?","answers":["Imagine Dragons","Coldplay","Maroon 5","Linkin Park"],"correctAnswer":"Imagine Dragons"},{"question":"What is the name of the famous Italian artist who painted the ceiling of the Sistine Chapel?","answers":["Michelangelo","Leonardo da Vinci","Raphael","Sandro Botticelli"],"correctAnswer":"Michelangelo"},{"question":"Who is Don Quixote in love with in the play \\"The Ingenious Hidalgo Don Quixote of La Mancha\\"?","answers":["Dulcinea","Maritornes","Antonia","Fernanda"],"correctAnswer":"Dulcinea"},{"question":"What is the name of the famous ballet composed by Tchaikovsky?","answers":["Swan Lake","The Nutcracker","Romeo and Juliet","The Sleeping Beauty"],"correctAnswer":"Swan Lake"},{"question":"Who is the author of the famous book \\"The Little Prince\\"?","answers":["Antoine de Saint-Exupéry","Jean-Jacques Rousseau","Voltaire","Victor Hugo"],"correctAnswer":"Antoine de Saint-Exupéry"},{"question":"What architectural style is Notre Dame Cathedral?","answers":["Gothic","Baroque","Renaissance","Neoclassical"],"correctAnswer":"Gothic"},{"question":"Which famous playwright wrote the play \\"Hamlet\\"?","answers":["William Shakespeare","Tennessee Williams","Arthur Miller","Samuel Beckett"],"correctAnswer":"William Shakespeare"},{"question":"Which famous novel by George Orwell tells the story of a society where government surveillance and propaganda control all aspects of people\'s lives?","answers":["1984","Animal Farm","Brave New World","Fahrenheit 451"],"correctAnswer":"1984"},{"question":"Who is the author of the \'Harry Potter\' book series?","answers":["J.K. Rowling","Stephen King","George R.R. Martin","Dan Brown"],"correctAnswer":"J.K. Rowling"},{"question":"In music, how many lines does a staff have?","answers":["Five","Four","Six","Three"],"correctAnswer":"Five"}],"Space":[{"question":"What is the largest planet in our solar system?","answers":["Jupiter","Saturn","Uranus","Neptune"],"correctAnswer":"Jupiter"},{"question":"What is the name of the brightest star in the night sky?","answers":["Sirius","Proxima Centauri","Betelgeuse","Aldebaran"],"correctAnswer":"Sirius"},{"question":"What is the name of the only natural satellite of Earth?","answers":["Moon","Mars","Venus","Jupiter"],"correctAnswer":"Moon"},{"question":"What is the name of the first artificial satellite launched into space?","answers":["Sputnik 1","Explorer 1","Vanguard 1","Vostok 1"],"correctAnswer":"Sputnik 1"},{"question":"What is the speed of light approximately?","answers":["300,000 km/s","200,000 km/s","100,000 km/s","400,000 km/s"],"correctAnswer":"300,000 km/s"},{"question":"What is the name of the largest known asteroid in our solar system?","answers":["Ceres","Vesta","Pallas","Hygiea"],"correctAnswer":"Ceres"},{"question":"What is the name of the spacecraft that landed on Mars in 2021 as part of the Mars 2020 mission?","answers":["Perseverance","Curiosity","Opportunity","Spirit"],"correctAnswer":"Perseverance"},{"question":"How long does it take for sunlight to reach the earth?","answers":["8 minutes","3.5 hours","26 seconds","10 seconds"],"correctAnswer":"8 minutes"},{"question":"About how many stars are there in the solar system?","answers":["1","100","100,000","Too many to count"],"correctAnswer":"1"},{"question":"What is the most common matter in the universe?","answers":["Hydrogen","Dark matter","Helium","Oxygen"],"correctAnswer":"Hydrogen"},{"question":"About what temperature is it in space?","answers":["-270°C","-120°C","0°C","38°C"],"correctAnswer":"-270°C"},{"question":"Mainly which atoms do stars use in their fusion process?","answers":["Hydrogen","Helium","Oxygen","Carbon"],"correctAnswer":"Hydrogen"},{"question":"What is inside a black hole in the movie \\"Interstellar\\"?","answers":["A fifth dimension","A planet","A spaceship","Nothing"],"correctAnswer":"A fifth dimension"},{"question":"What is the geometric figure that describes the orbit of the planets?","answers":["Ellipse","Circle","Circumference","Square"],"correctAnswer":"Ellipse"},{"question":"How many moons does Mars have?","answers":["1","2","4","Does not have"],"correctAnswer":"2"},{"question":"What is the name of the first man to walk on the moon?","answers":["Neil Armstrong","Buzz Aldrin","Alan Shepard","Yuri Gagarin"],"correctAnswer":"Neil Armstrong"}],"General culture":[{"question":"What part of the ship does the nautical term \\"starboard\\" refer to?","answers":["Right","Left","Front","Back"],"correctAnswer":"Right"},{"question":"Which river runs through London?","answers":["Thames","Seine","Danube","Nile"],"correctAnswer":"Thames"},{"question":"Who turns into Hulk?","answers":["Bruce Banner","Tony Stark","Peter Parker","Steve Rogers"],"correctAnswer":"Bruce Banner"},{"question":"How many players does a soccer team have on the field?","answers":["11","10","9","12"],"correctAnswer":"11"},{"question":"Which of these is a percussion instrument?","answers":["Drum","Violin","Flute","Trumpet"],"correctAnswer":"Drum"},{"question":"What color is the \\"G\\" in the Google logo?","answers":["Blue","Red","Yellow","Green"],"correctAnswer":"Blue"},{"question":"What holds the Oscar trophy figurine?","answers":["A sword","A torch","A book","Nothing"],"correctAnswer":"A sword"},{"question":"What instrument does Sherlock Holmes play?","answers":["Violin","Flute","Piano","Guitar"],"correctAnswer":"Violin"},{"question":"What is a falchion?","answers":["A sword","A shield","A helmet","A spear"],"correctAnswer":"A sword"},{"question":"How many hearts does an octopus have?","answers":["3","2","1","0"],"correctAnswer":"3"},{"question":"What does the Tin Woodman want in the novel \\"The Wonderful Wizard of Oz\\"?","answers":["A heart","A brain","Courage","A home"],"correctAnswer":"A heart"},{"question":"What color is the hair of the protagonist in the anime \\"Death Note\\"?","answers":["Black","Blonde","Red","Brown"],"correctAnswer":"Brown"},{"question":"What is the name of the holy book of Islam?","answers":["Quran","Bible","Torah","Vedas"],"correctAnswer":"Quran"},{"question":"How old is a lustrum?","answers":["5 years","10 years","15 years","20 years"],"correctAnswer":"5 years"},{"question":"How many sides does a hexagon have?","answers":["6","5","7","8"],"correctAnswer":"6"}]}');
;// CONCATENATED MODULE: ./src/helpers/getQuestions.js

const randomArray = (arr)=>arr.toSorted(()=>0.5 - Math.random());
async function getQuestions(topics, qNumber) {
    const randomTopics = randomArray(topics);
    const messyTopics = [];
    for(let i = 0; i < qNumber; i++)messyTopics.push(randomTopics[i % topics.length]);
    function getOfflineQuestions() {
        const questionsPerTopic = {};
        messyTopics.forEach((topic)=>{
            questionsPerTopic[topic] = (questionsPerTopic[topic] || 0) + 1;
        });
        const questions = [];
        Object.keys(questionsPerTopic).forEach((topic)=>{
            randomArray(questions_namespaceObject[topic]).slice(0, questionsPerTopic[topic]).forEach((question)=>{
                questions.push({
                    ...question,
                    topic,
                    answers: randomArray(question.answers),
                    userAnswer: undefined,
                    ia: false
                });
            });
        });
        return questions;
    }
    if (false) {}
    const iaQuestions = fetch("/api/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            topics: messyTopics.slice(0, 3)
        })
    }).then((res)=>res.json()).then((data)=>{
        if (data.statusCode >= 400) {
            const error = new Error(data.message);
            error.statusCode = data.status;
            throw error;
        } else return data;
    }).catch((err)=>{
        console.log(err);
        throw err;
    });
    return iaQuestions.then((iaQuestions)=>randomArray([
            ...iaQuestions,
            ...getOfflineQuestions().slice(iaQuestions.length)
        ])).catch(()=>randomArray(getOfflineQuestions()));
}

;// CONCATENATED MODULE: ./src/store/useQuestions.js

const useQuestionsStore = (set, get)=>({
        questions: [],
        loading: false,
        loadingInfinity: false,
        error: [
            false,
            ""
        ],
        currentQuestion: 1,
        score: 1,
        win: undefined,
        getQuestions: (topics, number, infinity)=>{
            infinity ? set({
                loadingInfinity: true
            }) : set({
                loading: true
            });
            getQuestions(topics, number).then((data)=>set({
                    questions: data
                })).catch((err)=>set({
                    error: [
                        true,
                        err
                    ]
                })).finally(()=>infinity ? set({
                    loadingInfinity: false
                }) : set({
                    loading: false
                }));
        },
        setCurrentQuestion: (number)=>set({
                currentQuestion: number
            }),
        setUserAnswer: (question, answer)=>{
            if (get().queries.infinitymode) return;
            set((state)=>{
                const questions = [
                    ...state.questions
                ];
                questions[question].userAnswer = answer;
                return {
                    questions
                };
            });
        },
        cleanQuestions: ()=>set({
                questions: [],
                score: 1,
                currentQuestion: 1,
                win: undefined
            }),
        setScore: (score)=>set({
                score
            }),
        setWin: (win)=>set({
                win
            })
    });


/***/ }),

/***/ 8811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useWildcardsStore)
/* harmony export */ });
const defaultWildCards = {
    skip: 1,
    half: 1,
    lives: 1
};
const useWildcardsStore = (set, get)=>({
        wildCards: defaultWildCards,
        useSkipCard: ()=>{
            document.querySelectorAll(`.answers-${get().currentQuestion} button`).forEach((answer)=>{
                if (answer.textContent === get().questions[get().currentQuestion - 1].correctAnswer) {
                    answer.click();
                }
            });
            get().setUserAnswer(get().currentQuestion - 1, 2);
            set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        skip: state.wildCards.skip - 1
                    }
                }));
        },
        useHalfCard: ()=>{
            set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        half: state.wildCards.half - 1
                    }
                }));
            const answers = document.querySelectorAll(`.answers-${get().currentQuestion} button`);
            const correct = get().questions[get().currentQuestion - 1].correctAnswer;
            const wrongs = [
                ...answers
            ].filter((answer)=>answer.textContent !== correct);
            wrongs.sort(()=>Math.random() - 0.5).slice(0, 2).forEach((wrong)=>{
                wrong.classList.add("wrongAnswer");
                wrong.parentNode.classList.add("vibrate");
                wrong.disabled = true;
            });
        },
        useLivesCard: ()=>set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        lives: state.wildCards.lives - 1
                    }
                })),
        cleanWildCards: ()=>set({
                wildCards: defaultWildCards
            })
    });


/***/ })

};
;