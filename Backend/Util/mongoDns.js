const dns = require("dns");

const DEFAULT_DNS_SERVERS = ["8.8.8.8", "8.8.4.4"];
const RETRYABLE_DNS_ERRORS = new Set(["ECONNREFUSED", "ETIMEOUT"]);

module.exports.resolveMongoSrv = async (
  connectionString,
  { dnsClient = dns, fallbackServers } = {},
) => {
  const connectionUrl = new URL(connectionString);
  if (connectionUrl.protocol !== "mongodb+srv:") {
    return;
  }

  const srvRecord = `_mongodb._tcp.${connectionUrl.hostname}`;
  try {
    await dnsClient.promises.resolveSrv(srvRecord);
    return;
  } catch (error) {
    if (!RETRYABLE_DNS_ERRORS.has(error.code)) {
      throw error;
    }
  }

  const configuredServers =
    fallbackServers ||
    process.env.MONGODB_DNS_SERVERS?.split(",").map((server) => server.trim()).filter(Boolean) ||
    DEFAULT_DNS_SERVERS;
  if (configuredServers.length === 0) {
    throw new Error("MONGODB_DNS_SERVERS must contain at least one DNS server.");
  }

  console.warn(
    "System DNS refused the MongoDB SRV lookup; retrying with MONGODB_DNS_SERVERS.",
  );
  dnsClient.setServers(configuredServers);
  try {
    await dnsClient.promises.resolveSrv(srvRecord);
  } catch (error) {
    throw new Error(
      `MongoDB SRV lookup failed with the configured DNS servers (${error.code || "unknown error"}). Check your network or set MONGODB_DNS_SERVERS in Backend/.env.`,
      { cause: error },
    );
  }
};
