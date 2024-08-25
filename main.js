let userData = {}

for (let i = 1; i <= 10; i++){
    let name = prompt(`Введите имя пользователя ${i}:`);
    let age = +prompt(`Введите возраст пользователя ${i}:`);

    console.log(`Пользователь: ${i} 
${name} - Имя 
${age} - Возраст`);

    userData[`Пользователь ${i}`] = { 
        Имя: name, 
        Возраст: age 
    };
}

console.log(userData);







