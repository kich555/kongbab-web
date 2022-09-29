import { rest } from "msw";
import HOME_MOCK_DATA from '../../data/pages/home';

export const getHome = () => {
  rest.get('/home', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(HOME_MOCK_DATA));
  })
}