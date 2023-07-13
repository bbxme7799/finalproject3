import classes from "./index.module.css";
import Image from "next/image";
import bg from "../public/images/marketinglogo.png";
import Link from "next/link";
import Servericon from "../components/icons/server.png";
import Walleticon from "../components/icons/wallet.png";
import helpdeskicon from "../components/icons/help-desk.png";
import Socialicon from "../components/icons/social-media.png";

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
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">
          <div className="w-16">
            <Image src={Servericon} alt="server" />
            <h2>3,xxx+ บริการในระบบ</h2>
            <p>
              เรามีคู่ค้าและเซิพเวอร์ในระบบมากถึง 3,xxx+ บริการ
              ตอบโจทย์ทุกรูปแบบ ประเภทบริการ
            </p>
          </div>
        </div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">
          <div>
            <Image src={Walleticon} alt="server" />
            <h2>มีทีมงานช่วยเหลือ</h2>
            <p>
              ราคาสุดพิเศษเพื่อคุณเริ่มต้นเพียง 0.01 บาท ก็สามารถดำเนินการได้
              ราคานี้แค่คุณเท่านั้น
            </p>
          </div>
        </div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">
          <div>
            <Image src={helpdeskicon} alt="server" />
            <h2>ปลอดภัย 100%</h2>
            <p>
              ติดต่อสอบถามได้ 24 ชั่วโมง
              เรามีทีมงานคอยให้คำแนะนำและประสานงานกับเซิพเวอร์ที่ใช้งาน
            </p>
          </div>
        </div>
        <div class="bg-white h-[250px] rounded-xl shadow-lg border-[3px] border-gray-50">
          <div>
            <Image src={Socialicon} alt="server" />
            <h2>3,xxx+ บริการในระบบ</h2>
            <p>
              เป็นความลับ ทุกบริการปลอดภัย และมีประสิทธิภาพ
              ให้คุณได้เลือกใช้ได้อย่างไม่จำกัด
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
