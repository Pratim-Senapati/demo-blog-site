const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        _username: "Pratim66",
        _password: "SuS7sG0jeJk5XLba",
        _clustername: "cluster0",
        _database: "contacts",
      },
    };
  }
  return {};
};
