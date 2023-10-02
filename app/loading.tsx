import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
    <div className="space-y-10 pb-10">
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        <div
          style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
          className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className=" sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
              <Skeleton   className="w-60 py-6 text-xl justify-center"/>
              <div className="flex gap-x-2 justify-between gap-y-6">
              <Skeleton  className="w-1/2 py-6 text-xl">
                
                <Skeleton className="mr-2" />
              </Skeleton>
              <Skeleton  className="w-1/2 py-6 text-xl">
                
                <Skeleton className="mr-2" />
              </Skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        {/* <ProductList items={products} /> */}
      </div>
    </div>
  </Container>
  );
}
 
export default Loading;