import React from 'react';
import { shallow } from 'enzyme'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.container';
import Header from '../../components/header/header.component';
 
describe('Header component', () => {
    let wrapper;
    let mockSignOutStart;
    let hidden; 
  
    beforeEach(() => {
      mockSignOutStart = jest.fn();
      hidden = true; 

      const mockProps = {
        hidden: hidden,
        currentUser: {
          uid: '123'
        },
        signOutStart: mockSignOutStart
      };
  
      wrapper = shallow(<Header {...mockProps} />);

    });

    test('should render Header component', () => {  
      expect(wrapper).toMatchSnapshot();
    }); 

    describe('if currentUser is present', () => {
      test('should call signOutStart method when link is clicked', () => { 
        wrapper
        .find('Styled(NavLink)')
        .at(3)
        .simulate('click');
  
        expect(mockSignOutStart).toHaveBeenCalled();
      }); 

      test('should not render CartDropDown', () => {  
        expect(wrapper.containsMatchingElement(<CartDropDown />)).toEqual(false);  
      })

    });

    describe('if currentUser is null', () => {
      test('should render CartDropdown', () => { 
        const mockProps = {
          hidden: false,
          currentUser: null,
          signOutStart: mockSignOutStart
        };
  
        const newWrapper = shallow(<Header {...mockProps} />); 
        expect(newWrapper.containsMatchingElement(<CartDropDown />)).toEqual(true); 

      });
    });
    
});
