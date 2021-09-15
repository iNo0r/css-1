<template>
  <section class="main-container">
    <div class="title">Choose Your Plan</div>
    <article>
      <h1>FREE</h1>
      <h2>$0/month</h2>
      <h3>For hobby projects or small teams.</h3>
      <ul>
        <li>1 Workspace</li>
        <li>Unlimited Traffic</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
      </ul>
      <div>
        <button>CHOOSE PLAN</button>
      </div>
    </article>
    <article class="main-aricle">
      <h1>RECOMMENDED</h1>
      <h1>PLUS</h1>
      <h2>$29/month</h2>
      <h3>For ambitious projects.</h3>
      <ul>
        <li>5 Workspaces</li>
        <li>Unlimited Traffic</li>
        <li>100GB Storage</li>
        <li>Plus Support</li>
      </ul>
      <div>
        <button>CHOOSE PLAN</button>
      </div>
    </article>
    <article>
      <h1>PREMIUM</h1>
      <h2>$99/month</h2>
      <h3>Your enterprise solution.</h3>
      <ul>
        <li>10 Workspaces</li>
        <li>Unlimited Traffic</li>
        <li>Unlimited Storage</li>
        <li>Priority Support</li>
      </ul>
      <div>
        <button>CHOOSE PLAN</button>
      </div>
    </article>
  </section>

  <section class="section2-container">
    <h1>Many Good Reasons to Stick Around</h1>
    <ul>
      <li>
        <div></div>
        <p>3,857,000 Trusting Customers</p>
      </li>
      <li>
        <div></div>
        <p>99.999% Uptime Guarantee</p>
      </li>
      <li>
        <div></div>
        <p>Lightning Fast CDN</p>
      </li>
    </ul>
  </section>
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
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
/* section 2  */
.section2-container {
  margin-top: 20px;
  color: white;
  background: rgb(196, 57, 103);
  text-align: center;
  padding: 30px;
}
.section2-container > ul {
  margin-top: 40px;
}
.section2-container > ul > li {
  margin: 0 30px;
  display: inline-block;
  /*  to selte the default dots of a ul */
  list-style-type: none;
}
.section2-container > ul > li > div {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid black;
  margin: auto;
  margin-bottom: 20px;
  background: rgb(202, 119, 191);
}

/* section 1 */
.main-container {
  width: 100%;
  text-align: center;
}
.main-container .title {
  color: green;
  font-size: 30px;
  padding: 20px;
}
.main-container article {
  background: rgb(169, 204, 149);
  /* this should be added  */
  display: inline-block;
  width: calc(95% / 3);
  margin-left: 10px;
  /* at vertical aligning whe gave this attribute to the child not the parent */
  vertical-align: middle;
  padding: 10px;
}

.main-container > article > h1:first-child {
  color: green;
  font-family: Courier, monospace;
  margin: 20px auto;
}
.main-container > article > h2 {
  color: gray;
  margin: 20px auto;
}
.main-container > article > h3 {
  margin: 20px auto;
}
/* som how this goes to the senod child  */
.main-container > article:nth-child(3) {
  background: rgb(75, 172, 19);
}
.main-container > article:nth-child(3) > h1:first-child {
  background: white;
  width: 80%;

  color: rgb(75, 172, 19);
}

.main-container ul {
  list-style-type: none;
}
.main-container ul li {
  padding: 3px;
}
.main-container button {
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>

