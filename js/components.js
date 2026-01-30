// ===========================
// Component Data
// ===========================
// To add a new component, just add an object to this array.
// Each component needs: category, tag, name, preview (HTML string), code (raw source string)

const components = [

  // ===================== BUTTONS =====================

  {
    category: "buttons",
    tag: "Buttons",
    name: "Primary Button",
    preview: `<button style="background:#58a6ff;color:#fff;border:none;padding:12px 28px;border-radius:8px;font-size:16px;cursor:pointer;font-weight:600;transition:background .2s">Click Me</button>`,
    code: `<button class="btn-primary">Click Me</button>

<style>
.btn-primary {
  background: #58a6ff;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #79b8ff;
}
</style>`
  },

  {
    category: "buttons",
    tag: "Buttons",
    name: "Outline Button",
    preview: `<button style="background:transparent;color:#58a6ff;border:2px solid #58a6ff;padding:12px 28px;border-radius:8px;font-size:16px;cursor:pointer;font-weight:600;transition:all .2s">Outline</button>`,
    code: `<button class="btn-outline">Outline</button>

<style>
.btn-outline {
  background: transparent;
  color: #58a6ff;
  border: 2px solid #58a6ff;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-outline:hover {
  background: #58a6ff;
  color: #fff;
}
</style>`
  },

  {
    category: "buttons",
    tag: "Buttons",
    name: "Gradient Button",
    preview: `<button style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:12px 28px;border-radius:8px;font-size:16px;cursor:pointer;font-weight:600;transition:opacity .2s">Gradient</button>`,
    code: `<button class="btn-gradient">Gradient</button>

<style>
.btn-gradient {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
}
.btn-gradient:hover {
  opacity: 0.85;
}
</style>`
  },

  {
    category: "buttons",
    tag: "Buttons",
    name: "Icon Button",
    preview: `<button style="display:inline-flex;align-items:center;gap:8px;background:#238636;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:16px;cursor:pointer;font-weight:600">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"/></svg>
  Add Item
</button>`,
    code: `<button class="btn-icon">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"/>
  </svg>
  Add Item
</button>

<style>
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #238636;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-icon:hover {
  background: #2ea043;
}
</style>`
  },

  // ===================== CARDS =====================

  {
    category: "cards",
    tag: "Cards",
    name: "Basic Card",
    preview: `<div style="background:#21262d;border:1px solid #30363d;border-radius:12px;padding:24px;max-width:280px">
  <h3 style="color:#e6edf3;margin:0 0 8px">Card Title</h3>
  <p style="color:#8b949e;margin:0 0 16px;font-size:14px">This is a simple card component with a title and description text.</p>
  <a href="#" style="color:#58a6ff;text-decoration:none;font-size:14px;font-weight:600" onclick="return false">Learn more &rarr;</a>
</div>`,
    code: `<div class="basic-card">
  <h3>Card Title</h3>
  <p>This is a simple card component with a title and description text.</p>
  <a href="#">Learn more &rarr;</a>
</div>

<style>
.basic-card {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
  max-width: 320px;
}
.basic-card h3 {
  color: #e6edf3;
  margin: 0 0 8px;
}
.basic-card p {
  color: #8b949e;
  margin: 0 0 16px;
  font-size: 14px;
}
.basic-card a {
  color: #58a6ff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}
.basic-card a:hover {
  text-decoration: underline;
}
</style>`
  },

  {
    category: "cards",
    tag: "Cards",
    name: "Image Card",
    preview: `<div style="background:#21262d;border:1px solid #30363d;border-radius:12px;overflow:hidden;max-width:280px">
  <div style="height:120px;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
  <div style="padding:20px">
    <h3 style="color:#e6edf3;margin:0 0 8px">Image Card</h3>
    <p style="color:#8b949e;margin:0;font-size:14px">A card with an image header area and content below.</p>
  </div>
</div>`,
    code: `<div class="image-card">
  <img src="your-image.jpg" alt="Card image" class="image-card-img">
  <div class="image-card-body">
    <h3>Image Card</h3>
    <p>A card with an image header area and content below.</p>
  </div>
</div>

<style>
.image-card {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  overflow: hidden;
  max-width: 320px;
}
.image-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.image-card-body {
  padding: 20px;
}
.image-card-body h3 {
  color: #e6edf3;
  margin: 0 0 8px;
}
.image-card-body p {
  color: #8b949e;
  margin: 0;
  font-size: 14px;
}
</style>`
  },

  {
    category: "cards",
    tag: "Cards",
    name: "Pricing Card",
    preview: `<div style="background:#21262d;border:2px solid #58a6ff;border-radius:12px;padding:28px;max-width:240px;text-align:center">
  <p style="color:#58a6ff;font-weight:700;margin:0 0 4px;text-transform:uppercase;font-size:13px;letter-spacing:1px">Pro Plan</p>
  <p style="color:#e6edf3;font-size:40px;font-weight:800;margin:0"><span style="font-size:20px;vertical-align:top">$</span>19<span style="font-size:16px;color:#8b949e;font-weight:400">/mo</span></p>
  <ul style="list-style:none;padding:0;margin:20px 0;text-align:left">
    <li style="color:#8b949e;padding:6px 0;font-size:14px">&#10003; Unlimited projects</li>
    <li style="color:#8b949e;padding:6px 0;font-size:14px">&#10003; Priority support</li>
    <li style="color:#8b949e;padding:6px 0;font-size:14px">&#10003; Custom domain</li>
  </ul>
  <button style="background:#58a6ff;color:#fff;border:none;padding:10px 0;border-radius:8px;width:100%;font-size:15px;cursor:pointer;font-weight:600">Get Started</button>
</div>`,
    code: `<div class="pricing-card">
  <p class="plan-name">Pro Plan</p>
  <p class="price"><span>$</span>19<small>/mo</small></p>
  <ul>
    <li>&#10003; Unlimited projects</li>
    <li>&#10003; Priority support</li>
    <li>&#10003; Custom domain</li>
  </ul>
  <button>Get Started</button>
</div>

<style>
.pricing-card {
  background: #21262d;
  border: 2px solid #58a6ff;
  border-radius: 12px;
  padding: 28px;
  max-width: 280px;
  text-align: center;
}
.plan-name {
  color: #58a6ff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  margin: 0 0 4px;
}
.price {
  color: #e6edf3;
  font-size: 40px;
  font-weight: 800;
  margin: 0;
}
.price span { font-size: 20px; vertical-align: top; }
.price small { font-size: 16px; color: #8b949e; font-weight: 400; }
.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
}
.pricing-card li {
  color: #8b949e;
  padding: 6px 0;
  font-size: 14px;
}
.pricing-card button {
  background: #58a6ff;
  color: #fff;
  border: none;
  padding: 10px 0;
  border-radius: 8px;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
}
.pricing-card button:hover {
  background: #79b8ff;
}
</style>`
  },

  // ===================== HERO SECTIONS =====================

  {
    category: "heroes",
    tag: "Heroes",
    name: "Centered Hero",
    preview: `<div style="background:linear-gradient(135deg,#0d1117,#161b22);border:1px solid #30363d;border-radius:12px;padding:40px 20px;text-align:center">
  <h2 style="color:#e6edf3;font-size:24px;margin:0 0 10px">Build Something Amazing</h2>
  <p style="color:#8b949e;margin:0 0 20px;font-size:14px">The fastest way to create modern websites with clean code.</p>
  <button style="background:#58a6ff;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-size:14px;cursor:pointer;font-weight:600">Get Started</button>
</div>`,
    code: `<section class="hero-centered">
  <h1>Build Something Amazing</h1>
  <p>The fastest way to create modern websites with clean code.</p>
  <a href="#" class="hero-btn">Get Started</a>
</section>

<style>
.hero-centered {
  background: linear-gradient(135deg, #0d1117, #161b22);
  text-align: center;
  padding: 100px 20px;
}
.hero-centered h1 {
  color: #e6edf3;
  font-size: 48px;
  margin: 0 0 16px;
}
.hero-centered p {
  color: #8b949e;
  font-size: 20px;
  margin: 0 0 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-btn {
  display: inline-block;
  background: #58a6ff;
  color: #fff;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s;
}
.hero-btn:hover {
  background: #79b8ff;
}
</style>`
  },

  {
    category: "heroes",
    tag: "Heroes",
    name: "Split Hero",
    preview: `<div style="display:flex;align-items:center;gap:20px;background:#161b22;border:1px solid #30363d;border-radius:12px;padding:24px">
  <div style="flex:1">
    <h2 style="color:#e6edf3;font-size:20px;margin:0 0 8px">Welcome to Our Platform</h2>
    <p style="color:#8b949e;font-size:13px;margin:0 0 14px">Create beautiful websites without the hassle.</p>
    <button style="background:#238636;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:13px;cursor:pointer;font-weight:600">Sign Up Free</button>
  </div>
  <div style="flex:1;height:100px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px"></div>
</div>`,
    code: `<section class="hero-split">
  <div class="hero-text">
    <h1>Welcome to Our Platform</h1>
    <p>Create beautiful websites without the hassle.</p>
    <a href="#" class="hero-btn">Sign Up Free</a>
  </div>
  <div class="hero-image">
    <img src="your-image.jpg" alt="Hero image">
  </div>
</section>

<style>
.hero-split {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 80px 40px;
  background: #161b22;
}
.hero-text {
  flex: 1;
}
.hero-text h1 {
  color: #e6edf3;
  font-size: 42px;
  margin: 0 0 16px;
}
.hero-text p {
  color: #8b949e;
  font-size: 18px;
  margin: 0 0 24px;
}
.hero-btn {
  display: inline-block;
  background: #238636;
  color: #fff;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
}
.hero-image {
  flex: 1;
}
.hero-image img {
  width: 100%;
  border-radius: 12px;
}
</style>`
  },

  // ===================== NAVBARS =====================

  {
    category: "navbars",
    tag: "Navbars",
    name: "Simple Navbar",
    preview: `<div style="display:flex;align-items:center;justify-content:space-between;background:#161b22;border:1px solid #30363d;border-radius:10px;padding:12px 20px">
  <span style="color:#e6edf3;font-weight:700;font-size:18px">Brand</span>
  <div style="display:flex;gap:20px">
    <a href="#" style="color:#8b949e;text-decoration:none;font-size:14px" onclick="return false">Home</a>
    <a href="#" style="color:#8b949e;text-decoration:none;font-size:14px" onclick="return false">About</a>
    <a href="#" style="color:#8b949e;text-decoration:none;font-size:14px" onclick="return false">Contact</a>
  </div>
</div>`,
    code: `<nav class="navbar">
  <a href="#" class="nav-brand">Brand</a>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #161b22;
  padding: 16px 32px;
}
.nav-brand {
  color: #e6edf3;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: #8b949e;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #e6edf3;
}
</style>`
  },

  {
    category: "navbars",
    tag: "Navbars",
    name: "Hamburger Mobile Nav",
    preview: `<div style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:12px 20px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <span style="color:#e6edf3;font-weight:700;font-size:18px">Brand</span>
    <div style="display:flex;flex-direction:column;gap:4px;cursor:pointer">
      <span style="width:22px;height:2px;background:#e6edf3;border-radius:2px"></span>
      <span style="width:22px;height:2px;background:#e6edf3;border-radius:2px"></span>
      <span style="width:22px;height:2px;background:#e6edf3;border-radius:2px"></span>
    </div>
  </div>
</div>`,
    code: `<nav class="mobile-nav">
  <div class="mobile-nav-top">
    <a href="#" class="nav-brand">Brand</a>
    <button class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </div>
  <ul class="mobile-links" id="mobileLinks">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<style>
.mobile-nav {
  background: #161b22;
  padding: 16px 24px;
}
.mobile-nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  color: #e6edf3;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
}
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.hamburger span {
  width: 24px;
  height: 2px;
  background: #e6edf3;
  border-radius: 2px;
  transition: 0.3s;
}
.mobile-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
}
.mobile-links.open {
  display: flex;
}
.mobile-links a {
  color: #8b949e;
  text-decoration: none;
  font-size: 16px;
}
</style>

<script>
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileLinks').classList.toggle('open');
});
</script>`
  },

  // ===================== FORMS =====================

  {
    category: "forms",
    tag: "Forms",
    name: "Login Form",
    preview: `<div style="background:#21262d;border:1px solid #30363d;border-radius:12px;padding:28px;max-width:260px">
  <h3 style="color:#e6edf3;margin:0 0 20px;text-align:center">Sign In</h3>
  <div style="margin-bottom:14px">
    <label style="color:#8b949e;font-size:13px;display:block;margin-bottom:4px">Email</label>
    <input type="text" placeholder="you@example.com" style="width:100%;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:14px;box-sizing:border-box" readonly>
  </div>
  <div style="margin-bottom:18px">
    <label style="color:#8b949e;font-size:13px;display:block;margin-bottom:4px">Password</label>
    <input type="password" placeholder="********" style="width:100%;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:14px;box-sizing:border-box" readonly>
  </div>
  <button style="width:100%;background:#58a6ff;color:#fff;border:none;padding:10px;border-radius:6px;font-size:14px;cursor:pointer;font-weight:600">Log In</button>
</div>`,
    code: `<form class="login-form">
  <h2>Sign In</h2>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="you@example.com">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="********">
  </div>
  <button type="submit">Log In</button>
</form>

<style>
.login-form {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 32px;
  max-width: 360px;
}
.login-form h2 {
  color: #e6edf3;
  text-align: center;
  margin: 0 0 24px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  color: #8b949e;
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
}
.form-group input {
  width: 100%;
  padding: 10px 14px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #e6edf3;
  font-size: 14px;
  box-sizing: border-box;
}
.form-group input:focus {
  outline: none;
  border-color: #58a6ff;
}
.login-form button {
  width: 100%;
  background: #58a6ff;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
}
.login-form button:hover {
  background: #79b8ff;
}
</style>`
  },

  {
    category: "forms",
    tag: "Forms",
    name: "Contact Form",
    preview: `<div style="background:#21262d;border:1px solid #30363d;border-radius:12px;padding:24px;max-width:260px">
  <h3 style="color:#e6edf3;margin:0 0 16px">Contact Us</h3>
  <input type="text" placeholder="Your Name" style="width:100%;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;margin-bottom:10px;box-sizing:border-box" readonly>
  <input type="text" placeholder="Email" style="width:100%;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;margin-bottom:10px;box-sizing:border-box" readonly>
  <textarea placeholder="Message" style="width:100%;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;height:60px;resize:vertical;margin-bottom:14px;box-sizing:border-box" readonly></textarea>
  <button style="width:100%;background:#238636;color:#fff;border:none;padding:10px;border-radius:6px;font-size:14px;cursor:pointer;font-weight:600">Send Message</button>
</div>`,
    code: `<form class="contact-form">
  <h2>Contact Us</h2>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Your Name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" placeholder="Your message..."></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>

<style>
.contact-form {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 32px;
  max-width: 400px;
}
.contact-form h2 {
  color: #e6edf3;
  margin: 0 0 20px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  color: #8b949e;
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #e6edf3;
  font-size: 14px;
  box-sizing: border-box;
}
.form-group textarea {
  height: 100px;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #58a6ff;
}
.contact-form button {
  width: 100%;
  background: #238636;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
}
.contact-form button:hover {
  background: #2ea043;
}
</style>`
  },

  // ===================== LISTS =====================

  {
    category: "lists",
    tag: "Lists",
    name: "Styled List",
    preview: `<ul style="list-style:none;padding:0;margin:0;max-width:260px">
  <li style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px;color:#e6edf3;font-size:14px">
    <span style="color:#58a6ff">&#9679;</span> First item in the list
  </li>
  <li style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px;color:#e6edf3;font-size:14px">
    <span style="color:#58a6ff">&#9679;</span> Second item in the list
  </li>
  <li style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#21262d;border:1px solid #30363d;border-radius:8px;color:#e6edf3;font-size:14px">
    <span style="color:#58a6ff">&#9679;</span> Third item in the list
  </li>
</ul>`,
    code: `<ul class="styled-list">
  <li>First item in the list</li>
  <li>Second item in the list</li>
  <li>Third item in the list</li>
</ul>

<style>
.styled-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 400px;
}
.styled-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #e6edf3;
  font-size: 15px;
}
.styled-list li::before {
  content: "\\25CF";
  color: #58a6ff;
}
</style>`
  },

  {
    category: "lists",
    tag: "Lists",
    name: "Todo List",
    preview: `<div style="max-width:260px">
  <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px">
    <input type="checkbox" checked style="accent-color:#58a6ff;width:16px;height:16px" onclick="return false">
    <span style="color:#8b949e;text-decoration:line-through;font-size:14px">Buy groceries</span>
  </div>
  <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px">
    <input type="checkbox" style="accent-color:#58a6ff;width:16px;height:16px" onclick="return false">
    <span style="color:#e6edf3;font-size:14px">Finish homework</span>
  </div>
  <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#21262d;border:1px solid #30363d;border-radius:8px">
    <input type="checkbox" style="accent-color:#58a6ff;width:16px;height:16px" onclick="return false">
    <span style="color:#e6edf3;font-size:14px">Go to the gym</span>
  </div>
</div>`,
    code: `<ul class="todo-list">
  <li class="done">
    <input type="checkbox" checked>
    <span>Buy groceries</span>
  </li>
  <li>
    <input type="checkbox">
    <span>Finish homework</span>
  </li>
  <li>
    <input type="checkbox">
    <span>Go to the gym</span>
  </li>
</ul>

<style>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 400px;
}
.todo-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  margin-bottom: 8px;
}
.todo-list input[type="checkbox"] {
  accent-color: #58a6ff;
  width: 18px;
  height: 18px;
}
.todo-list span {
  color: #e6edf3;
  font-size: 15px;
}
.todo-list .done span {
  color: #8b949e;
  text-decoration: line-through;
}
</style>`
  },

  // ===================== SLIDERS =====================

  {
    category: "sliders",
    tag: "Sliders",
    name: "CSS Image Slider",
    preview: `<div style="position:relative;overflow:hidden;border-radius:10px;max-width:280px;height:120px">
  <div style="display:flex;animation:slide 9s infinite;width:300%">
    <div style="width:100%;flex-shrink:0;height:120px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">Slide 1</div>
    <div style="width:100%;flex-shrink:0;height:120px;background:linear-gradient(135deg,#f093fb,#f5576c);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">Slide 2</div>
    <div style="width:100%;flex-shrink:0;height:120px;background:linear-gradient(135deg,#4facfe,#00f2fe);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">Slide 3</div>
  </div>
</div>`,
    code: `<div class="slider">
  <div class="slides">
    <div class="slide" style="background: linear-gradient(135deg, #667eea, #764ba2)">Slide 1</div>
    <div class="slide" style="background: linear-gradient(135deg, #f093fb, #f5576c)">Slide 2</div>
    <div class="slide" style="background: linear-gradient(135deg, #4facfe, #00f2fe)">Slide 3</div>
  </div>
</div>

<style>
.slider {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  max-width: 600px;
  height: 300px;
}
.slides {
  display: flex;
  width: 300%;
  animation: slide 9s infinite;
}
.slide {
  width: 100%;
  flex-shrink: 0;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
@keyframes slide {
  0%, 30%   { transform: translateX(0); }
  33%, 63%  { transform: translateX(-33.33%); }
  66%, 96%  { transform: translateX(-66.66%); }
  100%      { transform: translateX(0); }
}
</style>`
  },

  // ===================== FOOTERS =====================

  {
    category: "footers",
    tag: "Footers",
    name: "Simple Footer",
    preview: `<div style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:20px;text-align:center">
  <p style="color:#8b949e;margin:0;font-size:13px">&copy; 2026 YourBrand. All rights reserved.</p>
</div>`,
    code: `<footer class="simple-footer">
  <p>&copy; 2026 YourBrand. All rights reserved.</p>
</footer>

<style>
.simple-footer {
  background: #161b22;
  text-align: center;
  padding: 24px;
}
.simple-footer p {
  color: #8b949e;
  margin: 0;
  font-size: 14px;
}
</style>`
  },

  {
    category: "footers",
    tag: "Footers",
    name: "Multi-Column Footer",
    preview: `<div style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:24px">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:16px">
    <div>
      <h4 style="color:#e6edf3;margin:0 0 8px;font-size:13px">Product</h4>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px;margin-bottom:4px" onclick="return false">Features</a>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px" onclick="return false">Pricing</a>
    </div>
    <div>
      <h4 style="color:#e6edf3;margin:0 0 8px;font-size:13px">Company</h4>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px;margin-bottom:4px" onclick="return false">About</a>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px" onclick="return false">Careers</a>
    </div>
    <div>
      <h4 style="color:#e6edf3;margin:0 0 8px;font-size:13px">Support</h4>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px;margin-bottom:4px" onclick="return false">Help Center</a>
      <a href="#" style="display:block;color:#8b949e;text-decoration:none;font-size:12px" onclick="return false">Contact</a>
    </div>
  </div>
  <div style="border-top:1px solid #30363d;padding-top:12px;text-align:center">
    <p style="color:#8b949e;margin:0;font-size:11px">&copy; 2026 YourBrand</p>
  </div>
</div>`,
    code: `<footer class="footer">
  <div class="footer-grid">
    <div class="footer-col">
      <h4>Product</h4>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="#">About</a>
      <a href="#">Careers</a>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <a href="#">Help Center</a>
      <a href="#">Contact</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 YourBrand</p>
  </div>
</footer>

<style>
.footer {
  background: #161b22;
  padding: 40px 32px 24px;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}
.footer-col h4 {
  color: #e6edf3;
  margin: 0 0 12px;
  font-size: 14px;
}
.footer-col a {
  display: block;
  color: #8b949e;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
}
.footer-col a:hover {
  color: #e6edf3;
}
.footer-bottom {
  border-top: 1px solid #30363d;
  padding-top: 20px;
  text-align: center;
}
.footer-bottom p {
  color: #8b949e;
  margin: 0;
  font-size: 13px;
}
</style>`
  },

  // ===================== ACCORDIONS =====================

  {
    category: "accordions",
    tag: "Accordions",
    name: "FAQ Accordion",
    preview: `<div style="max-width:280px">
  <div style="background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer">
      <span style="color:#e6edf3;font-size:14px;font-weight:600">What is this?</span>
      <span style="color:#58a6ff;font-size:18px">&#8722;</span>
    </div>
    <div style="padding:0 16px 14px">
      <p style="color:#8b949e;font-size:13px;margin:0">This is an accordion component for FAQ sections.</p>
    </div>
  </div>
  <div style="background:#21262d;border:1px solid #30363d;border-radius:8px;margin-bottom:8px">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer">
      <span style="color:#e6edf3;font-size:14px;font-weight:600">How does it work?</span>
      <span style="color:#58a6ff;font-size:18px">&#43;</span>
    </div>
  </div>
  <div style="background:#21262d;border:1px solid #30363d;border-radius:8px">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer">
      <span style="color:#e6edf3;font-size:14px;font-weight:600">Is it free?</span>
      <span style="color:#58a6ff;font-size:18px">&#43;</span>
    </div>
  </div>
</div>`,
    code: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      What is this?
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-body">
      <p>This is an accordion component for FAQ sections.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      How does it work?
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-body">
      <p>Click on a question to expand and see the answer.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      Is it free?
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-body">
      <p>Yes, completely free to use in your projects!</p>
    </div>
  </div>
</div>

<style>
.accordion {
  max-width: 500px;
}
.accordion-item {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}
.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  background: none;
  border: none;
  color: #e6edf3;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.accordion-icon {
  color: #58a6ff;
  font-size: 20px;
  transition: transform 0.2s;
}
.accordion-item.active .accordion-icon {
  transform: rotate(45deg);
}
.accordion-body {
  display: none;
  padding: 0 18px 16px;
}
.accordion-item.active .accordion-body {
  display: block;
}
.accordion-body p {
  color: #8b949e;
  font-size: 14px;
  margin: 0;
}
</style>

<script>
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.accordion-item').classList.toggle('active');
  });
});
</script>`
  },

  // ===================== TESTIMONIALS =====================

  {
    category: "testimonials",
    tag: "Testimonials",
    name: "Testimonial Card",
    preview: `<div style="background:#21262d;border:1px solid #30363d;border-radius:12px;padding:24px;max-width:280px">
  <div style="display:flex;gap:4px;margin-bottom:12px">
    <span style="color:#f0b429;font-size:16px">&#9733;</span>
    <span style="color:#f0b429;font-size:16px">&#9733;</span>
    <span style="color:#f0b429;font-size:16px">&#9733;</span>
    <span style="color:#f0b429;font-size:16px">&#9733;</span>
    <span style="color:#f0b429;font-size:16px">&#9733;</span>
  </div>
  <p style="color:#e6edf3;font-size:14px;line-height:1.6;margin:0 0 16px">"This library saved me hours of work. The components are clean and easy to customize."</p>
  <div style="display:flex;align-items:center;gap:12px">
    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
    <div>
      <p style="color:#e6edf3;font-size:13px;font-weight:600;margin:0">Jane Doe</p>
      <p style="color:#8b949e;font-size:12px;margin:0">Web Developer</p>
    </div>
  </div>
