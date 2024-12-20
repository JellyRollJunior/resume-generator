export { Education };

const Education = ({ resumeData, setResumeData }) => {
  return (
    <fieldset>
      <legend>Education</legend>
      <div className="variable">
        <label>
          School:
          <input type="text" name="school" />
        </label>
      </div>
      <div className="variable">
        <label>
          Title of Study:
          <input type="text" name="title" />
        </label>
      </div>
      <div className="variable">
        <label>
          Start Date:
          <input type="text" name="start-date" />
        </label>
      </div>
      <div className="variable">
        <label>
          End Date:
          <input type="text" name="end-date" />
        </label>
      </div>
    </fieldset>
  );
};
