const compressing = require('compressing');
const dataJSON = require('./package.json');

compressing.zip.compressDir('static', 'static-' + dataJSON.version + '.zip',)
 .then(() => {
  console.log('打包成功！');
  console.log("当前发布版本为：", dataJSON.version);
 })
 .catch(err => {
  console.error(err);
 });

// 解压缩
// compressing.zip.uncompress('nodejs-compressing-demo.zip', 'nodejs-compressing-demo3')
//  .then(() => {
//   console.log('success');
//  })
//  .catch(err => {
//   console.error(err);
//  });