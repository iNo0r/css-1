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
  display: inline-block;
  width: calc(95% / 3);
  margin-left: 10px;
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

