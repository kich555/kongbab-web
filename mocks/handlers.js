import { rest } from 'msw';
import { getFeaturedList, getPriceTable } from './models/common.server';
import { getHome } from './models/pages/home.sever';
import { getIntroduce } from './models/pages/introduce.server';
import { getBlog } from './models/pages/blog.server';
import { getFAQ } from './models/pages/faq.server';
import { getPricing } from './models/pages/pricing.server';
import { getProcess } from './models/pages/process.server';






const todos = ["먹기", "자기", "놀기"];


export const handlers = [
  rest.get("/home", (req, res, ctx) => {
    console.log('iswork?')
    return res(ctx.status(200), ctx.json(todos));
  }),
  // getFeaturedList(),
  // getPriceTable(),
  // getHome(),
  // getIntroduce(),
  // getBlog(),
  // getFAQ(),
  // getPricing(),
  // getProcess()
];