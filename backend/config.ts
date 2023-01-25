import * as dotenv from "dotenv";
import * as path from "path";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

interface ENV {
  DBHOST: string | undefined;
  DBPORT: string | undefined;
  DBUSER: string | undefined;
  DBPASSWORD: string | undefined;
  DB: string | undefined;
}

interface Config {
  DBHOST: string;
  DBPORT: string;
  DBUSER: string;
  DBPASSWORD: string;
  DB: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    DBHOST: process.env.DBHOST,
    DBPORT: process.env.DBPORT,
    DBUSER: process.env.DBUSER,
    DBPASSWORD: process.env.DBPASSWORD,
    DB: process.env.DB
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const env = getSanitzedConfig(config);

export default env;