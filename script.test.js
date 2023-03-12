/**
 * @jest-environment jsdom
 */

import {addList} from './script.js';

test ('When we add, we should have one list', () => {
    //Arrange

   let array = [addList('Hi', false, 1)];
    //Act 
   // const container = document.querySelectorAll('.lists');
    //Assert
    expect(array.length).toHaveLength(1);
});