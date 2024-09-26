import Link from "next/link";
import styles from "./MaskedText.module.css";
import Image from "next/image";
import { leftArrow, rightArrow, top_arrow } from "../../../public/icons";
const MaskedText = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.maskedText}>404</h1>
      <p  className="text-xl tracking-wider font-thin">Ooops! You navigated to the wrong place...</p>
        <Link  href={"/"} className="text-lg font-thin text-secondary tracking-wider">
      <div className="flex gap-2 my-6 py-4 px-6 bg-thirdly hover:px-12 transition-all duration-300 ease-out cursor-pointer rounded-full">
          Back Home{" "}
        <Image src={rightArrow} alt="" width={20} height={20} />
      </div>
        </Link>
    </div>
  );
};

export default MaskedText;
