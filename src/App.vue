<template>
  <div>
    <section>
      <div id="h1-container">
        <h1>hello there</h1>
      </div>
      <div>
        <h1>hello there</h1>
      </div>
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
/* notes */
/* 
in css box model 
- margin is not part of the core element 





 */

/* questions */
/* 
  1- where does the core element size ends, in terms of box model ?
  -border
  2-how to cancle the default  marign + padding style of all elements ?
  * {
  margin: 0%;
  padding: 0%;
  }
  3- what is margin collapsing ?
  -when 2 margins meet the bigger one overlap the other, unless using margin-top/bottom
  4- what does block-level-element mean ?
    for instance when you set height of something 100% it will inherit the base size from the first parent
  5- what is the most important thing to be done before starting a project ?
  make sure to fucking * {
  box-sizing : border-box;
  padding: 0%;
  margin: 0%;
  6- what is the deafult value of box-sizing  ? what does it do ?
  - box-sizing : content-box; means the assigned value to height and width effects content only,
     border and padding are not included 
  7- what does box-sizing: border-box ; does  ?
  it makes the whole width of the item  (padding + border + content) 
  h1 {
  width: 500px;
  background: blue;
  padding: 20px;
  margin: 0%;
  border: 4px solid black;

  box-sizing: content-box; total width of the item here is content + padding + border = 548 
  content-box will effect content's width+height only 
  border and padding do not count

  box-sizing: border-box;  total width of the item here is content + padding +border = 500 
}
  
}

*/
</style>

