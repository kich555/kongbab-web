import { rest } from "msw";
import FAQ_MOCK_DATA from '../../data/pages/faq';

export const getFAQ = () => {
  rest.get('/faq', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FAQ_MOCK_DATA));
  })
}