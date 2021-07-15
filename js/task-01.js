console.info('')
console.info('task 01')

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


const autoReplacement = (object) => {
  console.info('оригінальний: \n', object)

  object.mood = 'happy'
  object.hobby = 'skydiving'
  object.premium = false
    return console.info('модифікований: \n', object)
}


autoReplacement(user)