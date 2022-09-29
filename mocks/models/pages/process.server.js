import { rest } from "msw";
import PRICING_MOCK_DATA from '../../data/pages/pricing';

export const getProcess = () => {
  rest.get('/process', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRICING_MOCK_DATA));
  })
}