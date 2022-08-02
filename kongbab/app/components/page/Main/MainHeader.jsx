import { Carousel } from '@mantine/carousel';

export default function MainHeader(params) {
  return (
    <section>
      <Carousel
        orientation='vertical'
        height={200}
        sx={{ maxWidth: 320 }}
        mx='auto'
      ></Carousel>
    </section>
  );
}
