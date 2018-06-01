# 端点星内容版本控制仓库（TSVC）
## Terminus Site Version Control

「TSVC」是端点星计划 [Terminus](https://github.com/terminus2049) 的一个内容版本控制仓库，使用NodeJS开发，可以通过Travis自动构建进而整合进端点星计划站点的自动化构建流程中。

## 使用方式：

* git clone && npm install
* 修改原站点的 `_config.yml` 中的 baseURL 将其改成 `/static`
* 在原站点目录下使用 jekyll build 生成静态站点 `_site` , 将其拷贝至本项目的 `static` 文件夹并替换所有内容。
* 修改 `package.json`, 更新版本号`version`，以及在 `manifest` 中加入新版本以及更新内容。
* 执行 `npm start` 进行打包，生成最新版本的 `压缩包`
* git add && git commit && git push 即可。

