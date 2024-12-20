import { useState } from 'react';
import { GeneralInformation } from './GeneralInformationForm';
import { Education } from './EducationForm';
export { ResumeGenerator };

const ResumeGenerator = () => {
  const [resumeData, setResumeData] = useState({
    firstname: 'Shisa',
    lastname: '',
    phone: '888-888-8888',
    email: 'supa_arubaito@chiikawa.co',
    school: 'Supa Arubaito School',
    program: 'Super part - time worker',
    startDate: 'Last week',
    endDate: 'Yesterday',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    populateResume();
  };

  const populateResume = () => {
    const name = document.querySelector('span.name');
    const phone = document.querySelector('span.phone');
    const email = document.querySelector('span.email');

    name.textContent = `${resumeData.firstname} ${resumeData.lastname}`;
    phone.textContent = resumeData.phone;
    email.textContent = resumeData.email;
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
          <Education resumeData={resumeData} setResumeData={setResumeData} />
          <fieldset>
            <legend>Work Experience</legend>
          </fieldset>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
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
            <span className="startDate">Last week</span> -{' '}
            <span className="endDate">Yesterday</span>
          </h5>
        </div>
      </section>
    </div>
  );
};
