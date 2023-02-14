
// webpack内置
const files = require.context('.', true, /\.js$/);

const modules = {};
files.keys().forEach(key => {
  const path = key.replace(/\.\/|\.js/g, '');
  if (path == 'index') return; //自己不做任何处理
  let [namespace, type] = path.split('/');
  // console.log(namespace, type)
  if (!modules[namespace]) {
    modules[namespace] = {
      namespaced: true
    }
  }
  modules[namespace][type] = files(key).default; //获取文件导出结果
})
export default modules;