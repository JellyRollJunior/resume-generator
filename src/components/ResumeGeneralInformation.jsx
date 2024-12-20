export { GeneralInformation }

const GeneralInformation = ({ resumeData, setResumeData }) => {
  const handleFirstname = (event) => [
    setResumeData({
      ...resumeData,
      firstname: event.target.value,
    }),
  ];

  const handleLastname = (event) => [
    setResumeData({
      ...resumeData,
      lastname: event.target.value,
    }),
  ];

  const handlePhone = (event) => [
    setResumeData({
      ...resumeData,
      phone: event.target.value,
    }),
  ];

  const handleEmail = (event) => [
    setResumeData({
      ...resumeData,
      email: event.target.value,
    }),
  ];

  return (
    <fieldset>
      <legend>General Information</legend>
      <div className="variable">
        <label htmlFor="firstname">Firstname: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={resumeData.firstname}
          onChange={handleFirstname}
        />
      </div>
      <div className="variable">
        <label htmlFor="lastname">Lastname: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={resumeData.lastname}
          onChange={handleLastname}
        />
      </div>
      <div className="variable">
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={resumeData.phone}
          onChange={handlePhone}
        />
      </div>
      <div className="variable">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={resumeData.email}
          onChange={handleEmail}
        />
      </div>
    </fieldset>
  );
};
