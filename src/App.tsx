import React from 'react';
import { Button } from 'antd';
import Title from "components/Title";
import AuthButton from 'components/AuthButton';

const App = () => {
  return (
    <div>
      <section>
        <Title type="small" title="small word" />
        <Title type="large" title="large word" />
        <section>
          <AuthButton>Login</AuthButton>
      </section>
      </section>
    </div>
  )
}

export default App;