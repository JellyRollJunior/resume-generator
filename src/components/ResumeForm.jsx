export { ResumeForm };

const ResumeForm = () => {
  return (
    <section>
      <form action="">
        <h1>Resume Generator</h1>
        <fieldset>
          <legend>General Information</legend>
          <div>
            <label htmlFor="firstName">Firstname: </label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Lastname: </label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number: </label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};