</div>`,
    code: `<div class="testimonial-card">
  <div class="stars">
    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
  </div>
  <p class="quote">"This library saved me hours of work. The components are clean and easy to customize."</p>
  <div class="author">
    <img src="avatar.jpg" alt="Jane Doe" class="avatar">
    <div>
      <p class="name">Jane Doe</p>
      <p class="role">Web Developer</p>
    </div>
  </div>
</div>

<style>
.testimonial-card {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 28px;
  max-width: 400px;
}
.stars {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}
.stars span {
  color: #f0b429;
  font-size: 18px;
}
.quote {
  color: #e6edf3;
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 20px;
}
.author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.name {
  color: #e6edf3;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}
.role {
  color: #8b949e;
  font-size: 13px;
  margin: 0;
}
</style>`
  },

  // ===================== STATS =====================

  {
    category: "stats",
    tag: "Stats",
    name: "Stats Counter Section",
    preview: `<div style="display:flex;gap:16px;justify-content:center">
  <div style="background:#21262d;border:1px solid #30363d;border-radius:10px;padding:20px 24px;text-align:center;flex:1">
    <p style="color:#58a6ff;font-size:28px;font-weight:800;margin:0">10K+</p>
    <p style="color:#8b949e;font-size:12px;margin:4px 0 0">Users</p>
  </div>
  <div style="background:#21262d;border:1px solid #30363d;border-radius:10px;padding:20px 24px;text-align:center;flex:1">
    <p style="color:#58a6ff;font-size:28px;font-weight:800;margin:0">500+</p>
    <p style="color:#8b949e;font-size:12px;margin:4px 0 0">Projects</p>
  </div>
  <div style="background:#21262d;border:1px solid #30363d;border-radius:10px;padding:20px 24px;text-align:center;flex:1">
    <p style="color:#58a6ff;font-size:28px;font-weight:800;margin:0">99%</p>
    <p style="color:#8b949e;font-size:12px;margin:4px 0 0">Uptime</p>
  </div>
</div>`,
    code: `<section class="stats">
  <div class="stat">
    <span class="stat-number">10K+</span>
    <span class="stat-label">Users</span>
  </div>
  <div class="stat">
    <span class="stat-number">500+</span>
    <span class="stat-label">Projects</span>
  </div>
  <div class="stat">
    <span class="stat-number">99%</span>
    <span class="stat-label">Uptime</span>
  </div>
</section>

<style>
.stats {
  display: flex;
  gap: 24px;
  justify-content: center;
  padding: 40px 20px;
}
.stat {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 28px 36px;
  text-align: center;
}
.stat-number {
  display: block;
  color: #58a6ff;
  font-size: 36px;
  font-weight: 800;
}
.stat-label {
  display: block;
  color: #8b949e;
  font-size: 14px;
  margin-top: 6px;
}
</style>`
  },

  // ===================== MODALS =====================

  {
    category: "modals",
    tag: "Modals",
    name: "Modal / Popup",
    preview: `<div style="background:rgba(0,0,0,0.5);border-radius:10px;padding:30px;display:flex;align-items:center;justify-content:center">
  <div style="background:#21262d;border:1px solid #30363d;border-radius:12px;padding:28px;max-width:260px;position:relative">
    <button style="position:absolute;top:12px;right:14px;background:none;border:none;color:#8b949e;font-size:20px;cursor:pointer;line-height:1">&times;</button>
    <h3 style="color:#e6edf3;margin:0 0 10px;font-size:17px">Are you sure?</h3>
    <p style="color:#8b949e;font-size:13px;margin:0 0 20px">This action cannot be undone. Do you want to continue?</p>
    <div style="display:flex;gap:10px">
      <button style="flex:1;padding:8px;background:transparent;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;cursor:pointer">Cancel</button>
      <button style="flex:1;padding:8px;background:#da3633;border:none;border-radius:6px;color:#fff;font-size:13px;cursor:pointer;font-weight:600">Delete</button>
    </div>
  </div>
</div>`,
    code: `<!-- Trigger Button -->
<button id="openModal" class="btn-open">Open Modal</button>

<!-- Modal Overlay -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <button class="modal-close" id="closeModal">&times;</button>
    <h2>Are you sure?</h2>
    <p>This action cannot be undone. Do you want to continue?</p>
    <div class="modal-actions">
      <button class="btn-cancel" id="cancelModal">Cancel</button>
      <button class="btn-confirm">Delete</button>
    </div>
  </div>
</div>

<style>
.btn-open {
  background: #58a6ff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
}
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-overlay.active {
  display: flex;
}
.modal {
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  color: #8b949e;
  font-size: 24px;
  cursor: pointer;
}
.modal h2 {
  color: #e6edf3;
  margin: 0 0 12px;
  font-size: 18px;
}
.modal p {
  color: #8b949e;
  font-size: 14px;
  margin: 0 0 24px;
}
.modal-actions {
  display: flex;
  gap: 12px;
}
.btn-cancel {
  flex: 1;
  padding: 10px;
  background: transparent;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  font-size: 14px;
  cursor: pointer;
}
.btn-confirm {
  flex: 1;
  padding: 10px;
  background: #da3633;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
}
.btn-confirm:hover {
  background: #f85149;
}
</style>

<script>
document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.add('active');
});
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('active');
});
document.getElementById('cancelModal').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('active');
});
</script>`
  },

  // ===================== TABS =====================

  {
    category: "tabs",
    tag: "Tabs",
    name: "Tabs",
    preview: `<div style="max-width:280px">
  <div style="display:flex;border-bottom:2px solid #30363d;margin-bottom:16px">
    <button style="padding:10px 18px;background:none;border:none;color:#58a6ff;font-size:13px;font-weight:600;cursor:pointer;border-bottom:2px solid #58a6ff;margin-bottom:-2px">Tab 1</button>
    <button style="padding:10px 18px;background:none;border:none;color:#8b949e;font-size:13px;font-weight:500;cursor:pointer">Tab 2</button>
    <button style="padding:10px 18px;background:none;border:none;color:#8b949e;font-size:13px;font-weight:500;cursor:pointer">Tab 3</button>
  </div>
  <p style="color:#e6edf3;font-size:14px;margin:0">Content for the first tab goes here. Switch tabs to see different content.</p>
