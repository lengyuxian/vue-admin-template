

## 开发
```bash
# 克隆项目
git clone https://github.com/PanJiaChen
# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 http://localhost:9527

## 发布
```bash
# 构建测试环境
npm run build:sit

# 构建生成环境
npm run build:prod
```

## 其它
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```
## 兼容IE
    npm install babel-polyfill --save-dev
    main.js   import 'babel-polyfill'
     .babelrc  文件下添加
        "useBuiltIns": "entry"
        
      ex: {
           "presets": [
           [
            "env",
            {
            "modules": false,
            "useBuiltIns": "entry"
            }
           ],
           "stage-3"
           ]
          }
    axios的请求在ie下没有用 
      npm install es6-promise --save-dev
      main.js 
          import promise from 'es6-promise'
           promise.polyfill()


##css背景图片路径问题
    1. config index.js 文件  build  要是相对路径
    
      assetsPublicPath: './'  
    2. 在build文件 utils.js 下
        if (options.extract) {
              return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
              })
            } else {
              return ['vue-style-loader'].concat(loaders)
           }
         添加
         if (options.extract) {
               return ExtractTextPlugin.extract({
                 use: loaders,
                 fallback: 'vue-style-loader'，
                 publicPath: '../../'
               })
             } else {
               return ['vue-style-loader'].concat(loaders)
             }