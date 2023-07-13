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
        <div class={classes.card}>
          <div className={classes.bodycard}>
            <Image src={Servericon} alt="server" className={classes.cardimg}/>
            <h2 className={classes.cardtitle}>3,xxx+ บริการในระบบ</h2>
            <p className={classes.carddesc}>
              เรามีคู่ค้าและเซิพเวอร์ในระบบมากถึง 3,xxx+ บริการ
              ตอบโจทย์ทุกรูปแบบ ประเภทบริการ
            </p>
          </div>
        </div>
        <div class={classes.card}>
          <div className={classes.bodycard}>
            <Image src={Walleticon} alt="server" className={classes.cardimg} />
            <h2 className={classes.cardtitle}>มีทีมงานช่วยเหลือ</h2>
            <p className={classes.carddesc}>
              ราคาสุดพิเศษเพื่อคุณเริ่มต้นเพียง 0.01 บาท ก็สามารถดำเนินการได้
              ราคานี้แค่คุณเท่านั้น
            </p>
          </div>
        </div>
        <div class={classes.card}>
          <div className={classes.bodycard}>
            <Image src={helpdeskicon} alt="server" className={classes.cardimg} />
            <h2 className={classes.cardtitle}>ปลอดภัย 100%</h2>
            <p className={classes.carddesc}>
              ติดต่อสอบถามได้ 24 ชั่วโมง
              เรามีทีมงานคอยให้คำแนะนำและประสานงานกับเซิพเวอร์ที่ใช้งาน
            </p>
          </div>
        </div>
        <div class={classes.card}>
          <div className={classes.bodycard}>
            <Image src={Socialicon} alt="server" className={classes.cardimg} />
            <h2 className={classes.cardtitle} >3,xxx+ บริการในระบบ</h2>
            <p className={classes.carddesc}>
              เป็นความลับ ทุกบริการปลอดภัย และมีประสิทธิภาพ
              ให้คุณได้เลือกใช้ได้อย่างไม่จำกัด
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-white h-[100px] mx-auto mt-16 shadow-lg rounded-2xl border-[3px] border-gray-50 flex items-center content-center justify-center">
        <div className="justify-center text-center items-center">
          <h1 className="font-bold text-4xl ">TOP Rated Services</h1>
        </div>
      </div>
      <div className="w-[50%] bg-white h-[500px] mx-auto mt-16 shadow-lg  border-[3px] border-gray-50 flex items-center content-center justify-center mb-10">
        
      </div>
    </div>
  );
}

export default HomePage;