</div>`,
    code: `<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="tab1">Tab 1</button>
    <button class="tab-btn" data-tab="tab2">Tab 2</button>
    <button class="tab-btn" data-tab="tab3">Tab 3</button>
  </div>
  <div class="tab-content active" id="tab1">
    <p>Content for the first tab goes here.</p>
  </div>
  <div class="tab-content" id="tab2">
    <p>Content for the second tab goes here.</p>
  </div>
  <div class="tab-content" id="tab3">
    <p>Content for the third tab goes here.</p>
  </div>
</div>

<style>
.tabs {
  max-width: 500px;
}
.tab-buttons {
  display: flex;
  border-bottom: 2px solid #30363d;
  margin-bottom: 20px;
}
.tab-btn {
  padding: 12px 20px;
  background: none;
  border: none;
  color: #8b949e;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s;
}
.tab-btn:hover {
  color: #e6edf3;
}
.tab-btn.active {
  color: #58a6ff;
  font-weight: 600;
  border-bottom-color: #58a6ff;
}
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}
.tab-content p {
  color: #e6edf3;
  font-size: 15px;
  margin: 0;
}
</style>

<script>
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
</script>`
  },

  // ===================== BADGES =====================

  {
    category: "badges",
    tag: "Badges",
    name: "Badges / Pills",
    preview: `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
  <span style="background:#58a6ff;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">New</span>
  <span style="background:#238636;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">Success</span>
  <span style="background:#da3633;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">Error</span>
  <span style="background:#9e6a03;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">Warning</span>
  <span style="background:transparent;color:#8b949e;border:1px solid #30363d;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">Default</span>
