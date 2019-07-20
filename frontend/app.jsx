import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

const App = (props) => {
  
  const tabs = [{ title: 'Coconut', content: 'Coconut content' }, { title: 'Cherries', content: 'The best fruit' }, { title: 'Algae', content: 'sus box' }];
  return (
    <div className="apps">
      <Clock />
      <Tabs tabs={tabs} />
      <Weather />
      <AutoComplete names={props.names}/>
    </div>
  )
}

export default App;