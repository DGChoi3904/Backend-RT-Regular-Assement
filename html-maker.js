import cmd, { Command } from "commander";

const program = new Command();

program
  .name('html-maker')
  .description('CLI를 활용하여 html파일을 생성하는 JS파일')
  .version('0.0.1')

program.command('html')
  .description('새로운 html을 생성해 result에 저장한다.')
  .argument('<string>', '생성하는 html 파일명')
  .option('-t, --title <string>', '해당 html의 타이틀', 'Document')
  .option('-r, --root', 'div#root을 body에 추가함.')
  .option('-p <string>', '해당 html의 본문, 내용', '')
  .action((str, options) =>{
    
  })