</div>`,
    code: `<span class="badge badge-primary">New</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-outline">Default</span>

<style>
.badge {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}
.badge-primary {
  background: #58a6ff;
  color: #fff;
}
.badge-success {
  background: #238636;
  color: #fff;
}
.badge-error {
  background: #da3633;
  color: #fff;
}
.badge-warning {
  background: #9e6a03;
  color: #fff;
}
.badge-outline {
  background: transparent;
  color: #8b949e;
  border: 1px solid #30363d;
}
</style>`
  },

  // ===================== BREADCRUMBS =====================

  {
    category: "breadcrumbs",
    tag: "Breadcrumbs",
    name: "Breadcrumbs",
    preview: `<nav style="display:flex;align-items:center;gap:8px;font-size:14px">
  <a href="#" style="color:#58a6ff;text-decoration:none" onclick="return false">Home</a>
  <span style="color:#8b949e">/</span>
  <a href="#" style="color:#58a6ff;text-decoration:none" onclick="return false">Products</a>
  <span style="color:#8b949e">/</span>
  <span style="color:#8b949e">Shoes</span>
</nav>`,
    code: `<nav class="breadcrumbs">
  <a href="#">Home</a>
  <span class="separator">/</span>
  <a href="#">Products</a>
  <span class="separator">/</span>
  <span class="current">Shoes</span>
</nav>

<style>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.breadcrumbs a {
  color: #58a6ff;
  text-decoration: none;
}
.breadcrumbs a:hover {
  text-decoration: underline;
}
.separator {
  color: #8b949e;
}
.current {
  color: #8b949e;
}
</style>`
  },

  // ===================== PAGINATION =====================

  {
    category: "pagination",
    tag: "Pagination",
    name: "Pagination",
    preview: `<div style="display:flex;align-items:center;gap:6px">
  <button style="width:34px;height:34px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#8b949e;font-size:13px;cursor:pointer">&laquo;</button>
  <button style="width:34px;height:34px;background:#58a6ff;border:none;border-radius:6px;color:#fff;font-size:13px;cursor:pointer;font-weight:600">1</button>
  <button style="width:34px;height:34px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;cursor:pointer">2</button>
  <button style="width:34px;height:34px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:13px;cursor:pointer">3</button>
  <button style="width:34px;height:34px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#8b949e;font-size:13px;cursor:pointer">&raquo;</button>
</div>`,
    code: `<nav class="pagination">
  <button class="page-btn">&laquo;</button>
  <button class="page-btn active">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn">&raquo;</button>
</nav>

<style>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}
.page-btn {
  width: 38px;
  height: 38px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.page-btn:hover {
  border-color: #58a6ff;
  color: #58a6ff;
}
.page-btn.active {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #fff;
  font-weight: 600;
}
</style>`
  },

  // ===================== TOGGLE SWITCHES =====================

  {
    category: "toggles",
    tag: "Toggles",
    name: "Toggle Switch",
    preview: `<div style="display:flex;flex-direction:column;gap:12px">
  <label style="display:flex;align-items:center;gap:12px;cursor:pointer">
    <div style="position:relative;width:44px;height:24px">
      <div style="width:44px;height:24px;background:#238636;border-radius:12px"></div>
      <div style="position:absolute;top:2px;left:22px;width:20px;height:20px;background:#fff;border-radius:50%;transition:.2s"></div>
    </div>
    <span style="color:#e6edf3;font-size:14px">Notifications</span>
  </label>
  <label style="display:flex;align-items:center;gap:12px;cursor:pointer">
    <div style="position:relative;width:44px;height:24px">
      <div style="width:44px;height:24px;background:#30363d;border-radius:12px"></div>
      <div style="position:absolute;top:2px;left:2px;width:20px;height:20px;background:#8b949e;border-radius:50%;transition:.2s"></div>
    </div>
    <span style="color:#8b949e;font-size:14px">Dark mode</span>
  </label>
</div>`,
    code: `<label class="toggle">
  <input type="checkbox" checked>
  <span class="toggle-slider"></span>
  <span class="toggle-label">Notifications</span>
</label>

<label class="toggle">
  <input type="checkbox">
  <span class="toggle-slider"></span>
  <span class="toggle-label">Dark mode</span>
</label>

<style>
.toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 12px;
}
.toggle input {
  display: none;
}
.toggle-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background: #30363d;
  border-radius: 12px;
  transition: background 0.2s;
  flex-shrink: 0;
}
.toggle-slider::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #8b949e;
  border-radius: 50%;
  transition: all 0.2s;
}
.toggle input:checked + .toggle-slider {
  background: #238636;
}
.toggle input:checked + .toggle-slider::after {
  left: 22px;
  background: #fff;
}
.toggle-label {
  color: #e6edf3;
  font-size: 15px;
}
</style>`
  },

  // ===================== ALERTS =====================

  {
    category: "alerts",
    tag: "Alerts",
    name: "Alert Banners",
    preview: `<div style="display:flex;flex-direction:column;gap:8px;max-width:280px">
  <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#0e2a14;border:1px solid #238636;border-radius:8px">
    <span style="color:#3fb950;font-size:16px">&#10003;</span>
    <span style="color:#3fb950;font-size:13px">Changes saved successfully!</span>
  </div>
  <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#2a1215;border:1px solid #da3633;border-radius:8px">
    <span style="color:#f85149;font-size:16px">&#10007;</span>
    <span style="color:#f85149;font-size:13px">Something went wrong.</span>
  </div>
  <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#2a2208;border:1px solid #9e6a03;border-radius:8px">
    <span style="color:#d29922;font-size:16px">&#9888;</span>
    <span style="color:#d29922;font-size:13px">Please check your input.</span>
  </div>
  <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#0c2d48;border:1px solid #58a6ff;border-radius:8px">
    <span style="color:#58a6ff;font-size:16px">&#8505;</span>
    <span style="color:#58a6ff;font-size:13px">Update available.</span>
  </div>
</div>`,
    code: `<div class="alert alert-success">
  <span class="alert-icon">&#10003;</span>
  <span>Changes saved successfully!</span>
</div>

<div class="alert alert-error">
  <span class="alert-icon">&#10007;</span>
  <span>Something went wrong.</span>
</div>

<div class="alert alert-warning">
  <span class="alert-icon">&#9888;</span>
  <span>Please check your input.</span>
</div>

<div class="alert alert-info">
  <span class="alert-icon">&#8505;</span>
  <span>Update available.</span>
</div>

<style>
.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 10px;
}
.alert-icon {
  font-size: 18px;
}
.alert-success {
  background: #0e2a14;
  border: 1px solid #238636;
  color: #3fb950;
}
.alert-error {
  background: #2a1215;
  border: 1px solid #da3633;
  color: #f85149;
}
.alert-warning {
  background: #2a2208;
  border: 1px solid #9e6a03;
  color: #d29922;
}
.alert-info {
  background: #0c2d48;
  border: 1px solid #58a6ff;
  color: #58a6ff;
}
</style>`
  },

  // ===================== TOOLTIPS =====================

  {
    category: "tooltips",
    tag: "Tooltips",
    name: "Tooltip on Hover",
    preview: `<div style="display:flex;gap:16px;align-items:center;justify-content:center">
  <div style="position:relative;display:inline-block">
    <button style="padding:10px 20px;background:#58a6ff;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">Hover me</button>
    <div style="position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#21262d;color:#e6edf3;padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;border:1px solid #30363d">Tooltip text
      <div style="position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#30363d"></div>
    </div>
  </div>
  <div style="position:relative;display:inline-block">
    <button style="padding:10px 20px;background:#21262d;color:#e6edf3;border:1px solid #30363d;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer">Another</button>
    <div style="position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#21262d;color:#e6edf3;padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;border:1px solid #30363d">More info
      <div style="position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#30363d"></div>
    </div>
  </div>
</div>`,
    code: `<div class="tooltip-wrapper">
  <button class="tooltip-trigger">Hover me</button>
  <span class="tooltip">Tooltip text</span>
</div>

<style>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.tooltip-trigger {
  padding: 10px 20px;
  background: #58a6ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #21262d;
  color: #e6edf3;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  border: 1px solid #30363d;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  pointer-events: none;
}
.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #30363d;
}
.tooltip-wrapper:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
</style>`
  },

  // ===================== PROGRESS BARS =====================

  {
    category: "progress",
    tag: "Progress",
    name: "Progress Bars",
    preview: `<div style="display:flex;flex-direction:column;gap:14px;width:100%;max-width:280px">
  <div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px">
      <span style="color:#e6edf3;font-size:12px;font-weight:600">HTML</span>
      <span style="color:#8b949e;font-size:12px">90%</span>
    </div>
    <div style="height:8px;background:#21262d;border-radius:4px;overflow:hidden">
      <div style="width:90%;height:100%;background:#58a6ff;border-radius:4px"></div>
    </div>
  </div>
  <div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px">
      <span style="color:#e6edf3;font-size:12px;font-weight:600">CSS</span>
      <span style="color:#8b949e;font-size:12px">75%</span>
    </div>
    <div style="height:8px;background:#21262d;border-radius:4px;overflow:hidden">
      <div style="width:75%;height:100%;background:#238636;border-radius:4px"></div>
    </div>
  </div>
  <div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px">
      <span style="color:#e6edf3;font-size:12px;font-weight:600">JavaScript</span>
      <span style="color:#8b949e;font-size:12px">60%</span>
    </div>
    <div style="height:8px;background:#21262d;border-radius:4px;overflow:hidden">
      <div style="width:60%;height:100%;background:#9e6a03;border-radius:4px"></div>
    </div>
  </div>
