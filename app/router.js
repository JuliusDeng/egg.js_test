'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list)
  router.get('/girl', controller.home.girl)

	
	// router.get('/user/list', controller.user.index)
	// router.get('/user/read/:id', controller.user.read)
  // router.post('/user/create', controller.user.create)
  
  // router.get('/girl/list',controller.girl.index )
  // router.get('/girl/read/:id',controller.girl.read )

  // router.resources('post', '/api/post', controller.post)

  require('./router/post')(app)
  require('./router/user')(app)


};
