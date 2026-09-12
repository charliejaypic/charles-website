import "./Education.css";

import transcript from "../../assets/documents/Tran.pdf";
import uace from "../../assets/documents/UACE.pdf";
import uce from "../../assets/documents/UCE.pdf";
import ite from "../../assets/documents/ITE.pdf";

// import ciscoLogoCcna from "../../assets/images/ccna.png";
import ccna from "../../assets/images/certificates/CCNAITN__1_.png";
import jcacp from "../../assets/images/certificates/jcacp.png";
import ctm from "../../assets/images/certificates/CTM.png";
import nd from "../../assets/images/certificates/ND.png";
import inscml from "../../assets/images/certificates/blob.png";
import dae from "../../assets/images/certificates/dae.png";
import gitspc from "../../assets/images/certificates/gitspc.png";
import es from "../../assets/images/certificates/es.png";
import ic from "../../assets/images/certificates/ic.png";
import ntcp from "../../assets/images/certificates/ntcp.png";
import nss from "../../assets/images/certificates/nss.png";
import nabt from "../../assets/images/certificates/nabt.png";
import ndic from "../../assets/images/certificates/ndic.png";
import nb from "../../assets/images/certificates/nb.png";
import iiot from "../../assets/images/certificates/iiot.png";
import osb from "../../assets/images/certificates/osb.png";
import chb from "../../assets/images/certificates/chb.png";

import {
 FaGraduationCap,
 FaCertificate,
 FaAward,
 FaLaptopCode,
 FaCalendarAlt
} from "react-icons/fa";


