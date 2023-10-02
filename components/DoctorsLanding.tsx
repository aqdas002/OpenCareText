import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenTool } from "lucide-react";
import { Input } from "@/components/ui/input";
import Loading from "./loading";

function DoctorsLanding() {
  return (
    <div className="space-y-10 pb-10">
    <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
      <div
        style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
            <Input  type="email"  placeholder="Enter Patient ID" className="min-h-fit"/>
            <div className="flex gap-x-2 justify-between gap-y-6">
            <Button size="lg" className="w-1/2 py-6 text-xl">
              Dashboard
              <LayoutDashboard className="mr-2" />
            </Button>
            <Button size="lg" className="w-1/2 py-6 text-xl">
              Prescribe
              <PenTool className="mr-2" />
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      {/* <ProductList items={products} /> */}
    </div>
  </div>
  )
}

export default DoctorsLanding