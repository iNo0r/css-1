<template>
  <main>
    <section class="package" id="plus">
      <a href="#">
        <h1 class="package__title">Our PLUS Plan</h1>
        <h2 class="package__badge">RECOMMENDED</h2>
        <h2 class="package__subtitle">
          The most popular choice of our customers.
        </h2>
        <p class="package__info">
          Benefit from increased storage and faster support to ensure that your
          mission-critical data and applications are always available!
        </p>
      </a>
    </section>
    <section class="package" id="free">
      <a href="#">
        <h1 class="package__title">Our FREE Plan</h1>
        <h2 class="package__subtitle">
          An extremely solid start into our hosting world.
        </h2>
        <p class="package__info">Get started immediately at zero cost!</p>
      </a>
    </section>
    <div class="clearfix"></div>
    <section class="package" id="premium">
      <a href="#">
        <h1 class="package__title">Our PREMIUM Plan</h1>
        <h2 class="package__subtitle">
          All your enterprise needs. Instant support, guaranteed uptime.
        </h2>
        <p class="package__info">
          The best solution for small to large enterprises. Because hosting
          shouldn't be in the way!
        </p>
      </a>
    </section>
  </main>
</template>

<script>
export default {};
</script> 

<style scoped>
main {
  padding-top: 2rem;
}

.background {
  background: url("../images/plans-background.jpg") center/cover;
  filter: grayscale(40%);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
}

.package {
  width: 80%;
  margin: 1rem 0;
  border: 4px solid #0e4f1f;
  border-left: none;
  position: relative;
}

.package:hover,
.package:active {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-color: #ff5454;
  /* border-color: #ff5454 !important; */
}

.package a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 2rem;
}

.package__badge {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.2rem;
  font-size: 0.8rem;
  color: white;
  background: #ff5454;
  padding: 0.5rem;
}

.package__subtitle {
  color: #979797;
}

.package__info {
  padding: 1rem;
  border: 1px solid #0e4f1f;
  font-size: 1.2rem;
  color: #0e4f1f;
  background: white;
}

.clearfix {
  clear: both;
}

#plus {
  background: rgba(213, 255, 220, 0.95);
}

#free {
  background: rgba(234, 252, 237, 0.95);
  float: right;
  border-right: none;
  border-left: 4px solid #0e4f1f;
  text-align: right;
}

#free:hover,
#free:active {
  border-left-color: #ff5454;
}

#premium {
  background: rgba(14, 79, 31, 0.95);
}

#premium .package__title {
  color: white;
}

#premium .package__subtitle {
  color: #bbb;
}
</style>