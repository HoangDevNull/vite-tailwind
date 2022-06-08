import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <>
      {/* <div
        className="
        bg-blue
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Scelerisque egestas et euismod.
        <a href="/" className="pl-3 underline">
          Take me there
        </a>
      </div> */}
      <div className={styles.root}>
        <div className={styles.navLeft}>
          <a href="/" className={styles.logo}>
            NINE4
          </a>
          <div className={styles.list}>
            <a href="/" className={styles.item}>
              Cras.
            </a>
            <a href="/" className={styles.item}>
              Cras.
            </a>
            <a href="/" className={styles.item}>
              Fringilla.
            </a>
            <a href="/" className="text-xl text-black">
              Enim.
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <a
              className="mt-2 inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black"
              href="/"
            >
              Log in
            </a>
            <a
              className="bg-blue-700 mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Request a demo
            </a>
          </div>

          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
