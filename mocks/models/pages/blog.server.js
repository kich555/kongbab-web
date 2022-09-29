import { rest } from "msw";
import BLOG_MOCK_DATA from '../../data/pages/blog';

export const getBlog = () => {
  rest.get('/blog', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(BLOG_MOCK_DATA));
  })
}