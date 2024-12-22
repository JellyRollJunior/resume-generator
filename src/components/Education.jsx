export { Education };

const Education = ({ onSubmit }) => {
  return (
    <fieldset>
      <legend>New Education</legend>
      <form onSubmit={onSubmit}>
        <label>
          School:
          <input type="text" name="school" />
        </label>
        <label>
          Title of Study:
          <input type="text" name="program" />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
};
