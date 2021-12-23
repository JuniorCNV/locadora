module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7283150810de80234e8e5b25620799aa'),
  },
});
