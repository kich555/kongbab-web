import { rest } from "msw";
import INTRODUCE_MOCK_DATA from '../../data/pages/introduce';

export const getIntroduce = () => {
  rest.get('/introduce', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(INTRODUCE_MOCK_DATA));
  })
}