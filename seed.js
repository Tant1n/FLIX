const mongoose = require("mongoose")
const Movie = require("./models/movies")

let movies = [
    {
        name: "Остров проклятых",
        director: "Мартин Скорсезе",
        genres: ["Триллер", "Детектив", "Драма"],
        image: "https://avatars.mds.yandex.net/i?id=9a3ad571bc95894cad5cf0b8030ba3b4_l-5223996-images-thumbs&n=13",
        years: 2010,
        posterURL: "https://upload.wikimedia.org/wikipedia/ru/2/22/Kinopoisk.ru-Shutter-Island-1094940.jpg?_=20181024074007",
        teaserURL: "",
        country: "США",
        rating: 8.5,
        type: "movie",
        description: "Федеральный маршал Тедди Дэниелс отправляется вместе с напарником на мрачный остров, где расположена психиатрическая клиника для особо опасных преступников. Им предстоит расследовать исчезновение пациентки, но вскоре Тедди начинает замечать странности в поведении персонала и окружающей обстановке. Постепенно расследование превращается в опасное путешествие в глубины собственного прошлого.",
        ageRating: 16,
        episodes: []
    },

    {
        name: "Интерстеллар",
        director: "Кристофер Нолан",
        genres: ["Фантастика", "Драма", "Приключения"],
        image: "https://avatars.mds.yandex.net/i?id=interstellar-placeholder",
        years: 2014,
        posterURL: "https://upload.wikimedia.org/wikipedia/ru/8/8f/Interstellar_2014.jpg",
        teaserURL: "",
        country: "США",
        rating: 8.7,
        type: "movie",
        description: "В будущем Земля постепенно становится непригодной для жизни, а человечество сталкивается с угрозой голода и исчезновения. Бывший пилот Купер получает шанс отправиться в космическую экспедицию через загадочную червоточину. Вместе с командой он должен найти новую планету для человечества, понимая, что путешествие может навсегда разлучить его с семьёй.",
        ageRating: 12,
        episodes: []
    },

    {
        name: "Начало",
        director: "Кристофер Нолан",
        genres: ["Фантастика", "Боевик", "Триллер"],
        image: "https://avatars.mds.yandex.net/i?id=inception-placeholder",
        years: 2010,
        posterURL: "https://upload.wikimedia.org/wikipedia/ru/7/7f/Inception_%282010%29_theatrical_poster.jpg",
        teaserURL: "",
        country: "США",
        rating: 8.7,
        type: "movie",
        description: "Доминик Кобб умеет проникать в сны людей и извлекать из их подсознания секреты. Однажды ему предлагают практически невозможную работу — не украсть идею, а внедрить её в сознание человека. Для выполнения задания Кобб собирает команду специалистов, однако каждый новый уровень сна делает границу между реальностью и иллюзией всё более размытой.",
        ageRating: 12,
        episodes: []
    },

    {
        name: "Во все тяжкие",
        director: "Винс Гиллиган",
        genres: ["Драма", "Криминал", "Триллер"],
        image: "https://avatars.mds.yandex.net/i?id=breaking-bad-placeholder",
        years: 2008,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
        teaserURL: "",
        country: "США",
        rating: 9.5,
        type: "series",
        description: "Уолтер Уайт — обычный школьный учитель химии, который узнаёт о тяжёлой болезни и решает обеспечить семью деньгами на будущее. Используя свои знания химии, он начинает производить запрещённые вещества вместе со своим бывшим учеником Джесси Пинкманом. Постепенно безобидное на первый взгляд решение меняет его характер, отношения с близкими и всю дальнейшую жизнь.",
        ageRating: 18,
        episodes: [
            "1 серия",
            "2 серия",
            "3 серия",
            "4 серия",
            "5 серия",
            "6 серия"
        ]
    },

    {
        name: "Шерлок",
        director: "Марк Гэтисс",
        genres: ["Детектив", "Драма", "Криминал"],
        image: "https://avatars.mds.yandex.net/i?id=sherlock-placeholder",
        years: 2010,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/b/b9/Sherlock_titlecard.jpg",
        teaserURL: "",
        country: "Великобритания",
        rating: 9.1,
        type: "series",
        description: "Современный Лондон становится местом расследований для эксцентричного детектива Шерлока Холмса. Обладая невероятной наблюдательностью и способностью замечать мельчайшие детали, он берётся за самые запутанные дела. Его напарником становится военный врач Джон Ватсон, недавно вернувшийся из Афганистана. Вместе они раскрывают преступления, которые кажутся невозможными для обычного расследования.",
        ageRating: 16,
        episodes: [
            "1 серия",
            "2 серия",
            "3 серия"
        ]
    },

    {
        name: "Достать ножи",
        director: "Райан Джонсон",
        genres: ["Детектив", "Комедия", "Триллер"],
        image: "https://avatars.mds.yandex.net/i?id=knives-out-placeholder",
        years: 2019,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1f/Knives_Out_poster.jpeg",
        teaserURL: "",
        country: "США",
        rating: 8.1,
        type: "movie",
        description: "После загадочной смерти известного писателя его многочисленные родственники собираются в семейном особняке. Каждый из них оказывается потенциально заинтересован в смерти хозяина дома. Частный детектив Бенуа Блан начинает расследование и постепенно обнаруживает противоречия в показаниях членов семьи. Чем глубже он погружается в историю, тем очевиднее становится, что почти каждому есть что скрывать.",
        ageRating: 16,
        episodes: []
    },

    {
        name: "Матрица",
        director: "Лана Вачовски, Лилли Вачовски",
        genres: ["Фантастика", "Боевик", "Триллер"],
        image: "https://avatars.mds.yandex.net/i?id=matrix-placeholder",
        years: 1999,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        teaserURL: "",
        country: "США",
        rating: 8.7,
        type: "movie",
        description: "Томас Андерсон ведёт двойную жизнь: днём он работает программистом, а ночью становится хакером под именем Нео. Его привычная реальность рушится после встречи с загадочным Морфеусом, который предлагает узнать правду о мире. Нео оказывается втянут в борьбу людей с машинами и постепенно понимает, что привычная ему реальность является искусственной конструкцией.",
        ageRating: 16,
        episodes: []
    },

    {
        name: "Очень странные дела",
        director: "Братья Даффер",
        genres: ["Фантастика", "Ужасы", "Драма", "Приключения"],
        image: "https://avatars.mds.yandex.net/i?id=stranger-things-placeholder",
        years: 2016,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/Stranger_Things_season_1.jpg",
        teaserURL: "",
        country: "США",
        rating: 8.6,
        type: "series",
        description: "В небольшом американском городке Хоукинс бесследно исчезает школьник Уилл Байерс. Его друзья начинают собственные поиски и встречают загадочную девочку с необычными способностями. Параллельно мать Уилла и местный шериф пытаются разобраться в происходящем. Расследование приводит героев к секретной лаборатории и пугающему параллельному измерению.",
        ageRating: 16,
        episodes: [
            "1 серия",
            "2 серия",
            "3 серия",
            "4 серия",
            "5 серия",
            "6 серия",
            "7 серия",
            "8 серия"
        ]
    }
]

module.exports = movies

mongoose.connect("mongodb+srv://konstantin1476a_db_user:vBlwRNgxUyrHiwxX@flix.9dbd0sa.mongodb.net/")
.then(async () => {
    console.log("Подключение к базе данных успешно")
    await Movie.insertMany(movies)
    console.log("Фильмы добавленны")
})
