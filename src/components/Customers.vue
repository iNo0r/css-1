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
  font-size: 20px;
  margin: 48px 0;
}

.testimonial__list {
  width: 80%;
  margin: auto;
}

.testimonial:first-of-type {
  margin-top: 96px;
}

.testimonial__image-container {
  width: 65%;
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
  padding: 14px;
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
  margin: 3px;
  color: #ff5454;
}

.testimonial__subtitle {
  margin: 0;
  font-size: 18px;
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
  margin: 3px;
}

/* 
    how to set an img next to text ?
    -convert the the image parent container into an inline-block 
    - sit size to it 
    -   make sure the text container inline-block too 
    - use text-align to center and vertical-align to set them in the middle 

    How to blur an html element ?
    filter: blue(10px)

    What else filters can control ?
    blur, brightness, contast, drop Shadow, grayscale, hue rotate, invert , opacity, saturate,sepia

----------------------------
19/09/21
// Unites
First imoprtant rule: What is the containeing block for (a fixed element) ?
viewport

Second imoprtant rule: What is the containing block for (an absolute element) ?
*ancestor's content + padding
ancestor is the first element which does not have static position, should be (absolute/relative/fixed/sticky) 

Third imoprtant rule: What is the containing block for (an static/relative element) ?
*ancestor's content only
ancestor is the first block level element

How to set constraints for width of something ?
div {
    width: 90%,
    max-width: 500px // i think it is obvious 
    min-width: 200 // this one too
}

How does rem work ?
it's a dynamic unit, it takes the default root size of the browser and mutpli it 
example = root-size (10px) * 1.1rem = 11px 

How does the em works ?
similar to rem but it inherit its base value from parent element 

Can rem be used for another attributes than fonts ?
yes but it will always refer to the base font size for its calculations 

Is there a tricky way to use rem ?
html{
  font-size:16px ; // it means 16px is equal to 1rem
}

Please on more trick for allah sake 
html {
  font-size:16px;
  @media only screen and (max-width:991px) {
    font-size:14px;
  }
}

Can rem be used for margin and padding ?
yes, because when you have bigger font you will need bigger or smaller margin

How to configure a backdrop ?
{
    position :fixed;
    top:0;
    left:0;
    z-index:0;
    width;100%; or vw
    height;100%; or vh
    background:something;
}

is using vw includes scrollbars on windows? and how to solve it ?
- Use width: 100%  instead of vw: 100
- Add overflow-x: hidden;  to the body selector in the shared.css file to hide the horizontal scrollbar (or overflow-y: hidden  to hide the vertical scrollbar)
Alternatively you could also use the ::-webkit-scrollbar pseudo element. Simply add the following code to the shared.css file:
body: :-webkit-scrollbar {
    width: 0
}




*/
</style>