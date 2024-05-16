import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "21ketanraaz@gmail.com",
    href: "mailto:21ketanraaz@gmail.com",
  },
  {
    social: "github",
    link: "RaazKetan",
    href: "https://github.com/RaazKetan",
  },
  {
    social: "linkedin",
    link: "ketanraz",
    href: "https://www.linkedin.com/in/ketan-raj-4ab47b204/",
  },
  {
    social: "twitter",
    link: "raazketan",
    href: "https://twitter.com/raazketan",
  },
  {
    social: "instagram",
    link: "raaz_ketan",
    href: "https://www.instagram.com/raaz_ketan",
  },
  {
    social: "leetcode",
    link: "ketanraaz",
    href: "https://leetcode.com/u/ketanraaz/",
  },
  {
    social: "Code Studio",
    link: "ketanraaz",
    href: "https://www.naukri.com/code360/profile/raazketan",
  },
  {
    social: "GeekForGeeks",
    link: "ketanraaz",
    href: "https://www.geeksforgeeks.org/user/ketanraaz/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
