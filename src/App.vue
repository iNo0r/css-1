<template>
  <div>
    <section id="section1">
      <h1>get th freedom you desrve.</h1>
    </section>
    <section id="section2">
      <h1 class="section2-title">choose you plan</h1>
      <p>make sure</p>
      <button disabled>press</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
body {
  color: black;
}
#section1 {
  color: red;
}
.section2-title {
  /* it will inherit the color from parent, and will ignore the decleration of h1,
   because specifity order of class is stronger than an html tag */
  /* color: inherit; */
}
#section2 {
  color: orange;
}

/* this called combinator */
/* will targer any h1 element nested inside #section2 */
/* it has heigher specifity, even than an id  because it has more information to reach the elemnet */
#section2 h1 {
  color: blue;
}

.section2-title {
  color: red;
}

h1 {
  color: green;
}

/* specificity order in css :
strongest to weakest to low
-inline 
-id
-class
-tag
-then the order of the selector 

 types of selector :
-element selector :  div
-class selector : .someClass
-id
-universal : *
-attribute selector : <button disabled >  </button>
[disabled] {  }
*/

/* type of combinators */
/* 
  1- Adjacent Sibling 
  div + p {}  // will effect p who is next to div  
      <section>
        <div></div>
        <p></p> // this one will get effected
        <h1></h1>
        <p></p> // not this
      </section >

  2- General Sibling 
  div ~ p {}  // will effect p who is just sibling to div  
      <section>
        <div></div>
        <p></p> // this one will get effected
        <h1></h1>
        <p></p> // and this
      </section >

  3 Child 
  div > p {} // will effect only direct child of div 
      <section>
          <div>
              <p></p> // this one will get effected
          </div>
          <p></p> // not this
          <section>
              <p></p> // and not this
          </section>
      </section >

  4- Decendant 
  div p  {}
      <section>
          <div>
              <p></p> // this one will get effected
          </div>
          <p></p> //  and this
          <section>
              <p></p> // and also
          </section>
      </section >

*/

/* questions */
/*   
  1-what is the combinator  
  2-

*/
</style>
