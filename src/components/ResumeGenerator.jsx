import { useState } from 'react';
import { ResumeForm } from "./ResumeForm";
import { ResumeOutput } from "./ResumeOutput";
export { ResumeGenerator }

const ResumeGenerator = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstname: 'Shisa',
    lastname: 'Chiikawa',
    phone: '888-888-8888',
    email: 'supa_arubaito_shisa@chiikawa.co',
  });

  return (
    <div>
      <ResumeForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <ResumeOutput generalInfo={generalInfo} />
    </div>
  );
}