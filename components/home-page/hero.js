import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/wasd.png"
          alt="An image"
          width={2000}
          height={2000}
        />
      </div>
      <h1>ontuosiisb</h1>
      <p>oiugiul iuhfoijoierlgbilsn seln;kseo;an</p>
    </section>
  );
}

export default Hero;
