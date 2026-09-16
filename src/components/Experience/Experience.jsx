import "./Experience.css";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Experience() {

  const experiences = [

    {
      title: "Operations Manager",

      company: "Amekek Enterprises Limited",

      status: "Full Time",

      date: "Jan 2026 - Present",

      location: "Uganda",

      description: [
  "Coordinate daily operations and support smooth functioning of the organization.",
  "Assist in planning, coordination and monitoring of operational activities.",
  "Support staff and help resolve day-to-day operational issues.",
  "Maintain records and support with organizational administrative activities."
],

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Networking",
        "Git",
        "Windows"
      ]
    },

//     {
//       title: "IT Technician",

//       company: "Rangira Recovery Agent Ltd",

//       status: "Party Time",

//       date: "Oct 2025 - Dec 2025",

//       location: "Kampala",

//       description: [
//   "Provided technical support to staff.",
//   "Assisted with day to day ICT related queries.",
//   "Installed, configured and maintained computer hardware and software.",
//   "Troubleshot hardware, software, network and internet related queries.",
//   "Assisted users with computer related queries and problems."
// ],

//       technologies: [
//         "React",
//         "JavaScript",
//         "HTML",
//         "CSS",
//         "Networking",
//         "Git",
//         "Windows"
//       ]
//     },

    {
      title: "IT Graduate Trainee",

      company: "East African Civil Aviation Academy (EACAA)",

      status: "Party Time",

      date: "Sep 2024 - Sep 2025",

      location: "Soroti",

      description: [
  "Provided IT support to staff and students and helped them with computer problems.",
  "Maintained computers, printers, printers, and other ICT equipment.",
  "Assisted with server room, CCTV monitoring, and networking activities.",
  "Maintained ICT equipment records and helped in the installation of new gear.",
  "Assisted with antivirus setup, ups, and technical support."
],

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Networking",
        "Git",
        "Windows"
      ]
    },

    {
      title: "Intern ICT Officer",

      company: "Soroti Regional Referral Hospital (SRRH)",

      status: "Internship",

      date: "Jun 2023 - Aug 2023",

      location: "Soroti",

      description: [
  "Offered technical assistance to hospital staff and helped troubleshooting computer and network related problems.",
  "Assisted the setup and configuration of the hospital's new server and network infrastructure.",
  "Helped the staff with hospital systems such as IHIMS, RMIS, and HRMS.",
  "Assisted with data migration, backup and recovery, equipment inventory, and user account management.",
  "Maintained computers, printers and other ICT equipment."
],

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Networking",
        "Git",
        "Windows"
      ]
    },

    {
      title: "IT Support Assistant",

      company: "AD vantage Creative Services",

      status: "Full Time",

      date: "Sep 2019 - Nov 2021",

      location: "Kampala",

      description: [
  "Provided computer and technical support to clients.",
  "Installed operating systems and software and resolved hardware and network problems.",
  "Assisted clients with computer use, document preparation, printing, and application training.",
  "Performed data backup and recovery before computer maintenance.",
  "Provided basic graphic design, internet, and stationery services."
],

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Networking",
        "Git",
        "Windows"
      ]
    }

  ];

  return (

    <section className="experience" id="experience">

      <div className="experience-title">

        {/* <span>Work Experience</span> */}

        <h2>Professional Experience</h2>

        {/* <p>
          Building real-world digital solutions through software
          development, networking and IT support.
        </p> */}

      </div>

      <div className="timeline">

        {experiences.map((job,index)=>(

          <div className="experience-card" key={index}>

            <div className="card-header">

              <div>

                <h3>{job.title}</h3>

                <h4>{job.company}</h4>

              </div>

              <span className="status">

                {job.status}

              </span>

            </div>

            <div className="card-info">

              <span>

                <FaCalendarAlt />

                {job.date}

              </span>

              <span>

                <FaMapMarkerAlt />

                {job.location}

              </span>

            </div>

            <ul className="description">

  {job.description.map((item, index) => (

    <li key={index}>
      {item}
    </li>

  ))}

</ul>

            {/* <h5>

              Technologies Used

            </h5>

            <div className="tech-stack">

              {job.technologies.map((tech,i)=>(

                <span key={i}>

                  {tech}

                </span>

              ))}

            </div> */}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Experience;