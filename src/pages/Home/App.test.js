import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
// import image from '../../../public/images/champions-trophy.png';
// import { LogIn } from '../LogIn';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../../app/store';
// import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  // it('should renders a image', () => {
  //   expect(wrapper.find('img').prop('src')).toBe(image);
  // });

  it('should find Entrar button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find({ children: 'Entrar' }));
  });

  it('should find Cadastrar button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find({ children: 'Cadastrar' }));
  });

  // it('should redirect to login when click Cadastrar button', () => {
  //   //const btn = wrapper.find({ children: 'Entrar' });
  //   const AppComponent = mount(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Switch>
  //           <App />
  //         </Switch>
  //       </BrowserRouter>
  //     </Provider>,
  //   );
  //   const btn = AppComponent.find().find({ children: 'Entrar' });
  //   console.log(btn.debug());
  //   btn.simulate('click');
  //   expect(AppComponent.find(LogIn)).toBeInTheDocument();
  // });

  // it('should redirect to login when click Entrar button', ()=>{

  // })
});
