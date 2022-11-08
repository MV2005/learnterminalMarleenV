import inquirer from 'inquirer';
inquirer
  .prompt([
    {type:'input', name:'age', message: 'How old are you?'},
    {type:'input', name:'name', message: 'Whats your name?'},
    {type:'list', name:'gender', message: 'Whats your gender?', choices: ['female', 'male']},
    {type:'checkbox', name:'hair', message: 'Whats your hair color?', choices: ['hall', 'blond','must','pruun']},
    {type:'expand', name:'kumb', message: 'Which is better burger or pizza?', choices: [{ key: 'b', value: 'burger',}, { key: 'p', value: 'pizza',},]},
    {type:'password', name:'secret', message: 'Tell me your secret'},
    {type:'editor', name:'poem', message: 'Write me a poem?'},
  ])
  .then((answers) => {
    console.log(`I am ${answers.age} years old`);
    console.log(`My name is ${answers.name} `);
    console.log(`My gender ${answers.gender} `);
    console.log(`My hair color is ${answers.hair} `);
    console.log(`Better is ${answers.kumb} `);
    // node password.js 
    console.log(`My secret is ${answers.secret} `);
    console.log(`My poem ${answers.story} `);

  })
