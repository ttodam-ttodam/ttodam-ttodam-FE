import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { type Post } from '@/types/post';

type ProductImgProps = {
  data: Post;
};

export default function ProductImg({ data }: ProductImgProps) {
  return (
    <section className="flex justify-center">
      {data.productImgUrl.length > 0 && (
        <Carousel className="w-full max-w-sm my-10">
          <CarouselContent>
            {data.productImgUrl.map((productImg, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div
                        style={{ backgroundImage: `url(${productImg})` }}
                        className="w-24 h-48 justify-center bg-no-repeat bg-cover bg-center"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
}
