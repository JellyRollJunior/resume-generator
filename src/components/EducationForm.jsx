export { Education };

const Education = ({ resumeData, setResumeData }) => {
  const handleSchool = (event) => {
    setResumeData({ ...resumeData, school: event.target.value });
  };

  const handleProgram = (event) => {
    setResumeData({ ...resumeData, program: event.target.value });
  };

  const handleStartDate = (event) => {
    setResumeData({...resumeData, startDate: event.target.value});
  }

  const handleEndDate = (event) => {
    setResumeData({...resumeData, endDate: event.target.value})
  }

  return (
    <fieldset>
      <legend>Education</legend>
      <div className="variable">
        <label>
          School:
          <input
            type="text"
            name="school"
            value={resumeData.school}
            onChange={handleSchool}
          />
        </label>
      </div>
      <div className="variable">
        <label>
          Title of Study:
          <input
            type="text"
            name="program"
            value={resumeData.program}
            onChange={handleProgram}
          />
        </label>
      </div>
      <div className="variable">
        <label>
          Start Date:
          <input type="date" name="startDate" value={resumeData.startDate} onChange={handleStartDate} />
        </label>
      </div>
      <div className="variable">
        <label>
          End Date:
          <input type="date" name="endDate" value={resumeData.endDate} onChange={handleEndDate} />
        </label>
      </div>
    </fieldset>
  );
};
