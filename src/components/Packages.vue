<template>
  <section>
    <a href="#">
      <h1 id="sticky-exprement">Our PLUS Plan</h1>
      <h2>The most popular choice of our customers.</h2>
      <p>
        Benefit from increased storage and faster support to ensure that your
        mission-critical data and applications are always available!
      </p>
    </a>
  </section>
  <section>
    <a href="#">
      <h1>Our FREE Plan</h1>
      <h2>An extremely solid start into our hosting world.</h2>
      <p>Get started immediately at zero cost!</p>
    </a>
  </section>
  <!-- used for fixing float behavior -->
  <div class="clearfix"></div>
  <section>
    <a href="#">
      <h1>Our PREMIUM Plan</h1>
      <h2>All your enterprise needs. Instant support, guaranteed uptime.</h2>
      <p>
        The best solution for small to large enterprises. Because hosting
        shouldn't be in the way!
      </p>
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#sticky-exprement {
  position: sticky;
  top: 0px;
}
/* i want to make the whole block clickable as a  */
section {
  box-sizing: border-box;
  background: #d2fed9;
  display: block;
  width: 80%;
  text-align: left;
  /* padding: 25px; */
  margin: 20px auto;
  border: green solid 5px;
}
section:nth-child(3) {
  float: left;
  background: white;
}
.clearfix {
  /* fixing float behavior  */
  clear: both;
}
section:nth-child(4) {
  background: #1a4928;
}

section:nth-child(4) > a {
  color: white;
}

section > a {
  text-decoration: none;
  color: black;
  /* to add padding into an inline element it should be displayed as block  */
  display: block;
  padding: 25px;
}
section > a > h2 {
  color: gray;
}
section > a > p {
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #1a4928;
  background: white;
}
section:nth-child(4) > a > p {
  color: black;
}

/* questions + notes */
/* 
  1- what is the good practice to differentiate with special props and genral props of an elemnt?
  use class for general
  use id for special
  section {
    backgound:blue;
    width:200px
  }
  #special_section {
    background : red;
  }
  2- what does float do ?
  takes out an elemnt out of elements to a secified direction, which cause the other elements to surround th floating element 
  *it is greate for positioning image in text
  3- how to fix float bhavior ?
  place this after the float ing element 
  <div class="clearfix"></div>
  //css
  .clearfix {
    clear: both;
  }
  4- whay using !important is a bad practice  ?
  because it brakes the concept of specificity
  only use it with third part libraries  

  5- what is document flow  ?
  is the order of displaying elements

  6- what is the view port ?
  is the visbile part of web page 

  7- what are the 5 types of positioning ?
  -static  
  -relative
  -abosulte
  -fixed
  -sticky 

  8- does fixed element stays in the document flow ?
  -it will still in the view port, but no longes included in the doument flow 
  -will behave like inline-block
  -default value of its horizantal postion is left, vertical none, which means if top or bottom not defined, it will not be visible

  9- what is the defulat z-index of an element ?
  0 

  10- how can we set a background behind the diplayed elements ?
  make position fixed and z-index = -1 

  11-does margin of an element count in positiong absolute ?
  yes

  12 which container does the relatively positioned element belongs to ?
  itself

  13 which positions take out the element out of the document flow ?
  absolute and fixed  


  ________________________________________________
  14- What does overflow :hidden ? give example
  it will hide anying belongs to it and not in the container
  example if a relatively positioned elemnt is partially or compeltely out of its document flow, the over flowing part will be hidden


  15- Would the trick above work on html & body ?
  Yes but you have declare overflow : hidden in both

  16- Explain the behavior of position sticky.
    Sticky will stick to its view port position as long as its *content* container appears.
    Top should be declared

  17- explain the concept of stacking context 
    Created when applying fixed/sticky or absolute/relative in conjunction with z-index. 
    It means while using z-index with positioning, a ChildA of ParentA can not appear over ParentB or its childeren, but siblilngs can appear over each other  

  18- what is the positioning context for each of fixed, relative, absolute and sticky ?
  fixed : viewport
  relative: itself
  absolute: first relativel ancetor 
  sticky : viewport + relative ancestor 
//commit 


*/
</style>