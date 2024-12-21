export { Education };

const Education = ({ resumeData, setResumeData }) => {
  const handleSchool = (event) => {
    setResumeData({ ...resumeData, school: event.target.value });
  };

  const handleProgram = (event) => {
    setResumeData({ ...resumeData, program: event.target.value });
  };

  const handleStartDate = (event) => {
    setResumeData({ ...resumeData, startDate: event.target.value });
  };

  const handleEndDate = (event) => {
    setResumeData({ ...resumeData, endDate: event.target.value });
  };

  return (
    <fieldset>
      <legend>Education</legend>
      <div>
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
      <div>
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
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={resumeData.startDate}
            onChange={handleStartDate}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={resumeData.endDate}
            onChange={handleEndDate}
          />
        </label>
      </div>
    </fieldset>
  );
};
