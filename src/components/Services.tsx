import {MdSupportAgent} from "react-icons/md";
import {SiMoneygram} from "react-icons/si";
import {ImTruck} from "react-icons/im";
import {MdDiscount} from "react-icons/md";
import FeatureCard from "./FeatureCard.tsx";


const Services = () => {
  const data = [
    {
      icon: <ImTruck className="text-4xl" />,
      title: "Быстрая доставка",
      desc: "Заказы со всех товаров",
    },
    {
      icon: <SiMoneygram className="text-4xl" />,
      title: "Возврат и возврат денег",
      desc: "Гарантия возврата денег",
    },
    {
      icon: <MdDiscount className="text-4xl" />,
      title: "Скидка для участников",
      desc: "На заказы свыше $99.00",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      title: "Поддержка 24/7",
      desc: "Свяжитесь с нами 24 часа в сутки",
    }
  ];
  return <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
    {
      data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          desc={item.desc}
          title={item.title}
        />
      ))
    }
  </div>
}

export default Services