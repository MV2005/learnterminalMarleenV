function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));


for(let i=0; i<16; i++){ 
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
       write(chalk.ansi256(color)(color.padEnd(4,' ')));
   }
   write('\n');
}

write(boxen(chalk.blue.bgGreenBright.inverse.underline('Hello chalk'), {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'cyan',
    backgroundColor: 'cyan'
    
}));

write(boxen(chalk.red.bgYellowBright.italic('Hello chalk'), {
    width: 15,
    borderStyle: 'double',
    borderStyle: 'round',
    title: 'CHALK',
    titleAlignment: 'right',
    borderColor: 'yellow'
}));


write(boxen(chalk.blue.bgRedBright.strikethrough('Hello chalk!'), {
    padding: 1,
    margin: 1,
    borderStyle: 'singleDouble',
    title: 'CHALK',
    titleAlignment: 'left',
    borderColor: 'red'
    

}));


write(boxen(chalk.underline.cyan.bgMagenta.bold('Hello chalk!'), {
    padding: 1,
    margin: 1,
    borderStyle: 'bold',
    borderStyle: 'doubleSingle',
    title: 'CHALK',
    titleAlignment: 'right',
    borderColor: 'magenta'

}));


write(boxen(chalk.red.bgCyanBright.dim('Hello chalk!'), {
    padding: 1,
    margin: 1,
    borderStyle: 'arrow',
    title: 'CHALK',
    titleAlignment: 'center',
    borderColor: 'green'

}));


write(boxen(chalk.magenta.bgWhite.underline.italic('Hello chalk!'), {
    height: 7,
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'cyan'
    

}));