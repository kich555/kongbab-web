import { json } from '@remix-run/node';

export function getEnv() {
    
    return json({
        ENV: {
          REACT_APP_KEY: process.env.REACT_APP_KEY,
          EMAIL_JS_ID: process.env.EMAIL_JS_ID,
          EMAIL_JS_TEMPLETE_ID: process.env.EMAIL_JS_TEMPLETE_ID,
          EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
        },
      });
  }