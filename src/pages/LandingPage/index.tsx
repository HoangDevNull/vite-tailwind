import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Main() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <>
      <div className="mt-24 mx-auto justify-center px-5 text-center md:px-6 lg:px-8">
        <div className="mb-4 lg:mb-12">
          <motion.h2
            initial="hidden"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={fadeInUp}
            className="text-4xl font-semibold text-white lg:text-7xl"
          >
            Something details
            <br />
            right here
          </motion.h2>
          <div className="mt-3 mb-4 lg:mt-6 lg:mb-0 max-w-4xl mx-auto">
            <motion.p
              initial="hidden"
              animate="animate"
              exit={{ opacity: 0 }}
              variants={fadeInUp}
              className="text-xl text-[#868686] lg:text-2xl"
            >
              GreenNodes is Mining Eco-friendly BTC in Finland with Hydro, Wind
              & Solar Energy. Fully supported by the local community. 🌊💨☀️
            </motion.p>
          </div>
        </div>
        <div className="container relative top-1/2 left-1/2 mb-[5rem] h-[70%] w-[95%] translate-y-[10%] translate-x-[-50%] md:mb-[15rem] lg:mb-[20rem] lg:h-1/2 lg:w-2/3">
          <motion.div
            initial="hidden"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={fadeInUp}
            className="overflow-hidden rounded-lg bg-[#111111]"
            style={{
              scale,
            }}
          >
            <img src="/images/hero_1.jpg" alt="placeholder" />
          </motion.div>
        </div>
      </div>
      <div className=" mx-auto mb-24 flex max-w-[100rem] px-8 pt-4 text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="pr-[3rem] md:max-w-xl md:pr-[3rem] lg:max-w-3xl lg:pr-[7rem] xl:pr-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              Our long term goal in 1-2 years is to be supplied with Carbon
              Negative Energy for Mining our Bitcoin. Along with using the heat
              generated from our Miners to supply heat to the local community
              near us. 🇫🇮
            </h3>
          </div>
          <div>
            <img className="rounded-xl" alt="img_2" src="./images/hero_2.jpg" />
          </div>
        </div>
      </div>
      <div className=" mx-auto mb-24 mt-12 flex max-w-[100rem] px-8 pt-4 text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:mt-[16rem] lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="block pr-[3rem] md:max-w-xl md:pr-[3rem] lg:hidden lg:max-w-3xl lg:pr-[7rem] xl:pr-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              We will also be giving tokens to charity. 🎗
            </h3>
          </div>
          <div>
            <img className="rounded-xl" alt="img_3" src="./images/hero_3.jpg" />
          </div>
          <div className="hidden pl-[3rem] md:max-w-xl md:pl-[3rem] lg:block lg:max-w-3xl lg:pl-[7rem] xl:pl-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-5xl">
              We will also be giving tokens to charity. 🎗
            </h3>
          </div>
        </div>
      </div>
      <div className=" mx-auto mb-24 flex max-w-[100rem] px-8 pt-4 text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="pr-[3rem] md:max-w-xl md:pr-[3rem] lg:max-w-3xl lg:pr-[7rem] xl:pr-[17rem]">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-4xl">
              We are Starting WL applications for our token. 📝
            </h3>
          </div>
          <div>
            <img
              className="rounded-xl "
              alt="img_4"
              src="./images/hero_4.jpg"
            />
          </div>
        </div>
      </div>

      <div className=" mx-auto mb-12 mt-12 flex max-w-[150rem] flex-col px-8 pt-4 text-center text-[#eeeeee] md:items-center md:justify-between md:px-6 lg:mb-24 lg:mt-[16rem] lg:px-8">
        <div className="flex lg:items-center">
          <div className="mb-0 lg:mb-10">
            <h3 className="pb-3 text-2xl lg:pb-6 lg:text-5xl max-w-5xl">
              Come join us in making the world a greener place for Crypto ✅
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