</div>`,
    code: `<div class="progress-group">
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">HTML</span>
      <span class="progress-value">90%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 90%"></div>
    </div>
  </div>
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">CSS</span>
      <span class="progress-value">75%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill green" style="width: 75%"></div>
    </div>
  </div>
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">JavaScript</span>
      <span class="progress-value">60%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill yellow" style="width: 60%"></div>
    </div>
  </div>
</div>

<style>
.progress-group {
  max-width: 400px;
}
.progress-item {
  margin-bottom: 18px;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.progress-label {
  color: #e6edf3;
  font-size: 14px;
  font-weight: 600;
}
.progress-value {
  color: #8b949e;
  font-size: 13px;
}
.progress-bar {
  height: 10px;
  background: #21262d;
  border-radius: 5px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #58a6ff;
  border-radius: 5px;
  transition: width 0.4s ease;
}
.progress-fill.green {
  background: #238636;
}
.progress-fill.yellow {
  background: #9e6a03;
}
</style>`
  },

  // ===================== DROPDOWNS =====================

  {
    category: "dropdowns",
    tag: "Dropdowns",
    name: "Dropdown Menu",
    preview: `<div style="position:relative;display:inline-block">
  <button style="display:flex;align-items:center;gap:8px;padding:10px 18px;background:#21262d;border:1px solid #30363d;border-radius:8px;color:#e6edf3;font-size:13px;font-weight:500;cursor:pointer">Options <span style="font-size:10px;color:#8b949e">&#9660;</span></button>
  <div style="position:absolute;top:calc(100% + 6px);left:0;background:#21262d;border:1px solid #30363d;border-radius:8px;min-width:160px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.3)">
    <a style="display:block;padding:10px 16px;color:#e6edf3;font-size:13px;text-decoration:none;border-bottom:1px solid #30363d">Edit</a>
    <a style="display:block;padding:10px 16px;color:#e6edf3;font-size:13px;text-decoration:none;border-bottom:1px solid #30363d">Duplicate</a>
    <a style="display:block;padding:10px 16px;color:#f85149;font-size:13px;text-decoration:none">Delete</a>
  </div>
</div>`,
    code: `<div class="dropdown">
  <button class="dropdown-trigger">
    Options <span class="dropdown-arrow">&#9660;</span>
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Edit</a>
    <a href="#" class="dropdown-item">Duplicate</a>
    <a href="#" class="dropdown-item">Archive</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item danger">Delete</a>
  </div>
</div>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  font-size: 14px;
  cursor: pointer;
}
.dropdown-arrow {
  font-size: 10px;
  color: #8b949e;
}
.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  min-width: 180px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
}
.dropdown.open .dropdown-menu {
  display: block;
}
.dropdown-item {
  display: block;
  padding: 10px 16px;
  color: #e6edf3;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.15s;
}
.dropdown-item:hover {
  background: #30363d;
}
.dropdown-item.danger {
  color: #f85149;
}
.dropdown-divider {
  height: 1px;
  background: #30363d;
}
</style>

<script>
document.querySelectorAll('.dropdown-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.dropdown').classList.toggle('open');
  });
});
// Close on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  }
});
</script>`
  },

  // ===================== SKELETONS =====================

  {
    category: "skeletons",
    tag: "Skeletons",
    name: "Skeleton Loader",
    preview: `<div style="max-width:280px;background:#21262d;border:1px solid #30363d;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:14px">
  <div style="display:flex;align-items:center;gap:12px">
    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:8px">
      <div style="height:10px;width:60%;border-radius:4px;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
      <div style="height:10px;width:40%;border-radius:4px;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
    </div>
  </div>
  <div style="height:10px;border-radius:4px;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
  <div style="height:10px;width:80%;border-radius:4px;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
  <div style="height:100px;border-radius:8px;background:linear-gradient(90deg,#30363d 25%,#3a424d 50%,#30363d 75%);background-size:200% 100%;animation:shimmer 1.5s infinite"></div>
</div>
<style>@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}</style>`,
    code: `<div class="skeleton-card">
  <div class="skeleton-header">
    <div class="skeleton skeleton-avatar"></div>
    <div class="skeleton-info">
      <div class="skeleton skeleton-line" style="width: 60%"></div>
      <div class="skeleton skeleton-line" style="width: 40%"></div>
    </div>
  </div>
  <div class="skeleton skeleton-line"></div>
  <div class="skeleton skeleton-line" style="width: 80%"></div>
  <div class="skeleton skeleton-image"></div>
</div>

