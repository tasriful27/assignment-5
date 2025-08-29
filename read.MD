<!-- ============================================================ -->
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<!-- ============================================================ -->
 ANS=>*1-(getElementById provides us only one selector which we called by an Id) *2-(getElementsByClassName provides us multiple selector which we called by Class.It works like an array) *3-(querySelector provides us one element which can be called by id/class/attribute.It always works for the very first element ) *4-(querySelectorAll provides us all element which is called by any selector.It also works like an array)


<!-- ============================================================ -->
How do you create and insert a new element into the DOM? 
<!-- ============================================================ -->
ANS=>to create a new element:- .createElement('element')to insert :- .innerText(you can set new text) .innerHTMl(you can set new HTML in the element) .appendChild(can throw this element into another div or something) .before()(can set this element before an another element) .after()(can set this element after an another element)



<!-- ============================================================ -->
What is Event Bubbling and how does it work?
<!-- ============================================================ -->
 ANS=>If we add an eventListener into a child of a div it just not only work of these child which was we called but also it works for parent div.And it also works for grandParent div .This happened when we do event bubble into javascript.we can stop event bubbling by (event.stopPropagation())


<!-- ============================================================ -->
What is Event Delegation in JavaScript? Why is it useful?
<!-- ============================================================ -->
 ANS=>Event Delegation is opposite of event bubbling.If we add an eventListener into a div it can be work for this div's children by using delegation.so we don't need to add event in every child.


<!-- ============================================================ -->
What is the difference between preventDefault() and stopPropagation() methods? 
<!-- ============================================================= -->
ANS=>preventDefault() stop the browser to default works and stopPropagation() stop bubbling to the parent div

