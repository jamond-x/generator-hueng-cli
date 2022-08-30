// generator 的核心入口
const Generator = require('yeoman-generator');

const ProjectMode = {
  reactWithAntd: 'React + Ant design',
  vue3With: 'Vue3 + Quasar2',
};

module.exports = class extends Generator {
  prompting() {
    this.log(`
    
😎欢迎使用hueng-cli!
    
    `);
    return this.prompt([
      {
        name: 'project_name',
        type: 'input',
        message: '项目名称:',
        default: 'a projet create by hueng-cli',
      },
      {
        name: 'project_mode',
        type: 'list',
        choices: [
          { name: ProjectMode.reactWithAntd, value: ProjectMode.reactWithAntd },
          {
            name: ProjectMode.vue3With,
            value: ProjectMode.vue3With,
            disabled: true,
          },
        ],
      },
    ]).then((ans) => {
      this.ans = ans;
    });
  }

  writing() {
    const templates = [
      // 'package.json',
      'public/favicon.ico',
      'public/index.html',
      'public/logo192.png',
      'public/logo512.png',
      'public/manifest.json',
      'public/robots.txt',
      'src/App.css',
      'src/App.js',
      'src/App.test.js',
      'src/index.css',
      'src/index.js',
      'src/logo.svg',
      'src/reportWebVitals.js',
      'src/setupTests.js',
      '.gitignore',
      'README.md',
    ];

    // const template = this.templatePath('index.html');
    // const output = this.destinationPath('index.html');
    const context = { title: this.ans.project_name, ans: this.ans };

    try {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        context
      );
    } catch {
      this.log('生成package.json文件失败！');
    }

    try {
      Templates.forEach((item) => {
        this.fs.copyTpl(
          this.templatePath(item),
          this.destinationPath(item),
          context
        );
      });

      this.log(`
_____ _   _     _  _____   __
| ____| \ | |   | |/ _ \ \ / /
|  _| |  \| |_  | | | | \ V / 
| |___| |\  | |_| | |_| || |  
|_____|_| \_|\___/ \___/ |_|  
`);
    } catch {
      this.log('wrong!');
    }

    // try {
    //   this.fs.copyTpl(
    //     this.templatePath('./package.json'),
    //     this.destinationPath('./package.json')
    //   );
    // } catch {
    //   this.log('生成package.json文件失败！');
    // }
  }
};
