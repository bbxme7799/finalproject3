import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <nav className={classes.container}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <span className="text-white text-xl font-semibold">
                MyService
              </span>
            </Link>
          </div>
          <div className="md:flex items-center justify-center">
            {" "}
            {/* เพิ่ม justify-center ที่นี่ */}
            <Link href="/" className={classes.title}>
              Home
            </Link>
            <Link href="/service" className={classes.title}>
              Service
            </Link>
            <Link href="/blog" className={classes.title}>
              Blog
            </Link>
            <Link href="/faq" className={classes.title}>
              FAQ
            </Link>
            <Link href="/users" passHref>
              <button className={classes.btnlogin}>เข้าสู่ระบบ</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
