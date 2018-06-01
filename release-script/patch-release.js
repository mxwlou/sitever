const ver = require('semver');
const packageJSON = require('../package.json');
const readline = require('readline');
const moment = require('moment');
const fs = require('fs');
moment.locale('zh-cn');


let newVersion = ver.inc(packageJSON.version ,'patch');
let newFileName = ['static-' + newVersion + '.zip'];
let updateDetail = [moment().format('YYYYMMDD') + '更新'];
let tempVar = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '输入更新内容，e结束> '
});

function makeQuestion() {
    
}

// while(tempVar != 'e') {
rl.question('请输入本次更新的内容，输入e结束：', (answer) => {
  tempVar = answer;
  updateDetail.push(answer);
  if (tempVar === 'e') rl.close();
  // rl.close();
  else rl.prompt();
});

rl.on('line', (line) => {
    if (line === 'e') {
        rl.close();
    } else {
        updateDetail.push(line);
        rl.prompt();
    }
}).on('close', () => {
    console.log("输入完成");
    console.log("--------------------------------------");
    console.log("即将进行补丁型更新");
    console.log("版本即将更新至：v", newVersion);
    console.log("新版本更新内容为：");
    for (let i = 0 ; i < updateDetail.length ; i++) {
        console.log("新特性： ", updateDetail[i]);
    }
    console.log("--------------------------------------");

    const rl2 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl2.question('确认更新吗？(y/n)', (answer) => {
      if (answer === 'y' || answer === '') {
        // make changes
        let newTag = {
            version: newVersion,
            files: newFileName,
            detail: updateDetail
        };
        fs.writeFileSync('update.json', JSON.stringify(newTag));
        console.log("版本更新成功，新版本号为：" , newVersion);
      } else {
        console.log("取消更新")
      }
      rl2.close();
    });
// rl.close();
})
// }
//rl.close();

// console.log("输入完成");
// console.log("--------------------------------------");
// console.log("即将进行补丁型更新");
// console.log("版本即将更新至：v", newVersion);
// console.log("新版本更新内容为：");
// for (let i = 0 ; i < updateDetail.length ; i++) {
//     console.log("新特性： ", updateDetail[i]);
// }
// console.log("--------------------------------------");


// rl.question('确认更新吗？(y/n)', (answer) => {
//   if (answer === 'y' || answer === '') {
//     // make changes
//     let newTag = {
//         version: newVersion,
//         files: newFileName,
//         detail: updateDetail
//     };
//     fs.writeFileSync('../update.json', JSON.stringify(newTag));
//     console.log("版本更新成功，新版本号为：" , newVersion);
//   } else {
//     console.log("取消更新")
//   }
// });
// rl.close();
