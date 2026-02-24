// Templates data for Code Library - Full detailed one-page layouts

const templates = [
  {
    category: "landing",
    tag: "Landing",
    name: "Startup Landing",
    description: "Complete startup page with nav, hero, features, testimonials, pricing, CTA, and footer.",
    preview: `<div style="font-family:system-ui;background:#0d1117;color:#fff;padding:12px;border-radius:8px;width:100%;max-width:280px;font-size:10px;">
      <div style="background:#161b22;padding:6px 8px;border-radius:4px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span style="color:#58a6ff;font-weight:700;">Logo</span>
        <div style="display:flex;gap:8px;"><span style="color:#8b949e;">Menu</span><span style="background:#58a6ff;color:#fff;padding:2px 6px;border-radius:3px;">CTA</span></div>
      </div>
      <div style="text-align:center;padding:16px 0;border-bottom:1px solid #30363d;">
        <div style="font-size:14px;font-weight:700;margin-bottom:4px;">Hero Section</div>
        <div style="font-size:8px;color:#8b949e;margin-bottom:8px;">Subtitle text here</div>
        <div style="background:#58a6ff;padding:4px 8px;border-radius:3px;display:inline-block;font-size:8px;">Get Started</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:8px 0;border-bottom:1px solid #30363d;">
        <div style="background:#161b22;padding:8px 4px;border-radius:4px;text-align:center;"><div style="font-size:8px;">Feature 1</div></div>
        <div style="background:#161b22;padding:8px 4px;border-radius:4px;text-align:center;"><div style="font-size:8px;">Feature 2</div></div>
        <div style="background:#161b22;padding:8px 4px;border-radius:4px;text-align:center;"><div style="font-size:8px;">Feature 3</div></div>
      </div>
      <div style="padding:8px 0;text-align:center;font-size:8px;color:#8b949e;">Testimonials • Pricing • Footer</div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LaunchPad - Build Your Startup Faster</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0d1117; color: #e6edf3; line-height: 1.6; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; height: auto; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(13,17,23,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #30363d; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; height: 72px; }
    .logo { font-size: 24px; font-weight: 700; color: #58a6ff; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { font-size: 14px; color: #8b949e; transition: color 0.2s; }
    .nav-links a:hover { color: #e6edf3; }
    .nav-cta { display: flex; gap: 12px; }
    .btn { padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; display: inline-block; text-align: center; }
    .btn-primary { background: #58a6ff; color: #fff; }
    .btn-primary:hover { background: #79b8ff; transform: translateY(-2px); }
    .btn-outline { background: transparent; border: 1px solid #30363d; color: #e6edf3; }
    .btn-outline:hover { border-color: #58a6ff; }
    .btn-lg { padding: 14px 28px; font-size: 16px; }

    /* Hero */
    .hero { padding: 160px 0 100px; text-align: center; background: radial-gradient(ellipse at top, #161b22 0%, #0d1117 70%); }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(88,166,255,0.1); border: 1px solid rgba(88,166,255,0.2); border-radius: 50px; font-size: 13px; color: #58a6ff; margin-bottom: 24px; }
    .hero h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
    .hero h1 span { color: #58a6ff; }
    .hero p { font-size: 20px; color: #8b949e; max-width: 600px; margin: 0 auto 40px; }
    .hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 60px; }
    .hero-image { max-width: 900px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.5); border: 1px solid #30363d; }

    /* Logos */
    .logos { padding: 60px 0; border-bottom: 1px solid #30363d; }
    .logos p { text-align: center; color: #8b949e; font-size: 14px; margin-bottom: 32px; text-transform: uppercase; letter-spacing: 2px; }
    .logos-grid { display: flex; justify-content: center; align-items: center; gap: 48px; flex-wrap: wrap; opacity: 0.5; }
    .logos-grid img { height: 32px; filter: grayscale(1) brightness(2); }

    /* Section Common */
    .section { padding: 100px 0; }
    .section-dark { background: #161b22; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-header h2 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
    .section-header p { font-size: 18px; color: #8b949e; max-width: 600px; margin: 0 auto; }

    /* Features */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .feature-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 32px; transition: all 0.3s; }
    .feature-card:hover { border-color: #58a6ff; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
    .feature-icon { width: 56px; height: 56px; background: rgba(88,166,255,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
    .feature-card h3 { font-size: 20px; margin-bottom: 12px; }
    .feature-card p { color: #8b949e; font-size: 15px; line-height: 1.7; }

    /* Steps */
    .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
    .step { text-align: center; }
    .step-number { width: 64px; height: 64px; background: linear-gradient(135deg, #58a6ff, #a371f7); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; margin: 0 auto 24px; }
    .step h3 { font-size: 20px; margin-bottom: 12px; }
    .step p { color: #8b949e; font-size: 15px; }

    /* Testimonials */
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .testimonial-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 32px; }
    .testimonial-text { font-size: 16px; color: #c9d1d9; margin-bottom: 24px; line-height: 1.7; font-style: italic; }
    .testimonial-author { display: flex; align-items: center; gap: 16px; }
    .testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
    .testimonial-info h4 { font-size: 15px; margin-bottom: 2px; }
    .testimonial-info span { font-size: 13px; color: #8b949e; }

    /* Pricing */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1000px; margin: 0 auto; }
    .pricing-card { background: #0d1117; border: 1px solid #30363d; border-radius: 16px; padding: 32px; position: relative; }
    .pricing-card.featured { border-color: #58a6ff; }
    .pricing-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #58a6ff; color: #fff; padding: 4px 16px; border-radius: 50px; font-size: 12px; font-weight: 600; }
    .pricing-card h3 { font-size: 20px; margin-bottom: 8px; }
    .pricing-price { font-size: 48px; font-weight: 700; margin-bottom: 8px; }
    .pricing-price span { font-size: 16px; color: #8b949e; font-weight: 400; }
    .pricing-desc { color: #8b949e; margin-bottom: 24px; font-size: 14px; }
    .pricing-features { list-style: none; margin-bottom: 32px; }
    .pricing-features li { padding: 10px 0; color: #8b949e; font-size: 14px; border-bottom: 1px solid #21262d; }
    .pricing-features li:last-child { border-bottom: none; }
    .pricing-features li::before { content: '✓'; color: #58a6ff; margin-right: 10px; font-weight: bold; }
    .pricing-card .btn { width: 100%; }

    /* CTA */
    .cta { padding: 100px 0; text-align: center; background: radial-gradient(ellipse at bottom, #161b22 0%, #0d1117 70%); }
    .cta h2 { font-size: 48px; font-weight: 700; margin-bottom: 16px; }
    .cta p { font-size: 20px; color: #8b949e; margin-bottom: 40px; max-width: 500px; margin-left: auto; margin-right: auto; }

    /* Footer */
    .footer { padding: 60px 0 30px; border-top: 1px solid #30363d; }
    .footer-grid { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 48px; margin-bottom: 48px; }
    .footer-brand p { color: #8b949e; font-size: 14px; margin-top: 16px; max-width: 280px; line-height: 1.7; }
    .footer-links h4 { font-size: 14px; font-weight: 600; margin-bottom: 20px; }
    .footer-links ul { list-style: none; }
    .footer-links li { margin-bottom: 12px; }
    .footer-links a { color: #8b949e; font-size: 14px; transition: color 0.2s; }
    .footer-links a:hover { color: #58a6ff; }
    .footer-bottom { padding-top: 24px; border-top: 1px solid #30363d; display: flex; justify-content: space-between; align-items: center; color: #8b949e; font-size: 14px; flex-wrap: wrap; gap: 16px; }
    .footer-social { display: flex; gap: 16px; }
    .footer-social a { color: #8b949e; transition: color 0.2s; }
    .footer-social a:hover { color: #58a6ff; }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links, .nav-cta { display: none; }
      .hero { padding: 120px 0 60px; }
      .hero h1 { font-size: 32px; }
      .section { padding: 60px 0; }
      .section-header h2 { font-size: 28px; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">LaunchPad</a>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#" class="btn btn-outline">Log In</a>
        <a href="#" class="btn btn-primary">Get Started Free</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <span class="hero-badge">🚀 Now in Public Beta — Join 10,000+ Founders</span>
      <h1>Build and Launch Your <span>Startup</span> Faster Than Ever</h1>
      <p>The all-in-one platform to validate ideas, build MVPs, and launch products. No coding required. Start free today.</p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-primary btn-lg">Start Building Free →</a>
        <a href="#" class="btn btn-outline btn-lg">Watch Demo</a>
      </div>
      <div class="hero-image">
        <img src="https://placehold.co/900x500/161b22/58a6ff?text=Product+Dashboard+Preview" alt="LaunchPad Dashboard">
      </div>
    </div>
  </section>

  <section class="logos">
    <div class="container">
      <p>Trusted by teams at leading companies</p>
      <div class="logos-grid">
        <img src="https://placehold.co/120x32/8b949e/8b949e?text=Stripe" alt="Stripe">
        <img src="https://placehold.co/120x32/8b949e/8b949e?text=Vercel" alt="Vercel">
        <img src="https://placehold.co/120x32/8b949e/8b949e?text=Linear" alt="Linear">
        <img src="https://placehold.co/120x32/8b949e/8b949e?text=Notion" alt="Notion">
        <img src="https://placehold.co/120x32/8b949e/8b949e?text=Figma" alt="Figma">
      </div>
    </div>
  </section>

  <section class="section" id="features">
    <div class="container">
      <div class="section-header">
        <h2>Everything You Need to Launch</h2>
        <p>Powerful tools designed to help founders move fast and build products that users love.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Fast Performance</h3>
          <p>Deploy in seconds with our globally distributed infrastructure. Your users deserve speed, and we deliver sub-100ms response times worldwide.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Enterprise-Grade Security</h3>
          <p>Bank-level encryption, SOC 2 Type II compliance, and automatic backups keep your data and your customers' data completely safe.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Real-Time Analytics</h3>
          <p>Understand your users with powerful analytics dashboards. Track conversions, engagement, and revenue in real-time.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔌</div>
          <h3>100+ Integrations</h3>
          <p>Connect with tools you already use. Stripe, Slack, GitHub, Zapier, and more work out of the box with zero configuration.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>Fully Customizable</h3>
          <p>Make it yours with custom themes, branding, CSS overrides, and white-label options for your business.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Team Collaboration</h3>
          <p>Work together seamlessly with real-time collaboration, comments, version history, and role-based permissions.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <h2>How It Works</h2>
        <p>Get started in minutes, not months. Our streamlined process gets you from idea to launch faster than ever.</p>
      </div>
      <div class="steps-grid">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Create Your Account</h3>
          <p>Sign up in 30 seconds with your email or Google account. No credit card required to start building.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Build Your Product</h3>
          <p>Use our intuitive drag-and-drop builder to create your MVP. Choose from 50+ templates or start from scratch.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Launch & Scale</h3>
          <p>Go live with one click. We handle hosting, SSL, CDN, and scaling automatically as you grow.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Loved by Founders Worldwide</h2>
        <p>Join thousands of entrepreneurs who've successfully launched with LaunchPad.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p class="testimonial-text">"LaunchPad helped us go from idea to our first paying customers in just 3 weeks. The speed and simplicity is incredible. We've since grown to $50K MRR."</p>
          <div class="testimonial-author">
            <img src="https://placehold.co/48x48/58a6ff/ffffff?text=SC" alt="Sarah Chen" class="testimonial-avatar">
            <div class="testimonial-info">
              <h4>Sarah Chen</h4>
              <span>Founder & CEO, TechFlow</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-text">"We've tried every no-code tool out there. Nothing comes close to the power and flexibility of LaunchPad. It's become essential to our workflow."</p>
          <div class="testimonial-author">
            <img src="https://placehold.co/48x48/a371f7/ffffff?text=MJ" alt="Marcus Johnson" class="testimonial-avatar">
            <div class="testimonial-info">
              <h4>Marcus Johnson</h4>
              <span>CEO, BuildFast</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-text">"The analytics and insights alone are worth 10x the price. We finally understand our users and can iterate faster than ever before."</p>
          <div class="testimonial-author">
            <img src="https://placehold.co/48x48/3fb950/ffffff?text=ER" alt="Emily Rodriguez" class="testimonial-avatar">
            <div class="testimonial-info">
              <h4>Emily Rodriguez</h4>
              <span>Product Lead, Startup.io</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Start free, upgrade when you're ready. No hidden fees, no surprises, cancel anytime.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Starter</h3>
          <div class="pricing-price">$0<span>/month</span></div>
          <p class="pricing-desc">Perfect for side projects and testing ideas.</p>
          <ul class="pricing-features">
            <li>Up to 1,000 monthly users</li>
            <li>Basic analytics dashboard</li>
            <li>Community support</li>
            <li>1 team member</li>
            <li>LaunchPad subdomain</li>
          </ul>
          <a href="#" class="btn btn-outline">Get Started Free</a>
        </div>
        <div class="pricing-card featured">
          <span class="pricing-badge">Most Popular</span>
          <h3>Pro</h3>
          <div class="pricing-price">$49<span>/month</span></div>
          <p class="pricing-desc">For growing startups ready to scale.</p>
          <ul class="pricing-features">
            <li>Unlimited monthly users</li>
            <li>Advanced analytics & reports</li>
            <li>Priority email support</li>
            <li>10 team members</li>
            <li>Custom domain & SSL</li>
            <li>API access</li>
            <li>Remove LaunchPad branding</li>
          </ul>
          <a href="#" class="btn btn-primary">Start 14-Day Free Trial</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="pricing-price">Custom</div>
          <p class="pricing-desc">For large teams with specific needs.</p>
          <ul class="pricing-features">
            <li>Everything in Pro</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations</li>
            <li>99.99% SLA guarantee</li>
            <li>On-premise deployment option</li>
            <li>Security review & compliance</li>
          </ul>
          <a href="#" class="btn btn-outline">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <h2>Ready to Launch Your Startup?</h2>
      <p>Join 10,000+ founders building the future. Start free today, no credit card required.</p>
      <a href="#" class="btn btn-primary btn-lg">Start Building Free →</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo">LaunchPad</a>
          <p>The fastest way to build and launch your startup. Trusted by founders and teams worldwide since 2020.</p>
        </div>
        <div class="footer-links">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Roadmap</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Kit</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 LaunchPad Inc. All rights reserved.</span>
        <div class="footer-social">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`,
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LaunchPad - Build Your Startup</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><div class="container"><a href="#" class="logo">LaunchPad</a><ul class="nav-links"><li><a href="#features">Features</a></li><li><a href="#pricing">Pricing</a></li></ul><div class="nav-cta"><a href="#" class="btn btn-outline">Log In</a><a href="#" class="btn btn-primary">Get Started</a></div></div></nav>
  <section class="hero"><div class="container"><span class="hero-badge">🚀 Now in Public Beta</span><h1>Build Your <span>Startup</span> Faster</h1><p>The all-in-one platform for founders. Start free today.</p><div class="hero-buttons"><a href="#" class="btn btn-primary btn-lg">Start Free →</a><a href="#" class="btn btn-outline btn-lg">Watch Demo</a></div><div class="hero-image"><img src="https://placehold.co/900x500/161b22/58a6ff?text=Dashboard" alt="Dashboard"></div></div></section>
  <section class="logos"><div class="container"><p>Trusted by teams at</p><div class="logos-grid"><img src="https://placehold.co/100x30/8b949e/8b949e?text=Stripe" alt=""><img src="https://placehold.co/100x30/8b949e/8b949e?text=Vercel" alt=""><img src="https://placehold.co/100x30/8b949e/8b949e?text=Linear" alt=""></div></div></section>
  <section class="section" id="features"><div class="container"><div class="section-header"><h2>Everything You Need</h2><p>Powerful tools for founders.</p></div><div class="features-grid"><div class="feature-card"><div class="feature-icon">⚡</div><h3>Lightning Fast</h3><p>Deploy in seconds globally.</p></div><div class="feature-card"><div class="feature-icon">🔒</div><h3>Secure</h3><p>Enterprise-grade security.</p></div><div class="feature-card"><div class="feature-icon">📊</div><h3>Analytics</h3><p>Real-time insights.</p></div></div></div></section>
  <section class="section section-dark" id="pricing"><div class="container"><div class="section-header"><h2>Pricing</h2></div><div class="pricing-grid"><div class="pricing-card"><h3>Free</h3><div class="pricing-price">$0</div><ul class="pricing-features"><li>1,000 users</li><li>Basic analytics</li></ul><a href="#" class="btn btn-outline">Start Free</a></div><div class="pricing-card featured"><span class="pricing-badge">Popular</span><h3>Pro</h3><div class="pricing-price">$49<span>/mo</span></div><ul class="pricing-features"><li>Unlimited users</li><li>Advanced analytics</li><li>Priority support</li></ul><a href="#" class="btn btn-primary">Start Trial</a></div></div></div></section>
  <section class="cta"><div class="container"><h2>Ready to Launch?</h2><p>Start building today.</p><a href="#" class="btn btn-primary btn-lg">Get Started →</a></div></section>
  <footer class="footer"><div class="container"><div class="footer-bottom"><span>© 2024 LaunchPad</span></div></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0d1117; color: #e6edf3; line-height: 1.6; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(13,17,23,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #30363d; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; height: 72px; }
.logo { font-size: 24px; font-weight: 700; color: #58a6ff; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: #8b949e; }
.nav-cta { display: flex; gap: 12px; }
.btn { padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
.btn-primary { background: #58a6ff; color: #fff; }
.btn-primary:hover { background: #79b8ff; }
.btn-outline { background: transparent; border: 1px solid #30363d; color: #e6edf3; }
.btn-lg { padding: 14px 28px; font-size: 16px; }
.hero { padding: 160px 0 100px; text-align: center; }
.hero-badge { display: inline-block; padding: 6px 16px; background: rgba(88,166,255,0.1); border: 1px solid rgba(88,166,255,0.2); border-radius: 50px; font-size: 13px; color: #58a6ff; margin-bottom: 24px; }
.hero h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 800; margin-bottom: 24px; }
.hero h1 span { color: #58a6ff; }
.hero p { font-size: 20px; color: #8b949e; max-width: 600px; margin: 0 auto 40px; }
.hero-buttons { display: flex; gap: 16px; justify-content: center; margin-bottom: 60px; }
.hero-image { max-width: 900px; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 1px solid #30363d; }
.logos { padding: 60px 0; border-bottom: 1px solid #30363d; }
.logos p { text-align: center; color: #8b949e; margin-bottom: 32px; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; }
.logos-grid { display: flex; justify-content: center; gap: 48px; opacity: 0.5; }
.section { padding: 100px 0; }
.section-dark { background: #161b22; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-header h2 { font-size: 40px; margin-bottom: 16px; }
.section-header p { color: #8b949e; font-size: 18px; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.feature-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 32px; transition: all 0.3s; }
.feature-card:hover { border-color: #58a6ff; transform: translateY(-8px); }
.feature-icon { width: 56px; height: 56px; background: rgba(88,166,255,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
.feature-card h3 { font-size: 20px; margin-bottom: 12px; }
.feature-card p { color: #8b949e; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 800px; margin: 0 auto; }
.pricing-card { background: #0d1117; border: 1px solid #30363d; border-radius: 16px; padding: 32px; position: relative; }
.pricing-card.featured { border-color: #58a6ff; }
.pricing-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #58a6ff; color: #fff; padding: 4px 16px; border-radius: 50px; font-size: 12px; }
.pricing-card h3 { font-size: 20px; margin-bottom: 8px; }
.pricing-price { font-size: 48px; font-weight: 700; margin-bottom: 16px; }
.pricing-price span { font-size: 16px; color: #8b949e; }
.pricing-features { list-style: none; margin-bottom: 24px; }
.pricing-features li { padding: 8px 0; color: #8b949e; }
.pricing-features li::before { content: '✓'; color: #58a6ff; margin-right: 8px; }
.pricing-card .btn { width: 100%; }
.cta { padding: 100px 0; text-align: center; }
.cta h2 { font-size: 48px; margin-bottom: 16px; }
.cta p { color: #8b949e; font-size: 20px; margin-bottom: 40px; }
.footer { padding: 40px 0; border-top: 1px solid #30363d; }
.footer-bottom { text-align: center; color: #8b949e; }
@media (max-width: 768px) { .nav-links, .nav-cta { display: none; } .hero h1 { font-size: 32px; } }`
    }
  },

  {
    category: "portfolio",
    tag: "Portfolio",
    name: "Developer Portfolio",
    description: "Professional developer portfolio with about, skills, projects, experience, and contact sections.",
    preview: `<div style="font-family:system-ui;background:#0d1117;color:#fff;padding:12px;border-radius:8px;width:100%;max-width:280px;font-size:10px;">
      <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid #30363d;">
        <div style="width:32px;height:32px;background:linear-gradient(135deg,#58a6ff,#a371f7);border-radius:50%;"></div>
        <div><div style="font-weight:700;">John Doe</div><div style="font-size:8px;color:#8b949e;">Full Stack Developer</div></div>
      </div>
      <div style="padding:8px 0;border-bottom:1px solid #30363d;">
        <div style="font-size:8px;color:#58a6ff;margin-bottom:4px;">SKILLS</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;">
          <span style="background:#21262d;padding:2px 6px;border-radius:3px;font-size:7px;">React</span>
          <span style="background:#21262d;padding:2px 6px;border-radius:3px;font-size:7px;">Node</span>
          <span style="background:#21262d;padding:2px 6px;border-radius:3px;font-size:7px;">Python</span>
        </div>
      </div>
      <div style="padding:8px 0;">
        <div style="font-size:8px;color:#58a6ff;margin-bottom:4px;">PROJECTS</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <div style="background:#161b22;padding:6px;border-radius:4px;height:24px;"></div>
          <div style="background:#161b22;padding:6px;border-radius:4px;height:24px;"></div>
        </div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Full Stack Developer</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0d1117; color: #e6edf3; line-height: 1.7; }
    a { color: #58a6ff; text-decoration: none; transition: color 0.2s; }
    a:hover { color: #79b8ff; }
    img { max-width: 100%; height: auto; }
    .container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(13,17,23,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #30363d; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; height: 64px; }
    .nav-logo { font-size: 20px; font-weight: 700; color: #e6edf3; }
    .nav-logo span { color: #58a6ff; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { color: #8b949e; font-size: 14px; }
    .nav-links a:hover { color: #e6edf3; }

    /* Hero */
    .hero { padding: 140px 0 80px; }
    .hero-content { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
    .hero-text h1 { font-size: 48px; font-weight: 700; margin-bottom: 16px; }
    .hero-text h1 span { color: #58a6ff; }
    .hero-text .subtitle { font-size: 24px; color: #8b949e; margin-bottom: 24px; }
    .hero-text p { color: #8b949e; font-size: 18px; margin-bottom: 32px; max-width: 500px; }
    .hero-buttons { display: flex; gap: 16px; }
    .btn { padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
    .btn-primary { background: #58a6ff; color: #fff; }
    .btn-primary:hover { background: #79b8ff; transform: translateY(-2px); }
    .btn-outline { background: transparent; border: 1px solid #30363d; color: #e6edf3; }
    .btn-outline:hover { border-color: #58a6ff; }
    .hero-image { width: 280px; height: 280px; border-radius: 50%; overflow: hidden; border: 4px solid #30363d; }
    .hero-image img { width: 100%; height: 100%; object-fit: cover; }
    .social-links { display: flex; gap: 16px; margin-top: 32px; }
    .social-links a { color: #8b949e; font-size: 14px; display: flex; align-items: center; gap: 6px; }
    .social-links a:hover { color: #58a6ff; }

    /* Section */
    .section { padding: 80px 0; }
    .section-dark { background: #161b22; }
    .section-header { margin-bottom: 48px; }
    .section-header h2 { font-size: 32px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; }
    .section-header h2::before { content: ''; width: 4px; height: 32px; background: #58a6ff; border-radius: 2px; }
    .section-header p { color: #8b949e; font-size: 16px; margin-left: 16px; }

    /* About */
    .about-content { display: grid; grid-template-columns: 2fr 1fr; gap: 60px; }
    .about-text p { color: #8b949e; font-size: 16px; margin-bottom: 16px; }
    .about-stats { display: grid; gap: 24px; }
    .stat { background: #0d1117; border: 1px solid #30363d; border-radius: 12px; padding: 24px; text-align: center; }
    .stat-number { font-size: 36px; font-weight: 700; color: #58a6ff; }
    .stat-label { color: #8b949e; font-size: 14px; margin-top: 4px; }

    /* Skills */
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
    .skill-category { background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 24px; }
    .skill-category h3 { font-size: 14px; color: #8b949e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-tag { background: #21262d; border: 1px solid #30363d; padding: 6px 12px; border-radius: 6px; font-size: 13px; transition: all 0.2s; }
    .skill-tag:hover { border-color: #58a6ff; color: #58a6ff; }

    /* Projects */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .project-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; overflow: hidden; transition: all 0.3s; }
    .project-card:hover { border-color: #58a6ff; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
    .project-image { height: 200px; overflow: hidden; }
    .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .project-card:hover .project-image img { transform: scale(1.05); }
    .project-content { padding: 24px; }
    .project-content h3 { font-size: 20px; margin-bottom: 8px; }
    .project-content p { color: #8b949e; font-size: 14px; margin-bottom: 16px; }
    .project-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    .project-tech span { background: rgba(88,166,255,0.1); color: #58a6ff; padding: 4px 10px; border-radius: 4px; font-size: 12px; }
    .project-links { display: flex; gap: 16px; }
    .project-links a { color: #8b949e; font-size: 13px; }
    .project-links a:hover { color: #58a6ff; }

    /* Experience */
    .timeline { position: relative; padding-left: 32px; }
    .timeline::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: #30363d; }
    .timeline-item { position: relative; padding-bottom: 40px; }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before { content: ''; position: absolute; left: -32px; top: 6px; width: 16px; height: 16px; background: #58a6ff; border-radius: 50%; border: 3px solid #0d1117; }
    .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
    .timeline-header h3 { font-size: 18px; }
    .timeline-header h3 span { color: #58a6ff; }
    .timeline-date { color: #8b949e; font-size: 14px; background: #21262d; padding: 4px 12px; border-radius: 4px; }
    .timeline-item p { color: #8b949e; font-size: 15px; }
    .timeline-item ul { margin-top: 12px; padding-left: 20px; }
    .timeline-item li { color: #8b949e; font-size: 14px; margin-bottom: 6px; }

    /* Contact */
    .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .contact-info h3 { font-size: 24px; margin-bottom: 16px; }
    .contact-info p { color: #8b949e; margin-bottom: 24px; }
    .contact-links { display: flex; flex-direction: column; gap: 16px; }
    .contact-link { display: flex; align-items: center; gap: 12px; color: #8b949e; font-size: 15px; }
    .contact-link:hover { color: #58a6ff; }
    .contact-form { display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 14px; color: #8b949e; }
    .form-group input, .form-group textarea { background: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 12px 16px; color: #e6edf3; font-size: 14px; font-family: inherit; transition: border-color 0.2s; }
    .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #58a6ff; }
    .form-group textarea { resize: vertical; min-height: 120px; }
    .contact-form .btn { align-self: flex-start; }

    /* Footer */
    .footer { padding: 40px 0; border-top: 1px solid #30363d; text-align: center; }
    .footer p { color: #8b949e; font-size: 14px; }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hero-content { grid-template-columns: 1fr; text-align: center; }
      .hero-image { margin: 0 auto 32px; order: -1; width: 200px; height: 200px; }
      .hero-text p { margin: 0 auto 32px; }
      .hero-buttons { justify-content: center; }
      .social-links { justify-content: center; }
      .about-content { grid-template-columns: 1fr; }
      .contact-content { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="nav-logo">John<span>.</span>dev</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Hi, I'm <span>John Doe</span></h1>
          <p class="subtitle">Full Stack Developer</p>
          <p>I build exceptional digital experiences with modern technologies. Currently focused on building accessible, human-centered products.</p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-outline">View My Work</a>
          </div>
          <div class="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://placehold.co/280x280/161b22/58a6ff?text=Photo" alt="John Doe">
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="about">
    <div class="container">
      <div class="section-header">
        <h2>About Me</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>Hello! I'm John, a passionate full-stack developer based in San Francisco with over 5 years of experience building web applications. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
          <p>My interest in web development started back in 2015 when I decided to try building custom themes for Tumblr — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
          <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.</p>
        </div>
        <div class="about-stats">
          <div class="stat">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">30+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="skills">
    <div class="container">
      <div class="section-header">
        <h2>Skills & Technologies</h2>
        <p>Technologies I've been working with recently</p>
      </div>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <div class="skill-tags">
            <span class="skill-tag">React</span>
            <span class="skill-tag">Next.js</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Tailwind CSS</span>
            <span class="skill-tag">Vue.js</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <div class="skill-tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">GraphQL</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>Tools & DevOps</h3>
          <div class="skill-tags">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Vercel</span>
            <span class="skill-tag">CI/CD</span>
          </div>
        </div>
        <div class="skill-category">
          <h3>Design</h3>
          <div class="skill-tags">
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">Adobe XD</span>
            <span class="skill-tag">Photoshop</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="projects">
    <div class="container">
      <div class="section-header">
        <h2>Featured Projects</h2>
        <p>Some things I've built</p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="https://placehold.co/400x200/161b22/58a6ff?text=Project+1" alt="TaskFlow">
          </div>
          <div class="project-content">
            <h3>TaskFlow</h3>
            <p>A modern project management tool with real-time collaboration, kanban boards, and team analytics.</p>
            <div class="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Socket.io</span>
            </div>
            <div class="project-links">
              <a href="#">Live Demo →</a>
              <a href="#">GitHub →</a>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="https://placehold.co/400x200/161b22/a371f7?text=Project+2" alt="DevBlog">
          </div>
          <div class="project-content">
            <h3>DevBlog</h3>
            <p>A minimal blogging platform for developers with markdown support, syntax highlighting, and SEO optimization.</p>
            <div class="project-tech">
              <span>Next.js</span>
              <span>Prisma</span>
              <span>PostgreSQL</span>
            </div>
            <div class="project-links">
              <a href="#">Live Demo →</a>
              <a href="#">GitHub →</a>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="https://placehold.co/400x200/161b22/3fb950?text=Project+3" alt="WeatherNow">
          </div>
          <div class="project-content">
            <h3>WeatherNow</h3>
            <p>Beautiful weather app with 7-day forecasts, location detection, and severe weather alerts.</p>
            <div class="project-tech">
              <span>Vue.js</span>
              <span>OpenWeather API</span>
              <span>Chart.js</span>
            </div>
            <div class="project-links">
              <a href="#">Live Demo →</a>
              <a href="#">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="experience">
    <div class="container">
      <div class="section-header">
        <h2>Experience</h2>
        <p>Where I've worked</p>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-header">
            <h3>Senior Software Engineer <span>@ TechCorp</span></h3>
            <span class="timeline-date">2022 - Present</span>
          </div>
          <p>Leading development of customer-facing products and mentoring junior developers.</p>
          <ul>
            <li>Led development of microservices architecture serving 10M+ users</li>
            <li>Reduced page load times by 40% through performance optimizations</li>
            <li>Mentored team of 5 junior developers</li>
          </ul>
        </div>
        <div class="timeline-item">
          <div class="timeline-header">
            <h3>Software Engineer <span>@ StartupXYZ</span></h3>
            <span class="timeline-date">2020 - 2022</span>
          </div>
          <p>Built core features and helped scale the platform from 0 to 100K users.</p>
          <ul>
            <li>Developed real-time collaboration features using WebSockets</li>
            <li>Built mobile app with React Native achieving 4.8 star rating</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
          </ul>
        </div>
        <div class="timeline-item">
          <div class="timeline-header">
            <h3>Junior Developer <span>@ AgencyName</span></h3>
            <span class="timeline-date">2019 - 2020</span>
          </div>
          <p>Worked on various client projects and learned best practices.</p>
          <ul>
            <li>Built responsive websites for 20+ clients</li>
            <li>Collaborated with designers to implement pixel-perfect UIs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="contact">
    <div class="container">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p>Let's work together</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Let's talk about your project</h3>
          <p>I'm currently available for freelance work and full-time positions. If you have a project that you want to get started or need help with something, feel free to reach out.</p>
          <div class="contact-links">
            <a href="mailto:john@example.com" class="contact-link">📧 john@example.com</a>
            <a href="#" class="contact-link">📍 San Francisco, CA</a>
            <a href="#" class="contact-link">💼 LinkedIn</a>
            <a href="#" class="contact-link">🐙 GitHub</a>
          </div>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>Designed & Built by John Doe © 2024</p>
    </div>
  </footer>
</body>
</html>`,
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Developer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><div class="container"><a href="#" class="nav-logo">John<span>.</span>dev</a><ul class="nav-links"><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul></div></nav>
  <section class="hero"><div class="container"><div class="hero-content"><div class="hero-text"><h1>Hi, I'm <span>John Doe</span></h1><p class="subtitle">Full Stack Developer</p><p>I build exceptional digital experiences with modern technologies.</p><div class="hero-buttons"><a href="#contact" class="btn btn-primary">Get In Touch</a><a href="#projects" class="btn btn-outline">View Work</a></div></div><div class="hero-image"><img src="https://placehold.co/280x280/161b22/58a6ff?text=Photo" alt="Photo"></div></div></div></section>
  <section class="section section-dark" id="about"><div class="container"><div class="section-header"><h2>About Me</h2></div><p style="color:#8b949e;max-width:700px;">Full-stack developer with 5+ years of experience building web applications. I enjoy creating things that live on the internet.</p></div></section>
  <section class="section" id="projects"><div class="container"><div class="section-header"><h2>Projects</h2></div><div class="projects-grid"><div class="project-card"><div class="project-image"><img src="https://placehold.co/400x200/161b22/58a6ff?text=Project" alt=""></div><div class="project-content"><h3>TaskFlow</h3><p>Project management tool</p><div class="project-tech"><span>React</span><span>Node.js</span></div></div></div></div></div></section>
  <section class="section section-dark" id="contact"><div class="container"><div class="section-header"><h2>Contact</h2></div><p style="color:#8b949e;">john@example.com</p></div></section>
  <footer class="footer"><div class="container"><p>© 2024 John Doe</p></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #0d1117; color: #e6edf3; line-height: 1.7; }
a { color: #58a6ff; text-decoration: none; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(13,17,23,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #30363d; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; height: 64px; }
.nav-logo { font-size: 20px; font-weight: 700; color: #e6edf3; }
.nav-logo span { color: #58a6ff; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: #8b949e; font-size: 14px; }
.hero { padding: 140px 0 80px; }
.hero-content { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
.hero-text h1 { font-size: 48px; margin-bottom: 16px; }
.hero-text h1 span { color: #58a6ff; }
.hero-text .subtitle { font-size: 24px; color: #8b949e; margin-bottom: 24px; }
.hero-text p { color: #8b949e; margin-bottom: 32px; }
.hero-buttons { display: flex; gap: 16px; }
.btn { padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; }
.btn-primary { background: #58a6ff; color: #fff; }
.btn-outline { background: transparent; border: 1px solid #30363d; color: #e6edf3; }
.hero-image { width: 280px; height: 280px; border-radius: 50%; overflow: hidden; border: 4px solid #30363d; }
.hero-image img { width: 100%; height: 100%; object-fit: cover; }
.section { padding: 80px 0; }
.section-dark { background: #161b22; }
.section-header { margin-bottom: 48px; }
.section-header h2 { font-size: 32px; display: flex; align-items: center; gap: 12px; }
.section-header h2::before { content: ''; width: 4px; height: 32px; background: #58a6ff; border-radius: 2px; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.project-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; overflow: hidden; }
.project-image img { width: 100%; height: 200px; object-fit: cover; }
.project-content { padding: 24px; }
.project-content h3 { font-size: 20px; margin-bottom: 8px; }
.project-content p { color: #8b949e; margin-bottom: 16px; }
.project-tech { display: flex; gap: 8px; }
.project-tech span { background: rgba(88,166,255,0.1); color: #58a6ff; padding: 4px 10px; border-radius: 4px; font-size: 12px; }
.footer { padding: 40px 0; border-top: 1px solid #30363d; text-align: center; }
.footer p { color: #8b949e; }
@media (max-width: 768px) { .hero-content { grid-template-columns: 1fr; text-align: center; } .hero-image { margin: 0 auto; order: -1; } }`
    }
  },

  {
    category: "business",
    tag: "Business",
    name: "Coming Soon",
    description: "Countdown landing page with email signup, perfect for product launches and announcements.",
    preview: `<div style="font-family:system-ui;background:#0d1117;color:#fff;padding:16px;border-radius:8px;width:100%;max-width:280px;text-align:center;font-size:10px;">
      <div style="font-size:20px;margin-bottom:8px;">🚀</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px;">Coming Soon</div>
      <div style="font-size:8px;color:#8b949e;margin-bottom:12px;">Something amazing is brewing</div>
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:12px;">
        <div style="background:#161b22;padding:8px 10px;border-radius:6px;"><div style="font-size:14px;font-weight:700;">07</div><div style="font-size:6px;color:#8b949e;">DAYS</div></div>
        <div style="background:#161b22;padding:8px 10px;border-radius:6px;"><div style="font-size:14px;font-weight:700;">12</div><div style="font-size:6px;color:#8b949e;">HRS</div></div>
        <div style="background:#161b22;padding:8px 10px;border-radius:6px;"><div style="font-size:14px;font-weight:700;">45</div><div style="font-size:6px;color:#8b949e;">MIN</div></div>
        <div style="background:#161b22;padding:8px 10px;border-radius:6px;"><div style="font-size:14px;font-weight:700;">30</div><div style="font-size:6px;color:#8b949e;">SEC</div></div>
      </div>
      <div style="display:flex;gap:4px;">
        <div style="flex:1;background:#21262d;padding:6px;border-radius:4px;font-size:8px;color:#8b949e;">Email</div>
        <div style="background:#58a6ff;padding:6px 10px;border-radius:4px;font-size:8px;">Notify</div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon - We're Launching Something Amazing</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0d1117; color: #e6edf3; min-height: 100vh; display: flex; flex-direction: column; }
    a { color: #58a6ff; text-decoration: none; }

    .main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; background: radial-gradient(ellipse at center, #161b22 0%, #0d1117 70%); }
    .container { max-width: 600px; width: 100%; text-align: center; }

    .logo { font-size: 64px; margin-bottom: 32px; animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

    h1 { font-size: clamp(40px, 8vw, 64px); font-weight: 800; margin-bottom: 16px; background: linear-gradient(135deg, #e6edf3 0%, #8b949e 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    .tagline { font-size: 20px; color: #8b949e; margin-bottom: 48px; max-width: 400px; margin-left: auto; margin-right: auto; }

    .countdown { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap; }
    .countdown-item { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px 32px; min-width: 100px; transition: all 0.3s; }
    .countdown-item:hover { border-color: #58a6ff; transform: translateY(-4px); }
    .countdown-number { font-size: 48px; font-weight: 700; color: #58a6ff; line-height: 1; }
    .countdown-label { font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 2px; margin-top: 8px; }

    .signup { max-width: 440px; margin: 0 auto 32px; }
    .signup p { color: #8b949e; margin-bottom: 16px; font-size: 15px; }
    .signup-form { display: flex; gap: 12px; }
    .signup-form input { flex: 1; padding: 14px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 10px; color: #e6edf3; font-size: 16px; outline: none; transition: border-color 0.2s; }
    .signup-form input:focus { border-color: #58a6ff; }
    .signup-form input::placeholder { color: #8b949e; }
    .btn { padding: 14px 28px; background: #58a6ff; color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
    .btn:hover { background: #79b8ff; transform: translateY(-2px); }

    .features { display: flex; gap: 32px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap; }
    .feature { display: flex; align-items: center; gap: 8px; color: #8b949e; font-size: 14px; }
    .feature-icon { font-size: 20px; }

    .social { display: flex; gap: 24px; justify-content: center; }
    .social a { color: #8b949e; font-size: 14px; transition: color 0.2s; display: flex; align-items: center; gap: 6px; }
    .social a:hover { color: #58a6ff; }

    .footer { padding: 24px; text-align: center; border-top: 1px solid #30363d; }
    .footer p { color: #8b949e; font-size: 14px; }

    .progress-bar { width: 100%; max-width: 400px; height: 8px; background: #21262d; border-radius: 4px; margin: 0 auto 16px; overflow: hidden; }
    .progress-fill { height: 100%; width: 65%; background: linear-gradient(90deg, #58a6ff, #a371f7); border-radius: 4px; }
    .progress-text { color: #8b949e; font-size: 13px; margin-bottom: 48px; }

    @media (max-width: 600px) {
      .countdown-item { padding: 16px 20px; min-width: 70px; }
      .countdown-number { font-size: 32px; }
      .signup-form { flex-direction: column; }
      .features { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
  <main class="main">
    <div class="container">
      <div class="logo">🚀</div>
      <h1>Coming Soon</h1>
      <p class="tagline">We're working on something amazing. Be the first to know when we launch.</p>

      <div class="countdown" id="countdown">
        <div class="countdown-item">
          <div class="countdown-number" id="days">00</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number" id="hours">00</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number" id="minutes">00</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number" id="seconds">00</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>

      <div class="progress-bar"><div class="progress-fill"></div></div>
      <p class="progress-text">65% complete — Almost there!</p>

      <div class="signup">
        <p>Get notified when we launch. No spam, we promise.</p>
        <form class="signup-form">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" class="btn">Notify Me</button>
        </form>
      </div>

      <div class="features">
        <div class="feature"><span class="feature-icon">⚡</span> Lightning Fast</div>
        <div class="feature"><span class="feature-icon">🔒</span> Secure by Default</div>
        <div class="feature"><span class="feature-icon">🎨</span> Beautiful Design</div>
      </div>

      <div class="social">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Discord</a>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p>© 2024 YourBrand. All rights reserved.</p>
  </footer>

  <script>
    // Set launch date (14 days from now for demo)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<h2 style="color:#58a6ff">We are live! 🎉</h2>';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Form submission
    document.querySelector('.signup-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#238636';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        this.reset();
      }, 2000);
    });
  </script>
</body>
</html>`,
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="main">
    <div class="container">
      <div class="logo">🚀</div>
      <h1>Coming Soon</h1>
      <p class="tagline">We're working on something amazing.</p>
      <div class="countdown" id="countdown">
        <div class="countdown-item"><div class="countdown-number" id="days">00</div><div class="countdown-label">Days</div></div>
        <div class="countdown-item"><div class="countdown-number" id="hours">00</div><div class="countdown-label">Hours</div></div>
        <div class="countdown-item"><div class="countdown-number" id="minutes">00</div><div class="countdown-label">Minutes</div></div>
        <div class="countdown-item"><div class="countdown-number" id="seconds">00</div><div class="countdown-label">Seconds</div></div>
      </div>
      <div class="signup">
        <form class="signup-form">
          <input type="email" placeholder="Enter your email" required>
          <button type="submit" class="btn">Notify Me</button>
        </form>
      </div>
      <div class="social"><a href="#">Twitter</a><a href="#">Instagram</a><a href="#">LinkedIn</a></div>
    </div>
  </main>
  <footer class="footer"><p>© 2024 YourBrand</p></footer>
  <script src="script.js"></script>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #0d1117; color: #e6edf3; min-height: 100vh; display: flex; flex-direction: column; }
a { color: #58a6ff; text-decoration: none; }
.main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
.container { max-width: 600px; text-align: center; }
.logo { font-size: 64px; margin-bottom: 32px; }
h1 { font-size: clamp(40px, 8vw, 64px); font-weight: 800; margin-bottom: 16px; }
.tagline { font-size: 20px; color: #8b949e; margin-bottom: 48px; }
.countdown { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap; }
.countdown-item { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px 32px; min-width: 100px; }
.countdown-number { font-size: 48px; font-weight: 700; color: #58a6ff; }
.countdown-label { font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 2px; margin-top: 8px; }
.signup { max-width: 440px; margin: 0 auto 32px; }
.signup-form { display: flex; gap: 12px; }
.signup-form input { flex: 1; padding: 14px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 10px; color: #e6edf3; font-size: 16px; }
.signup-form input:focus { outline: none; border-color: #58a6ff; }
.btn { padding: 14px 28px; background: #58a6ff; color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; }
.btn:hover { background: #79b8ff; }
.social { display: flex; gap: 24px; justify-content: center; }
.social a { color: #8b949e; font-size: 14px; }
.social a:hover { color: #58a6ff; }
.footer { padding: 24px; text-align: center; border-top: 1px solid #30363d; }
.footer p { color: #8b949e; font-size: 14px; }
@media (max-width: 600px) { .countdown-item { padding: 16px 20px; min-width: 70px; } .countdown-number { font-size: 32px; } .signup-form { flex-direction: column; } }`,
      js: `const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<h2 style="color:#58a6ff">We are live!</h2>';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn');
  btn.textContent = 'Subscribed! ✓';
  btn.style.background = '#238636';
  setTimeout(() => { btn.textContent = 'Notify Me'; btn.style.background = ''; this.reset(); }, 2000);
});`
    }
  }
];
