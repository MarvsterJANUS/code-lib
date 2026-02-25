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

  // Developer Portfolio - LIGHT theme with GREEN accents
  {
    category: "portfolio",
    tag: "Portfolio",
    name: "Developer Portfolio",
    description: "Clean light-themed portfolio with emerald green accents, modern cards, and professional layout.",
    preview: `<div style="font-family:system-ui;background:#f8fafc;color:#1e293b;padding:12px;border-radius:8px;width:100%;max-width:280px;font-size:10px;border:1px solid #e2e8f0;">
      <div style="display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1px solid #e2e8f0;">
        <div style="width:32px;height:32px;background:linear-gradient(135deg,#10b981,#059669);border-radius:50%;"></div>
        <div><div style="font-weight:700;">Alex Morgan</div><div style="font-size:8px;color:#64748b;">Full Stack Developer</div></div>
      </div>
      <div style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
        <div style="font-size:8px;color:#10b981;margin-bottom:4px;font-weight:600;">SKILLS</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;">
          <span style="background:#d1fae5;color:#065f46;padding:2px 6px;border-radius:3px;font-size:7px;">React</span>
          <span style="background:#d1fae5;color:#065f46;padding:2px 6px;border-radius:3px;font-size:7px;">Node</span>
          <span style="background:#d1fae5;color:#065f46;padding:2px 6px;border-radius:3px;font-size:7px;">Go</span>
        </div>
      </div>
      <div style="padding:8px 0;">
        <div style="font-size:8px;color:#10b981;margin-bottom:4px;font-weight:600;">PROJECTS</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <div style="background:#fff;padding:6px;border-radius:4px;height:24px;border:1px solid #e2e8f0;"></div>
          <div style="background:#fff;padding:6px;border-radius:4px;height:24px;border:1px solid #e2e8f0;"></div>
        </div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Morgan - Full Stack Developer</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.7; }
    a { color: #10b981; text-decoration: none; transition: color 0.2s; }
    a:hover { color: #059669; }
    img { max-width: 100%; height: auto; }
    .container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; height: 64px; }
    .nav-logo { font-size: 20px; font-weight: 700; color: #1e293b; }
    .nav-logo span { color: #10b981; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { color: #64748b; font-size: 14px; font-weight: 500; }
    .nav-links a:hover { color: #10b981; }

    /* Hero */
    .hero { padding: 140px 0 80px; background: linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%); }
    .hero-content { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
    .hero-text h1 { font-size: 48px; font-weight: 700; margin-bottom: 16px; color: #0f172a; }
    .hero-text h1 span { color: #10b981; }
    .hero-text .subtitle { font-size: 22px; color: #10b981; margin-bottom: 24px; font-weight: 500; }
    .hero-text p { color: #64748b; font-size: 18px; margin-bottom: 32px; max-width: 500px; }
    .hero-buttons { display: flex; gap: 16px; }
    .btn { padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
    .btn-primary { background: #10b981; color: #fff; }
    .btn-primary:hover { background: #059669; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(16,185,129,0.2); }
    .btn-outline { background: #fff; border: 2px solid #e2e8f0; color: #1e293b; }
    .btn-outline:hover { border-color: #10b981; color: #10b981; }
    .hero-image { width: 280px; height: 280px; border-radius: 24px; overflow: hidden; border: 4px solid #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    .hero-image img { width: 100%; height: 100%; object-fit: cover; }
    .social-links { display: flex; gap: 16px; margin-top: 32px; }
    .social-links a { color: #64748b; font-size: 14px; display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; }
    .social-links a:hover { color: #10b981; border-color: #10b981; }

    /* Section */
    .section { padding: 80px 0; }
    .section-alt { background: #fff; }
    .section-header { margin-bottom: 48px; }
    .section-header h2 { font-size: 32px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; color: #0f172a; }
    .section-header h2::before { content: ''; width: 4px; height: 32px; background: linear-gradient(180deg, #10b981, #059669); border-radius: 2px; }
    .section-header p { color: #64748b; font-size: 16px; margin-left: 16px; }

    /* About */
    .about-content { display: grid; grid-template-columns: 2fr 1fr; gap: 60px; }
    .about-text p { color: #64748b; font-size: 16px; margin-bottom: 16px; }
    .about-stats { display: grid; gap: 24px; }
    .stat { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; transition: all 0.3s; }
    .stat:hover { border-color: #10b981; box-shadow: 0 10px 30px rgba(16,185,129,0.1); }
    .stat-number { font-size: 36px; font-weight: 700; color: #10b981; }
    .stat-label { color: #64748b; font-size: 14px; margin-top: 4px; }

    /* Skills */
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
    .skill-category { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; transition: all 0.3s; }
    .skill-category:hover { border-color: #10b981; box-shadow: 0 10px 30px rgba(16,185,129,0.1); }
    .skill-category h3 { font-size: 14px; color: #10b981; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; font-weight: 600; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-tag { background: #d1fae5; color: #065f46; padding: 6px 12px; border-radius: 8px; font-size: 13px; transition: all 0.2s; font-weight: 500; }
    .skill-tag:hover { background: #10b981; color: #fff; }

    /* Projects */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .project-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; transition: all 0.3s; }
    .project-card:hover { border-color: #10b981; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(16,185,129,0.15); }
    .project-image { height: 200px; overflow: hidden; }
    .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .project-card:hover .project-image img { transform: scale(1.05); }
    .project-content { padding: 24px; }
    .project-content h3 { font-size: 20px; margin-bottom: 8px; color: #0f172a; }
    .project-content p { color: #64748b; font-size: 14px; margin-bottom: 16px; }
    .project-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    .project-tech span { background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; }
    .project-links { display: flex; gap: 16px; }
    .project-links a { color: #64748b; font-size: 13px; font-weight: 500; }
    .project-links a:hover { color: #10b981; }

    /* Experience */
    .timeline { position: relative; padding-left: 32px; }
    .timeline::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: #d1fae5; }
    .timeline-item { position: relative; padding-bottom: 40px; }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before { content: ''; position: absolute; left: -32px; top: 6px; width: 16px; height: 16px; background: #10b981; border-radius: 50%; border: 3px solid #f8fafc; }
    .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
    .timeline-header h3 { font-size: 18px; color: #0f172a; }
    .timeline-header h3 span { color: #10b981; }
    .timeline-date { color: #065f46; font-size: 14px; background: #d1fae5; padding: 4px 12px; border-radius: 6px; font-weight: 500; }
    .timeline-item p { color: #64748b; font-size: 15px; }
    .timeline-item ul { margin-top: 12px; padding-left: 20px; }
    .timeline-item li { color: #64748b; font-size: 14px; margin-bottom: 6px; }

    /* Contact */
    .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .contact-info h3 { font-size: 24px; margin-bottom: 16px; color: #0f172a; }
    .contact-info p { color: #64748b; margin-bottom: 24px; }
    .contact-links { display: flex; flex-direction: column; gap: 16px; }
    .contact-link { display: flex; align-items: center; gap: 12px; color: #64748b; font-size: 15px; padding: 12px 16px; background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; transition: all 0.2s; }
    .contact-link:hover { color: #10b981; border-color: #10b981; }
    .contact-form { display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 14px; color: #64748b; font-weight: 500; }
    .form-group input, .form-group textarea { background: #fff; border: 2px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; color: #1e293b; font-size: 14px; font-family: inherit; transition: all 0.2s; }
    .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #10b981; box-shadow: 0 0 0 4px rgba(16,185,129,0.1); }
    .form-group textarea { resize: vertical; min-height: 120px; }
    .contact-form .btn { align-self: flex-start; }

    /* Footer */
    .footer { padding: 40px 0; border-top: 1px solid #e2e8f0; text-align: center; background: #fff; }
    .footer p { color: #64748b; font-size: 14px; }

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
      <a href="#" class="nav-logo">Alex<span>.</span>dev</a>
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
          <h1>Hi, I'm <span>Alex Morgan</span></h1>
          <p class="subtitle">Full Stack Developer</p>
          <p>I craft clean, scalable web applications with modern technologies. Passionate about creating elegant solutions to complex problems.</p>
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
          <img src="https://placehold.co/280x280/d1fae5/065f46?text=AM" alt="Alex Morgan">
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="about">
    <div class="container">
      <div class="section-header">
        <h2>About Me</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>Hello! I'm Alex, a passionate full-stack developer based in Austin with over 5 years of experience building web applications. I love turning ideas into elegant, functional code.</p>
          <p>My journey started with curiosity about how websites work. That curiosity evolved into a career building everything from small business sites to enterprise applications used by millions.</p>
          <p>These days, I focus on creating performant, accessible applications using React, Node.js, and Go. When I'm not coding, you'll find me contributing to open source or writing technical articles.</p>
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

  <section class="section section-alt" id="projects">
    <div class="container">
      <div class="section-header">
        <h2>Featured Projects</h2>
        <p>Some things I've built</p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="https://placehold.co/400x200/d1fae5/065f46?text=TaskFlow" alt="TaskFlow">
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
            <img src="https://placehold.co/400x200/ecfdf5/059669?text=DevBlog" alt="DevBlog">
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
            <img src="https://placehold.co/400x200/f0fdf4/047857?text=WeatherNow" alt="WeatherNow">
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

  <section class="section section-alt" id="contact">
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
            <a href="mailto:alex@example.com" class="contact-link">📧 alex@example.com</a>
            <a href="#" class="contact-link">📍 Austin, TX</a>
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
      <p>Designed & Built by Alex Morgan © 2024</p>
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
  <title>Alex Morgan - Developer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><div class="container"><a href="#" class="nav-logo">Alex<span>.</span>dev</a><ul class="nav-links"><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul></div></nav>
  <section class="hero"><div class="container"><div class="hero-content"><div class="hero-text"><h1>Hi, I'm <span>Alex Morgan</span></h1><p class="subtitle">Full Stack Developer</p><p>I craft clean, scalable web applications with modern technologies.</p><div class="hero-buttons"><a href="#contact" class="btn btn-primary">Get In Touch</a><a href="#projects" class="btn btn-outline">View Work</a></div></div><div class="hero-image"><img src="https://placehold.co/280x280/d1fae5/065f46?text=AM" alt="Alex Morgan"></div></div></div></section>
  <section class="section section-alt" id="about"><div class="container"><div class="section-header"><h2>About Me</h2></div><p style="color:#64748b;max-width:700px;">Full-stack developer with 5+ years of experience building web applications. Passionate about creating elegant solutions to complex problems.</p></div></section>
  <section class="section" id="projects"><div class="container"><div class="section-header"><h2>Projects</h2></div><div class="projects-grid"><div class="project-card"><div class="project-image"><img src="https://placehold.co/400x200/d1fae5/065f46?text=TaskFlow" alt=""></div><div class="project-content"><h3>TaskFlow</h3><p>Project management tool</p><div class="project-tech"><span>React</span><span>Node.js</span></div></div></div></div></div></section>
  <section class="section section-alt" id="contact"><div class="container"><div class="section-header"><h2>Contact</h2></div><p style="color:#64748b;">alex@example.com</p></div></section>
  <footer class="footer"><div class="container"><p>© 2024 Alex Morgan</p></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.7; }
a { color: #10b981; text-decoration: none; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; height: 64px; }
.nav-logo { font-size: 20px; font-weight: 700; color: #1e293b; }
.nav-logo span { color: #10b981; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: #64748b; font-size: 14px; }
.hero { padding: 140px 0 80px; background: linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%); }
.hero-content { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
.hero-text h1 { font-size: 48px; margin-bottom: 16px; color: #0f172a; }
.hero-text h1 span { color: #10b981; }
.hero-text .subtitle { font-size: 24px; color: #10b981; margin-bottom: 24px; }
.hero-text p { color: #64748b; margin-bottom: 32px; }
.hero-buttons { display: flex; gap: 16px; }
.btn { padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; }
.btn-primary { background: #10b981; color: #fff; }
.btn-outline { background: #fff; border: 2px solid #e2e8f0; color: #1e293b; }
.hero-image { width: 280px; height: 280px; border-radius: 24px; overflow: hidden; border: 4px solid #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.hero-image img { width: 100%; height: 100%; object-fit: cover; }
.section { padding: 80px 0; }
.section-alt { background: #fff; }
.section-header { margin-bottom: 48px; }
.section-header h2 { font-size: 32px; display: flex; align-items: center; gap: 12px; color: #0f172a; }
.section-header h2::before { content: ''; width: 4px; height: 32px; background: linear-gradient(180deg, #10b981, #059669); border-radius: 2px; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.project-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; }
.project-image img { width: 100%; height: 200px; object-fit: cover; }
.project-content { padding: 24px; }
.project-content h3 { font-size: 20px; margin-bottom: 8px; color: #0f172a; }
.project-content p { color: #64748b; margin-bottom: 16px; }
.project-tech { display: flex; gap: 8px; }
.project-tech span { background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; }
.footer { padding: 40px 0; border-top: 1px solid #e2e8f0; text-align: center; background: #fff; }
.footer p { color: #64748b; }
@media (max-width: 768px) { .hero-content { grid-template-columns: 1fr; text-align: center; } .hero-image { margin: 0 auto; order: -1; } }`
    }
  },

  // Coming Soon - PASTEL GRADIENT with glassmorphism
  {
    category: "business",
    tag: "Business",
    name: "Coming Soon",
    description: "Dreamy pastel gradient launch page with glassmorphism cards and animated background.",
    preview: `<div style="font-family:system-ui;background:linear-gradient(135deg,#fdf4ff,#faf5ff,#f0fdfa);color:#1e1b4b;padding:16px;border-radius:12px;width:100%;max-width:280px;text-align:center;font-size:10px;">
      <div style="font-size:18px;margin-bottom:6px;">✨</div>
      <div style="font-size:13px;font-weight:600;color:#7c3aed;margin-bottom:4px;">Something Special</div>
      <div style="font-size:8px;color:#6b7280;margin-bottom:10px;">is on its way</div>
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:10px;">
        <div style="background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);padding:8px 10px;border-radius:10px;border:1px solid rgba(167,139,250,0.3);"><div style="font-size:14px;font-weight:700;color:#7c3aed;">14</div><div style="font-size:6px;color:#9ca3af;">DAYS</div></div>
        <div style="background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);padding:8px 10px;border-radius:10px;border:1px solid rgba(236,72,153,0.3);"><div style="font-size:14px;font-weight:700;color:#ec4899;">08</div><div style="font-size:6px;color:#9ca3af;">HRS</div></div>
        <div style="background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);padding:8px 10px;border-radius:10px;border:1px solid rgba(52,211,153,0.3);"><div style="font-size:14px;font-weight:700;color:#10b981;">32</div><div style="font-size:6px;color:#9ca3af;">MIN</div></div>
      </div>
      <div style="display:flex;gap:4px;">
        <div style="flex:1;background:rgba(255,255,255,0.8);padding:6px;border-radius:8px;font-size:8px;color:#9ca3af;border:1px solid #e5e7eb;">your@email.com</div>
        <div style="background:linear-gradient(135deg,#a855f7,#ec4899);padding:6px 12px;border-radius:8px;font-size:8px;color:white;font-weight:600;">Notify</div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Launching Soon — Something Special is Coming</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; }
    a { color: #7c3aed; text-decoration: none; }

    /* Animated gradient background */
    .bg-gradient { position: fixed; inset: 0; background: linear-gradient(135deg, #fdf4ff 0%, #faf5ff 25%, #f5f3ff 50%, #f0fdfa 75%, #ecfeff 100%); z-index: -2; }
    .bg-blob { position: fixed; border-radius: 50%; filter: blur(80px); opacity: 0.6; z-index: -1; animation: float 20s ease-in-out infinite; }
    .blob-1 { top: -20%; left: -10%; width: 600px; height: 600px; background: linear-gradient(135deg, #c4b5fd, #a78bfa); }
    .blob-2 { top: 50%; right: -15%; width: 500px; height: 500px; background: linear-gradient(135deg, #fbcfe8, #f9a8d4); animation-delay: -5s; }
    .blob-3 { bottom: -20%; left: 30%; width: 550px; height: 550px; background: linear-gradient(135deg, #a7f3d0, #6ee7b7); animation-delay: -10s; }
    @keyframes float { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -30px) scale(1.05); } 66% { transform: translate(-20px, 20px) scale(0.95); } }

    .main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
    .container { max-width: 650px; width: 100%; text-align: center; }

    .logo { font-size: 72px; margin-bottom: 24px; animation: sparkle 2s ease-in-out infinite; }
    @keyframes sparkle { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.1) rotate(5deg); } }

    h1 { font-size: clamp(36px, 8vw, 56px); font-weight: 700; margin-bottom: 16px; color: #1e1b4b; }
    h1 span { background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    .tagline { font-size: 18px; color: #6b7280; margin-bottom: 48px; max-width: 420px; margin-left: auto; margin-right: auto; line-height: 1.7; }

    .countdown { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; flex-wrap: wrap; }
    .countdown-item { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(167,139,250,0.2); border-radius: 20px; padding: 24px 28px; min-width: 100px; transition: all 0.3s; box-shadow: 0 8px 32px rgba(124,58,237,0.1); }
    .countdown-item:nth-child(1) { border-color: rgba(167,139,250,0.3); }
    .countdown-item:nth-child(2) { border-color: rgba(236,72,153,0.3); }
    .countdown-item:nth-child(3) { border-color: rgba(52,211,153,0.3); }
    .countdown-item:nth-child(4) { border-color: rgba(251,191,36,0.3); }
    .countdown-item:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(124,58,237,0.15); }
    .countdown-number { font-size: 44px; font-weight: 700; line-height: 1; }
    .countdown-item:nth-child(1) .countdown-number { color: #7c3aed; }
    .countdown-item:nth-child(2) .countdown-number { color: #ec4899; }
    .countdown-item:nth-child(3) .countdown-number { color: #10b981; }
    .countdown-item:nth-child(4) .countdown-number { color: #f59e0b; }
    .countdown-label { font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin-top: 8px; }

    .glass-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.5); border-radius: 24px; padding: 40px; margin-bottom: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }

    .signup p { color: #6b7280; margin-bottom: 20px; font-size: 15px; }
    .signup-form { display: flex; gap: 12px; }
    .signup-form input { flex: 1; padding: 16px 24px; background: rgba(255,255,255,0.9); border: 2px solid #e5e7eb; border-radius: 14px; color: #1e1b4b; font-size: 16px; outline: none; transition: all 0.3s; }
    .signup-form input:focus { border-color: #a855f7; box-shadow: 0 0 0 4px rgba(168,85,247,0.1); }
    .signup-form input::placeholder { color: #9ca3af; }
    .btn { padding: 16px 32px; background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff; border: none; border-radius: 14px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s; white-space: nowrap; }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(168,85,247,0.3); }

    .features { display: flex; gap: 32px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
    .feature { display: flex; align-items: center; gap: 10px; color: #6b7280; font-size: 14px; background: rgba(255,255,255,0.6); padding: 10px 18px; border-radius: 50px; }
    .feature-icon { font-size: 18px; }

    .social { display: flex; gap: 16px; justify-content: center; }
    .social a { color: #9ca3af; font-size: 14px; transition: all 0.3s; padding: 12px 20px; background: rgba(255,255,255,0.6); border-radius: 12px; }
    .social a:hover { color: #7c3aed; background: rgba(255,255,255,0.9); }

    .footer { padding: 32px; text-align: center; }
    .footer p { color: #9ca3af; font-size: 14px; }

    @media (max-width: 600px) {
      .countdown-item { padding: 18px 16px; min-width: 70px; }
      .countdown-number { font-size: 32px; }
      .signup-form { flex-direction: column; }
      .features { flex-direction: column; align-items: center; gap: 12px; }
      .glass-card { padding: 28px 20px; }
    }
  </style>
</head>
<body>
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-blob blob-3"></div>

  <main class="main">
    <div class="container">
      <div class="logo">✨</div>
      <h1>Something <span>Special</span> is Coming</h1>
      <p class="tagline">We're crafting an experience you'll love. Join our waitlist to be the first to know when we launch.</p>

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

      <div class="glass-card signup">
        <p>Be the first to experience what we're building. No spam, just good news.</p>
        <form class="signup-form">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" class="btn">Join Waitlist ✨</button>
        </form>
      </div>

      <div class="features">
        <div class="feature"><span class="feature-icon">💜</span> Made with Love</div>
        <div class="feature"><span class="feature-icon">🌈</span> Beautifully Crafted</div>
        <div class="feature"><span class="feature-icon">🚀</span> Lightning Fast</div>
      </div>

      <div class="social">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p>© 2024 Dreamscape. Crafted with ✨</p>
  </footer>

  <script>
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="glass-card" style="padding:32px;"><h2 style="color:#a855f7;font-size:32px;">We\\'re Live! 🎉</h2></div>';
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
      const originalText = btn.textContent;
      btn.textContent = "You're In! 💜";
      btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        this.reset();
      }, 2500);
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
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <main class="main">
    <div class="container">
      <div class="logo">✨</div>
      <h1>Something <span>Special</span> is Coming</h1>
      <p class="tagline">Join our waitlist to be first to know.</p>
      <div class="countdown" id="countdown">
        <div class="countdown-item"><div class="countdown-number" id="days">00</div><div class="countdown-label">Days</div></div>
        <div class="countdown-item"><div class="countdown-number" id="hours">00</div><div class="countdown-label">Hours</div></div>
        <div class="countdown-item"><div class="countdown-number" id="minutes">00</div><div class="countdown-label">Minutes</div></div>
        <div class="countdown-item"><div class="countdown-number" id="seconds">00</div><div class="countdown-label">Seconds</div></div>
      </div>
      <div class="glass-card signup">
        <form class="signup-form">
          <input type="email" placeholder="your@email.com" required>
          <button type="submit" class="btn">Join Waitlist</button>
        </form>
      </div>
      <div class="social"><a href="#">Twitter</a><a href="#">Instagram</a><a href="#">TikTok</a></div>
    </div>
  </main>
  <footer class="footer"><p>© 2024 Dreamscape</p></footer>
  <script src="script.js"></script>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; min-height: 100vh; display: flex; flex-direction: column; color: #1e1b4b; }
a { color: #7c3aed; text-decoration: none; }
.bg-gradient { position: fixed; inset: 0; background: linear-gradient(135deg, #fdf4ff, #faf5ff, #f0fdfa); z-index: -2; }
.bg-blob { position: fixed; border-radius: 50%; filter: blur(80px); opacity: 0.5; z-index: -1; }
.blob-1 { top: -20%; left: -10%; width: 500px; height: 500px; background: linear-gradient(135deg, #c4b5fd, #a78bfa); }
.blob-2 { bottom: -20%; right: -10%; width: 400px; height: 400px; background: linear-gradient(135deg, #fbcfe8, #f9a8d4); }
.main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
.container { max-width: 600px; text-align: center; }
.logo { font-size: 64px; margin-bottom: 24px; }
h1 { font-size: clamp(32px, 8vw, 48px); font-weight: 700; margin-bottom: 16px; }
h1 span { background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.tagline { font-size: 18px; color: #6b7280; margin-bottom: 48px; }
.countdown { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
.countdown-item { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(167,139,250,0.2); border-radius: 16px; padding: 20px 24px; min-width: 80px; }
.countdown-item:nth-child(1) .countdown-number { color: #7c3aed; }
.countdown-item:nth-child(2) .countdown-number { color: #ec4899; }
.countdown-item:nth-child(3) .countdown-number { color: #10b981; }
.countdown-item:nth-child(4) .countdown-number { color: #f59e0b; }
.countdown-number { font-size: 40px; font-weight: 700; }
.countdown-label { font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin-top: 8px; }
.glass-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
.signup-form { display: flex; gap: 12px; }
.signup-form input { flex: 1; padding: 14px 20px; background: white; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 16px; }
.signup-form input:focus { outline: none; border-color: #a855f7; }
.btn { padding: 14px 28px; background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff; border: none; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; }
.social { display: flex; gap: 16px; justify-content: center; }
.social a { color: #9ca3af; padding: 10px 16px; background: rgba(255,255,255,0.6); border-radius: 10px; font-size: 14px; }
.social a:hover { color: #7c3aed; }
.footer { padding: 24px; text-align: center; }
.footer p { color: #9ca3af; font-size: 14px; }
@media (max-width: 600px) { .countdown-item { padding: 14px 16px; min-width: 65px; } .countdown-number { font-size: 28px; } .signup-form { flex-direction: column; } }`,
      js: `const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<div class="glass-card"><h2 style="color:#a855f7">We\\'re Live! 🎉</h2></div>';
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
  btn.textContent = "You're In! 💜";
  btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
  setTimeout(() => { btn.textContent = 'Join Waitlist'; btn.style.background = ''; this.reset(); }, 2500);
});`
    }
  },

  // Photography Portfolio - LIGHT ELEGANT cream/terracotta theme
  {
    category: "portfolio",
    tag: "Portfolio",
    name: "Photography Portfolio",
    description: "Elegant light theme with cream background, warm terracotta accents, and serif typography for photographers.",
    preview: `<div style="font-family:Georgia,serif;background:#faf8f5;color:#2d2a26;padding:12px;border-radius:8px;width:100%;max-width:280px;font-size:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:10px;border-bottom:1px solid #e8e4de;">
        <span style="font-style:italic;font-size:11px;">Elena Studios</span>
        <div style="display:flex;gap:10px;font-size:8px;color:#8b8578;"><span>Work</span><span>About</span></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;padding:12px 0;">
        <div style="background:#c9a87c;height:50px;"></div>
        <div style="background:#e8e4de;height:50px;"></div>
      </div>
      <div style="text-align:center;font-size:8px;color:#8b8578;font-style:italic;">Timeless moments captured</div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elena Studios — Fine Art Photography</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, 'Times New Roman', serif; background: #faf8f5; color: #2d2a26; line-height: 1.8; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; height: auto; display: block; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }

    /* Navbar */
    .navbar { padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 24px; font-style: italic; font-weight: 400; }
    .nav-links { display: flex; gap: 48px; }
    .nav-links a { font-size: 14px; color: #8b8578; letter-spacing: 1px; transition: color 0.3s; }
    .nav-links a:hover { color: #c9a87c; }

    /* Hero */
    .hero { height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 24px; }
    .hero h1 { font-size: clamp(48px, 10vw, 120px); font-weight: 400; font-style: italic; margin-bottom: 24px; color: #2d2a26; }
    .hero p { font-size: 18px; color: #8b8578; letter-spacing: 3px; text-transform: uppercase; }

    /* Gallery */
    .gallery { padding: 80px 0; }
    .gallery-header { text-align: center; margin-bottom: 64px; }
    .gallery-header span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; }
    .gallery-header h2 { font-size: 42px; font-weight: 400; margin-top: 16px; }
    .gallery-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
    .gallery-item { overflow: hidden; position: relative; }
    .gallery-item.wide { grid-column: span 8; }
    .gallery-item.narrow { grid-column: span 4; }
    .gallery-item.half { grid-column: span 6; }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
    .gallery-item:hover img { transform: scale(1.05); }
    .gallery-overlay { position: absolute; inset: 0; background: rgba(201,168,124,0.9); opacity: 0; transition: opacity 0.4s; display: flex; align-items: center; justify-content: center; flex-direction: column; color: #fff; }
    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .gallery-overlay h3 { font-size: 24px; font-weight: 400; margin-bottom: 8px; }
    .gallery-overlay span { font-size: 14px; letter-spacing: 2px; text-transform: uppercase; }

    /* About */
    .about { padding: 120px 0; background: #fff; }
    .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-image { position: relative; }
    .about-image img { width: 100%; }
    .about-image::after { content: ''; position: absolute; top: 32px; left: 32px; right: -32px; bottom: -32px; border: 1px solid #c9a87c; z-index: -1; }
    .about-text span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 24px; }
    .about-text h2 { font-size: 40px; font-weight: 400; margin-bottom: 32px; line-height: 1.3; }
    .about-text p { color: #8b8578; font-size: 16px; margin-bottom: 24px; }
    .signature { font-family: 'Brush Script MT', cursive; font-size: 36px; color: #c9a87c; margin-top: 32px; }

    /* Services */
    .services { padding: 120px 0; background: #f5f2ed; }
    .services-header { text-align: center; margin-bottom: 64px; }
    .services-header span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; }
    .services-header h2 { font-size: 42px; font-weight: 400; margin-top: 16px; }
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
    .service-card { text-align: center; padding: 48px 32px; background: #fff; transition: all 0.3s; }
    .service-card:hover { box-shadow: 0 20px 60px rgba(45,42,38,0.1); transform: translateY(-8px); }
    .service-icon { font-size: 48px; margin-bottom: 24px; }
    .service-card h3 { font-size: 24px; font-weight: 400; margin-bottom: 16px; }
    .service-card p { color: #8b8578; font-size: 15px; margin-bottom: 24px; }
    .service-price { font-size: 14px; color: #c9a87c; letter-spacing: 2px; }

    /* Contact */
    .contact { padding: 120px 0; text-align: center; }
    .contact span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 24px; }
    .contact h2 { font-size: 48px; font-weight: 400; margin-bottom: 32px; }
    .contact-email { font-size: 28px; color: #c9a87c; display: inline-block; border-bottom: 1px solid #c9a87c; padding-bottom: 4px; transition: all 0.3s; }
    .contact-email:hover { color: #2d2a26; border-color: #2d2a26; }
    .social-links { display: flex; justify-content: center; gap: 32px; margin-top: 48px; }
    .social-links a { font-size: 14px; color: #8b8578; letter-spacing: 2px; text-transform: uppercase; transition: color 0.3s; }
    .social-links a:hover { color: #c9a87c; }

    /* Footer */
    .footer { padding: 48px; text-align: center; border-top: 1px solid #e8e4de; }
    .footer p { font-size: 14px; color: #8b8578; }

    @media (max-width: 768px) {
      .navbar { padding: 24px; }
      .nav-links { display: none; }
      .gallery-item.wide, .gallery-item.narrow, .gallery-item.half { grid-column: span 12; }
      .about-content, .services-grid { grid-template-columns: 1fr; }
      .about-image::after { display: none; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="#" class="logo">Elena Studios</a>
    <div class="nav-links">
      <a href="#gallery">Portfolio</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="hero">
    <div>
      <h1>Timeless Moments</h1>
      <p>Fine Art Photography</p>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <div class="container">
      <div class="gallery-header">
        <span>Selected Works</span>
        <h2>Portfolio</h2>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item wide">
          <img src="https://placehold.co/800x500/e8e4de/8b8578?text=Editorial+Portrait" alt="Editorial">
          <div class="gallery-overlay"><h3>Golden Hour</h3><span>Editorial</span></div>
        </div>
        <div class="gallery-item narrow">
          <img src="https://placehold.co/400x500/c9a87c/fff?text=Fashion" alt="Fashion">
          <div class="gallery-overlay"><h3>Autumn Collection</h3><span>Fashion</span></div>
        </div>
        <div class="gallery-item half">
          <img src="https://placehold.co/600x400/d4c4b0/8b8578?text=Wedding" alt="Wedding">
          <div class="gallery-overlay"><h3>Sarah & James</h3><span>Wedding</span></div>
        </div>
        <div class="gallery-item half">
          <img src="https://placehold.co/600x400/8b9a7d/fff?text=Nature" alt="Nature">
          <div class="gallery-overlay"><h3>Morning Mist</h3><span>Landscape</span></div>
        </div>
        <div class="gallery-item narrow">
          <img src="https://placehold.co/400x600/2d2a26/c9a87c?text=Portrait" alt="Portrait">
          <div class="gallery-overlay"><h3>Elegance</h3><span>Portrait</span></div>
        </div>
        <div class="gallery-item wide">
          <img src="https://placehold.co/800x400/f5f2ed/8b8578?text=Product+Photography" alt="Product">
          <div class="gallery-overlay"><h3>Luxe Beauty</h3><span>Commercial</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img src="https://placehold.co/500x600/e8e4de/8b8578?text=Elena+Portrait" alt="Elena">
        </div>
        <div class="about-text">
          <span>About</span>
          <h2>Capturing the beauty in every moment</h2>
          <p>With over 15 years of experience in fine art and editorial photography, I bring a distinctive eye for elegance and emotion to every project. Based in Paris, I work with clients worldwide who appreciate timeless imagery.</p>
          <p>My approach combines classical composition with natural light to create photographs that feel both intimate and grand. Every session is a collaboration, a shared journey to discover and preserve what makes you unique.</p>
          <div class="signature">Elena</div>
        </div>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="container">
      <div class="services-header">
        <span>What I Offer</span>
        <h2>Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">📸</div>
          <h3>Portrait Sessions</h3>
          <p>Intimate portrait sessions in natural light, capturing your authentic essence.</p>
          <span class="service-price">From €500</span>
        </div>
        <div class="service-card">
          <div class="service-icon">💍</div>
          <h3>Weddings</h3>
          <p>Documentary-style coverage of your special day, from preparation to celebration.</p>
          <span class="service-price">From €3,000</span>
        </div>
        <div class="service-card">
          <div class="service-icon">✨</div>
          <h3>Commercial</h3>
          <p>Elevated product and brand photography for discerning businesses.</p>
          <span class="service-price">From €1,500</span>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <span>Get in Touch</span>
      <h2>Let's Create Together</h2>
      <a href="mailto:hello@elenastudios.com" class="contact-email">hello@elenastudios.com</a>
      <div class="social-links">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">Behance</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>© 2024 Elena Studios — Paris, France</p>
  </footer>
</body>
</html>`,
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elena Studios</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><a href="#" class="logo">Elena Studios</a><div class="nav-links"><a href="#gallery">Portfolio</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
  <section class="hero"><div><h1>Timeless Moments</h1><p>Fine Art Photography</p></div></section>
  <section class="gallery" id="gallery">
    <div class="container">
      <div class="gallery-header"><span>Selected Works</span><h2>Portfolio</h2></div>
      <div class="gallery-grid">
        <div class="gallery-item wide"><img src="https://placehold.co/800x500/e8e4de/8b8578?text=Editorial" alt=""><div class="gallery-overlay"><h3>Golden Hour</h3><span>Editorial</span></div></div>
        <div class="gallery-item narrow"><img src="https://placehold.co/400x500/c9a87c/fff?text=Fashion" alt=""><div class="gallery-overlay"><h3>Collection</h3><span>Fashion</span></div></div>
        <div class="gallery-item half"><img src="https://placehold.co/600x400/d4c4b0/8b8578?text=Wedding" alt=""><div class="gallery-overlay"><h3>Sarah & James</h3><span>Wedding</span></div></div>
        <div class="gallery-item half"><img src="https://placehold.co/600x400/8b9a7d/fff?text=Nature" alt=""><div class="gallery-overlay"><h3>Morning Mist</h3><span>Landscape</span></div></div>
      </div>
    </div>
  </section>
  <section class="about" id="about"><div class="container"><div class="about-content"><div class="about-image"><img src="https://placehold.co/500x600/e8e4de/8b8578?text=Elena" alt=""></div><div class="about-text"><span>About</span><h2>Capturing beauty in every moment</h2><p>15 years of experience in fine art photography. Based in Paris.</p></div></div></div></section>
  <section class="contact" id="contact"><div class="container"><span>Get in Touch</span><h2>Let's Create Together</h2><a href="mailto:hello@example.com" class="contact-email">hello@elenastudios.com</a></div></section>
  <footer class="footer"><p>© 2024 Elena Studios</p></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; background: #faf8f5; color: #2d2a26; line-height: 1.8; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.navbar { padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 24px; font-style: italic; }
.nav-links { display: flex; gap: 48px; }
.nav-links a { font-size: 14px; color: #8b8578; letter-spacing: 1px; }
.nav-links a:hover { color: #c9a87c; }
.hero { height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; }
.hero h1 { font-size: clamp(48px, 10vw, 120px); font-weight: 400; font-style: italic; margin-bottom: 24px; }
.hero p { font-size: 18px; color: #8b8578; letter-spacing: 3px; text-transform: uppercase; }
.gallery { padding: 80px 0; }
.gallery-header { text-align: center; margin-bottom: 64px; }
.gallery-header span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; }
.gallery-header h2 { font-size: 42px; font-weight: 400; margin-top: 16px; }
.gallery-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
.gallery-item { overflow: hidden; position: relative; }
.gallery-item.wide { grid-column: span 8; }
.gallery-item.narrow { grid-column: span 4; }
.gallery-item.half { grid-column: span 6; }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; }
.gallery-item:hover img { transform: scale(1.05); }
.gallery-overlay { position: absolute; inset: 0; background: rgba(201,168,124,0.9); opacity: 0; transition: opacity 0.4s; display: flex; align-items: center; justify-content: center; flex-direction: column; color: #fff; }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay h3 { font-size: 24px; font-weight: 400; margin-bottom: 8px; }
.gallery-overlay span { font-size: 14px; letter-spacing: 2px; text-transform: uppercase; }
.about { padding: 120px 0; background: #fff; }
.about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-image img { width: 100%; }
.about-text span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 24px; }
.about-text h2 { font-size: 40px; font-weight: 400; margin-bottom: 32px; }
.about-text p { color: #8b8578; }
.contact { padding: 120px 0; text-align: center; }
.contact span { font-size: 12px; color: #c9a87c; letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 24px; }
.contact h2 { font-size: 48px; font-weight: 400; margin-bottom: 32px; }
.contact-email { font-size: 28px; color: #c9a87c; border-bottom: 1px solid #c9a87c; }
.footer { padding: 48px; text-align: center; border-top: 1px solid #e8e4de; }
.footer p { font-size: 14px; color: #8b8578; }
@media (max-width: 768px) { .nav-links { display: none; } .gallery-item.wide, .gallery-item.narrow, .gallery-item.half { grid-column: span 12; } .about-content { grid-template-columns: 1fr; } }`
    }
  },

  // Tech Conference - BRIGHT PLAYFUL coral/teal theme on white
  {
    category: "landing",
    tag: "Landing",
    name: "Tech Conference",
    description: "Bright, playful event page with coral and teal accents, geometric shapes, and fun interactions for conferences.",
    preview: `<div style="font-family:system-ui;background:#ffffff;color:#1a1a2e;padding:12px;border-radius:12px;width:100%;max-width:280px;font-size:10px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <div style="text-align:center;padding-bottom:10px;border-bottom:2px dashed #f0f0f0;">
        <div style="display:inline-block;background:#ff6b6b;color:white;padding:2px 8px;border-radius:20px;font-size:7px;margin-bottom:6px;">JUNE 2025</div>
        <div style="font-size:14px;font-weight:800;color:#1a1a2e;">Create<span style="color:#ff6b6b;">Con</span></div>
        <div style="font-size:8px;color:#888;">Austin, Texas</div>
      </div>
      <div style="padding:8px 0;display:flex;gap:6px;justify-content:center;">
        <div style="width:28px;height:28px;background:#20c997;border-radius:50%;"></div>
        <div style="width:28px;height:28px;background:#ffd93d;border-radius:50%;"></div>
        <div style="width:28px;height:28px;background:#ff6b6b;border-radius:50%;"></div>
      </div>
      <div style="display:flex;gap:6px;">
        <div style="flex:1;background:#f8f9fa;padding:8px;border-radius:8px;text-align:center;font-size:8px;">$199 Early</div>
        <div style="flex:1;background:#ff6b6b;color:white;padding:8px;border-radius:8px;text-align:center;font-size:8px;font-weight:600;">Get Tickets!</div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CreateCon 2025 — Where Creativity Meets Technology</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff; color: #1a1a2e; line-height: 1.6; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; height: auto; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    /* Colors */
    .coral { color: #ff6b6b; }
    .teal { color: #20c997; }
    .yellow { color: #ffd93d; }
    .bg-coral { background: #ff6b6b; }
    .bg-teal { background: #20c997; }
    .bg-yellow { background: #ffd93d; }

    /* Navbar */
    .navbar { padding: 20px 0; background: #fff; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 20px rgba(0,0,0,0.05); }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 28px; font-weight: 800; }
    .logo span { color: #ff6b6b; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { font-size: 15px; font-weight: 500; color: #666; transition: color 0.2s; }
    .nav-links a:hover { color: #ff6b6b; }
    .btn { padding: 12px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; display: inline-block; }
    .btn-primary { background: #ff6b6b; color: #fff; }
    .btn-primary:hover { background: #ff5252; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(255,107,107,0.3); }
    .btn-outline { background: transparent; border: 2px solid #1a1a2e; color: #1a1a2e; }
    .btn-outline:hover { background: #1a1a2e; color: #fff; }
    .btn-lg { padding: 16px 36px; font-size: 17px; }

    /* Hero */
    .hero { padding: 100px 0 80px; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: #ffd93d; border-radius: 50%; opacity: 0.3; }
    .hero::after { content: ''; position: absolute; bottom: -150px; left: -150px; width: 500px; height: 500px; background: #20c997; border-radius: 50%; opacity: 0.2; }
    .hero-content { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .hero-badge { display: inline-block; padding: 8px 20px; background: #fff5f5; color: #ff6b6b; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 24px; }
    .hero h1 { font-size: clamp(40px, 6vw, 64px); font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
    .hero p { font-size: 18px; color: #666; margin-bottom: 32px; max-width: 500px; }
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .hero-visual { display: flex; gap: 20px; align-items: center; justify-content: center; }
    .hero-card { background: #fff; border-radius: 20px; padding: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
    .hero-card.tilt-left { transform: rotate(-6deg); }
    .hero-card.tilt-right { transform: rotate(6deg); }
    .hero-card h3 { font-size: 18px; margin-bottom: 8px; }
    .hero-card p { font-size: 14px; color: #888; margin: 0; }

    /* Stats Bar */
    .stats-bar { padding: 40px 0; background: #f8f9fa; margin: 60px 0; border-radius: 20px; }
    .stats-grid { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 32px; }
    .stat { text-align: center; }
    .stat-number { font-size: 48px; font-weight: 800; color: #ff6b6b; }
    .stat-label { font-size: 14px; color: #888; text-transform: uppercase; letter-spacing: 1px; }

    /* Section */
    .section { padding: 100px 0; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-tag { display: inline-block; padding: 6px 16px; background: #e8fff8; color: #20c997; border-radius: 50px; font-size: 13px; font-weight: 600; margin-bottom: 16px; }
    .section-header h2 { font-size: 42px; font-weight: 800; margin-bottom: 16px; }
    .section-header p { font-size: 18px; color: #666; max-width: 600px; margin: 0 auto; }

    /* Speakers */
    .speakers-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
    .speaker-card { background: #fff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08); transition: all 0.3s; }
    .speaker-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
    .speaker-image { height: 280px; position: relative; overflow: hidden; }
    .speaker-image img { width: 100%; height: 100%; object-fit: cover; }
    .speaker-tag { position: absolute; top: 16px; left: 16px; padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: 600; color: #fff; }
    .speaker-content { padding: 24px; }
    .speaker-content h3 { font-size: 22px; margin-bottom: 4px; }
    .speaker-content .role { color: #ff6b6b; font-size: 14px; font-weight: 500; margin-bottom: 4px; }
    .speaker-content .company { color: #888; font-size: 14px; }

    /* Schedule */
    .schedule-days { display: flex; justify-content: center; gap: 12px; margin-bottom: 48px; flex-wrap: wrap; }
    .schedule-day { padding: 14px 32px; background: #f8f9fa; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
    .schedule-day:hover, .schedule-day.active { background: #ff6b6b; color: #fff; }
    .schedule-list { max-width: 800px; margin: 0 auto; }
    .schedule-item { display: flex; gap: 24px; padding: 24px; background: #fff; border-radius: 16px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); align-items: center; transition: all 0.2s; }
    .schedule-item:hover { transform: translateX(8px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
    .schedule-time { min-width: 100px; font-weight: 700; color: #20c997; font-size: 15px; }
    .schedule-info { flex: 1; }
    .schedule-info h4 { font-size: 18px; margin-bottom: 4px; }
    .schedule-info p { color: #888; font-size: 14px; margin: 0; }
    .schedule-speaker { display: flex; align-items: center; gap: 12px; }
    .schedule-speaker img { width: 44px; height: 44px; border-radius: 50%; border: 3px solid #ffd93d; }

    /* Tickets */
    .tickets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 1000px; margin: 0 auto; }
    .ticket-card { background: #fff; border-radius: 24px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); position: relative; border: 2px solid #f0f0f0; transition: all 0.3s; }
    .ticket-card:hover { border-color: #ff6b6b; }
    .ticket-card.featured { border-color: #ff6b6b; background: linear-gradient(135deg, #fff5f5 0%, #fff 100%); }
    .ticket-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #ff6b6b; color: #fff; padding: 8px 24px; border-radius: 50px; font-size: 13px; font-weight: 600; }
    .ticket-card h3 { font-size: 24px; margin-bottom: 8px; }
    .ticket-price { font-size: 52px; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
    .ticket-price span { font-size: 18px; color: #888; font-weight: 400; }
    .ticket-desc { color: #888; margin-bottom: 32px; }
    .ticket-features { list-style: none; margin-bottom: 32px; }
    .ticket-features li { padding: 12px 0; display: flex; align-items: center; gap: 12px; border-bottom: 1px dashed #f0f0f0; }
    .ticket-features li::before { content: '✓'; color: #20c997; font-weight: bold; font-size: 18px; }
    .ticket-card .btn { width: 100%; text-align: center; }

    /* Venue */
    .venue-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .venue-image { border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
    .venue-info h3 { font-size: 36px; margin-bottom: 16px; }
    .venue-info p { color: #666; margin-bottom: 32px; font-size: 17px; }
    .venue-details { display: grid; gap: 20px; }
    .venue-detail { display: flex; align-items: center; gap: 16px; padding: 20px; background: #f8f9fa; border-radius: 16px; }
    .venue-icon { width: 52px; height: 52px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
    .venue-detail h4 { font-size: 16px; margin-bottom: 2px; }
    .venue-detail span { color: #888; font-size: 14px; }

    /* CTA */
    .cta { padding: 100px 0; background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%); color: #fff; text-align: center; border-radius: 40px; margin: 60px 24px; }
    .cta h2 { font-size: 48px; font-weight: 800; margin-bottom: 16px; }
    .cta p { font-size: 20px; opacity: 0.9; margin-bottom: 32px; }
    .cta .btn { background: #fff; color: #ff6b6b; }
    .cta .btn:hover { background: #1a1a2e; color: #fff; }

    /* Footer */
    .footer { padding: 60px 0 30px; background: #1a1a2e; color: #fff; }
    .footer-grid { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 48px; margin-bottom: 48px; }
    .footer-brand .logo { color: #fff; margin-bottom: 16px; display: block; }
    .footer-brand p { color: #888; font-size: 14px; }
    .footer-links h4 { font-size: 16px; margin-bottom: 20px; }
    .footer-links ul { list-style: none; }
    .footer-links li { margin-bottom: 12px; }
    .footer-links a { color: #888; font-size: 14px; transition: color 0.2s; }
    .footer-links a:hover { color: #ff6b6b; }
    .footer-bottom { padding-top: 32px; border-top: 1px solid #333; display: flex; justify-content: space-between; color: #888; font-size: 14px; }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hero-content { grid-template-columns: 1fr; text-align: center; }
      .hero-buttons { justify-content: center; }
      .hero-visual { display: none; }
      .venue-content { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
      .cta { margin: 40px 16px; border-radius: 24px; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">Create<span>Con</span></a>
      <ul class="nav-links">
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#tickets">Tickets</a></li>
        <li><a href="#venue">Venue</a></li>
      </ul>
      <a href="#tickets" class="btn btn-primary">Get Tickets</a>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div>
          <span class="hero-badge">📅 June 15-17, 2025 • Austin, TX</span>
          <h1>Where <span class="coral">Creativity</span> Meets Technology</h1>
          <p>Join 2,000+ designers, developers, and creative minds for three days of inspiration, learning, and fun!</p>
          <div class="hero-buttons">
            <a href="#tickets" class="btn btn-primary btn-lg">Get Your Ticket 🎟️</a>
            <a href="#schedule" class="btn btn-outline btn-lg">See Schedule</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card tilt-left">
            <h3>🎨 Design</h3>
            <p>UI/UX, Branding, Motion</p>
          </div>
          <div class="hero-card tilt-right">
            <h3>💻 Code</h3>
            <p>Frontend, Backend, AI</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="stats-bar">
      <div class="stats-grid">
        <div class="stat"><div class="stat-number">40+</div><div class="stat-label">Speakers</div></div>
        <div class="stat"><div class="stat-number">3</div><div class="stat-label">Days</div></div>
        <div class="stat"><div class="stat-number">20+</div><div class="stat-label">Workshops</div></div>
        <div class="stat"><div class="stat-number">2K+</div><div class="stat-label">Attendees</div></div>
      </div>
    </div>
  </div>

  <section class="section" id="speakers">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Amazing Lineup</span>
        <h2>Featured Speakers</h2>
        <p>Learn from industry leaders who are shaping the future of design and technology.</p>
      </div>
      <div class="speakers-grid">
        <div class="speaker-card">
          <div class="speaker-image">
            <img src="https://placehold.co/400x280/ff6b6b/ffffff?text=Maya+Chen" alt="Maya Chen">
            <span class="speaker-tag bg-coral">Keynote</span>
          </div>
          <div class="speaker-content">
            <h3>Maya Chen</h3>
            <p class="role">Head of Design</p>
            <p class="company">Figma</p>
          </div>
        </div>
        <div class="speaker-card">
          <div class="speaker-image">
            <img src="https://placehold.co/400x280/20c997/ffffff?text=Alex+Rivera" alt="Alex Rivera">
            <span class="speaker-tag bg-teal">Workshop</span>
          </div>
          <div class="speaker-content">
            <h3>Alex Rivera</h3>
            <p class="role">Staff Engineer</p>
            <p class="company">Vercel</p>
          </div>
        </div>
        <div class="speaker-card">
          <div class="speaker-image">
            <img src="https://placehold.co/400x280/ffd93d/1a1a2e?text=Jordan+Lee" alt="Jordan Lee">
            <span class="speaker-tag bg-yellow" style="color:#1a1a2e;">Talk</span>
          </div>
          <div class="speaker-content">
            <h3>Jordan Lee</h3>
            <p class="role">Creative Director</p>
            <p class="company">Spotify</p>
          </div>
        </div>
        <div class="speaker-card">
          <div class="speaker-image">
            <img src="https://placehold.co/400x280/1a1a2e/ffffff?text=Sam+Patel" alt="Sam Patel">
            <span class="speaker-tag bg-coral">Keynote</span>
          </div>
          <div class="speaker-content">
            <h3>Sam Patel</h3>
            <p class="role">AI Research Lead</p>
            <p class="company">OpenAI</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="schedule" style="background:#f8f9fa;">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">3 Days of Fun</span>
        <h2>Event Schedule</h2>
        <p>Packed with talks, workshops, and networking opportunities.</p>
      </div>
      <div class="schedule-days">
        <button class="schedule-day active">Day 1 — June 15</button>
        <button class="schedule-day">Day 2 — June 16</button>
        <button class="schedule-day">Day 3 — June 17</button>
      </div>
      <div class="schedule-list">
        <div class="schedule-item">
          <span class="schedule-time">9:00 AM</span>
          <div class="schedule-info"><h4>Opening Keynote: The Future of Design</h4><p>Main Stage</p></div>
          <div class="schedule-speaker"><img src="https://placehold.co/44x44/ff6b6b/fff?text=MC" alt=""></div>
        </div>
        <div class="schedule-item">
          <span class="schedule-time">11:00 AM</span>
          <div class="schedule-info"><h4>Building Beautiful UIs with Modern CSS</h4><p>Track A — Design</p></div>
          <div class="schedule-speaker"><img src="https://placehold.co/44x44/20c997/fff?text=AR" alt=""></div>
        </div>
        <div class="schedule-item">
          <span class="schedule-time">12:30 PM</span>
          <div class="schedule-info"><h4>Lunch & Networking 🍕</h4><p>Food Hall</p></div>
        </div>
        <div class="schedule-item">
          <span class="schedule-time">2:00 PM</span>
          <div class="schedule-info"><h4>Workshop: Hands-on with AI Tools</h4><p>Workshop Room 1</p></div>
          <div class="schedule-speaker"><img src="https://placehold.co/44x44/ffd93d/1a1a2e?text=SP" alt=""></div>
        </div>
        <div class="schedule-item">
          <span class="schedule-time">6:00 PM</span>
          <div class="schedule-info"><h4>Welcome Party 🎉</h4><p>Rooftop Terrace</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="tickets">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Limited Spots</span>
        <h2>Get Your Ticket</h2>
        <p>Early bird pricing ends May 1st. Don't miss out!</p>
      </div>
      <div class="tickets-grid">
        <div class="ticket-card">
          <h3>Early Bird</h3>
          <div class="ticket-price">$199 <span>USD</span></div>
          <p class="ticket-desc">Perfect for individual creatives</p>
          <ul class="ticket-features">
            <li>All talks & sessions</li>
            <li>Networking events</li>
            <li>Conference swag</li>
            <li>Lunch included</li>
          </ul>
          <a href="#" class="btn btn-outline">Select Ticket</a>
        </div>
        <div class="ticket-card featured">
          <span class="ticket-badge">🔥 Best Value</span>
          <h3>All Access</h3>
          <div class="ticket-price">$349 <span>USD</span></div>
          <p class="ticket-desc">The complete experience</p>
          <ul class="ticket-features">
            <li>Everything in Early Bird</li>
            <li>All workshops included</li>
            <li>Front row seating</li>
            <li>Speaker dinner invite</li>
            <li>Exclusive swag box</li>
          </ul>
          <a href="#" class="btn btn-primary">Get All Access 🎟️</a>
        </div>
        <div class="ticket-card">
          <h3>Team Pack</h3>
          <div class="ticket-price">$899 <span>for 4</span></div>
          <p class="ticket-desc">Bring your whole team</p>
          <ul class="ticket-features">
            <li>4x All Access passes</li>
            <li>Private team table</li>
            <li>Group photo session</li>
            <li>Team building activity</li>
          </ul>
          <a href="#" class="btn btn-outline">Get Team Pack</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="venue" style="background:#f8f9fa;">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">📍 Location</span>
        <h2>The Venue</h2>
      </div>
      <div class="venue-content">
        <div class="venue-image">
          <img src="https://placehold.co/600x400/1a1a2e/ff6b6b?text=Austin+Convention+Center" alt="Venue">
        </div>
        <div class="venue-info">
          <h3>Austin Convention Center</h3>
          <p>Located in the heart of downtown Austin, just steps away from amazing restaurants, hotels, and the famous 6th Street entertainment district.</p>
          <div class="venue-details">
            <div class="venue-detail">
              <div class="venue-icon">📍</div>
              <div><h4>Address</h4><span>500 E Cesar Chavez St, Austin, TX</span></div>
            </div>
            <div class="venue-detail">
              <div class="venue-icon">✈️</div>
              <div><h4>Airport</h4><span>15 min from Austin-Bergstrom (AUS)</span></div>
            </div>
            <div class="venue-detail">
              <div class="venue-icon">🏨</div>
              <div><h4>Hotels</h4><span>Partner rates from $149/night</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <section class="cta">
      <h2>Ready to Create? 🚀</h2>
      <p>Join us for three amazing days of creativity, code, and community.</p>
      <a href="#tickets" class="btn btn-lg">Get Your Ticket Now</a>
    </section>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo">Create<span>Con</span></a>
          <p>The creative conference for designers and developers. Austin, Texas.</p>
        </div>
        <div class="footer-links">
          <h4>Event</h4>
          <ul>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Workshops</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Attend</h4>
          <ul>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Venue</a></li>
            <li><a href="#">Hotels</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 CreateCon. Made with ❤️ in Austin.</span>
        <span>Privacy • Terms</span>
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
  <title>CreateCon 2025</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><div class="container"><a href="#" class="logo">Create<span>Con</span></a><ul class="nav-links"><li><a href="#speakers">Speakers</a></li><li><a href="#tickets">Tickets</a></li></ul><a href="#tickets" class="btn btn-primary">Get Tickets</a></div></nav>
  <section class="hero"><div class="container"><div class="hero-content"><div><span class="hero-badge">June 15-17, 2025 • Austin</span><h1>Where <span class="coral">Creativity</span> Meets Technology</h1><p>Join 2,000+ designers and developers for three days of inspiration!</p><div class="hero-buttons"><a href="#tickets" class="btn btn-primary btn-lg">Get Tickets</a></div></div></div></div></section>
  <div class="container"><div class="stats-bar"><div class="stats-grid"><div class="stat"><div class="stat-number">40+</div><div class="stat-label">Speakers</div></div><div class="stat"><div class="stat-number">3</div><div class="stat-label">Days</div></div><div class="stat"><div class="stat-number">2K+</div><div class="stat-label">Attendees</div></div></div></div></div>
  <section class="section" id="speakers"><div class="container"><div class="section-header"><span class="section-tag">Speakers</span><h2>Featured Speakers</h2></div><div class="speakers-grid"><div class="speaker-card"><div class="speaker-image"><img src="https://placehold.co/400x280/ff6b6b/fff?text=Maya" alt=""><span class="speaker-tag bg-coral">Keynote</span></div><div class="speaker-content"><h3>Maya Chen</h3><p class="role">Head of Design</p><p class="company">Figma</p></div></div><div class="speaker-card"><div class="speaker-image"><img src="https://placehold.co/400x280/20c997/fff?text=Alex" alt=""><span class="speaker-tag bg-teal">Workshop</span></div><div class="speaker-content"><h3>Alex Rivera</h3><p class="role">Staff Engineer</p><p class="company">Vercel</p></div></div></div></div></section>
  <section class="section" id="tickets" style="background:#f8f9fa;"><div class="container"><div class="section-header"><span class="section-tag">Tickets</span><h2>Get Your Ticket</h2></div><div class="tickets-grid"><div class="ticket-card"><h3>Early Bird</h3><div class="ticket-price">$199</div><ul class="ticket-features"><li>All sessions</li><li>Networking</li><li>Lunch</li></ul><a href="#" class="btn btn-outline">Select</a></div><div class="ticket-card featured"><span class="ticket-badge">Best Value</span><h3>All Access</h3><div class="ticket-price">$349</div><ul class="ticket-features"><li>Everything in Early Bird</li><li>All workshops</li><li>Speaker dinner</li></ul><a href="#" class="btn btn-primary">Get Ticket</a></div></div></div></section>
  <footer class="footer"><div class="container"><div class="footer-bottom"><span>© 2025 CreateCon</span></div></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, sans-serif; background: #fff; color: #1a1a2e; line-height: 1.6; }
a { color: inherit; text-decoration: none; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.coral { color: #ff6b6b; }
.bg-coral { background: #ff6b6b; }
.bg-teal { background: #20c997; }
.navbar { padding: 20px 0; background: #fff; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 20px rgba(0,0,0,0.05); }
.navbar .container { display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 28px; font-weight: 800; }
.logo span { color: #ff6b6b; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { font-size: 15px; color: #666; }
.btn { padding: 12px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; display: inline-block; }
.btn-primary { background: #ff6b6b; color: #fff; }
.btn-primary:hover { background: #ff5252; }
.btn-outline { background: transparent; border: 2px solid #1a1a2e; color: #1a1a2e; }
.btn-lg { padding: 16px 36px; font-size: 17px; }
.hero { padding: 100px 0 80px; }
.hero-badge { display: inline-block; padding: 8px 20px; background: #fff5f5; color: #ff6b6b; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 24px; }
.hero h1 { font-size: clamp(40px, 6vw, 64px); font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
.hero p { font-size: 18px; color: #666; margin-bottom: 32px; }
.hero-buttons { display: flex; gap: 16px; }
.stats-bar { padding: 40px 0; background: #f8f9fa; margin: 60px 0; border-radius: 20px; }
.stats-grid { display: flex; justify-content: space-around; }
.stat { text-align: center; }
.stat-number { font-size: 48px; font-weight: 800; color: #ff6b6b; }
.stat-label { font-size: 14px; color: #888; text-transform: uppercase; }
.section { padding: 100px 0; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-tag { display: inline-block; padding: 6px 16px; background: #e8fff8; color: #20c997; border-radius: 50px; font-size: 13px; font-weight: 600; margin-bottom: 16px; }
.section-header h2 { font-size: 42px; font-weight: 800; }
.speakers-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
.speaker-card { background: #fff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08); }
.speaker-image { height: 280px; position: relative; overflow: hidden; }
.speaker-image img { width: 100%; height: 100%; object-fit: cover; }
.speaker-tag { position: absolute; top: 16px; left: 16px; padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: 600; color: #fff; }
.speaker-content { padding: 24px; }
.speaker-content h3 { font-size: 22px; margin-bottom: 4px; }
.speaker-content .role { color: #ff6b6b; font-size: 14px; }
.speaker-content .company { color: #888; font-size: 14px; }
.tickets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; max-width: 800px; margin: 0 auto; }
.ticket-card { background: #fff; border-radius: 24px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); position: relative; border: 2px solid #f0f0f0; }
.ticket-card.featured { border-color: #ff6b6b; }
.ticket-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #ff6b6b; color: #fff; padding: 8px 24px; border-radius: 50px; font-size: 13px; }
.ticket-card h3 { font-size: 24px; margin-bottom: 8px; }
.ticket-price { font-size: 52px; font-weight: 800; margin-bottom: 24px; }
.ticket-features { list-style: none; margin-bottom: 32px; }
.ticket-features li { padding: 12px 0; display: flex; align-items: center; gap: 12px; border-bottom: 1px dashed #f0f0f0; }
.ticket-features li::before { content: '✓'; color: #20c997; font-weight: bold; }
.ticket-card .btn { width: 100%; text-align: center; }
.footer { padding: 40px 0; background: #1a1a2e; color: #fff; }
.footer-bottom { text-align: center; color: #888; font-size: 14px; }
@media (max-width: 768px) { .nav-links { display: none; } }`
    }
  },

  // Golf Club - CLASSIC hunter green & gold on ivory
  {
    category: "business",
    tag: "Business",
    name: "Golf Club",
    description: "Elegant traditional golf club with hunter green, gold accents, and classic serif typography.",
    preview: `<div style="font-family:Georgia,serif;background:#faf9f6;color:#1a3c34;padding:12px;border-radius:8px;width:100%;max-width:280px;font-size:10px;border:1px solid #e8e4dc;">
      <div style="text-align:center;padding-bottom:10px;border-bottom:1px solid #d4c9a8;">
        <div style="font-size:8px;letter-spacing:2px;color:#c9a227;margin-bottom:2px;">EST. 1924</div>
        <div style="font-size:14px;font-weight:700;color:#0d3b2e;">OAKWOOD</div>
        <div style="font-size:8px;letter-spacing:1px;color:#5a6b5c;">COUNTRY CLUB</div>
      </div>
      <div style="padding:8px 0;display:flex;gap:6px;">
        <div style="flex:1;background:#0d3b2e;color:#c9a227;padding:8px;border-radius:4px;text-align:center;">
          <div style="font-size:12px;font-weight:700;">18</div>
          <div style="font-size:6px;color:#8fa88f;">HOLES</div>
        </div>
        <div style="flex:1;background:#0d3b2e;color:#c9a227;padding:8px;border-radius:4px;text-align:center;">
          <div style="font-size:12px;font-weight:700;">72</div>
          <div style="font-size:6px;color:#8fa88f;">PAR</div>
        </div>
        <div style="flex:1;background:#0d3b2e;color:#c9a227;padding:8px;border-radius:4px;text-align:center;">
          <div style="font-size:12px;font-weight:700;">100</div>
          <div style="font-size:6px;color:#8fa88f;">YEARS</div>
        </div>
      </div>
      <div style="background:#0d3b2e;color:#faf9f6;padding:6px 10px;border-radius:4px;text-align:center;margin-top:6px;font-size:8px;letter-spacing:1px;">REQUEST MEMBERSHIP</div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oakwood Country Club - Est. 1924</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, 'Times New Roman', serif; background: #faf9f6; color: #2c3e2d; line-height: 1.8; }
    a { color: #0d3b2e; text-decoration: none; transition: color 0.3s; }
    a:hover { color: #c9a227; }
    img { max-width: 100%; height: auto; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

    /* Navbar */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(250,249,246,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e8e4dc; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; height: 80px; }
    .nav-logo { text-align: center; }
    .nav-logo .est { font-size: 10px; letter-spacing: 3px; color: #c9a227; }
    .nav-logo .name { font-size: 22px; font-weight: 700; color: #0d3b2e; letter-spacing: 2px; }
    .nav-logo .tagline { font-size: 9px; letter-spacing: 4px; color: #5a6b5c; text-transform: uppercase; }
    .nav-links { display: flex; gap: 40px; list-style: none; }
    .nav-links a { color: #2c3e2d; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; font-family: -apple-system, sans-serif; }
    .nav-links a:hover { color: #c9a227; }

    /* Hero */
    .hero { padding: 180px 0 120px; background: linear-gradient(180deg, #0d3b2e 0%, #1a4d3e 100%); text-align: center; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E"); }
    .hero-content { position: relative; z-index: 1; }
    .hero-badge { display: inline-block; border: 1px solid #c9a227; color: #c9a227; padding: 8px 24px; font-size: 11px; letter-spacing: 4px; margin-bottom: 24px; }
    .hero h1 { font-size: 64px; color: #faf9f6; font-weight: 400; margin-bottom: 16px; letter-spacing: 4px; }
    .hero h1 span { display: block; font-size: 18px; letter-spacing: 8px; color: #c9a227; margin-top: 8px; font-weight: 400; }
    .hero p { color: #8fa88f; font-size: 18px; max-width: 600px; margin: 0 auto 40px; font-style: italic; }
    .hero-buttons { display: flex; gap: 20px; justify-content: center; }
    .btn { padding: 16px 40px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s; font-family: -apple-system, sans-serif; }
    .btn-primary { background: #c9a227; color: #0d3b2e; }
    .btn-primary:hover { background: #d4af37; transform: translateY(-2px); }
    .btn-outline { background: transparent; border: 1px solid #faf9f6; color: #faf9f6; }
    .btn-outline:hover { background: #faf9f6; color: #0d3b2e; }

    /* Section */
    .section { padding: 100px 0; }
    .section-dark { background: #0d3b2e; color: #faf9f6; }
    .section-cream { background: #f5f3ee; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-header .label { font-size: 11px; letter-spacing: 4px; color: #c9a227; text-transform: uppercase; margin-bottom: 16px; display: block; font-family: -apple-system, sans-serif; }
    .section-header h2 { font-size: 42px; font-weight: 400; color: #0d3b2e; margin-bottom: 16px; }
    .section-dark .section-header h2 { color: #faf9f6; }
    .section-header p { color: #5a6b5c; font-size: 18px; max-width: 600px; margin: 0 auto; font-style: italic; }
    .section-dark .section-header p { color: #8fa88f; }
    .divider { width: 60px; height: 2px; background: #c9a227; margin: 0 auto; }

    /* Stats */
    .stats { display: flex; justify-content: center; gap: 60px; padding: 60px 0; border-top: 1px solid #d4c9a8; border-bottom: 1px solid #d4c9a8; margin: 60px 0; }
    .stat { text-align: center; }
    .stat-number { font-size: 56px; color: #c9a227; font-weight: 400; line-height: 1; }
    .stat-label { font-size: 11px; letter-spacing: 3px; color: #5a6b5c; text-transform: uppercase; margin-top: 8px; font-family: -apple-system, sans-serif; }

    /* About */
    .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-image { position: relative; }
    .about-image img { border-radius: 4px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
    .about-image::before { content: ''; position: absolute; top: -20px; left: -20px; right: 20px; bottom: 20px; border: 2px solid #c9a227; border-radius: 4px; z-index: -1; }
    .about-text h3 { font-size: 28px; font-weight: 400; margin-bottom: 24px; color: #0d3b2e; }
    .about-text p { color: #5a6b5c; margin-bottom: 20px; font-size: 16px; }
    .about-text .signature { font-style: italic; color: #c9a227; margin-top: 32px; }

    /* Amenities */
    .amenities-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
    .amenity-card { text-align: center; padding: 40px 30px; background: #faf9f6; border-radius: 4px; transition: all 0.3s; }
    .amenity-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    .amenity-icon { width: 60px; height: 60px; background: #0d3b2e; color: #c9a227; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 24px; }
    .amenity-card h3 { font-size: 20px; font-weight: 400; margin-bottom: 12px; color: #0d3b2e; }
    .amenity-card p { color: #5a6b5c; font-size: 14px; }

    /* Membership */
    .membership-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .membership-card { background: #faf9f6; border-radius: 4px; padding: 50px 40px; text-align: center; border: 1px solid #e8e4dc; transition: all 0.3s; position: relative; }
    .membership-card.featured { border-color: #c9a227; border-width: 2px; }
    .membership-card.featured::before { content: 'MOST POPULAR'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #c9a227; color: #0d3b2e; padding: 6px 20px; font-size: 10px; letter-spacing: 2px; font-family: -apple-system, sans-serif; }
    .membership-card:hover { box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
    .membership-card h3 { font-size: 14px; letter-spacing: 3px; color: #c9a227; margin-bottom: 8px; font-family: -apple-system, sans-serif; }
    .membership-card .price { font-size: 48px; color: #0d3b2e; margin-bottom: 8px; }
    .membership-card .price span { font-size: 16px; color: #5a6b5c; }
    .membership-card .period { font-size: 14px; color: #5a6b5c; margin-bottom: 30px; }
    .membership-features { list-style: none; margin-bottom: 30px; text-align: left; }
    .membership-features li { padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 14px; color: #5a6b5c; display: flex; align-items: center; gap: 12px; }
    .membership-features li::before { content: '✓'; color: #c9a227; font-weight: bold; }
    .membership-card .btn { width: 100%; }

    /* Events */
    .events-list { max-width: 800px; margin: 0 auto; }
    .event-item { display: grid; grid-template-columns: 100px 1fr auto; gap: 40px; align-items: center; padding: 40px 0; border-bottom: 1px solid rgba(250,249,246,0.2); }
    .event-date { text-align: center; }
    .event-date .day { font-size: 42px; color: #c9a227; line-height: 1; }
    .event-date .month { font-size: 12px; letter-spacing: 2px; color: #8fa88f; text-transform: uppercase; font-family: -apple-system, sans-serif; }
    .event-info h3 { font-size: 22px; font-weight: 400; margin-bottom: 8px; }
    .event-info p { color: #8fa88f; font-size: 14px; }
    .event-item .btn { white-space: nowrap; }

    /* Contact */
    .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
    .contact-info h3 { font-size: 28px; font-weight: 400; margin-bottom: 24px; color: #0d3b2e; }
    .contact-info p { color: #5a6b5c; margin-bottom: 32px; }
    .contact-details { display: flex; flex-direction: column; gap: 20px; }
    .contact-item { display: flex; align-items: center; gap: 16px; color: #5a6b5c; }
    .contact-item span { font-size: 20px; }
    .contact-form { display: flex; flex-direction: column; gap: 20px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 11px; letter-spacing: 2px; color: #5a6b5c; text-transform: uppercase; font-family: -apple-system, sans-serif; }
    .form-group input, .form-group textarea, .form-group select { background: #fff; border: 1px solid #e8e4dc; padding: 16px; font-size: 15px; font-family: Georgia, serif; color: #2c3e2d; transition: all 0.3s; }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: #c9a227; }
    .form-group textarea { resize: vertical; min-height: 120px; }

    /* Footer */
    .footer { padding: 60px 0 30px; background: #0d3b2e; color: #faf9f6; text-align: center; }
    .footer-logo { margin-bottom: 24px; }
    .footer-logo .name { font-size: 28px; letter-spacing: 3px; }
    .footer-logo .tagline { font-size: 10px; letter-spacing: 4px; color: #8fa88f; margin-top: 4px; }
    .footer-links { display: flex; justify-content: center; gap: 40px; margin-bottom: 40px; }
    .footer-links a { color: #8fa88f; font-size: 13px; letter-spacing: 1px; font-family: -apple-system, sans-serif; }
    .footer-links a:hover { color: #c9a227; }
    .footer-bottom { padding-top: 30px; border-top: 1px solid rgba(250,249,246,0.1); color: #5a6b5c; font-size: 13px; }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hero h1 { font-size: 42px; }
      .stats { flex-direction: column; gap: 40px; }
      .about-content { grid-template-columns: 1fr; }
      .amenities-grid { grid-template-columns: 1fr; }
      .membership-grid { grid-template-columns: 1fr; }
      .event-item { grid-template-columns: 1fr; text-align: center; gap: 20px; }
      .contact-content { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <ul class="nav-links">
        <li><a href="#about">Heritage</a></li>
        <li><a href="#amenities">Amenities</a></li>
      </ul>
      <div class="nav-logo">
        <div class="est">Est. 1924</div>
        <div class="name">OAKWOOD</div>
        <div class="tagline">Country Club</div>
      </div>
      <ul class="nav-links">
        <li><a href="#membership">Membership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">A Century of Excellence</div>
        <h1>OAKWOOD<span>Country Club</span></h1>
        <p>"Where tradition meets the fairway, and every round is a journey through a century of golfing heritage."</p>
        <div class="hero-buttons">
          <a href="#membership" class="btn btn-primary">Request Membership</a>
          <a href="#contact" class="btn btn-outline">Schedule a Visit</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="container">
      <div class="stats">
        <div class="stat">
          <div class="stat-number">18</div>
          <div class="stat-label">Championship Holes</div>
        </div>
        <div class="stat">
          <div class="stat-number">72</div>
          <div class="stat-label">Par Course</div>
        </div>
        <div class="stat">
          <div class="stat-number">100</div>
          <div class="stat-label">Years of Legacy</div>
        </div>
        <div class="stat">
          <div class="stat-number">7,200</div>
          <div class="stat-label">Yards</div>
        </div>
      </div>

      <div class="about-content">
        <div class="about-image">
          <img src="https://placehold.co/500x600/0d3b2e/c9a227?text=Clubhouse" alt="Oakwood Clubhouse">
        </div>
        <div class="about-text">
          <div class="section-header" style="text-align:left;margin-bottom:24px;">
            <span class="label">Our Heritage</span>
            <h2 style="font-size:36px;">A Legacy of Excellence</h2>
          </div>
          <p>Founded in 1924, Oakwood Country Club has stood as a beacon of golfing excellence for a century. Our championship course, designed by legendary architect William S. Flynn, winds through ancient oak groves and pristine meadows.</p>
          <p>Every fairway tells a story, every green holds memories of champions past. From our meticulously maintained bentgrass greens to our historic Tudor-style clubhouse, we preserve the traditions that make golf the gentleman's game.</p>
          <p>Membership at Oakwood is more than access to world-class facilities—it's an invitation to become part of a storied legacy that spans generations.</p>
          <div class="signature">— The Oakwood Family</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-cream" id="amenities">
    <div class="container">
      <div class="section-header">
        <span class="label">World-Class Facilities</span>
        <h2>Club Amenities</h2>
        <div class="divider" style="margin-top:20px;"></div>
      </div>
      <div class="amenities-grid">
        <div class="amenity-card">
          <div class="amenity-icon">⛳</div>
          <h3>Championship Course</h3>
          <p>18 holes of pristine bentgrass fairways and greens, challenging golfers of all skill levels.</p>
        </div>
        <div class="amenity-card">
          <div class="amenity-icon">🏌️</div>
          <h3>Practice Facility</h3>
          <p>Full-length driving range, short game area, and putting greens with professional instruction.</p>
        </div>
        <div class="amenity-card">
          <div class="amenity-icon">🍽️</div>
          <h3>The Oak Room</h3>
          <p>Fine dining featuring seasonal cuisine, an award-winning wine cellar, and impeccable service.</p>
        </div>
        <div class="amenity-card">
          <div class="amenity-icon">🏊</div>
          <h3>Aquatic Center</h3>
          <p>Olympic-size pool, private cabanas, and a poolside grill for the entire family.</p>
        </div>
        <div class="amenity-card">
          <div class="amenity-icon">🎾</div>
          <h3>Tennis Courts</h3>
          <p>Six Har-Tru clay courts with professional instruction and round-robin tournaments.</p>
        </div>
        <div class="amenity-card">
          <div class="amenity-icon">💆</div>
          <h3>Wellness Spa</h3>
          <p>Full-service spa and fitness center with personal training and wellness programs.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="membership">
    <div class="container">
      <div class="section-header">
        <span class="label">Join Our Family</span>
        <h2>Membership Options</h2>
        <p>Select the membership that best suits your lifestyle</p>
        <div class="divider" style="margin-top:20px;"></div>
      </div>
      <div class="membership-grid">
        <div class="membership-card">
          <h3>SOCIAL</h3>
          <div class="price">$5,000<span>/yr</span></div>
          <div class="period">Plus initiation fee</div>
          <ul class="membership-features">
            <li>Full clubhouse access</li>
            <li>Dining privileges</li>
            <li>Pool & tennis access</li>
            <li>Member events</li>
            <li>Guest privileges (limited)</li>
          </ul>
          <a href="#contact" class="btn btn-outline" style="border-color:#0d3b2e;color:#0d3b2e;">Inquire Now</a>
        </div>
        <div class="membership-card featured">
          <h3>FULL GOLF</h3>
          <div class="price">$15,000<span>/yr</span></div>
          <div class="period">Plus initiation fee</div>
          <ul class="membership-features">
            <li>Unlimited golf access</li>
            <li>Preferred tee times</li>
            <li>All social privileges</li>
            <li>GHIN handicap</li>
            <li>Tournament eligibility</li>
            <li>Unlimited guests</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Inquire Now</a>
        </div>
        <div class="membership-card">
          <h3>LEGACY</h3>
          <div class="price">$25,000<span>/yr</span></div>
          <div class="period">Plus initiation fee</div>
          <ul class="membership-features">
            <li>All full golf benefits</li>
            <li>Private locker room</li>
            <li>Reciprocal club access</li>
            <li>Family membership included</li>
            <li>Priority event booking</li>
            <li>Concierge services</li>
          </ul>
          <a href="#contact" class="btn btn-outline" style="border-color:#0d3b2e;color:#0d3b2e;">Inquire Now</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="events">
    <div class="container">
      <div class="section-header">
        <span class="label">Mark Your Calendar</span>
        <h2>Upcoming Events</h2>
        <div class="divider" style="margin-top:20px;"></div>
      </div>
      <div class="events-list">
        <div class="event-item">
          <div class="event-date">
            <div class="day">15</div>
            <div class="month">March</div>
          </div>
          <div class="event-info">
            <h3>Spring Member-Guest Tournament</h3>
            <p>Two-day best ball competition with prizes, dinner, and awards ceremony</p>
          </div>
          <a href="#" class="btn btn-primary">Register</a>
        </div>
        <div class="event-item">
          <div class="event-date">
            <div class="day">22</div>
            <div class="month">April</div>
          </div>
          <div class="event-info">
            <h3>Centennial Celebration Gala</h3>
            <p>Black-tie dinner celebrating 100 years of Oakwood excellence</p>
          </div>
          <a href="#" class="btn btn-primary">RSVP</a>
        </div>
        <div class="event-item">
          <div class="event-date">
            <div class="day">08</div>
            <div class="month">May</div>
          </div>
          <div class="event-info">
            <h3>Junior Golf Clinic</h3>
            <p>Week-long instruction program for members' children ages 8-16</p>
          </div>
          <a href="#" class="btn btn-primary">Enroll</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-cream" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="label">Get In Touch</span>
        <h2>Contact Us</h2>
        <div class="divider" style="margin-top:20px;"></div>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Visit Oakwood</h3>
          <p>We invite you to experience the timeless elegance of Oakwood Country Club. Schedule a private tour and discover why generations of families have called Oakwood home.</p>
          <div class="contact-details">
            <div class="contact-item">
              <span>📍</span>
              <div>1924 Fairway Drive<br>Oakwood Valley, CA 94025</div>
            </div>
            <div class="contact-item">
              <span>📞</span>
              <div>(650) 555-1924</div>
            </div>
            <div class="contact-item">
              <span>✉️</span>
              <div>membership@oakwoodcc.com</div>
            </div>
            <div class="contact-item">
              <span>🕐</span>
              <div>Pro Shop: 6am - 8pm Daily<br>Clubhouse: 7am - 10pm</div>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John">
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Smith">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="(555) 000-0000">
            </div>
          </div>
          <div class="form-group">
            <label>Interest</label>
            <select>
              <option>Membership Inquiry</option>
              <option>Schedule a Tour</option>
              <option>Event Information</option>
              <option>General Question</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about yourself and your interest in Oakwood..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit Inquiry</button>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <div class="name">OAKWOOD</div>
        <div class="tagline">Country Club · Est. 1924</div>
      </div>
      <div class="footer-links">
        <a href="#about">Heritage</a>
        <a href="#amenities">Amenities</a>
        <a href="#membership">Membership</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Oakwood Country Club. All rights reserved. | Privacy Policy | Terms of Use</p>
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
  <title>Oakwood Country Club</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar"><div class="container"><div class="nav-logo"><div class="est">Est. 1924</div><div class="name">OAKWOOD</div></div><ul class="nav-links"><li><a href="#about">Heritage</a></li><li><a href="#membership">Membership</a></li><li><a href="#contact">Contact</a></li></ul></div></nav>
  <section class="hero"><div class="container"><div class="hero-badge">A Century of Excellence</div><h1>OAKWOOD<span>Country Club</span></h1><p>"Where tradition meets the fairway"</p><div class="hero-buttons"><a href="#membership" class="btn btn-primary">Request Membership</a><a href="#contact" class="btn btn-outline">Schedule a Visit</a></div></div></section>
  <section class="section" id="about"><div class="container"><div class="stats"><div class="stat"><div class="stat-number">18</div><div class="stat-label">Holes</div></div><div class="stat"><div class="stat-number">72</div><div class="stat-label">Par</div></div><div class="stat"><div class="stat-number">100</div><div class="stat-label">Years</div></div></div><p style="text-align:center;max-width:700px;margin:0 auto;color:#5a6b5c;">Founded in 1924, Oakwood Country Club has stood as a beacon of golfing excellence for a century.</p></div></section>
  <section class="section section-cream" id="membership"><div class="container"><div class="section-header"><span class="label">Join Our Family</span><h2>Membership</h2></div><div class="membership-grid"><div class="membership-card"><h3>SOCIAL</h3><div class="price">$5,000<span>/yr</span></div><ul class="membership-features"><li>Clubhouse access</li><li>Dining privileges</li><li>Member events</li></ul></div><div class="membership-card featured"><h3>FULL GOLF</h3><div class="price">$15,000<span>/yr</span></div><ul class="membership-features"><li>Unlimited golf</li><li>All social privileges</li><li>Tournament eligibility</li></ul></div></div></div></section>
  <section class="section" id="contact"><div class="container"><div class="section-header"><h2>Contact</h2></div><p style="text-align:center;color:#5a6b5c;">membership@oakwoodcc.com | (650) 555-1924</p></div></section>
  <footer class="footer"><div class="container"><p>© 2024 Oakwood Country Club</p></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; background: #faf9f6; color: #2c3e2d; line-height: 1.8; }
a { color: #0d3b2e; text-decoration: none; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(250,249,246,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e8e4dc; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; height: 80px; }
.nav-logo { text-align: center; }
.nav-logo .est { font-size: 10px; letter-spacing: 3px; color: #c9a227; }
.nav-logo .name { font-size: 22px; font-weight: 700; color: #0d3b2e; letter-spacing: 2px; }
.nav-links { display: flex; gap: 40px; list-style: none; }
.nav-links a { color: #2c3e2d; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; font-family: -apple-system, sans-serif; }
.hero { padding: 180px 0 120px; background: linear-gradient(180deg, #0d3b2e 0%, #1a4d3e 100%); text-align: center; }
.hero-badge { display: inline-block; border: 1px solid #c9a227; color: #c9a227; padding: 8px 24px; font-size: 11px; letter-spacing: 4px; margin-bottom: 24px; }
.hero h1 { font-size: 56px; color: #faf9f6; font-weight: 400; letter-spacing: 4px; }
.hero h1 span { display: block; font-size: 18px; letter-spacing: 8px; color: #c9a227; margin-top: 8px; }
.hero p { color: #8fa88f; font-size: 18px; margin: 24px auto 40px; font-style: italic; }
.hero-buttons { display: flex; gap: 20px; justify-content: center; }
.btn { padding: 16px 40px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; border: none; cursor: pointer; font-family: -apple-system, sans-serif; }
.btn-primary { background: #c9a227; color: #0d3b2e; }
.btn-outline { background: transparent; border: 1px solid #faf9f6; color: #faf9f6; }
.section { padding: 80px 0; }
.section-cream { background: #f5f3ee; }
.section-header { text-align: center; margin-bottom: 48px; }
.section-header .label { font-size: 11px; letter-spacing: 4px; color: #c9a227; text-transform: uppercase; margin-bottom: 12px; display: block; font-family: -apple-system, sans-serif; }
.section-header h2 { font-size: 36px; font-weight: 400; color: #0d3b2e; }
.stats { display: flex; justify-content: center; gap: 60px; margin-bottom: 40px; }
.stat { text-align: center; }
.stat-number { font-size: 48px; color: #c9a227; }
.stat-label { font-size: 11px; letter-spacing: 3px; color: #5a6b5c; text-transform: uppercase; font-family: -apple-system, sans-serif; }
.membership-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 700px; margin: 0 auto; }
.membership-card { background: #faf9f6; border: 1px solid #e8e4dc; padding: 40px; text-align: center; position: relative; }
.membership-card.featured { border-color: #c9a227; border-width: 2px; }
.membership-card h3 { font-size: 14px; letter-spacing: 3px; color: #c9a227; margin-bottom: 8px; font-family: -apple-system, sans-serif; }
.membership-card .price { font-size: 42px; color: #0d3b2e; margin-bottom: 24px; }
.membership-card .price span { font-size: 16px; color: #5a6b5c; }
.membership-features { list-style: none; text-align: left; }
.membership-features li { padding: 10px 0; border-bottom: 1px solid #e8e4dc; font-size: 14px; color: #5a6b5c; }
.membership-features li::before { content: '✓ '; color: #c9a227; }
.footer { padding: 40px 0; background: #0d3b2e; color: #8fa88f; text-align: center; font-size: 14px; }
@media (max-width: 768px) { .nav-links { display: none; } .hero h1 { font-size: 36px; } .stats { flex-direction: column; gap: 24px; } }`
    }
  },

  // Newspaper - OLD EDITORIAL vintage newspaper style
  {
    category: "blog",
    tag: "Blog",
    name: "The Daily Chronicle",
    description: "Vintage newspaper layout with sepia tones, classic serif typography, and multi-column editorial design.",
    preview: `<div style="font-family:Georgia,serif;background:#f4f1ea;color:#1a1a1a;padding:10px;border-radius:4px;width:100%;max-width:280px;font-size:10px;border:1px solid #d4cfc4;">
      <div style="text-align:center;border-bottom:3px double #1a1a1a;padding-bottom:6px;margin-bottom:6px;">
        <div style="font-size:6px;letter-spacing:2px;color:#666;">VOL. CXXIV • NO. 47</div>
        <div style="font-family:'Times New Roman',serif;font-size:18px;font-weight:900;letter-spacing:1px;">THE DAILY CHRONICLE</div>
        <div style="font-size:6px;color:#666;margin-top:2px;">WEDNESDAY, FEBRUARY 26, 2025 • ESTABLISHED 1892 • PRICE: $2.50</div>
      </div>
      <div style="font-size:11px;font-weight:700;text-align:center;line-height:1.2;margin-bottom:6px;font-family:'Times New Roman',serif;">BREAKING: Major Discovery Announced</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:7px;line-height:1.4;">
        <div style="border-right:1px solid #d4cfc4;padding-right:6px;">
          <div style="font-weight:700;margin-bottom:2px;">City Council Votes</div>
          <div style="color:#444;">The council has approved the new infrastructure bill after months of debate...</div>
        </div>
        <div>
          <div style="font-weight:700;margin-bottom:2px;">Markets Rally</div>
          <div style="color:#444;">Stocks surge as investors respond to positive economic indicators...</div>
        </div>
      </div>
    </div>`,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Daily Chronicle - Established 1892</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, 'Times New Roman', serif; background: #f4f1ea; color: #1a1a1a; line-height: 1.7; }
    a { color: #1a1a1a; text-decoration: none; }
    a:hover { text-decoration: underline; }
    img { max-width: 100%; height: auto; filter: sepia(20%) contrast(1.05); }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

    /* Masthead */
    .masthead { background: #f4f1ea; padding: 20px 0 16px; border-bottom: 3px double #1a1a1a; }
    .masthead-top { display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #666; margin-bottom: 8px; }
    .masthead-center { text-align: center; }
    .paper-name { font-family: 'Times New Roman', Georgia, serif; font-size: 56px; font-weight: 900; letter-spacing: 2px; line-height: 1; text-transform: uppercase; }
    .paper-tagline { font-size: 12px; letter-spacing: 6px; color: #666; margin-top: 8px; text-transform: uppercase; font-style: italic; }
    .masthead-info { display: flex; justify-content: center; gap: 24px; margin-top: 12px; font-size: 11px; color: #666; }
    .masthead-info span { display: flex; align-items: center; gap: 6px; }

    /* Navigation */
    .nav-bar { background: #1a1a1a; padding: 10px 0; }
    .nav-bar .container { display: flex; justify-content: center; gap: 32px; }
    .nav-bar a { color: #f4f1ea; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: -apple-system, sans-serif; }
    .nav-bar a:hover { color: #c9a227; text-decoration: none; }

    /* Breaking Banner */
    .breaking-banner { background: #8b0000; color: #fff; padding: 10px 0; text-align: center; }
    .breaking-banner span { background: #fff; color: #8b0000; padding: 2px 10px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-right: 12px; font-family: -apple-system, sans-serif; }
    .breaking-banner p { display: inline; font-size: 14px; }

    /* Main Content */
    .main-content { padding: 40px 0; }

    /* Headline Story */
    .headline-story { text-align: center; padding-bottom: 40px; border-bottom: 1px solid #d4cfc4; margin-bottom: 40px; }
    .headline-story .category { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #8b0000; margin-bottom: 12px; font-family: -apple-system, sans-serif; }
    .headline-story h1 { font-size: 48px; font-weight: 700; line-height: 1.15; margin-bottom: 16px; font-family: 'Times New Roman', Georgia, serif; }
    .headline-story .subtitle { font-size: 20px; color: #444; font-style: italic; margin-bottom: 24px; max-width: 700px; margin-left: auto; margin-right: auto; }
    .headline-story .byline { font-size: 12px; color: #666; margin-bottom: 24px; }
    .headline-story .byline strong { color: #1a1a1a; text-transform: uppercase; letter-spacing: 1px; }
    .headline-image { margin: 32px auto; max-width: 800px; }
    .headline-image img { width: 100%; border: 1px solid #d4cfc4; }
    .headline-image figcaption { font-size: 12px; color: #666; font-style: italic; margin-top: 8px; text-align: left; }
    .headline-story .lead { font-size: 18px; line-height: 1.8; max-width: 700px; margin: 0 auto; text-align: justify; }
    .headline-story .lead::first-letter { font-size: 64px; float: left; line-height: 1; padding-right: 12px; padding-top: 4px; font-weight: 700; }

    /* Article Grid */
    .articles-section { padding: 40px 0; }
    .section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
    .section-header h2 { font-size: 14px; letter-spacing: 3px; text-transform: uppercase; white-space: nowrap; }
    .section-header::after { content: ''; flex: 1; height: 1px; background: #1a1a1a; }

    .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .article-card { border-bottom: 1px solid #d4cfc4; padding-bottom: 24px; }
    .article-card img { width: 100%; height: 180px; object-fit: cover; margin-bottom: 16px; border: 1px solid #d4cfc4; }
    .article-card .category { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8b0000; margin-bottom: 8px; font-family: -apple-system, sans-serif; }
    .article-card h3 { font-size: 20px; font-weight: 700; line-height: 1.3; margin-bottom: 12px; }
    .article-card h3:hover { color: #8b0000; }
    .article-card p { font-size: 14px; color: #444; line-height: 1.6; margin-bottom: 12px; }
    .article-card .byline { font-size: 11px; color: #666; }

    /* Two Column Layout */
    .two-column { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; padding: 40px 0; border-top: 1px solid #d4cfc4; }
    .main-column article { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #d4cfc4; }
    .main-column article:last-child { border-bottom: none; }
    .main-column h3 { font-size: 28px; font-weight: 700; margin-bottom: 12px; line-height: 1.25; }
    .main-column .meta { font-size: 12px; color: #666; margin-bottom: 16px; }
    .main-column .excerpt { font-size: 15px; color: #444; line-height: 1.7; text-align: justify; column-count: 2; column-gap: 32px; }

    /* Sidebar */
    .sidebar { border-left: 1px solid #d4cfc4; padding-left: 32px; }
    .sidebar-section { margin-bottom: 32px; }
    .sidebar-section h4 { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; padding-bottom: 12px; border-bottom: 2px solid #1a1a1a; margin-bottom: 16px; }
    .sidebar-item { padding: 12px 0; border-bottom: 1px solid #d4cfc4; }
    .sidebar-item:last-child { border-bottom: none; }
    .sidebar-item .number { font-size: 24px; font-weight: 700; color: #8b0000; float: left; margin-right: 12px; line-height: 1; }
    .sidebar-item h5 { font-size: 14px; font-weight: 700; line-height: 1.4; margin-bottom: 4px; }
    .sidebar-item p { font-size: 12px; color: #666; }

    /* Opinion Section */
    .opinion-section { background: #ebe6db; padding: 40px 0; margin: 40px 0; }
    .opinion-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
    .opinion-card { background: #f4f1ea; padding: 32px; border-left: 4px solid #8b0000; }
    .opinion-card .label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8b0000; margin-bottom: 12px; font-family: -apple-system, sans-serif; }
    .opinion-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; line-height: 1.3; }
    .opinion-card p { font-size: 15px; color: #444; font-style: italic; margin-bottom: 16px; line-height: 1.6; }
    .opinion-card .author { font-size: 12px; color: #666; }
    .opinion-card .author strong { color: #1a1a1a; }

    /* Quote Block */
    .quote-block { background: #1a1a1a; color: #f4f1ea; padding: 48px; text-align: center; margin: 40px 0; }
    .quote-block blockquote { font-size: 28px; font-style: italic; line-height: 1.5; max-width: 800px; margin: 0 auto 16px; }
    .quote-block cite { font-size: 14px; color: #999; }

    /* Newsletter */
    .newsletter { background: #f4f1ea; border: 2px solid #1a1a1a; padding: 40px; text-align: center; margin: 40px 0; }
    .newsletter h3 { font-size: 28px; margin-bottom: 12px; }
    .newsletter p { font-size: 14px; color: #666; margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto; }
    .newsletter-form { display: flex; gap: 12px; justify-content: center; max-width: 500px; margin: 0 auto; }
    .newsletter-form input { flex: 1; padding: 14px 20px; border: 1px solid #d4cfc4; font-size: 14px; font-family: Georgia, serif; background: #fff; }
    .newsletter-form button { padding: 14px 32px; background: #1a1a1a; color: #f4f1ea; border: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; font-family: -apple-system, sans-serif; }
    .newsletter-form button:hover { background: #8b0000; }

    /* Footer */
    .footer { background: #1a1a1a; color: #f4f1ea; padding: 48px 0 24px; }
    .footer-top { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; }
    .footer-col h4 { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; color: #c9a227; }
    .footer-col a { display: block; color: #999; font-size: 13px; padding: 6px 0; }
    .footer-col a:hover { color: #f4f1ea; text-decoration: none; }
    .footer-bottom { border-top: 1px solid #333; padding-top: 24px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #666; }
    .footer-logo { font-family: 'Times New Roman', serif; font-size: 20px; font-weight: 700; letter-spacing: 1px; color: #f4f1ea; }

    /* Responsive */
    @media (max-width: 768px) {
      .paper-name { font-size: 32px; }
      .nav-bar .container { flex-wrap: wrap; gap: 16px; }
      .headline-story h1 { font-size: 32px; }
      .articles-grid { grid-template-columns: 1fr; }
      .two-column { grid-template-columns: 1fr; }
      .sidebar { border-left: none; padding-left: 0; border-top: 1px solid #d4cfc4; padding-top: 32px; }
      .main-column .excerpt { column-count: 1; }
      .opinion-grid { grid-template-columns: 1fr; }
      .footer-top { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <header class="masthead">
    <div class="container">
      <div class="masthead-top">
        <span>Vol. CXXIV, No. 47</span>
        <span>Wednesday, February 26, 2025</span>
        <span>Price: $2.50</span>
      </div>
      <div class="masthead-center">
        <h1 class="paper-name">The Daily Chronicle</h1>
        <p class="paper-tagline">"All the News That Matters"</p>
      </div>
      <div class="masthead-info">
        <span>Est. 1892</span>
        <span>•</span>
        <span>New York Edition</span>
        <span>•</span>
        <span>Weather: Partly Cloudy, 45°F</span>
      </div>
    </div>
  </header>

  <nav class="nav-bar">
    <div class="container">
      <a href="#">World</a>
      <a href="#">Politics</a>
      <a href="#">Business</a>
      <a href="#">Opinion</a>
      <a href="#">Arts</a>
      <a href="#">Science</a>
      <a href="#">Sports</a>
      <a href="#">Archive</a>
    </div>
  </nav>

  <div class="breaking-banner">
    <div class="container">
      <span>Breaking</span>
      <p>Senate passes landmark legislation in historic late-night vote — Full coverage inside</p>
    </div>
  </div>

  <main class="main-content">
    <div class="container">
      <article class="headline-story">
        <p class="category">Investigation</p>
        <h1>City Officials Unveil Ambitious Plan to Transform Downtown District</h1>
        <p class="subtitle">A $2.4 billion investment promises to reshape the urban landscape, but critics raise concerns about displacement and affordability</p>
        <p class="byline">By <strong>Margaret Sullivan</strong> and <strong>James Crawford</strong> | February 26, 2025</p>
        <figure class="headline-image">
          <img src="https://placehold.co/800x450/d4cfc4/1a1a1a?text=Downtown+Skyline" alt="Downtown cityscape">
          <figcaption>An artist's rendering of the proposed downtown development project, which would add 15,000 residential units and 3 million square feet of commercial space. (City Planning Department)</figcaption>
        </figure>
        <p class="lead">The mayor stood at the podium yesterday morning, flanked by developers and city planners, to announce what officials are calling the most significant urban renewal project in the city's history. The sweeping proposal, which has been in development for nearly three years, would fundamentally alter the character of a 200-acre section of the downtown core, replacing aging infrastructure with modern towers, public plazas, and what planners describe as "a new paradigm for urban living."</p>
      </article>
    </div>

    <section class="articles-section">
      <div class="container">
        <div class="section-header">
          <h2>Latest News</h2>
        </div>
        <div class="articles-grid">
          <article class="article-card">
            <img src="https://placehold.co/400x200/d4cfc4/1a1a1a?text=Politics" alt="">
            <p class="category">Politics</p>
            <h3><a href="#">Congressional Leaders Reach Tentative Agreement on Budget Framework</a></h3>
            <p>After weeks of tense negotiations, key figures from both parties emerged with what they called a "foundation for progress."</p>
            <p class="byline">By Robert Chen • 3 hours ago</p>
          </article>
          <article class="article-card">
            <img src="https://placehold.co/400x200/d4cfc4/1a1a1a?text=Science" alt="">
            <p class="category">Science</p>
            <h3><a href="#">Researchers Announce Breakthrough in Renewable Energy Storage</a></h3>
            <p>A team at Stanford University has developed a new battery technology that could revolutionize how we store solar and wind power.</p>
            <p class="byline">By Dr. Emily Watson • 5 hours ago</p>
          </article>
          <article class="article-card">
            <img src="https://placehold.co/400x200/d4cfc4/1a1a1a?text=Business" alt="">
            <p class="category">Business</p>
            <h3><a href="#">Markets Surge as Federal Reserve Signals Policy Shift</a></h3>
            <p>Wall Street rallied sharply following comments from the Fed chair suggesting a more accommodative stance on interest rates.</p>
            <p class="byline">By Michael Torres • 6 hours ago</p>
          </article>
        </div>
      </div>
    </section>

    <section class="two-column">
      <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:40px;">
        <div class="main-column">
          <article>
            <p class="category" style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8b0000;margin-bottom:8px;font-family:-apple-system,sans-serif;">World Affairs</p>
            <h3>International Summit Addresses Growing Climate Concerns as Nations Pledge New Commitments</h3>
            <p class="meta">By Sarah Mitchell | February 25, 2025</p>
            <p class="excerpt">World leaders gathered in Geneva this week for what many are calling the most consequential climate summit since the Paris Agreement. Representatives from over 190 nations have assembled to address the increasingly urgent matter of global emissions, with several major economies announcing ambitious new targets. The summit comes amid a year of unprecedented weather events that have affected millions worldwide, lending new urgency to the discussions.</p>
          </article>
          <article>
            <p class="category" style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8b0000;margin-bottom:8px;font-family:-apple-system,sans-serif;">Technology</p>
            <h3>Silicon Valley Giants Face Renewed Scrutiny Over Data Privacy Practices</h3>
            <p class="meta">By David Park | February 25, 2025</p>
            <p class="excerpt">A new congressional report has raised fresh questions about how the nation's largest technology companies collect, store, and utilize consumer data. The 400-page document, released yesterday by the Senate Commerce Committee, details what investigators describe as "systematic failures" in privacy protection. Industry representatives have pushed back against the findings, arguing that the report fails to acknowledge recent improvements in data handling practices.</p>
          </article>
        </div>
        <aside class="sidebar">
          <div class="sidebar-section">
            <h4>Most Read</h4>
            <div class="sidebar-item">
              <span class="number">1</span>
              <h5>The Search for Meaning in an Age of Artificial Intelligence</h5>
              <p>Opinion • 2.4M views</p>
            </div>
            <div class="sidebar-item">
              <span class="number">2</span>
              <h5>Local Restaurant Named Among World's Best</h5>
              <p>Food & Dining • 1.8M views</p>
            </div>
            <div class="sidebar-item">
              <span class="number">3</span>
              <h5>Championship Game Ends in Stunning Upset</h5>
              <p>Sports • 1.2M views</p>
            </div>
            <div class="sidebar-item">
              <span class="number">4</span>
              <h5>Housing Market Shows Signs of Cooling</h5>
              <p>Real Estate • 890K views</p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="opinion-section">
      <div class="container">
        <div class="section-header">
          <h2>Opinion & Commentary</h2>
        </div>
        <div class="opinion-grid">
          <article class="opinion-card">
            <p class="label">Editorial</p>
            <h3>The Case for Civic Engagement in Troubled Times</h3>
            <p>"Democracy is not a spectator sport, and the challenges we face demand participation from every citizen willing to contribute."</p>
            <p class="author">By <strong>The Editorial Board</strong></p>
          </article>
          <article class="opinion-card">
            <p class="label">Guest Column</p>
            <h3>Why We Must Rethink Our Approach to Education</h3>
            <p>"The systems we built for the 20th century cannot adequately prepare students for the world they will inherit."</p>
            <p class="author">By <strong>Dr. Patricia Henderson</strong>, Former Secretary of Education</p>
          </article>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="quote-block">
        <blockquote>"The newspaper is the people's university, the ever-open door to knowledge, the mirror of the world's events."</blockquote>
        <cite>— Joseph Pulitzer, 1904</cite>
      </div>
    </div>

    <div class="container">
      <div class="newsletter">
        <h3>Subscribe to The Chronicle</h3>
        <p>Get the morning headlines delivered to your inbox. Quality journalism, every day.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-col">
          <h4>News</h4>
          <a href="#">World</a>
          <a href="#">National</a>
          <a href="#">Politics</a>
          <a href="#">Business</a>
          <a href="#">Technology</a>
        </div>
        <div class="footer-col">
          <h4>Opinion</h4>
          <a href="#">Editorials</a>
          <a href="#">Columnists</a>
          <a href="#">Letters</a>
          <a href="#">Sunday Review</a>
        </div>
        <div class="footer-col">
          <h4>Features</h4>
          <a href="#">Arts</a>
          <a href="#">Books</a>
          <a href="#">Food</a>
          <a href="#">Travel</a>
          <a href="#">Magazine</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Advertise</a>
          <a href="#">Archive</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-logo">THE DAILY CHRONICLE</span>
        <span>© 2025 The Daily Chronicle Company. All Rights Reserved.</span>
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
  <title>The Daily Chronicle</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="masthead"><div class="container"><div class="masthead-top"><span>Vol. CXXIV, No. 47</span><span>Wednesday, February 26, 2025</span></div><h1 class="paper-name">The Daily Chronicle</h1><p class="paper-tagline">"All the News That Matters" • Est. 1892</p></div></header>
  <nav class="nav-bar"><div class="container"><a href="#">World</a><a href="#">Politics</a><a href="#">Business</a><a href="#">Opinion</a><a href="#">Arts</a></div></nav>
  <div class="breaking-banner"><div class="container"><span>Breaking</span><p>Senate passes landmark legislation in historic vote</p></div></div>
  <main class="main-content"><div class="container">
    <article class="headline-story"><p class="category">Investigation</p><h1>City Officials Unveil Ambitious Plan to Transform Downtown</h1><p class="subtitle">A $2.4 billion investment promises to reshape the urban landscape</p><p class="byline">By <strong>Margaret Sullivan</strong> | February 26, 2025</p><figure class="headline-image"><img src="https://placehold.co/800x400/d4cfc4/1a1a1a?text=Headline+Image" alt=""></figure><p class="lead">The mayor stood at the podium yesterday morning to announce what officials are calling the most significant urban renewal project in the city's history.</p></article>
    <section class="articles-grid"><article class="article-card"><p class="category">Politics</p><h3>Congressional Leaders Reach Agreement</h3><p>After weeks of negotiations, key figures emerged with a framework.</p></article><article class="article-card"><p class="category">Science</p><h3>Breakthrough in Energy Storage</h3><p>New battery technology could revolutionize renewable power.</p></article></section>
  </div></main>
  <footer class="footer"><div class="container"><span class="footer-logo">THE DAILY CHRONICLE</span><p>© 2025 The Daily Chronicle Company</p></div></footer>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia, serif; background: #f4f1ea; color: #1a1a1a; line-height: 1.7; }
a { color: #1a1a1a; text-decoration: none; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.masthead { background: #f4f1ea; padding: 20px 0; border-bottom: 3px double #1a1a1a; text-align: center; }
.masthead-top { font-size: 11px; color: #666; margin-bottom: 8px; display: flex; justify-content: space-between; }
.paper-name { font-size: 48px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
.paper-tagline { font-size: 12px; letter-spacing: 4px; color: #666; font-style: italic; margin-top: 8px; }
.nav-bar { background: #1a1a1a; padding: 10px 0; }
.nav-bar .container { display: flex; justify-content: center; gap: 32px; }
.nav-bar a { color: #f4f1ea; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: -apple-system, sans-serif; }
.breaking-banner { background: #8b0000; color: #fff; padding: 10px 0; text-align: center; }
.breaking-banner span { background: #fff; color: #8b0000; padding: 2px 10px; font-size: 10px; letter-spacing: 2px; margin-right: 12px; font-family: -apple-system, sans-serif; }
.main-content { padding: 40px 0; }
.headline-story { text-align: center; padding-bottom: 40px; border-bottom: 1px solid #d4cfc4; margin-bottom: 40px; }
.headline-story .category { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #8b0000; margin-bottom: 12px; }
.headline-story h1 { font-size: 42px; font-weight: 700; line-height: 1.2; margin-bottom: 16px; }
.headline-story .subtitle { font-size: 18px; color: #444; font-style: italic; margin-bottom: 16px; }
.headline-story .byline { font-size: 12px; color: #666; margin-bottom: 24px; }
.headline-image { margin: 24px 0; }
.headline-image img { width: 100%; border: 1px solid #d4cfc4; filter: sepia(20%); }
.headline-story .lead { font-size: 16px; max-width: 700px; margin: 0 auto; text-align: justify; }
.headline-story .lead::first-letter { font-size: 48px; float: left; line-height: 1; padding-right: 8px; font-weight: 700; }
.articles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
.article-card { border-bottom: 1px solid #d4cfc4; padding-bottom: 24px; }
.article-card .category { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8b0000; margin-bottom: 8px; }
.article-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.article-card p { font-size: 14px; color: #444; }
.footer { background: #1a1a1a; color: #f4f1ea; padding: 32px 0; text-align: center; }
.footer-logo { font-size: 18px; font-weight: 700; letter-spacing: 2px; display: block; margin-bottom: 8px; }
.footer p { font-size: 12px; color: #666; }
@media (max-width: 768px) { .paper-name { font-size: 28px; } .headline-story h1 { font-size: 28px; } .nav-bar .container { flex-wrap: wrap; gap: 16px; } }`
    }
  }
];
