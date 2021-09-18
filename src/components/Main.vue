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
  background-image: url("freedom.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 10% bottom 20%;
  background-origin: border-box;
  background-clip: border-box;
  width: 100%;
  height: 528px;
  padding: 10px;
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

/* notes & questions */

/* 
1- What is the behavior of { background-image: url("freedom.jpg");background-color: black;} ?
  -the image will still be visible because you can define multiple backgrounds

2- What is the behavior of { background: url("freedom.jpg");background: black;} ?
What ever comes after will cancle what before it 

3- What is the behavior of {  background: url("freedom.jpg");background-size: 100px;}
image will be reated vertically and horizontally.

4- What are the background-size parameters ?
background-size: width height
background-size: cover // will fill the container reasonbly // with no empty spaces
background-size: contain // will make sure to show all of the photo 

5- How to controll "repeat" on a background?
property = background-repeat
values = no-repeat, repeat-x, repeat-y

6- How to prevent another background appearing in the back of the background when moving it ?
background-repeat: no-repeat

7- why it is important to set size to cover and position to center ?
cover will make sure the most possible of the picture is shown
center will start will expand it 

8- what is the differnce between using px and % in determining background-size: right top ; ?
px will push it 

% will crupt 

9- what is the behavior of {background-position: 0% 100%;}
showing full bottom will have heigher priority of top

---------------------------------------------

14- What is {background-postion: center;} equal to ?
background-position: 50% 50%

15- What is {background-position: left top ;} equal to?
background-position : 0% 0% ;
It means positon context will start from left & top 

16- What does {background-position: left 10% bottom 5% ;}  mean ?
it will crop 10% from left, and 5% from bottom 

17-  Define background-origin 
  set background positioning area , (connect to background-position)
  *it is the box sizing of background

18- Define background-clip 
  defines whethear backgrround extends underneath border

19- Define background-attachment ?
  setes the scrolling behaviour of the background image 

20- What is the behaviour of {background-origin : content-box ;} ?
if html tag has padding it will show it on sides 

21- What is the behaviour of {background-origin : border-box ;} ?
if there is border, beackground it will go beneath it 

22- What is the behaviour of {background-clip : content-box ;} ?
it will not go beneath border or padding

23- What is the behaviour of {background-clip : padding-box ;} ?
it will not go beneath padding but not border

24 How to control the scroll behaviour or a background  ?
utilizing background-attachment: local/fixed/scroll
scroll : image will stay in palce and conten will scroll above it 
fixed : image will fixed to viewport  

25 How to use this shorthand "background" ?
background: url position/size repeat  (clip&origin) attachment
example : background: url("freedom.jpg"); left 10% top 5%/cover no-repeat border-box scroll
example2 : background: url("freedom.jpg"); left 10% top 5%/cover no-repeat border-box content box scroll






*/
</style>