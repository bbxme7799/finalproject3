import classes from "./index.module.css";
import Image from "next/image";
import bg from "../public/images/marketinglogo.png";
import Link from "next/link";

function HomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.body}></div>
      <div className={classes.position}>
        <div className={classes.banner}>
          <div class=" grid-flow-row-dense grid-cols-2 text-white z-50 flex gap-[90px] my-auto">
            <div class="col-span-2 w-[70%] ">
              <div className={classes.item}>
                <h1 className={classes.title}>
                  เว็บปั้มวิว ปั้มไลค์ ปั้มใจ ปั้มผู้ติดตาม โปรโมท โฆษณา
                  ทำการตลาดออนไลน์
                </h1>
                <p className={classes.desc}>
                  #1 บริการด้านการตลาดออนไลน์ SEO โซเชียลมีเดีย อันดับหนึ่ง
                  ปั้มวิวฟรี ปั้มใจtiktok ปั้มไลค์ฟรี ปั้มผู้ติดตาม ปั้มฟอลโล
                  ปั้มซับ ระบบสั่งซื้ออัตโนมัติ ใช้งานง่าย อยู่ที่ไหนก็ทำได้
                  24/7
                </p>
                <Link href="/users" passHref>
                  <button className={classes.btnlogin}>สมัครสมาชิก</button>
                </Link>
              </div>
            </div>
            <div class="col-span-1 w-[30%] text-center items-center">
              <div className={classes.banner}>
                <div className={classes.item}>
                  <Image src={bg} className={classes.img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-8 mt-32 w-[60%] mx-auto items-center text-center ">
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">01</div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">01</div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">01</div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">01</div>
       
        
      </div>
    </div>
  );
}

export default HomePage;
