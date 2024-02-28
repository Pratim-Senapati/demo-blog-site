const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Pratim66",
        mongodb_password: "SuS7sG0jeJk5XLba",
        mongodb_clustername: "cluster0",
        mongodb_database: "contacts-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "Pratim66",
      mongodb_password: "SuS7sG0jeJk5XLba",
      mongodb_clustername: "cluster0",
      mongodb_database: "contacts",
    },
  };
};
