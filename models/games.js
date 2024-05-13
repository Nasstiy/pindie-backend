const mongoose = require("mongoose");
const users = require("./users");
const categories = require("./categories");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: users // Содержит ссылки на связанные с игрой модели пользователей
    }
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: categories // Содержит ссылки на связанные с игрой модели категорий
    }
  ]
});


gameSchema.statics.findGameByCategory = function(category) {
  return this.find({}) // Выполним поиск всех игр
  .populate({
    path: "categories",
    match: { name: category } // Опция поможет сопоставить подходящие игры по выбранной категории 
  })
  .populate({
    path: "users",
    select: "-password" // Позволяет получить записи о пользователях за исключением их паролей (они же хранятся в зашифрованном виде)
  })
  .then(games => {
    // Отфильтруем по наличию искомой категории 
  return games.filter(game => game.categories.length > 0);
});
}

const games = mongoose.model('games', gameSchema);
module.exports = games;
