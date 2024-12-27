import Image from "next/image";
import mn from "../app/images/mn.jpg"


  export default function Home() {
    return (
      <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }} className="bg-slate-400">
        <title>Resume</title>
        {/* Left Section */}
        <div style={{ width: "25%", backgroundColor: "#007bff", color: "#fff", padding: "20px", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Profile Picture */}
            <Image src={mn} alt="Profile" width={150} height={150} className="rounded-full" />
            <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>Hamza Ali</h2>
            <p style={{ fontSize: "1em" }}>Civil Engineer</p>
            <p style={{ fontSize: "0.9em", margin: "5px 0" }}>+92 3039103207</p>
            <p style={{ fontSize: "0.9em", margin: "5px 0" }}>hengieer41@gmail.com</p>
            <p style={{ fontSize: "0.9em", margin: "5px 0" }}>Karachi, Pakistan</p>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ width: "75%", padding: "20px", color: "#333" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2>Profile</h2>
            <p>
            A dedicated and skilled Civil Engineer,in civil technology and
             hands-on experience in construction, design, and project management. Holds a B-Tech degree in 
             Civil Technology from Indus University, Karachi, and a DAE in Civil Technology from Hasani 
             College of Technology. Known for a keen eye for detail, problem-solving abilities, and strong 
             leadership in managing construction projects from conception to completion.
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Education</h2>
            <p>▪ B-TECH 4 YEARS IN CIVIL TECHNOLOGY FROM INDUS UNIVERSITY KARACHI (HEC ATTESTED DEGREE)
              <br />
                ▪ THREE YEARS DAE DIPLOMA IN CIVIL TECHNOLOGY FROM HASANI COLLEGE OF TECHNOLOGY KARACHI
              <br />
                ▪ HSE IN PRE-ENGINEERING
              <br />
                ▪ SSC IN COMPUTER SCIENCE</p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Skills</h2>
            <p>▪ Commuication ▪ Team Work ▪ Leadership ▪ Project Management ▪ Reliable Supervision</p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Languages</h2>
            <p>▪ English ▪ Urdu</p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Work Experience</h2>
            <p>▪ <strong>Civil Engineer</strong> - ABM Consulting PVT LTD (2022 - 2023)</p>
            <ul style={{ listStyleType: "none", paddingLeft: "20px", margin: "0" }}>
              <li style={{ marginBottom: "5px" }}>▪ Checked the work of Storm drain</li>
              <li style={{ marginBottom: "5px" }}>▪ Checked formwork,steel fixing,RCC bed , RCC Wing Walls ,RCC Slab in Conduit and culvert</li>
              <li style={{ marginBottom: "5px" }}>▪ Collar Joints RCC Pipes leakages</li>
              <li style={{ marginBottom: "5px" }}>▪ Supervised Plates/ formwork alignments and width preserve slope or steel fixing</li>
              <li style={{ marginBottom: "5px" }}>▪ Capability to carry out inspections,repairs and diagnose problems with hydraulics systems</li>
              <li style={{ marginBottom: "5px" }}>▪ Kerb block installation and alignments</li>
              <li style={{ marginBottom: "5px" }}>▪ After pouring next day curing inspection</li>
              <li style={{ marginBottom: "5px" }}>▪ Flexible Road Construction Base Course, Binder Course, Surface Check thickness</li>
              <li style={{ marginBottom: "5px" }}>▪ Electrical Installation wiring Compound Lighting foundation work street light poles Base fixing</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Reference</h2>
            <p>Available upon request.</p>
          </section>
        </div>
      </div>
    );
  }