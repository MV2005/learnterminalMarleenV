import inquirer from "inquirer";
inquirer
.prompt([
    {type:'input', name:'tag', message: 'How old are you?'}

])
.then((answers) => {
    console.log('I am ' + answers.age + ' years old');
})