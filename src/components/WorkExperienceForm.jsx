export { WorkExperience };

const WorkExperience = ({ resumeData, setResumeData }) => {
  const handleCompany = (event) => {
    setResumeData({ ...resumeData, company: event.target.value });
  };

  const handlePosition = (event) => {
    setResumeData({ ...resumeData, position: event.target.value });
  };

  const handleStartDate = (event) => {
    setResumeData({ ...resumeData, workStartDate: event.target.value });
  };

  const handleEndDate = (event) => {
    setResumeData({ ...resumeData, workEndDate: event.target.value });
  };

  const handleResponsibilities = (event) => {
    setResumeData({ ...resumeData, responsibilities: event.target.value });
  };

  return (
    <fieldset>
      <legend>Work Experience</legend>
      <div>
        <label>
          Company Name:
          <input
            type="text"
            name="company"
            value={resumeData.company}
            onChange={handleCompany}
          />
        </label>
      </div>
      <div>
        <label>
          Position Title:
          <input
            type="text"
            name="position"
            value={resumeData.position}
            onChange={handlePosition}
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="workStartDate"
            value={resumeData.workStartDate}
            onChange={handleStartDate}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="date"
            name="workEndDate"
            value={resumeData.workEndDate}
            onChange={handleEndDate}
          />
        </label>
      </div>
      <div>
        <label>
          Responsibilities:
          <textarea
            name="responsibilities"
            value={resumeData.responsibilities}
            onChange={handleResponsibilities}
          ></textarea>
        </label>
      </div>
    </fieldset>
  );
};
