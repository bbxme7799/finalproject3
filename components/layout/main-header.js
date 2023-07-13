import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/table",
  },
  {
    id: 3,
    title: "Blog",
    url: "/bookshelf",
  },
  {
    id: 4,
    title: "FAQ",
    url: "/rating",
  },
];
function MainHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.area}></div>
      <div className={styles.nav1}>
      <Link href="/" className={styles.logo}>
        MyService
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
       
      </div>
      <button
          className={styles.logout}
        >
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
