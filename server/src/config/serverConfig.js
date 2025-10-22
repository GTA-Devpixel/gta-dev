import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load ../.. from this file => server/.env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const serverConfig = {
  env: process.env.NODE_ENV ,
  port: process.env.PORT 
};

export default serverConfig;
