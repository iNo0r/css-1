<template>
  <main>
    <div>
      <div class="testimonial" id="customer-1">
        <div class="testimonial__image-container">
          <img
            src="../images/customer-1.jpg"
            alt="Mike Statham - Customer"
            class="testimonial__image"
          />
        </div>
        <div class="testimonial__info">
          <h1 class="testimonial__name">Mike Statham</h1>
          <h2 class="testimonial__subtitle">
            Founder of
            <a href="tech-analysis.com">tech-analysis.com</a>
          </h2>
          <p class="testimonial__text">
            uHost helped me realize my project with a highly constrained budget
            in like no time.
          </p>
        </div>
      </div>
      <div class="testimonial" id="customer-2">
        <div class="testimonial__info">
          <h1 class="testimonial__name">John Mellow</h1>
          <h2 class="testimonial__subtitle">
            Hosts his private videos on uHost.
          </h2>
          <p class="testimonial__text">
            I worked as a blogger and always looked for an integrated hosting
            and file storage solution. I found it in uHost!
          </p>
        </div>
        <div class="testimonial__image-container">
          <img
            src="../images/customer-2.jpg"
            alt="John Mellow - Customer"
            class="testimonial__image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.testimonial {
  font-size: 1.2rem;
  margin: 3rem 0;
}

.testimonial__list {
  width: 80%;
  margin: auto;
}

.testimonial:first-of-type {
  margin-top: 6rem;
}

.testimonial__image-container {
  width: 65%;
  max-width: 580px;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
}

.testimonial__image {
  width: 100%;
  vertical-align: top;
}

.testimonial__info {
  text-align: right;
  padding: 0.9rem;
  display: inline-block;
  vertical-align: middle;
  width: 30%;
}

#customer-2.testimonial {
  text-align: right;
}

#customer-2 .testimonial__info {
  text-align: left;
}

.testimonial__name {
  margin: 0.2rem;
  color: #ff5454;
  font-size: 2rem;
}

.testimonial__subtitle {
  margin: 0;
  font-size: 1.1rem;
  color: #ccc;
}

.testimonial__subtitle a {
  color: inherit;
  text-decoration: none;
}

.testimonial__subtitle a:hover,
.testimonial__subtitle a:active {
  color: #7a7a7a;
}

.testimonial__text {
  margin: 0.2rem;
}
</style>