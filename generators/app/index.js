const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    promping() {
        // promise
        return this.prompt([
            {
               type: 'input',
               name: 'title',
               message: '项目名称：',
               default: this.appname
            },
            {
                type: 'list',
                name: 'type',
                message: '请选择项目类型：',
                default: 'PC',
                choices:[
                    'PC',
                    'H5'
                ]
            }
        ]).then(answers => {
            console.log('answers', answers)
            this.answers = answers
        })
    }
    writing() {
        // this.fs.write(this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        // const tmpl = this.templatePath('index.html')
        // const output = this.destinationPath('index.html')
        // const context = { title: 'ninnnn' }
        // this.fs.copyTpl(tmpl, output, context)

        // const tmpl = this.templatePath('index.html')
        // const output = this.destinationPath('index.html')
        // const context = this.answers
        // this.fs.copyTpl(tmpl, output, context)

        let templates = []
        
        let commonTemplates = [
            'common/public/favicon.ico',
            'common/public/index.html',
            'common/src/api/index.js',
            'common/src/assets/logo.png',
            'common/src/router/index.js',
            'common/src/store/index.js',
            'common/src/utils/api.request.js',
            'common/src/utils/axios.js',
            'common/src/views/axios.vue',
            'common/src/views/child.vue',
            'common/src/views/count.vue',
            'common/src/views/ErrorPage.vue',
            'common/src/views/HelloWorld.vue',
            'common/.env.development',
            'common/.env.production',
            'common/LICENSE',
            'common/README.md',
        ]

        let PCTemplates = [
            'PC/vue.config.js',
            'PC/package.json',
            'PC/babel.config.js',
            'PC/src/App.vue',
            'PC/src/main.js',
            'PC/src/views/home.vue',
        ]

        let H5Templates = [
            'H5/vue.config.js',
            'H5/package.json',
            'H5/babel.config.js',
            'H5/src/App.vue',
            'H5/src/main.js',
            'H5/src/vantImport.js',
            'H5/src/views/home.vue',
        ]

        if (this.answers.type === 'PC') {
            templates = commonTemplates.concat(PCTemplates)
        } else {
            templates = commonTemplates.concat(H5Templates)
        }

        templates.forEach(item => {
            let truthTree = item.replace('common/', '')
            truthTree = truthTree.replace('PC/', '')
            truthTree = truthTree.replace('H5/', '')
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(truthTree),
                this.answers
            )
        })

        this.fs.copyTpl(
            this.templatePath('common/gitignore'),
            this.destinationPath('.gitignore'),
            this.answers
        )
    }
}