import { createStyles } from '@mantine/core';

const useBlogCardStyles = createStyles((theme) => ({
  card: {
    width: '344px',
    padding: '0px !important',
    backgroundColor: theme.colors.dark[7],
    transition: 'transform 250ms',
    '&:hover': {
      transform: 'translateY(-5px)',
      //   boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
    },
  },
  cardSection: { margin: '0px' },
  imageBackground: { backgroundColor: '#D9D9D9' },
  categoryText: { paddingTop: '18px' },
  titleText: { fontSize: '20px', paddingTop: '12px' },
  descText: { paddingTop: '18px' },
  content: { padding: '18px 0 40px 0' },
}));

export default useBlogCardStyles;
