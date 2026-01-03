import "dotenv/config";
import * as joi from 'joi';

const envSchema = joi
  .object({
    DATABASE_URL: joi.string().required(),
    DATABASE: joi.string().required(),
  })
  .unknown(true);

const { value: envVars, error } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envConfig = {
  databaseUrl: envVars.DATABASE_URL,
  database: envVars.DATABASE,
};
