import { FunctionComponent } from 'react';
import FilterElement from './components/FilterElement';
import FilterElementType from './components/FilterElementType';

const App: FunctionComponent = () => {

  return (
    <FilterElement>
      <FilterElementType />
    </FilterElement>
  );
}

export default App;
