import classes from "./index.module.css";
import Image from "next/image";
import bg from "../public/images/marketinglogo.png";
import Link from "next/link";

function HomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <h1>
          เว็บปั้มวิว ปั้มไลค์ ปั้มใจ ปั้มผู้ติดตาม โปรโมท โฆษณา
          ทำการตลาดออนไลน์
        </h1>
        <p>
          #1 บริการด้านการตลาดออนไลน์ SEO โซเชียลมีเดีย อันดับหนึ่ง ปั้มวิวฟรี
          ปั้มใจtiktok ปั้มไลค์ฟรี ปั้มผู้ติดตาม ปั้มฟอลโล ปั้มซับ
          ระบบสั่งซื้ออัตโนมัติ ใช้งานง่าย อยู่ที่ไหนก็ทำได้ 24/7
        </p>
        <Link href="/users" passHref>
          <button className={classes.btnlogin}>สมัครสมาชิก</button>
        </Link>
      </div>
      <div className={classes.item}>
        <Image src={bg} className={classes.img} />
      </div>
    </div>
  );
}

export default HomePage;
