import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command();

program
  .name('html-maker')
  .description('CLI를 활용하여 html파일을 생성하는 JS파일')
  .version('0.0.1')

program.command('html')
  .description('새로운 html을 생성해 result폴더에 저장한다.')
  .argument('<string>', '생성하는 html 파일명')
  .option('-t, --title <string>', '해당 html의 타이틀', 'Document')
  .option('-r, --root', 'div#root을 body에 추가함.')
  .option('-p <string>', '해당 html의 본문, 내용', '')
  .action((str, options) => {
    const html = htmlMaker(options.title, options.root, options.p);
    try {
      fs.writeFileSync(`./result/${str}.html`, html, "utf8");
    } catch (error) {
      console.error(`${error}가 발생하였습니다.`, error);
      throw error;
    }

  })
  
// 새 커맨드를 추가, 이름을 html-inquirer로 등록
program.command('html-inquirer')
    //옵션을 inquirer로 설정하기위해 다른 args나 옵션값을 받지 않고 action에서 inquirer를 실행
  .description('inquirer을 사용하여 새로운 html을 생성해 result폴더에 저장한다.')
  .action(() => {
    inquirer.prompt([
      {
        type:"",
        name:"",
        message:""
      },
      {
        type:"",
        name:"",
        message:""
      },
      {
        type:"",
        name:"",
        message:""
      },
    ])
  
})

function htmlMaker(title, addRoot, p) {
  let bodyInnerHTML = "";
  if (addRoot) {
    bodyInnerHTML = `<div id=#root>
      <p>${p}</p>
    </div>`
  } else {
    bodyInnerHTML = `<p>${p}<p>`
  }
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      ${bodyInnerHTML}
    </body>
  </html>`
  return html;
}

program.parse();