function Education() {

    const certificates = [
  {
    title: "CCNA: Introduction to Networks",
    provider: "October 6 University-ITPro",
    date: "Aug 4, 2026",
    logo: ccna,
    link: "https://www.credly.com/badges/fbb7c5fc-3ddf-45af-a066-0aa6691cd22d/public_url"
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    provider: "Cisco",
    date: "Mar 7, 2026",
    logo: jcacp,
    link: "https://www.credly.com/badges/ebad56e0-d335-41bc-a847-0a509befba1d/public_url"
  },
  {
    title: "Cyber Threat Management",
    provider: "Cisco",
    date: "Mar 6, 2026",
    logo: ctm,
    link: "https://www.credly.com/badges/67d65e14-0893-476d-832d-4f0c0469ab3d/public_url"
  },
  {
    title: "Network Defense",
    provider: "Cisco",
    date: "Feb 20, 2026",
    logo: nd,
    link: "https://www.credly.com/badges/89ef9a8c-c67e-4450-9632-8ce1a98750a6/public_url"
  },
  {
    title: "Introduction to Network Simulations with Cisco Modeling Labs",
    provider: "Cisco",
    date: "Nov 17, 2025",
    logo: inscml,
    link: "https://www.credly.com/badges/f111da03-4597-449b-a575-2f30f8636b4b/public_url"
  },
  {
    title: "Data Analytics Essentials",
    provider: "Cisco",
    date: "Nov 4, 2025",
    logo: dae,
    link: "https://www.credly.com/badges/cfefcf14-791e-4fa3-839a-ae43811efe0c/public_url"
  },
  {
    title: "Google IT Support Professional Certificate (v2)",
    provider: "Coursera",
    date: "Aug 7, 2025",
    logo: gitspc,
    link: "https://www.credly.com/badges/13d79bb4-e1e8-42a3-9190-43fa9edd8f2f/public_url"
  },
  {
    title: "Endpoint Security",
    provider: "Cisco",
    date: "May 28, 2025",
    logo: es,
    link: "https://www.credly.com/badges/b9e3867e-9cfe-4d7e-bb63-17cc6c6c8171/public_url"
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    date: "Mar 14, 2025",
    logo: ic,
    link: "https://www.credly.com/badges/6d46a62e-25c3-4620-a28a-3de2d41aa600/public_url"
  },
  {
    title: "Network Technician Career Path",
    provider: "Cisco",
    date: "Nov 4, 2024",
    logo: ntcp,
    link: "https://www.credly.com/badges/79ebec18-b28a-4af4-8beb-de5e92ba8735/public_url"
  },
  {
    title: "Network Support and Security",
    provider: "Cisco",
    date: "Oct 30, 2024",
    logo: nss,
    link: "https://www.credly.com/badges/7738a9e1-dc32-42bb-83aa-9083dc2b1e36/public_url"
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    provider: "Cisco",
    date: "Oct 28, 2024",
    logo: nabt,
    link: "https://www.credly.com/badges/482f0cdb-e1df-425b-8021-08b9e5d47dd6/public_url"
  },
  {
    title: "Networking Devices and Initial Configuration",
    provider: "Cisco",
    date: "Oct 21, 2024",
    logo: ndic,
    link: "https://www.credly.com/badges/01971225-9d15-4b08-bb36-517ff297ccb0/public_url"
  },
  {
    title: "Networking Basics",
    provider: "Cisco",
    date: "Oct 8, 2024",
    logo: nb,
    link: "https://www.credly.com/badges/246b8d7d-ab0e-4e50-9708-0f96e6bf8c7e/public_url"
  },
  {
    title: "Introduction to IoT",
    provider: "Cisco",
    date: "Sep 16, 2024",
    logo: iiot,
    link: "https://www.credly.com/badges/10955287-d755-4d52-9522-f25da5116049/public_url"
  },
  {
    title: "Operating Systems Basics",
    provider: "Cisco",
    date: "Jul 20, 2024",
    logo: osb,
    link: "https://www.credly.com/badges/ccd6d1f4-33a3-48a9-a86c-328a4528ec32/public_url"
  },
  {
    title: "Computer Hardware Basics",
    provider: "Cisco",
    date: "Jul 16, 2024",
    logo: chb,
    link: "https://www.credly.com/badges/de170079-e60c-447c-b353-c15f489d915c/public_url"
  }
];

  return (
    <section className="education" id="education">

      <div className="heading">

        {/* <span className="badge">🎓 Academic Background</span> */}

        <h1>Academic Background</h1>

        {/* <p>
          Building a strong foundation in software engineering and information technology.
        </p> */}

      </div>

      <a
        href={transcript}
        target="_blank"
        rel="noopener noreferrer"
        className="education-card"
        title="Click to view transcript"
      >
        <div className="icon">
          <FaGraduationCap />
        </div>

        <div className="info">
          <h2>Bachelor of Information and Communication Technology</h2>

          <h4>Gulu University</h4>

          <p className="date">
            <FaCalendarAlt /> Jan 2022 - Oct 2024
          </p>

          <span className="score">Degree</span>
        </div>

        <div className="status completed">
          Completed
        </div>
      </a>

      <a
        href={ite}
        target="_blank"
        rel="noopener noreferrer"
        className="education-card"
        title="Click to view transcript"
      >
        <div className="icon">
          <FaCertificate />
        </div>

        <div className="info">
          <h2>IT Essentials: PC Hardware and Software</h2>

          <h4>Victoria University</h4>

          <p className="date">
            <FaCalendarAlt /> Sep 2021 - Jan 2022
          </p>

          <span className="score">Certificate</span>
        </div>

        <div className="status completed">
          Completed
        </div>
      </a>

      <a
        href={uace}
        target="_blank"
        rel="noopener noreferrer"
        className="education-card"
        title="Click to view certificate"
      >
       <div className="icon">
            <FaCertificate/>
        </div>
        <div className="info">
          <h2>Uganda Advanced Certificate of Education</h2>
          <h4>St. Kizito High School Namugongo</h4>
          <p className="date">
  <FaCalendarAlt /> Jan 2022 - Oct 2024
</p>
          <span className="score">A-Level Certificate</span>
        </div>

        <div className="status completed">
          Completed
        </div>
      </a>

      <a
        href={uce}
        target="_blank"
        rel="noopener noreferrer"
        className="education-card"
        title="Click to view certificate"
      >
        <div className="icon">
            <FaCertificate/>
        </div>
        <div className="info">
          <h2>Uganda Certificate of Education</h2>
          <h4>St. Kizito High School Namugongo</h4>
          <p className="date">
  <FaCalendarAlt /> Jan 2022 - Oct 2024
</p>
          <span className="score">O-Level Certificate</span>
        </div>

        <div className="status completed">
          Completed
        </div>
      </a>


      <h2 className="certificate-title">
  Certifications & Awards
</h2>

<div className="certificate-grid">

  {certificates.map((certificate, index) => (

    <a
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
      key={index}
      title={`Verify ${certificate.title}`}
    >

      <img
        src={certificate.logo}
        alt={certificate.provider}
        className="certificate-logo"
      />

      <h3>{certificate.title}</h3>

      <p>{certificate.provider}</p>

      <small className="certificate-date">
        <FaCalendarAlt /> {certificate.date}
      </small>

      <span className="certificate-verify">
        Verify →
      </span>

    </a>

  ))}

</div>

    </section>
  );
}

export default Education;