import Image from "next/image";
import coffeeGif from "../../public/coffee6.gif";

const About = () => {
  return (
    <div className="w-full lg:h-[600px] bg-violet-700 flex flex-col items-center">
      <h1 className="p-6 uppercase lg:text-4xl text-2xl font-bold tracking-wider text-[#fffebb] lg:mb-10 mb-2 mt-3">
        About YVL
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src={coffeeGif}
          alt="About coffee"
          className="lg:w-[600px] w-[410px] lg:h-[400px] lg:mt-[400px] right-10 lg:absolute border-2 border-[#fffebb]"
        />
      </div>
      <div className="lg:mr-[600px] flex items-center justify-center flex-col lg:w-[700px] w-[300px] text-sm lg:text-base text-center">
        <h1 className="lg:text-4xl text-3xl my-4 font-semibold text-[#fffebb] font-tangerine">
          Celebrating our Coffee Company: Young Vamp Life!
        </h1>
        <p className="text-[#fffebb] font-pt pb-5 lg:pb-0">
          YVL, a coffee company that transcends borders to bring you a unique
          blend harvested from the lush landscapes of Japan and the fertile
          fields of Saint-Denis, France. Our signature coffee beans boast a
          captivating fusion of flavors, blending the delicate floral notes of
          Japanese coffee with the rich, earthy undertones of French beans. From
          the volcanic soils of Japans countryside to the sun-kissed
          vineyards of Saint-Denis, our beans are meticulously handpicked to
          ensure unparalleled quality and freshness.
          <br />
          <br /> Each sip of YVL coffee evokes a sense of wanderlust,
          transporting you to the serene landscapes where the beans were
          nurtured and cultivated. YVL coffee beans are characterized by their
          medium roast profile, striking the perfect balance between brightness
          and depth.
          <br />
          <br /> With a smooth body and lingering finish, our coffee promises to
          awaken your senses and ignite your passion for exploration. Embrace
          the journey with YVL and experience the world in every cup.
        </p>
      </div>
    </div>
  );
};

export default About;
