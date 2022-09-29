import { json } from '@remix-run/node';

export const badRequest = (data) => json(data, { status: 400 });