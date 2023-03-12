/**
 * @jest-environment jsdom
 */

import {addList, UI} from './script.js';

test ('When we add, we should have one list', () => {
    document.body.innerHTML = `<div><div id="list-container"></div></div>`
    //Arrange
    const text = 'hi';
    const id = '1';
   addList(text, id);
//    UI.displayDatas();
   const lists = document.querySelectorAll('#list-container .lists');
//    console.log('lists', lists)
    //Assert
    expect(lists).toHaveLength(1);
});