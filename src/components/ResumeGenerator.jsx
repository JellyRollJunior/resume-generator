import { useState } from 'react';
import { GeneralInformation } from './ResumeGeneralInformation';
export { ResumeGenerator };

const ResumeGenerator = () => {
  const [resumeData, setResumeData] = useState({
    firstname: 'Shisa',
    lastname: '',
    phone: '888-888-8888',
    email: 'supa_arubaito_shisa@chiikawa.co',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('span.name');
    const phone = document.querySelector('span.phone');
    const email = document.querySelector('span.email');
    
    name.textContent = `${resumeData.firstname} ${resumeData.lastname}`;
    phone.textContent = resumeData.phone;
    email.textContent = resumeData.email;
  }

  return (
    <div>
      <section>
        <form action="">
          <h1>Resume Generator</h1>
          <GeneralInformation resumeData={resumeData} setResumeData={setResumeData} />
          <fieldset>
            <legend>Education</legend>
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>
          </fieldset>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </section>
      <section>
        <h2>Generated Resume</h2>
        <div>
          <h3>
            <span className="name">Shisa</span>
          </h3>
          <h4>
            <span className='phone'>888-888-8888</span> | <span className="email">supa_arubaito_shisa@chiikawa.co</span>
          </h4>
        </div>
      </section>
    </div>
  );
};
