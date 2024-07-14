// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const Button = (options = { text: "Button CTA", style: "primary" }) => {
	const { text, style } = options;
	return `
  <button class="btn ${style}">${text}</button>
  `;
};

const Message = () => {
	return `
  <div class="hero-message">
    <div class="hero-message-text">
      <h1 class="hero-message-text-title">Well crafted abstract images</h1>
      <p class="hero-message-text-description">High quality abstract images for your projects, wallpaper and presentations.</p>
    </div>
    <div class="hero-message-cta">
      ${Button({ text: "Learn more", style: "secondary" })}
      ${Button({ text: "See pricing", style: "primary" })}
    </div>
  </div>
  `;
};

const Image = () => {
	return `
    <div class="hero-image">
      <img src="/img/prism.png" alt="hero image"/>
    </div>
  `;
};

const Hero = () => {
	return `
    <section class="hero-section">
      ${Message()}
      ${Image()}
    </section>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root-container");
	root.innerHTML = Hero();
});
