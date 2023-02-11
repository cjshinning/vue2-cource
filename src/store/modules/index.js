
// webpack内置
const files = require.context('.', true, /.js/);

const modules = {};
files.keys().forEach(key => {
  const path = key.replace(/\.\/|\.js/g, '');
  if (path == 'index') return; //自己不做任何处理
  let [namespaced, type] = path.split('/');
  if (!modules[namespaced]) {
    modules[namespaced] = {
      namespaced: true
    }
  }
  modules[namespaced][type] = files(key).default; //获取文件导出结果
})
// console.log(modules)

export default modules;