import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee1.png"
import Coffee2 from "../../assets/coffee3.png"

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "black coffee",
    subtitle:
      "  Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam quas repudiandae quae. Magnam laborum ",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Hot coffee",
    subtitle:
      "  Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam quas repudiandae quae. Magnam laborum ",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold coffee",
    subtitle:
      "  Lorem ipsum, dolor sit amet consectetur. Nihil temporibus at totam quas repudiandae quae. Magnam laborum ",
  },
];
const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2, //added delay for the firat time
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2, //added delay for the firat time
          }}
          className="text-sm opacity-50 "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          voluptas quas nihil, qui odio nam unde, nostrum natus fugit autem
          minima illum? Illum velit sunt tempore adipisci quisquam deserunt
          saepe!
        </motion.p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) =>(
            <div>
                <img src={service.image} alt="" />
                <div className="space-y-2">
                    <h1 className=" text-2xl font-bold text-pretty">{service.title}</h1>
                    <h1>{service.subtitle}</h1>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
