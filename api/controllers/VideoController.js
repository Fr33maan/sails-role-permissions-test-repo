/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	allowAccess: (req, res) => {
		console.log(req.user)
		res.ok('access allowed')
	},

	denyAccess: (req, res) => {
		// Req never arrives here
		console.log('this should not be printed')
		res.ok()
	}
};
