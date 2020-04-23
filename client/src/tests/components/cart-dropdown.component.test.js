import React from 'react';
import { shallow } from 'enzyme'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import Header from '../../components/header/header.component';

test('CartDropDown first sily test', () => {
    expect(shallow(<CartDropDown cartItems={[]}/>).length).toEqual(1);
});

describe('Header component', () => {
    let wrapper;
    let mockSignOutStart;
  
    beforeEach(() => {
      mockSignOutStart = jest.fn();
  
      const mockProps = {
        hidden: true,
        currentUser: {
          uid: '123'
        },
        signOutStart: mockSignOutStart
      };
  
      wrapper = shallow(<Header {...mockProps} />);

    });

    it('should render FormInput component', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    describe('if currentUser is present', () => {
      it('should call signOutStart method when link is clicked', () => { 
        wrapper
        .find('Styled(NavLink)')
        .at(3)
        .simulate('click');
  
        expect(mockSignOutStart).toHaveBeenCalled();
      });


    });
    
});
