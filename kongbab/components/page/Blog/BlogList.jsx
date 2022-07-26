import { useState } from 'react';
import { Center, Container } from '@mantine/core';
import Title from 'components/Title';
import BlogFilter from 'components/page/Blog/BlogFilter';
import BLOG_CONSTANTS from '~/constants/page/blogPageData';
import asset from '~/asset/image/Process_image.png';
import BlogCard from './BlogCard';
import useBlogCardListStyles from '~/Style/page/Blog/useBlogListStyles';

export default function BlogList(params) {
  const { MENUS, LIST } = BLOG_CONSTANTS;
  const [active, setActive] = useState(MENUS[0]);

  const items = LIST.map((card) => (
    <BlogCard
      key={card.title}
      imageSrc={card.thumbnail}
      link={card.link}
      category={card.category}
      title={card.title}
      desc={card.desc}
    />
  ));
  const { classes } = useBlogCardListStyles();
  const { listWrapper, list } = classes;
  return (
    <>
      <Center>
        <Title title='콩밥 블로그' style={{ marginTop: '120px' }} />
      </Center>
      <Center style={{ overflowX: 'auto' }}>
        <BlogFilter options={MENUS} active={active} setActive={setActive} />
      </Center>
      <Center>
        <div className={listWrapper}>
          <Container className={list}>{items}</Container>
        </div>
      </Center>
    </>
  );
}
