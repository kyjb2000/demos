//配置require
require.config({
  baseUrl: 'modules/',
  
  paths: {
    'jquery': "/node_modules/jquery/dist/jquery.min"
  },

  shim: {
    // 'shim-0':{
      //手动告诉如何找依赖，管理非AMD规范代码
      //depths depencenies
      // deps: ['shim-1']
    // }
  }
})

//加载模块
require(['jquery', 'carousel', 'goTop', 'lazyLoad'], function($, carousel, goTop, lazyLoad){
  carousel.init($('.carousel'));
  goTop.init();
  lazyLoad.init();
})