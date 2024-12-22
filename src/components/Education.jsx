export { Education };

const Education = ({ data, onSubmit, onUpdate, onDelete }) => {
  return (
    <>
      {data.map((entry, index) => {
        return (
          <fieldset key={entry.id}>
            <legend>Education - {index + 1}</legend>
            <form onSubmit={(event) => onUpdate(event, entry.id)}>
              <label>
                School:
                <input type="text" name="school" defaultValue={entry.school} />
              </label>
              <label>
                Title of Study:
                <input type="text" name="program" defaultValue={entry.program} />
              </label>
              <label>
                Start Date:
                <input type="date" name="startDate" defaultValue={entry.startDate} />
              </label>
              <label>
                End Date:
                <input type="date" name="endDate" defaultValue={entry.endDate} />
              </label>
              <button type="submit">Update</button>
              <button type="button" onClick={(event) => onDelete(event, entry.id)}>Delete</button>
            </form>
          </fieldset>
        );
      })}
      <fieldset>
        <legend>Add New Education</legend>
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
    </>
  );
};
