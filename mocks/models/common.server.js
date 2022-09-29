import { rest } from "msw";
import FEATURED_LIST_MOCK_DATA from '../data/common/featuredList';
import PRICE_INFO_MOCK_DATA from '../data/common/priceInfo';

export const getFeaturedList = () => {
  rest.get('/featured', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FEATURED_LIST_MOCK_DATA));
  })
}

export const getPriceTable = () => {
  rest.get('/price_table', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRICE_INFO_MOCK_DATA));
  })
}