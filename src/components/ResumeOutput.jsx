export { ResumeOutput };

const ResumeOutput = ({generalInfo}) => {
  return (
    <section>
      <h2>Generated Resume</h2>
      <div>
        <h3>{generalInfo.firstname} {generalInfo.lastname}</h3>
        <h4>{generalInfo.phone} | {generalInfo.email}</h4>
      </div>
    </section>
  );
};
