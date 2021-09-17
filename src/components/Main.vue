<template>
  <main>
    <section id="product-overview">
      <h1>Get the freedom you deserve.</h1>
    </section>
    <section id="plans">
      <h1 class="section-title">Choose Your Plan</h1>
      <div>
        <article class="plan">
          <h1 class="plan__title">FREE</h1>
          <h2 class="plan__price">$0/month</h2>
          <h3>For hobby projects or small teams.</h3>
          <ul class="plan__features">
            <li class="plan__feature">1 Workspace</li>
            <li class="plan__feature">Unlimited Traffic</li>
            <li class="plan__feature">10GB Storage</li>
            <li class="plan__feature">Basic Support</li>
          </ul>
          <div>
            <button class="button">CHOOSE PLAN</button>
          </div>
        </article>
        <article class="plan plan--highlighted">
          <h1 class="plan__annotation">RECOMMENDED</h1>
          <h1 class="plan__title">PLUS</h1>
          <h2 class="plan__price">$29/month</h2>
          <h3>For ambitious projects.</h3>
          <ul class="plan__features">
            <li class="plan__feature">5 Workspaces</li>
            <li class="plan__feature">Unlimited Traffic</li>
            <li class="plan__feature">100GB Storage</li>
            <li class="plan__feature">Plus Support</li>
          </ul>
          <div>
            <button class="button">CHOOSE PLAN</button>
          </div>
        </article>
        <article class="plan">
          <h1 class="plan__title">PREMIUM</h1>
          <h2 class="plan__price">$99/month</h2>
          <h3>Your enterprise solution.</h3>
          <ul class="plan__features">
            <li class="plan__feature">10 Workspaces</li>
            <li class="plan__feature">Unlimited Traffic</li>
            <li class="plan__feature">Unlimited Storage</li>
            <li class="plan__feature">Priority Support</li>
          </ul>
          <div>
            <button class="button">CHOOSE PLAN</button>
          </div>
        </article>
      </div>
    </section>
    <section id="key-features">
      <h1 class="section-title">Many Good Reasons to Stick Around</h1>
      <ul class="key-feature__list">
        <li class="key-feature">
          <div class="key-feature__image"></div>
          <p class="key-feature__description">3,857,000 Trusting Customers</p>
        </li>
        <li class="key-feature">
          <div class="key-feature__image"></div>
          <p class="key-feature__description">99.999% Uptime Guarantee</p>
        </li>
        <li class="key-feature">
          <div class="key-feature__image"></div>
          <p class="key-feature__description">Lightning Fast CDN</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
#product-overview {
  background: url("freedom.jpg");
  width: 100%;
  height: 528px;
  padding: 10px;
  margin-top: 43px;
  position: relative;
}

.section-title {
  color: #2ddf5c;
  text-align: center;
}

#product-overview h1 {
  color: white;
  font-family: "Anton", sans-serif;
  position: absolute;
  bottom: 5%;
  left: 3%;
}

.plan__list {
  width: 80%;
  margin: auto;
  text-align: center;
}

.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 16px;
  margin: 8px;
  display: inline-block;
  width: 30%;
  vertical-align: middle;
}

.plan--highlighted {
  background: #19b84c;
  color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.plan__annotation {
  background: white;
  color: #19b84c;
  padding: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.plan__title {
  color: #0e4f1f;
}

.plan__price {
  color: #858585;
}

.plan--highlighted .plan__title {
  color: white;
}

.plan--highlighted .plan__price {
  color: #0e4f1f;
}

.plan__features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.plan__feature {
  margin: 8px 0;
}

#key-features {
  background: #ff1b68;
  margin-top: 80px;
  padding: 16px;
}

#key-features .section-title {
  color: white;
  margin: 32px;
}

.key-feature__list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.key-feature {
  display: inline-block;
  width: 30%;
  vertical-align: top;
}

.key-feature__image {
  background: #ffcede;
  width: 128px;
  height: 128px;
  border: 2px solid #424242;
  border-radius: 50%;
  margin: auto;
}

.key-feature__description {
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 20px;
}

/* h1 {
    font-family: sans-serif;
} */
</style>