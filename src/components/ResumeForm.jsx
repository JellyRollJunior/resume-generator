export { ResumeForm };

const ResumeForm = ({generalInfo, setGeneralInfo}) => {
  const handleFirstname = (event) => [
    setGeneralInfo({
      ...generalInfo,
      firstname: event.target.value,
    }),
  ];

  const handleLastname = (event) => [
    setGeneralInfo({
      ...generalInfo,
      lastname: event.target.value,
    }),
  ];

  const handlePhone = (event) => [
    setGeneralInfo({
      ...generalInfo,
      phone: event.target.value,
    }),
  ];

  const handleEmail = (event) => [
    setGeneralInfo({
      ...generalInfo,
      email: event.target.value,
    }),
  ];

  return (
    <section>
      <form action="">
        <h1>Resume Generator</h1>
        <fieldset>
          <legend>General Information</legend>
          <div>
            <label htmlFor="firstname">Firstname: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={generalInfo.firstname}
              onChange={handleFirstname}
            />
          </div>
          <div>
            <label htmlFor="lastname">Lastname: </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={generalInfo.lastname}
              onChange={handleLastname}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={generalInfo.phone}
              onChange={handlePhone}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={generalInfo.email}
              onChange={handleEmail}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Education</legend>
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
        </fieldset>
      </form>
    </section>
  );
};
