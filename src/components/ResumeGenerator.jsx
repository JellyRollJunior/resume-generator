import { useState } from 'react';
import { GeneralInformation } from './GeneralInformationForm';
import { WorkExperience } from './WorkExperienceForm';
import { Education } from './education';
export { ResumeGenerator };

const ResumeGenerator = () => {
  const [resumeData, setResumeData] = useState({
    firstname: 'Shisa',
    lastname: '',
    phone: '888-888-8888',
    email: 'supa_arubaito@chiikawa.co',

    school: 'Supa Arubaito School',
    program: 'Super part - time worker',
    startDate: '2024-12-25',
    endDate: '2024-12-26',

    company: 'Rou ramen',
    position: 'Sous chef',
    workStartDate: '2024-12-27',
    workEndDate: '',
    responsibilities: 'Making ramen and taking orders from customers!',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    populateResume();
  };

  const populateResume = () => {
    // General info section
    const name = document.querySelector('span.name');
    const phone = document.querySelector('span.phone');
    const email = document.querySelector('span.email');
    name.textContent = `${resumeData.firstname} ${resumeData.lastname}`;
    phone.textContent = resumeData.phone;
    email.textContent = resumeData.email;

    // Work experience section
    const position = document.querySelector('span.position');
    const company = document.querySelector('span.company');
    const workDate = document.querySelector('span.work-date');
    const responsibilities = document.querySelector('span.responsibilities');
    position.textContent = resumeData.position;
    company.textContent = resumeData.company;
    workDate.textContent =
      resumeData.workEndDate === ''
        ? `${resumeData.workStartDate} - Present`
        : `${resumeData.workStartDate} - ${resumeData.workEndDate}`;
    responsibilities.textContent = resumeData.responsibilities;

    // Education section
    const program = document.querySelector('span.program');
    const school = document.querySelector('span.school');
    const date = document.querySelector('span.date');
    program.textContent = resumeData.program;
    school.textContent = resumeData.school;
    date.textContent = `${resumeData.startDate} - ${resumeData.endDate}`;
  };

  const [education, setEducation] = useState([]);
  const EDUCATION_FIELDS = ['school', 'program', 'startDate', 'endDate'];
  
  const compileEducation = (event) => {
    let data = {};
    EDUCATION_FIELDS.forEach((field) => {
      data[field] = event.target[field].value;
    });
    return data;
  }
  
  const addEducation = (event) => {
    event.preventDefault();
    const educationData = compileEducation(event);
    educationData['id'] = crypto.randomUUID();
    setEducation([...education, educationData]);
    console.log(educationData);
  };

  const updateEducation = (event, id) => {
    event.preventDefault();
    const updatedEducation = compileEducation(event);
    updatedEducation['id'] = id;
    setEducation([updatedEducation, ...education.filter((entry) => entry.id !== id)]);
    console.log(updatedEducation);
  }

  return (
    <div className="resume-generator">
      <section>
        <form action="">
          <h1>Resume Generator</h1>
          <GeneralInformation
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <WorkExperience
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <Education data={education} onSubmit={addEducation} onSave={updateEducation} />
      </section>
      <section className="resume">
        <div className="general-info">
          <h2>
            <span className="name">Shisa</span>
          </h2>
          <h3>
            Phone: <span className="phone">888-888-8888</span>
            <br />
            Email: <span className="email">supa_arubaito@chiikawa.co</span>
          </h3>
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <hr />
          <h3>
            <span className="position">Sous chef</span>
          </h3>
          <h4>
            <span className="company">Rou Ramen</span>
          </h4>
          <h5>
            <span className="work-date">2024-12-27 - Present</span>
          </h5>
          <p>
            <span className="responsibilities">
              Making ramen and taking orders from customers!
            </span>
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <hr />
          <h3>
            <span className="program">Super part - time worker</span>
          </h3>
          <h4>
            <span className="school">Supa Arubaito School</span>
          </h4>
          <h5>
            <span className="date">2024-12-25 - 2024-12-26</span>
          </h5>
        </div>
        {education.map((data) => {
          return (
            <div key={data.id} className="education">
              <h2>Education</h2>
              <hr />
              <h3>{data.program}</h3>
              <h4>{data.school}</h4>
              <h5>
                ${data.startDate} - ${data.endDate}
              </h5>
            </div>
          );
        })}
      </section>
    </div>
  );
};