<style>
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.skeleton-card {
  max-width: 400px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.skeleton {
  background: linear-gradient(90deg, #30363d 25%, #3a424d 50%, #30363d 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
.skeleton-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
}
.skeleton-header {
  display: flex;
  align-items: center;
  gap: 14px;
}
.skeleton-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.skeleton-line {
  height: 12px;
  width: 100%;
}
.skeleton-image {
  height: 120px;
  border-radius: 8px;
}
</style>`
  },

  // ===================== AVATARS =====================

  {
    category: "avatars",
    tag: "Avatars",
    name: "Avatar Group",
    preview: `<div style="display:flex;flex-direction:column;gap:20px;align-items:center">
  <div style="display:flex;gap:12px;align-items:center">
    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px">JD</div>
    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#f093fb,#f5576c);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px">AK</div>
    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#4facfe,#00f2fe);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px">ML</div>
    <div style="width:40px;height:40px;border-radius:50%;background:#21262d;border:2px solid #30363d;display:flex;align-items:center;justify-content:center;color:#8b949e;font-weight:600;font-size:12px">+5</div>
  </div>
  <div style="display:flex">
    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#43e97b,#38f9d7);border:2px solid #0d1117;margin-left:-8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px;position:relative;z-index:3">AB</div>
    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#fa709a,#fee140);border:2px solid #0d1117;margin-left:-8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px;position:relative;z-index:2">CD</div>
    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#a18cd1,#fbc2eb);border:2px solid #0d1117;margin-left:-8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px;position:relative;z-index:1">EF</div>
  </div>
</div>`,
    code: `<!-- Individual Avatars -->
<div class="avatar-row">
  <div class="avatar" style="background: linear-gradient(135deg, #667eea, #764ba2)">JD</div>
  <div class="avatar" style="background: linear-gradient(135deg, #f093fb, #f5576c)">AK</div>
  <div class="avatar" style="background: linear-gradient(135deg, #4facfe, #00f2fe)">ML</div>
  <div class="avatar avatar-count">+5</div>
</div>

<!-- Stacked Avatar Group -->
<div class="avatar-stack">
  <div class="avatar-sm" style="background: linear-gradient(135deg, #43e97b, #38f9d7)">AB</div>
  <div class="avatar-sm" style="background: linear-gradient(135deg, #fa709a, #fee140)">CD</div>
  <div class="avatar-sm" style="background: linear-gradient(135deg, #a18cd1, #fbc2eb)">EF</div>
</div>

<style>
.avatar-row {
  display: flex;
  gap: 12px;
  align-items: center;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}
.avatar-count {
  background: #21262d;
  border: 2px solid #30363d;
  color: #8b949e;
  font-size: 13px;
}
.avatar-stack {
  display: flex;
}
.avatar-sm {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  border: 2px solid #0d1117;
  margin-left: -10px;
}
.avatar-sm:first-child {
  margin-left: 0;
}
</style>`
  },

  // ===================== FEATURE CARDS =====================

  {
    category: "cards",
    tag: "Cards",
    name: "Feature Cards",
    preview: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:400px">
  <div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;text-align:center">
    <div style="width:36px;height:36px;margin:0 auto 10px;background:#21262d;border-radius:10px;display:flex;align-items:center;justify-content:center">
      <svg style="width:18px;height:18px;color:#58a6ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    </div>
    <div style="font-size:13px;font-weight:700;color:#e6edf3;margin-bottom:4px">Components</div>
    <div style="font-size:11px;color:#8b949e;line-height:1.4">Ready to use</div>
  </div>
  <div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;text-align:center">
    <div style="width:36px;height:36px;margin:0 auto 10px;background:#21262d;border-radius:10px;display:flex;align-items:center;justify-content:center">
      <svg style="width:18px;height:18px;color:#58a6ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
    </div>
    <div style="font-size:13px;font-weight:700;color:#e6edf3;margin-bottom:4px">Copy & Paste</div>
    <div style="font-size:11px;color:#8b949e;line-height:1.4">One-click copy</div>
  </div>
  <div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;text-align:center">
    <div style="width:36px;height:36px;margin:0 auto 10px;background:#21262d;border-radius:10px;display:flex;align-items:center;justify-content:center">
      <svg style="width:18px;height:18px;color:#58a6ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </div>
    <div style="font-size:13px;font-weight:700;color:#e6edf3;margin-bottom:4px">100% Free</div>
    <div style="font-size:11px;color:#8b949e;line-height:1.4">No fees ever</div>
  </div>
</div>`,
    code: `<div class="features">
  <div class="feature">
    <div class="feature-icon">
      <!-- Replace with your own icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    </div>
    <h3>Feature Title</h3>
    <p>Short description of the feature goes here.</p>
  </div>
  <div class="feature">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
    </div>
    <h3>Another Feature</h3>
    <p>Explain what this feature does.</p>
  </div>
  <div class="feature">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </div>
    <h3>Third Feature</h3>
    <p>Keep it short and simple.</p>
  </div>
</div>

<style>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 900px;
}
.feature {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.feature:hover {
  border-color: #58a6ff;
  transform: translateY(-4px);
}
.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: #21262d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-icon svg {
  width: 24px;
  height: 24px;
  color: #58a6ff;
}
.feature h3 {
  font-size: 16px;
  font-weight: 700;
  color: #e6edf3;
  margin-bottom: 8px;
}
.feature p {
  font-size: 14px;
  color: #8b949e;
  line-height: 1.5;
}
</style>`
  },

  // ===================== PRICING CARDS =====================

  {
    category: "pricing",
    tag: "Pricing",
    name: "Pricing Cards",
    preview: `<div style="display:flex;gap:12px;align-items:stretch;max-width:420px">
  <div style="flex:1;background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;text-align:center">
    <div style="font-size:12px;color:#8b949e;margin-bottom:4px">Basic</div>
    <div style="font-size:24px;font-weight:800;color:#e6edf3;margin-bottom:8px">$9<span style="font-size:12px;font-weight:400;color:#8b949e">/mo</span></div>
    <div style="font-size:10px;color:#8b949e;line-height:1.5;margin-bottom:12px">5 projects<br>10GB storage</div>
    <button style="width:100%;padding:8px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:11px;font-weight:600;cursor:pointer">Get Started</button>
  </div>
  <div style="flex:1;background:#161b22;border:2px solid #58a6ff;border-radius:12px;padding:16px;text-align:center;position:relative">
    <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#58a6ff;color:#fff;font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px">POPULAR</div>
    <div style="font-size:12px;color:#8b949e;margin-bottom:4px">Pro</div>
    <div style="font-size:24px;font-weight:800;color:#e6edf3;margin-bottom:8px">$29<span style="font-size:12px;font-weight:400;color:#8b949e">/mo</span></div>
    <div style="font-size:10px;color:#8b949e;line-height:1.5;margin-bottom:12px">Unlimited projects<br>100GB storage</div>
    <button style="width:100%;padding:8px;background:#58a6ff;border:none;border-radius:6px;color:#fff;font-size:11px;font-weight:600;cursor:pointer">Get Started</button>
  </div>
  <div style="flex:1;background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;text-align:center">
    <div style="font-size:12px;color:#8b949e;margin-bottom:4px">Enterprise</div>
    <div style="font-size:24px;font-weight:800;color:#e6edf3;margin-bottom:8px">$99<span style="font-size:12px;font-weight:400;color:#8b949e">/mo</span></div>
    <div style="font-size:10px;color:#8b949e;line-height:1.5;margin-bottom:12px">Unlimited everything<br>Priority support</div>
    <button style="width:100%;padding:8px;background:#21262d;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font-size:11px;font-weight:600;cursor:pointer">Contact Us</button>
  </div>
</div>`,
    code: `<div class="pricing-cards">
  <div class="pricing-card">
    <div class="pricing-name">Basic</div>
    <div class="pricing-price">$9<span>/mo</span></div>
    <ul class="pricing-features">
      <li>5 projects</li>
      <li>10GB storage</li>
      <li>Email support</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>

  <div class="pricing-card featured">
    <div class="pricing-badge">POPULAR</div>
    <div class="pricing-name">Pro</div>
    <div class="pricing-price">$29<span>/mo</span></div>
    <ul class="pricing-features">
      <li>Unlimited projects</li>
      <li>100GB storage</li>
      <li>Priority support</li>
      <li>Advanced analytics</li>
    </ul>
    <button class="pricing-btn primary">Get Started</button>
  </div>

  <div class="pricing-card">
    <div class="pricing-name">Enterprise</div>
    <div class="pricing-price">$99<span>/mo</span></div>
    <ul class="pricing-features">
      <li>Unlimited everything</li>
      <li>Dedicated support</li>
      <li>Custom integrations</li>
      <li>SLA guarantee</li>
    </ul>
    <button class="pricing-btn">Contact Us</button>
  </div>
</div>

<style>
.pricing-cards {
  display: flex;
  gap: 24px;
  align-items: stretch;
}
.pricing-card {
  flex: 1;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  position: relative;
}
.pricing-card.featured {
  border: 2px solid #58a6ff;
}
.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #58a6ff;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 6px;
}
.pricing-name {
  font-size: 14px;
  color: #8b949e;
  margin-bottom: 8px;
}
.pricing-price {
  font-size: 36px;
  font-weight: 800;
  color: #e6edf3;
  margin-bottom: 24px;
}
.pricing-price span {
  font-size: 14px;
  font-weight: 400;
  color: #8b949e;
}
.pricing-features {
  list-style: none;
  margin-bottom: 24px;
  text-align: left;
}
.pricing-features li {
  padding: 8px 0;
  border-bottom: 1px solid #30363d;
  color: #e6edf3;
  font-size: 14px;
}
.pricing-features li:last-child {
  border-bottom: none;
}
.pricing-btn {
  width: 100%;
  padding: 12px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.pricing-btn:hover {
  background: #30363d;
}
.pricing-btn.primary {
  background: #58a6ff;
  border: none;
  color: #fff;
}
.pricing-btn.primary:hover {
  background: #79b8ff;
}
</style>`
  },

  // ===================== TIMELINES =====================

  {
    category: "timelines",
    tag: "Timelines",
    name: "Vertical Timeline",
    preview: `<div style="max-width:280px;padding-left:20px;border-left:2px solid #30363d">
  <div style="position:relative;padding-bottom:20px">
    <div style="position:absolute;left:-27px;top:0;width:12px;height:12px;background:#58a6ff;border-radius:50%;border:2px solid #0d1117"></div>
    <div style="font-size:11px;color:#58a6ff;margin-bottom:4px">Jan 2024</div>
    <div style="font-size:13px;font-weight:600;color:#e6edf3;margin-bottom:2px">Project Started</div>
    <div style="font-size:11px;color:#8b949e">Initial planning and setup phase completed.</div>
  </div>
  <div style="position:relative;padding-bottom:20px">
    <div style="position:absolute;left:-27px;top:0;width:12px;height:12px;background:#238636;border-radius:50%;border:2px solid #0d1117"></div>
    <div style="font-size:11px;color:#238636;margin-bottom:4px">Mar 2024</div>
    <div style="font-size:13px;font-weight:600;color:#e6edf3;margin-bottom:2px">Beta Launch</div>
    <div style="font-size:11px;color:#8b949e">Released to early adopters for testing.</div>
  </div>
  <div style="position:relative">
    <div style="position:absolute;left:-27px;top:0;width:12px;height:12px;background:#8b949e;border-radius:50%;border:2px solid #0d1117"></div>
    <div style="font-size:11px;color:#8b949e;margin-bottom:4px">Jun 2024</div>
    <div style="font-size:13px;font-weight:600;color:#e6edf3;margin-bottom:2px">Public Release</div>
    <div style="font-size:11px;color:#8b949e">Coming soon...</div>
  </div>
</div>`,
    code: `<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot active"></div>
    <div class="timeline-date">Jan 2024</div>
    <div class="timeline-title">Project Started</div>
    <div class="timeline-desc">Initial planning and setup phase completed.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot success"></div>
    <div class="timeline-date">Mar 2024</div>
    <div class="timeline-title">Beta Launch</div>
    <div class="timeline-desc">Released to early adopters for testing.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-date">Jun 2024</div>
    <div class="timeline-title">Public Release</div>
    <div class="timeline-desc">Coming soon...</div>
  </div>
</div>

<style>
.timeline {
  padding-left: 28px;
  border-left: 2px solid #30363d;
}
.timeline-item {
  position: relative;
  padding-bottom: 32px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: -35px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #8b949e;
  border-radius: 50%;
  border: 3px solid #0d1117;
}
.timeline-dot.active {
  background: #58a6ff;
}
.timeline-dot.success {
  background: #238636;
}
.timeline-date {
  font-size: 12px;
  color: #8b949e;
  margin-bottom: 6px;
}
.timeline-item:has(.timeline-dot.active) .timeline-date {
  color: #58a6ff;
}
.timeline-item:has(.timeline-dot.success) .timeline-date {
  color: #238636;
}
.timeline-title {
  font-size: 16px;
  font-weight: 600;
  color: #e6edf3;
  margin-bottom: 4px;
}
.timeline-desc {
  font-size: 14px;
  color: #8b949e;
  line-height: 1.5;
}
</style>`
  },

  // ===================== STEPPERS =====================

  {
    category: "steppers",
    tag: "Steppers",
    name: "Step Progress",
    preview: `<div style="display:flex;align-items:flex-start;gap:0;width:100%;max-width:400px">
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="width:32px;height:32px;background:#238636;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700">✓</div>
    <div style="font-size:10px;color:#e6edf3;margin-top:8px">Account</div>
  </div>
  <div style="flex:1;height:2px;background:#238636;margin:15px 12px 0"></div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="width:32px;height:32px;background:#58a6ff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700">2</div>
    <div style="font-size:10px;color:#58a6ff;margin-top:8px">Details</div>
  </div>
  <div style="flex:1;height:2px;background:#30363d;margin:15px 12px 0"></div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="width:32px;height:32px;background:#21262d;border:2px solid #30363d;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8b949e;font-size:12px;font-weight:700">3</div>
    <div style="font-size:10px;color:#8b949e;margin-top:8px">Payment</div>
  </div>
  <div style="flex:1;height:2px;background:#30363d;margin:15px 12px 0"></div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <div style="width:32px;height:32px;background:#21262d;border:2px solid #30363d;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8b949e;font-size:12px;font-weight:700">4</div>
    <div style="font-size:10px;color:#8b949e;margin-top:8px">Confirm</div>
  </div>
</div>`,
    code: `<div class="stepper">
  <div class="step completed">
    <div class="step-circle">✓</div>
    <div class="step-label">Account</div>
  </div>
  <div class="step-line completed"></div>

  <div class="step active">
    <div class="step-circle">2</div>
    <div class="step-label">Details</div>
  </div>
  <div class="step-line"></div>

  <div class="step">
    <div class="step-circle">3</div>
    <div class="step-label">Payment</div>
  </div>
  <div class="step-line"></div>

  <div class="step">
    <div class="step-circle">4</div>
    <div class="step-label">Confirm</div>
  </div>
</div>

<style>
.stepper {
  display: flex;
  align-items: flex-start;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step-circle {
  width: 36px;
  height: 36px;
  background: #21262d;
  border: 2px solid #30363d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b949e;
  font-size: 14px;
  font-weight: 700;
}
.step.active .step-circle {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #fff;
}
.step.completed .step-circle {
  background: #238636;
  border-color: #238636;
  color: #fff;
}
.step-label {
  margin-top: 8px;
  font-size: 13px;
  color: #8b949e;
}
.step.active .step-label {
  color: #58a6ff;
}
.step.completed .step-label {
  color: #e6edf3;
}
.step-line {
  flex: 1;
  height: 2px;
  background: #30363d;
  margin-top: 18px;
  min-width: 40px;
}
.step-line.completed {
  background: #238636;
}
</style>`
  },

  // ===================== LOADERS =====================

  {
    category: "loaders",
    tag: "Loaders",
    name: "Spinner",
    preview: `<div style="width:32px;height:32px;border:3px solid #30363d;border-top-color:#58a6ff;border-radius:50%;animation:spin 0.8s linear infinite"></div><style>@keyframes spin{to{transform:rotate(360deg)}}</style>`,
    code: `<div class="spinner"></div>

<style>
.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #30363d;
  border-top-color: #58a6ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>`
  },

  {
    category: "loaders",
    tag: "Loaders",
    name: "Dots Loader",
    preview: `<div style="display:flex;gap:6px"><div style="width:10px;height:10px;background:#58a6ff;border-radius:50%;animation:bounce 0.6s ease-in-out infinite"></div><div style="width:10px;height:10px;background:#58a6ff;border-radius:50%;animation:bounce 0.6s ease-in-out 0.1s infinite"></div><div style="width:10px;height:10px;background:#58a6ff;border-radius:50%;animation:bounce 0.6s ease-in-out 0.2s infinite"></div></div><style>@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}</style>`,
    code: `<div class="dots-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<style>
.dots-loader {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #58a6ff;
  border-radius: 50%;
  animation: bounce 0.6s ease-in-out infinite;
}

.dot:nth-child(2) { animation-delay: 0.1s; }
.dot:nth-child(3) { animation-delay: 0.2s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>`
  },

  {
    category: "loaders",
    tag: "Loaders",
    name: "Pulse Loader",
    preview: `<div style="width:40px;height:40px;background:#58a6ff;border-radius:50%;animation:pulse 1.2s ease-in-out infinite"></div><style>@keyframes pulse{0%{transform:scale(0.8);opacity:1}50%{transform:scale(1);opacity:0.5}100%{transform:scale(0.8);opacity:1}}</style>`,
    code: `<div class="pulse-loader"></div>

<style>
.pulse-loader {
  width: 40px;
  height: 40px;
  background: #58a6ff;
  border-radius: 50%;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 1; }
  50% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(0.8); opacity: 1; }
}
</style>`
  },

  // ===================== TABLES =====================

  {
    category: "tables",
    tag: "Tables",
    name: "Simple Table",
    preview: `<table style="width:100%;border-collapse:collapse;font-size:13px;background:#161b22;border-radius:8px;overflow:hidden"><thead><tr style="background:#21262d"><th style="padding:12px 16px;text-align:left;color:#e6edf3;font-weight:600">Name</th><th style="padding:12px 16px;text-align:left;color:#e6edf3;font-weight:600">Role</th><th style="padding:12px 16px;text-align:left;color:#e6edf3;font-weight:600">Status</th></tr></thead><tbody><tr style="border-top:1px solid #30363d"><td style="padding:12px 16px;color:#e6edf3">Alice</td><td style="padding:12px 16px;color:#8b949e">Developer</td><td style="padding:12px 16px"><span style="background:#238636;color:#fff;padding:2px 8px;border-radius:12px;font-size:11px">Active</span></td></tr><tr style="border-top:1px solid #30363d"><td style="padding:12px 16px;color:#e6edf3">Bob</td><td style="padding:12px 16px;color:#8b949e">Designer</td><td style="padding:12px 16px"><span style="background:#238636;color:#fff;padding:2px 8px;border-radius:12px;font-size:11px">Active</span></td></tr></tbody></table>`,
    code: `<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Developer</td>
      <td><span class="badge success">Active</span></td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Designer</td>
      <td><span class="badge success">Active</span></td>
    </tr>
  </tbody>
</table>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background: #161b22;
  border-radius: 8px;
  overflow: hidden;
}

.table th {
  padding: 12px 16px;
  text-align: left;
  background: #21262d;
  color: #e6edf3;
  font-weight: 600;
}

.table td {
  padding: 12px 16px;
  border-top: 1px solid #30363d;
  color: #e6edf3;
}

.table tbody tr:hover {
  background: #21262d;
}

.badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.badge.success {
  background: #238636;
  color: #fff;
}
</style>`
  },

  // ===================== DIVIDERS =====================

  {
    category: "dividers",
    tag: "Dividers",
    name: "Simple Divider",
    preview: `<div style="width:100%;display:flex;flex-direction:column;gap:12px"><span style="color:#8b949e;font-size:13px">Content above</span><hr style="border:none;height:1px;background:#30363d;margin:0"><span style="color:#8b949e;font-size:13px">Content below</span></div>`,
    code: `<hr class="divider">

<style>
.divider {
  border: none;
  height: 1px;
  background: #30363d;
  margin: 16px 0;
}
</style>`
  },

  {
    category: "dividers",
    tag: "Dividers",
    name: "Divider with Text",
    preview: `<div style="display:flex;align-items:center;gap:16px;width:100%"><div style="flex:1;height:1px;background:#30363d"></div><span style="color:#8b949e;font-size:13px">OR</span><div style="flex:1;height:1px;background:#30363d"></div></div>`,
    code: `<div class="divider-text">
  <span>OR</span>
</div>

<style>
.divider-text {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.divider-text::before,
.divider-text::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #30363d;
}

.divider-text span {
  color: #8b949e;
  font-size: 13px;
}
</style>`
  },

  // ===================== RATINGS =====================

  {
    category: "ratings",
    tag: "Ratings",
    name: "Star Rating",
    preview: `<div style="display:flex;gap:4px"><span style="color:#f0b429;font-size:20px">★</span><span style="color:#f0b429;font-size:20px">★</span><span style="color:#f0b429;font-size:20px">★</span><span style="color:#f0b429;font-size:20px">★</span><span style="color:#30363d;font-size:20px">★</span></div>`,
    code: `<div class="star-rating">
  <span class="star filled">★</span>
  <span class="star filled">★</span>
  <span class="star filled">★</span>
  <span class="star filled">★</span>
  <span class="star">★</span>
</div>

<style>
.star-rating {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 20px;
  color: #30363d;
  cursor: pointer;
  transition: color 0.15s;
}

.star.filled {
  color: #f0b429;
}

.star:hover {
  color: #f0b429;
}
</style>`
  },

  {
    category: "ratings",
    tag: "Ratings",
    name: "Rating with Count",
    preview: `<div style="display:flex;align-items:center;gap:8px"><div style="display:flex;gap:2px"><span style="color:#f0b429;font-size:16px">★</span><span style="color:#f0b429;font-size:16px">★</span><span style="color:#f0b429;font-size:16px">★</span><span style="color:#f0b429;font-size:16px">★</span><span style="color:#30363d;font-size:16px">★</span></div><span style="color:#e6edf3;font-size:14px;font-weight:600">4.0</span><span style="color:#8b949e;font-size:13px">(128 reviews)</span></div>`,
    code: `<div class="rating-display">
  <div class="stars">
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star filled">★</span>
    <span class="star">★</span>
  </div>
  <span class="rating-value">4.0</span>
  <span class="rating-count">(128 reviews)</span>
</div>

<style>
.rating-display {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 16px;
  color: #30363d;
}

.star.filled {
  color: #f0b429;
}

.rating-value {
  font-size: 14px;
  font-weight: 600;
  color: #e6edf3;
}

.rating-count {
  font-size: 13px;
  color: #8b949e;
}
</style>`
  },

  // ===================== SEARCH =====================

  {
    category: "search",
    tag: "Search",
    name: "Search Bar",
    preview: `<div style="position:relative;width:100%;max-width:300px"><input type="text" placeholder="Search..." style="width:100%;padding:10px 12px 10px 40px;background:#21262d;border:1px solid #30363d;border-radius:8px;color:#e6edf3;font-size:14px;outline:none"><svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:#8b949e" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>`,
    code: `<div class="search-bar">
  <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
  <input type="text" placeholder="Search...">
</div>

<style>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.search-bar input {
  width: 100%;
  padding: 10px 12px 10px 40px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.search-bar input:focus {
  border-color: #58a6ff;
}

.search-bar input::placeholder {
  color: #8b949e;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #8b949e;
  pointer-events: none;
}
</style>`
  },

  // ===================== FILE UPLOAD =====================

  {
    category: "inputs",
    tag: "Inputs",
    name: "File Upload",
    preview: `<div style="border:2px dashed #30363d;border-radius:12px;padding:32px;text-align:center;cursor:pointer;transition:border-color 0.2s"><svg style="width:40px;height:40px;color:#8b949e;margin-bottom:12px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg><p style="color:#e6edf3;font-size:14px;margin:0 0 4px">Drop files here or click to upload</p><p style="color:#8b949e;font-size:12px;margin:0">PNG, JPG up to 10MB</p></div>`,
    code: `<div class="file-upload">
  <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
  <p class="upload-text">Drop files here or click to upload</p>
  <p class="upload-hint">PNG, JPG up to 10MB</p>
  <input type="file" hidden>
</div>

<style>
.file-upload {
  border: 2px dashed #30363d;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.file-upload:hover {
  border-color: #58a6ff;
  background: rgba(88, 166, 255, 0.05);
}

.upload-icon {
  width: 40px;
  height: 40px;
  color: #8b949e;
  margin-bottom: 12px;
}

.upload-text {
  color: #e6edf3;
  font-size: 14px;
  margin: 0 0 4px;
}

.upload-hint {
  color: #8b949e;
  font-size: 12px;
  margin: 0;
}
</style>`
  },

  // ===================== CODE BLOCKS =====================

  {
    category: "code",
    tag: "Code",
    name: "Code Block",
    preview: `<div style="background:#1e1e2e;border-radius:8px;overflow:hidden"><div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#161b22;border-bottom:1px solid #30363d"><span style="color:#8b949e;font-size:12px">JavaScript</span><button style="background:none;border:none;color:#8b949e;font-size:12px;cursor:pointer">Copy</button></div><pre style="margin:0;padding:16px;overflow-x:auto"><code style="font-family:monospace;font-size:13px;color:#cdd6f4">const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};</code></pre></div>`,
    code: `<div class="code-block">
  <div class="code-header">
    <span class="code-lang">JavaScript</span>
    <button class="code-copy">Copy</button>
  </div>
  <pre><code>const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};</code></pre>
</div>

<style>
.code-block {
  background: #1e1e2e;
  border-radius: 8px;
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
}

.code-lang {
  color: #8b949e;
  font-size: 12px;
}

.code-copy {
  background: none;
  border: none;
  color: #8b949e;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s;
}

.code-copy:hover {
  color: #58a6ff;
}

.code-block pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}

.code-block code {
  font-family: "Fira Code", monospace;
  font-size: 13px;
  color: #cdd6f4;
}
</style>`
  },

  // ===================== COUNTDOWN =====================

  {
    category: "countdown",
    tag: "Countdown",
    name: "Countdown Timer",
    preview: `<div style="display:flex;gap:12px;text-align:center"><div style="background:#21262d;padding:16px 20px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#e6edf3">07</div><div style="font-size:11px;color:#8b949e;margin-top:4px">DAYS</div></div><div style="background:#21262d;padding:16px 20px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#e6edf3">14</div><div style="font-size:11px;color:#8b949e;margin-top:4px">HOURS</div></div><div style="background:#21262d;padding:16px 20px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#e6edf3">32</div><div style="font-size:11px;color:#8b949e;margin-top:4px">MINS</div></div><div style="background:#21262d;padding:16px 20px;border-radius:8px"><div style="font-size:28px;font-weight:700;color:#e6edf3">58</div><div style="font-size:11px;color:#8b949e;margin-top:4px">SECS</div></div></div>`,
    code: `<div class="countdown">
  <div class="countdown-item">
    <span class="countdown-value" id="days">07</span>
    <span class="countdown-label">DAYS</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-value" id="hours">14</span>
    <span class="countdown-label">HOURS</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-value" id="minutes">32</span>
    <span class="countdown-label">MINS</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-value" id="seconds">58</span>
    <span class="countdown-label">SECS</span>
  </div>
</div>

<style>
.countdown {
  display: flex;
  gap: 12px;
}

.countdown-item {
  background: #21262d;
  padding: 16px 20px;
  border-radius: 8px;
  text-align: center;
}

.countdown-value {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #e6edf3;
}

.countdown-label {
  font-size: 11px;
  color: #8b949e;
  margin-top: 4px;
  display: block;
}
</style>

<script>
// Set your target date
const targetDate = new Date('2025-12-31T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
</script>`
  },

  // ===================== FAQ =====================

  {
    category: "faq",
    tag: "FAQ",
    name: "FAQ Section",
    preview: `<div style="width:100%;max-width:400px"><div style="background:#161b22;border:1px solid #30363d;border-radius:8px;margin-bottom:8px"><div style="padding:16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><span style="color:#e6edf3;font-weight:600;font-size:14px">How do I get started?</span><span style="color:#8b949e">+</span></div></div><div style="background:#161b22;border:1px solid #30363d;border-radius:8px;margin-bottom:8px"><div style="padding:16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><span style="color:#e6edf3;font-weight:600;font-size:14px">What payment methods?</span><span style="color:#8b949e">+</span></div></div><div style="background:#161b22;border:1px solid #30363d;border-radius:8px"><div style="padding:16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer"><span style="color:#e6edf3;font-weight:600;font-size:14px">Can I cancel anytime?</span><span style="color:#8b949e">+</span></div></div></div>`,
    code: `<div class="faq">
  <div class="faq-item">
    <button class="faq-question">
      <span>How do I get started?</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
      <p>Simply sign up for an account and follow our quick setup guide. You'll be up and running in minutes.</p>
    </div>
  </div>
  <div class="faq-item">
    <button class="faq-question">
      <span>What payment methods do you accept?</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
      <p>We accept all major credit cards, PayPal, and bank transfers.</p>
    </div>
  </div>
  <div class="faq-item">
    <button class="faq-question">
      <span>Can I cancel anytime?</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
      <p>Yes, you can cancel your subscription at any time with no cancellation fees.</p>
    </div>
  </div>
</div>

<style>
.faq {
  max-width: 600px;
}

.faq-item {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #e6edf3;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}

.faq-icon {
  color: #8b949e;
  font-size: 18px;
  transition: transform 0.2s;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 16px 16px;
  margin: 0;
  color: #8b949e;
  font-size: 14px;
  line-height: 1.6;
}
</style>

<script>
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-item').classList.toggle('active');
  });
});
</script>`
  },

  // ===================== PRODUCTS =====================

  {
    category: "products",
    tag: "Products",
    name: "Product Card",
    preview: `<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;overflow:hidden;width:220px"><div style="height:140px;background:linear-gradient(135deg,#21262d,#30363d);display:flex;align-items:center;justify-content:center"><span style="font-size:48px">👟</span></div><div style="padding:16px"><p style="color:#8b949e;font-size:12px;margin:0 0 4px">Footwear</p><h3 style="color:#e6edf3;font-size:15px;margin:0 0 8px;font-weight:600">Running Shoes</h3><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span style="color:#e6edf3;font-weight:700;font-size:18px">$89</span><span style="color:#8b949e;font-size:13px;text-decoration:line-through">$129</span></div><button style="width:100%;padding:10px;background:#58a6ff;color:#fff;border:none;border-radius:6px;font-weight:600;font-size:13px;cursor:pointer">Add to Cart</button></div></div>`,
    code: `<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="Product">
    <span class="product-badge">Sale</span>
  </div>
  <div class="product-info">
    <p class="product-category">Footwear</p>
    <h3 class="product-title">Running Shoes</h3>
    <div class="product-price">
      <span class="price-current">$89</span>
      <span class="price-original">$129</span>
    </div>
    <button class="product-btn">Add to Cart</button>
  </div>
</div>

<style>
.product-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  overflow: hidden;
  max-width: 280px;
}

.product-image {
  position: relative;
  height: 180px;
  background: #21262d;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #da3633;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.product-info {
  padding: 16px;
}

.product-category {
  color: #8b949e;
  font-size: 12px;
  margin: 0 0 4px;
}

.product-title {
  color: #e6edf3;
  font-size: 16px;
  margin: 0 0 12px;
  font-weight: 600;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.price-current {
  color: #e6edf3;
  font-weight: 700;
  font-size: 20px;
}

.price-original {
  color: #8b949e;
  font-size: 14px;
  text-decoration: line-through;
}

.product-btn {
  width: 100%;
  padding: 12px;
  background: #58a6ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.product-btn:hover {
  background: #79b8ff;
}
</style>`
  },

  // ===================== GALLERY =====================

  {
    category: "gallery",
    tag: "Gallery",
    name: "Image Gallery",
    preview: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%;max-width:300px"><div style="aspect-ratio:1;background:linear-gradient(135deg,#58a6ff,#8b5cf6);border-radius:8px"></div><div style="aspect-ratio:1;background:linear-gradient(135deg,#f0b429,#da3633);border-radius:8px"></div><div style="aspect-ratio:1;background:linear-gradient(135deg,#238636,#58a6ff);border-radius:8px"></div><div style="aspect-ratio:1;background:linear-gradient(135deg,#da3633,#f0b429);border-radius:8px"></div><div style="aspect-ratio:1;background:linear-gradient(135deg,#8b5cf6,#58a6ff);border-radius:8px"></div><div style="aspect-ratio:1;background:linear-gradient(135deg,#238636,#f0b429);border-radius:8px"></div></div>`,
    code: `<div class="gallery">
  <div class="gallery-item">
    <img src="image1.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image2.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image3.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image4.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image5.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image6.jpg" alt="Gallery image">
  </div>
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.gallery-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* For 2-column on mobile */
@media (max-width: 480px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>`
  },

  // ===================== MEDIA =====================

  {
    category: "media",
    tag: "Media",
    name: "Video Embed",
    preview: `<div style="position:relative;width:100%;max-width:320px;aspect-ratio:16/9;background:#161b22;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center"><div style="width:60px;height:60px;background:rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer"><div style="width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:20px solid #161b22;margin-left:4px"></div></div><div style="position:absolute;bottom:12px;left:12px;right:12px;display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;background:#da3633;border-radius:50%"></div><div style="flex:1;height:4px;background:#30363d;border-radius:2px"><div style="width:35%;height:100%;background:#e6edf3;border-radius:2px"></div></div><span style="color:#e6edf3;font-size:11px">2:45</span></div></div>`,
    code: `<div class="video-player">
  <div class="video-thumbnail">
    <img src="thumbnail.jpg" alt="Video thumbnail">
    <button class="play-button">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </button>
  </div>
  <div class="video-controls">
    <div class="video-progress">
      <div class="progress-bar" style="width: 35%"></div>
    </div>
    <div class="video-info">
      <span class="video-time">2:45 / 8:30</span>
      <div class="video-buttons">
        <button class="control-btn">🔊</button>
        <button class="control-btn">⛶</button>
      </div>
    </div>
  </div>
</div>

<style>
.video-player {
  max-width: 640px;
  background: #161b22;
  border-radius: 12px;
  overflow: hidden;
}

.video-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  background: #0d1117;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.play-button svg {
  width: 28px;
  height: 28px;
  margin-left: 4px;
}

.video-controls {
  padding: 12px 16px;
}

.video-progress {
  height: 4px;
  background: #30363d;
  border-radius: 2px;
  margin-bottom: 8px;
  cursor: pointer;
}

.progress-bar {
  height: 100%;
  background: #58a6ff;
  border-radius: 2px;
}

.video-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video-time {
  color: #8b949e;
  font-size: 13px;
}

.video-buttons {
  display: flex;
  gap: 8px;
}

.control-btn {
  background: none;
  border: none;
  color: #8b949e;
  cursor: pointer;
  font-size: 16px;
}
</style>`
  },

  {
    category: "media",
    tag: "Media",
    name: "Audio Player",
    preview: `<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;display:flex;align-items:center;gap:16px;width:100%;max-width:360px"><div style="width:56px;height:56px;background:linear-gradient(135deg,#58a6ff,#8b5cf6);border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center"><span style="font-size:24px">🎵</span></div><div style="flex:1;min-width:0"><p style="color:#e6edf3;font-size:14px;font-weight:600;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Summer Vibes</p><p style="color:#8b949e;font-size:12px;margin:0 0 8px">Artist Name</p><div style="display:flex;align-items:center;gap:8px"><span style="color:#8b949e;font-size:11px">1:24</span><div style="flex:1;height:4px;background:#30363d;border-radius:2px"><div style="width:40%;height:100%;background:#58a6ff;border-radius:2px"></div></div><span style="color:#8b949e;font-size:11px">3:45</span></div></div><button style="width:40px;height:40px;background:#58a6ff;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0"><div style="width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:12px solid #fff;margin-left:2px"></div></button></div>`,
    code: `<div class="audio-player">
  <div class="audio-cover">
    <img src="album-cover.jpg" alt="Album cover">
  </div>
  <div class="audio-info">
    <p class="audio-title">Summer Vibes</p>
    <p class="audio-artist">Artist Name</p>
    <div class="audio-progress">
      <span class="time-current">1:24</span>
      <div class="progress-track">
        <div class="progress-bar" style="width: 40%"></div>
      </div>
      <span class="time-total">3:45</span>
    </div>
  </div>
  <button class="audio-play">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </button>
</div>

<style>
.audio-player {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 400px;
}

.audio-cover {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.audio-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.audio-info {
  flex: 1;
  min-width: 0;
}

.audio-title {
  color: #e6edf3;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.audio-artist {
  color: #8b949e;
  font-size: 12px;
  margin: 0 0 8px;
}

.audio-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-current,
.time-total {
  color: #8b949e;
  font-size: 11px;
}

.progress-track {
  flex: 1;
  height: 4px;
  background: #30363d;
  border-radius: 2px;
  cursor: pointer;
}

.progress-bar {
  height: 100%;
  background: #58a6ff;
  border-radius: 2px;
}

.audio-play {
  width: 44px;
  height: 44px;
  background: #58a6ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
}

.audio-play:hover {
  background: #79b8ff;
}

.audio-play svg {
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-left: 2px;
}
</style>`
  },

];
