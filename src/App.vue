<template>
  <div>
    <section>
      <div id="h1-container">
        <h1>hello there</h1>
      </div>
      <div class="s2-container">
        <h1>hello there</h1>
        <p>this is inline item</p>
        <p>this is inline item</p>
        <p>this is inline item</p>
        <p>this is inline item</p>
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
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
p {
  display: flex;
  /* display: inline; */
  /* padding: 100px; */
  color: white;
  background: blue;
  border: 5px solid red;
  /* margin: 50px; */
  /* margin-top: 20px; */
  /* justify-content: center; */
  text-align: center;
  /* font-size: 50px; */
}
.s2-container {
  width: 100%;
  /* text-align: center; */
}

h1 + p {
  /* visibility: hidden; */
}
div > h1 {
  /* display: inline-block; */
}

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
 
  8- how to hide and element in from view port ?
  display : none ;

  9- what is the difference between block,inline, none  ?
  -inline will take as much as it needs, but it do not accept padding, height/width, top/bottom margin
  blcok is just a block, everything is cotrollable 
  -none will display nothing
  block is a block

  10 how to mix between inline and block ?
  display: inline-block ;

  11- how to hide an element but keep its place ?
  -If you only want to hide an element but you want to keep its place 
  (i.e. other elements don't fill the empty spot), you can use 
  visibility: hidden;

  12- how to align text which displayed inline, block or inline-block ? and can you align a list of items next to each other ?
  text-align: center/right/...
  vertical-align:middle;
  yes
  

  13 how to align text which display flex ?
  justifiy-content: center
  align-items: center;

  14- how to set a width = something - something ?
  width: cacl(100% - 50px)







}
  
}

*/
</style>

