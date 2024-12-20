import { useState } from 'react';

export { ResumeForm };

const ResumeForm = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: 'Shisa',
    lastName: 'Chiikawa',
    phone: '888-888-8888',
    email: 'supa_arubaito_shisa@chiikawa.co',
  });
  return (
    <section>
      <form action="">
        <h1>Resume Generator</h1>
        <fieldset>
          <legend>General Information</legend>
          <div>
            <label htmlFor="firstName">Firstname: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={generalInfo.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Lastname: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={generalInfo.lastName}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={generalInfo.phone}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={generalInfo.email}
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
