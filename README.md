# rolesPermissionTestApp

a [Sails](http://sailsjs.org) application to try out sails-role-permissions hook.

# How to
lift the server and try the following routes:
- POST /video -> will create a video
- GET /video -> will refuse the access because of policy
- GET /authFind -> will print the role
- DELETE /video -> will delete the video
- GET /allowAccess -> will allow access because user.role is OK
- GET /denyAccess -> will deny access because req.role is under necessary role

# Modified files
- api/controllers/VideoController
- api/policies/auth
- api/policies/otherAuth
- config/routes
- config/roles
- config/permissions
- config/policies
