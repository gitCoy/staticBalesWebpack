import dispatcher from './util/dispatcher'
import url from './util/url'
//partial
import header from './partial/_header'
import globalFn from './partial/_globalFn'
import animation from './partial/_animation'
// page
import index from './page/index';
import product1 from './page/product1';
import product2 from './page/product2';
import company from './page/company';
let Route = {
    "all": '.',
    "index":'^index/index.html$',
    "product1":'^product1/product1.html$',
    "product2":'^product2/product2.html$',
    "company":'^company/company.html$',
}
$(function () {
  dispatcher(Route.all, () => {
    //loading common js
    animation.init()
    header.bind()
    globalFn.bind()
  })
  dispatcher(Route.index, () => {
    index.init()
    index.bind()
  })

  dispatcher(Route.product1, () => {
    product1.init()
    product1.bind()
  })

  dispatcher(Route.product2, () => {
    product2.init()
    product2.bind()
  })

  dispatcher(Route.company, () => {
    company.init()
    company.bind()
  })
  dispatcher(location.pathname)
})
