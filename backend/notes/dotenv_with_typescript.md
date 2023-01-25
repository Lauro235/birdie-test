# Use .env with TypeScript
[Helpful article](https://dev.to/asjadanis/parsing-env-with-typescript-3jjm)

## Summary

1. create global.d.ts in root directory (where you need the .env variables)
2. in same root look for tsconfig.json and add the following
  `"typeRoots": ["./global.d.ts"],`
3. Create a config.ts file and add the following

  ```ts
    import * as dotenv from "dotenv";
    import * as path from "path";
    dotenv.config({ path: path.resolve(__dirname, ".env") });

    interface ENV {
      SECRET: string | undefined;
    }

    interface Config {
      SECRET: string;
    }

    // Loading process.env as ENV interface

    const getConfig = (): ENV => {
      return {
        SECRET: process.env.SECRET
      };
    };

    const getSanitzedConfig = (config: ENV): Config => {
      for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
          throw new Error(`Missing key ${key} in config.env`);
        }
      }
      return config as Config;
    };

    const config = getConfig();
    const sanitizedConfig = getSanitzedConfig(config);
    export default sanitizedConfig;
  ```
