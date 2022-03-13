const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    promping() {
        // promise
        return this.prompt([
            {
               type: 'input',
               name: 'title',
               message: 'You project names:',
               default: this.appname
            }
        ]).then(answers => {
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

        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'src/api/index.js',
            'src/assets/logo.png',
            'src/router/index.js',
            'src/store/index.js',
            'src/utils/api.request.js',
            'src/utils/axios.js',
            'src/views/axios.vue',
            'src/views/child.vue',
            'src/views/count.vue',
            'src/views/ErrorPage.vue',
            'src/views/HelloWorld.vue',
            'src/views/home.vue',
            'src/App.vue',
            'src/main.js',
            '.env.development',
            '.env.production',
            'babel.config.js',
            'LICENSE',
            'package.json',
            'README.md',
            'vue.config.js'
        ]

        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })

        this.fs.copyTpl(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore'),
            this.answers
        )

    }
}