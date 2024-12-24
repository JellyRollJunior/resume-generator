export { WorkExperience2 };

const WorkExperience2 = () => {
  return (
    <fieldset>
      <legend>Add New Work Experience</legend>
      <form action="">
        <label>
          Company Name:
          <input type="text" name="company" />
        </label>
        <label>
          Position Title:
          <input type="text" name="position" />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" />
        </label>
        <label>
          Responsibilities:
          <textarea name="responsibilities"></textarea>
        </label>
        <div className="button-holder">
          <button type="submit">Submit</button>
        </div>
      </form>
    </fieldset>
  );
};
