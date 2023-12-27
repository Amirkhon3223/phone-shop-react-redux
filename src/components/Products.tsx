import SamsungGalaxyS10 from '../assets/img/SamsungGalaxyS10.png';
import SamsungGalaxyS20 from '../assets/img/SamsungGalaxyS20.png';
import iPhone11 from '../assets/img/iPhone11.png';
import SamsungGalaxyS21 from '../assets/img/SamsungGalaxyS21.png';
import iPhone12 from '../assets/img/Apple-iPhone-12-PNG-Picture.png';
import SamsungGalaxyS10Plus from '../assets/img/SamsungGalaxyS10Plus.png';
import SamsungGalaxyS20Ultra from '../assets/img/SamsungGalaxyS20Ultra.png';
import iPhoneSE from '../assets/img/iPhoneSE.png';
import iPhone13 from '../assets/img/iPhone13.png';
import SamsungGalaxyTabS7 from '../assets/img/SamsungGalaxyTabS7.png';
import SamsungGalaxyTabS8Ultra from '../assets/img/SamsungGalaxyTabS8Ultra.png';
import iPadAir from '../assets/img/iPadAir.png';
import iPadPro from '../assets/img/iPadPro.png';

import ProductCart from "./ProductCart.tsx";

const products = [
  {
    id: 1,
    img: iPadPro,
    title: "iPad Pro",
    category: "Планшет",
    price: "1199.00"
  },
  {
    id: 2,
    img: SamsungGalaxyS10,
    title: "Samsung Galaxy S10",
    category: "Мобильный телефон",
    price: "899.00"
  },
  {
    id: 3,
    img: SamsungGalaxyS20,
    title: "Samsung Galaxy S20",
    category: "Мобильный телефон",
    price: "1199.00"
  },
  {
    id: 4,
    img: iPhone11,
    title: "iPhone 11",
    category: "Мобильный телефон",
    price: "1099.00"
  },
  {
    id: 5,
    img: SamsungGalaxyS21,
    title: "Samsung Galaxy S21",
    category: "Мобильный телефон",
    price: "1299.00"
  },
  {
    id: 6,
    img: iPhone12,
    title: "iPhone 12",
    category: "Мобильный телефон",
    price: "1199.00"
  },
  {
    id: 7,
    img: SamsungGalaxyS10Plus,
    title: "Samsung Galaxy S10 Plus",
    category: "Мобильный телефон",
    price: "999.00"
  },
  {
    id: 8,
    img: SamsungGalaxyS20Ultra,
    title: "Samsung Galaxy S20 Ultra",
    category: "Мобильный телефон",
    price: "1499.00"
  },
  {
    id: 9,
    img: iPhoneSE,
    title: "iPhone SE",
    category: "Мобильный телефон",
    price: "699.00"
  },
  {
    id: 10,
    img: iPhone13,
    title: "iPhone 13",
    category: "Мобильный телефон",
    price: "1299.00"
  },
  {
    id: 11,
    img: SamsungGalaxyTabS7,
    title: "Samsung Galaxy Tab S7",
    category: "Планшет",
    price: "799.00"
  },
  {
    id: 12,
    img: SamsungGalaxyTabS8Ultra,
    title: "Samsung Galaxy Tab S8",
    category: "Планшет",
    price: "999.00"
  },
  {
    id: 13,
    img: iPadAir,
    title: "iPad Air",
    category: "Планшет",
    price: "899.00"
  },
]


const Products = () => {
  return (
    <>
      <div className="mt-32">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-4xl font-medium">Products</h2>
          <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div className="text-black">New</div>
            <div className="">Featured</div>
            <div>Top Sellers</div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {
            products.map((product) => (
              <ProductCart
                key={product.id}
                img={product.img}
                title={product.title}
                category={product.category}
                price={product.price}
                id={product.id}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};


export default Products;