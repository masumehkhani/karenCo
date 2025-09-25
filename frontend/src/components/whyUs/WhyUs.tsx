import { motion } from "framer-motion";
import Item1 from "../../assets/images/whyUs/ai-generated-7827608_1280.jpg";
import Item2 from "../../assets/images/whyUs/ai-generated-7945684_1280.jpg";
import Item3 from "../../assets/images/whyUs/ai-generated-8030644_1280.jpg";

const features = [
  {
    image: Item1,
    title: "ایمنی تضمین‌شده",
    desc: "تمامی تابلو فرمان‌ها با جدیدترین استانداردهای ایمنی طراحی و تست شده‌اند.",
  },
  {
    image: Item2,
    title: "پشتیبانی فنی حرفه‌ای",
    desc: "تیم فنی ما آماده ارائه مشاوره و پشتیبانی در هر مرحله از پروژه است.",
  },
  {
    image: Item3,
    title: "سفارشی‌سازی کامل",
    desc: "ما متناسب با نیاز دقیق هر پروژه، راهکار خاص ارائه می‌دهیم.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const FeaturesSection = () => {
  return (
    <section className=" w-full bg-[#f9f9f9] py-16 px-4 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333] mb-12">
        چرا ما را انتخاب کنید؟
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center  md:px-2">
        {features.map((item, index) => (
         <motion.div
         key={index}
         className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center gap-4 border hover:border-[#ed6d6d] transition
                    w-full max-w-[90%] sm:max-w-[300px]  mx-auto"
         custom={index}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={cardVariants}
       >
       
        
            <div className="w-full relative aspect-[1/1]">
               <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full  object-cover"
            />
            </div>
           
            <h3 className="text-lg font-semibold text-[#222]">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
