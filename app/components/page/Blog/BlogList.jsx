import { useState } from 'react';
import { Center, Container, Space } from '@mantine/core';
import BLOG_CONSTANTS from '~/constants/page/blogPageData';
import useBlogCardListStyles from '~/Style/page/Blog/useBlogListStyles';
import Title from '~/components/common/Title';
// import BlogFilter from '~/components/page/Blog/BlogFilter';
import BlogCard from '~/components/page/Blog/BlogCard';
import useResponsive from '~/hooks/useResponsive';

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
  const { mobile } = useResponsive();
  return (
    <>
      <Center>
        <Title title='콩밥 블로그' />
      </Center>
      {/* <Center sx={{ overflowX: 'auto' }}>
        <BlogFilter options={MENUS} active={active} setActive={setActive} />
      </Center> */}
      <Space h={mobile ? 25 : 80} />
      <Center>
        <div className={listWrapper}>
          <Container className={list}>{items}</Container>
        </div>
      </Center>
    </>
  );
}
