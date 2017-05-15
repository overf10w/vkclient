var passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new VKontakteStrategy(
    {
      clientID: '6032264', // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
      clientSecret: 'PNMX4QFSzlxrpkua7nIk',
      callbackURL: "http://localhost:3000/auth/vkontakte/callback",
      scope: ['status', 'email', 'friends', 'notify'],
      profileFields: ['email', 'city', 'bdate', 'status', 'last_seen', 'online', 'counters', 'lists']
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
      // console.log(profile);
      // console.log(params);
      // console.log(params);
      // Now that we have user's `profile` as seen by VK, we can
      // use it to find corresponding database records on our side.
      // Also we have user's `params` that contains email address (if set in 
      // scope), token lifetime, etc.
      // Here, we have a hypothetical `User` class which does what it says.
      // User.findOrCreate({ vkontakteId: profile.id })
      //   .then(function (user) { done(null, user); })
      //   .catch(done);
      done(null, profile);
    }
  ));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
