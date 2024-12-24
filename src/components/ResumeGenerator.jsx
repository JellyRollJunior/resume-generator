import { useState } from 'react';
import { Education } from './education';
import { WorkExperience } from './WorkExperience';
import { GeneralInformation } from './GeneralInformation';
export { ResumeGenerator };

const ResumeGenerator = () => {
  /* --- Helper functions -------------------------------------------------------------------------- */
  const compileFormData = (event, fields) => {
    const data = {};
    fields.forEach((field) => {
      data[field] = event.target[field].value;
    });
    return data;
  };

  const filterById = (data, id) => {
    return data.filter((entry) => entry.id !== id);
  };

  /* --- General Information ---------------------------------------------------------------------- */
  const [resumeData, setResumeData] = useState({});
  const GENERAL_INFORMATION_FIELDS = [
    'firstname',
    'lastname',
    'phone',
    'email',
  ];

  const submitGeneralInformation = (event) => {
    event.preventDefault();
    const entry = compileFormData(event, GENERAL_INFORMATION_FIELDS);
    setResumeData({ ...resumeData, ...entry });
    console.log(resumeData);
  };

  /* --- Work Experience -------------------------------------------------------------------------- */
  const [workExperience, setWorkExperience] = useState([]);
  const WORK_EXPERIENCE_FIELDS = [
    'company',
    'position',
    'startDate',
    'endDate',
    'responsibilities',
  ];

  const addWorkExperience = (event) => {
    event.preventDefault();
    const workExperienceEntry = compileFormData(event, WORK_EXPERIENCE_FIELDS);
    workExperienceEntry['id'] = crypto.randomUUID();
    setWorkExperience([...workExperience, workExperienceEntry]);
    console.log(workExperienceEntry);
  };

  const submitWorkExperience = (event) => {
    addWorkExperience(event);
    event.target.reset();
  };

  const updateWorkExperience = (event, id) => {
    event.preventDefault();
    const editedEntry = compileFormData(event, WORK_EXPERIENCE_FIELDS);
    editedEntry['id'] = id;
    setWorkExperience([editedEntry, ...filterById(workExperience, id)]);
    console.log(editedEntry);
  };

  const deleteWorkExperience = (event, id) => {
    event.preventDefault();
    setWorkExperience(filterById(workExperience, id));
  };

  /* --- Education -------------------------------------------------------------------------------- */
  const [education, setEducation] = useState([]);
  const EDUCATION_FIELDS = ['school', 'program', 'startDate', 'endDate'];

  const addEducation = (event) => {
    event.preventDefault();
    const educationEntry = compileFormData(event, EDUCATION_FIELDS);
    educationEntry['id'] = crypto.randomUUID();
    setEducation([...education, educationEntry]);
    console.log(educationEntry);
  };

  const submitEducation = (event) => {
    addEducation(event);
    // clear form inputs
    event.target.reset();
  };

  const updateEducation = (event, id) => {
    event.preventDefault();
    const updatedEducation = compileFormData(event, EDUCATION_FIELDS);
    updatedEducation['id'] = id;
    setEducation([updatedEducation, ...filterById(education, id)]);
    console.log(updatedEducation);
  };

  const deleteEducation = (event, id) => {
    event.preventDefault();
    setEducation(filterById(education, id));
    console.log(education);
  };

  const loadPresetResumeData = () => {
    setResumeData({
      firstname: 'Shisa',
      lastname: '',
      phone: '888-888-8888',
      email: 'supa_arubaito@chiikawa.co',
    });
    setWorkExperience([
      {
        id: 'POGGERS',
        company: 'Rou ramen',
        startDate: '2024-12-27',
        endDate: '',
        responsibilities: 'Making ramen and taking orders from customers',
      },
    ]);
    setEducation([
      {
        id: 'zippy-zoppy',
        school: 'Supa Arubaito School',
        startDate: '2024-23-25',
        endDate: '2024-12-26',
      },
    ]);
  };

  const resetResumeData = () => {
    setResumeData({});
    setWorkExperience([]);
    setEducation([]);
  }

  return (
    <div className="resume-generator">
      <section>
        <h1>Resume Generator</h1>
        <GeneralInformation
          data={resumeData}
          onSubmit={submitGeneralInformation}
        />
        <WorkExperience
          data={workExperience}
          onSubmit={submitWorkExperience}
          onUpdate={updateWorkExperience}
          onDelete={deleteWorkExperience}
        />
        <Education
          data={education}
          onSubmit={submitEducation}
          onUpdate={updateEducation}
          onDelete={deleteEducation}
        />
        <div className="button-holder">
          <button onClick={loadPresetResumeData}>Load Preset Resume</button>
          <button onClick={resetResumeData}>Reset Resume</button>
        </div>
      </section>
      <section>
        <div className="resume">
          <div className="general-info">
            <h2>
              {resumeData.firstname} {resumeData.lastname}
            </h2>
            <h3>
              {resumeData.phone ? `Phone: ${resumeData.phone}` : ''}
              <br />
              {resumeData.email ? `Email: ${resumeData.email}` : ''}
            </h3>
          </div>
          {workExperience.map((data) => {
            return (
              <div key={data.id} className="work-experience">
                <h2>Work Experience</h2>
                <hr />
                <h3>{data.position}</h3>
                <h4>{data.company}</h4>
                <h5>
                  {data.startDate} - {data.endDate}
                </h5>
                <p>{data.responsibilities}</p>
              </div>
            );
          })}
          {education.map((data) => {
            return (
              <div key={data.id} className="education">
                <h2>Education</h2>
                <hr />
                <h3>{data.program}</h3>
                <h4>{data.school}</h4>
                <h5>
                  {data.startDate} - {data.endDate}
                </h5>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
