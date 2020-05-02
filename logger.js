const moment = require("moment");
const logger = (req, resp, next) => {
  console.log(
    `Request receivet at: ${moment().format()} : Called From ${
      req.protocol
    }://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
