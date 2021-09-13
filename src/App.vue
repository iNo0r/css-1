<template>
  <div>
    <section id="section1">
      <h1>get th freedom you desrve.</h1>
    </section>
    <section id="section2">
      <h1 class="section2-title">
        choose you plan
      </h1>
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
  color: inherit;
}
#section2 {
  color: orange;
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
</style>
