// export default {
//   install(Vue, x, y, z) {
//     console.log(x, y, z)

//     //定义混入
//     Vue.mixin({
//       methods: {
//         showName() {
//           alert(this.name)
//         }
//       }
//     })
//   }
// }
const MyPlugin =  {}
MyPlugin.install = function(Vue, a,b,c) {
  console.log(a,b,c)
  //定义混入
  Vue.mixin({
    methods: {
      showName() {
        alert(this.name)
      }
    }
  })
}
export default MyPlugin
