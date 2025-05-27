import { Heart } from "iconsax-react";
import CardComponent from "./_components/CardComponent";
import TableImageComponent from "./_components/TableImageComponent";

export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <TableImageComponent />
      <div className="mb-10">
        <div className="text-3xl mt-10 font-bold md:p-10 flex lg:px-0 justify-start gap-2">
          <div>
            <span>
              <Heart size="32" color="#309898" variant="Bold" />
            </span>
          </div>
          <div className="font-medium">
            <span className="text-custom-red">Romantic </span>
            <span className="text-custom-green">Memories</span>
          </div>
        </div>
        <div className="grid grid-cols-1 px-6 md:px-0 md:flex md:flex-wrap w-full md:justify-between space-y-6">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
