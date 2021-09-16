<template>
  <section>
    <a href="#">
      <h1>Our PLUS Plan</h1>
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


*/
</style>