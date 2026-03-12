/**
 * Portfolio Placeholder Integration
 * Use CSS placeholders until real images are generated
 */

class PortfolioPlaceholders {
  constructor() {
    this.placeholders = {
      // Case Studies
      'ai-analytics-theme': {
        html: `
          <div class="placeholder-container ai-analytics-theme">
            <div class="box">Documents</div>
            <span class="arrow">→</span>
            <div class="box">Chunking<br><span class="highlight">256</span> tokens</div>
            <span class="arrow">→</span>
            <div class="box">Embeddings</div>
            <span class="arrow">→</span>
            <div class="box">Vector DB</div>
            <span class="arrow">→</span>
            <div class="box">LLM Output</div>
            <div class="annotation">k=8 retrieval</div>
          </div>`,
        alt: 'AI Analytics Architecture - RAG Pipeline'
      },

      'operations-dashboard': {
        html: `
          <div class="placeholder-container operations-dashboard">
            <div class="metric-cards">
              <div class="metric-card primary">
                <div class="metric-value">$127M</div>
                <div class="metric-label">saved</div>
              </div>
              <div class="metric-card success">
                <div class="metric-value">99.7%</div>
                <div class="metric-label">uptime</div>
              </div>
              <div class="metric-card info">
                <div class="metric-value">1.2ms</div>
                <div class="metric-label">latency</div>
              </div>
            </div>
            <div class="chart-container">
              <div class="chart-line"></div>
            </div>
          </div>`,
        alt: 'Operations Dashboard - Real-time Metrics'
      },

      'ml-platform-architecture': {
        html: `
          <div class="placeholder-container ml-platform">
            <div class="platform-layer">
              <span class="layer-label">Data Ingestion</span>
              <span class="layer-arrow">→</span>
              <div class="layer-boxes">
                <div class="layer-box">Streaming</div>
                <div class="layer-box">Batch</div>
                <div class="layer-box">APIs</div>
              </div>
            </div>
            <div class="platform-layer">
              <span class="layer-label">Model Training</span>
              <span class="layer-arrow">→</span>
              <div class="layer-boxes">
                <div class="layer-box highlight">AutoML</div>
                <div class="layer-box">Custom</div>
                <div class="layer-box">Transfer</div>
              </div>
            </div>
            <div class="platform-layer">
              <span class="layer-label">Deployment</span>
              <span class="layer-arrow">→</span>
              <div class="layer-boxes">
                <div class="layer-box">Edge</div>
                <div class="layer-box">Cloud</div>
                <div class="layer-box">Hybrid</div>
              </div>
            </div>
          </div>`,
        alt: 'ML Platform Architecture'
      },

      // Technology
      'language-grid': {
        html: `
          <div class="placeholder-container language-grid">
            <table>
              <tr>
                <td>Python</td>
                <td>TypeScript</td>
                <td>Go</td>
              </tr>
              <tr>
                <td class="highlight">React</td>
                <td>Node.js</td>
                <td>SQL</td>
              </tr>
              <tr>
                <td>GraphQL</td>
                <td>Docker</td>
                <td>K8s</td>
              </tr>
            </table>
          </div>`,
        alt: 'Technology Stack Grid'
      },

      'cloud-platforms': {
        html: `
          <div class="placeholder-container cloud-platforms">
            <div class="platform-column">
              <div class="platform-header">Google Cloud</div>
              <ul class="platform-services">
                <li class="highlight">BigQuery</li>
                <li>Cloud Run</li>
                <li>Vertex AI</li>
                <li>Firestore</li>
                <li>Cloud Functions</li>
              </ul>
            </div>
            <div class="platform-column">
              <div class="platform-header">AWS</div>
              <ul class="platform-services">
                <li>S3</li>
                <li>Lambda</li>
                <li>SageMaker</li>
                <li>DynamoDB</li>
                <li>ECS</li>
              </ul>
            </div>
            <div class="platform-column">
              <div class="platform-header">Azure</div>
              <ul class="platform-services">
                <li>Cosmos DB</li>
                <li>Functions</li>
                <li>ML Studio</li>
                <li>Blob Storage</li>
                <li>AKS</li>
              </ul>
            </div>
          </div>`,
        alt: 'Multi-Cloud Platform Expertise'
      },

      'devops-pipeline': {
        html: `
          <div class="placeholder-container devops-pipeline">
            <div class="pipeline-flow">
              <div class="pipeline-step">
                <div class="pipeline-circle">Code</div>
                <div class="pipeline-label">GitHub</div>
              </div>
              <span class="pipeline-arrow">→</span>
              <div class="pipeline-step">
                <div class="pipeline-circle">Build</div>
                <div class="pipeline-label">Docker</div>
              </div>
              <span class="pipeline-arrow">→</span>
              <div class="pipeline-step">
                <div class="pipeline-circle">Test</div>
                <div class="pipeline-label">Jest</div>
              </div>
              <span class="pipeline-arrow">→</span>
              <div class="pipeline-step">
                <div class="pipeline-circle highlight">Deploy</div>
                <div class="pipeline-label">K8s</div>
              </div>
              <span class="pipeline-arrow">→</span>
              <div class="pipeline-step">
                <div class="pipeline-circle">Monitor</div>
                <div class="pipeline-label">Datadog</div>
              </div>
            </div>
          </div>`,
        alt: 'CI/CD Pipeline'
      },

      // Achievements
      'impact-metrics': {
        html: `
          <div class="placeholder-container impact-metrics">
            <div>
              <div class="impact-hero">$100M+</div>
              <div class="impact-subtitle">Cost Savings Delivered</div>
            </div>
            <div class="impact-stats">
              <div class="impact-stat">
                <div class="stat-value">8,000+</div>
                <div class="stat-label">Users</div>
              </div>
              <div class="impact-stat">
                <div class="stat-value">15+</div>
                <div class="stat-label">Countries</div>
              </div>
            </div>
          </div>`,
        alt: 'Business Impact Metrics'
      },

      'berkeley-certificate': {
        html: `
          <div class="placeholder-container berkeley-cert">
            <div class="cert-school">UC BERKELEY</div>
            <div class="cert-degree">MIDS</div>
            <div class="cert-field">Master of Information and Data Science</div>
            <div class="cert-details">2021-2023 | GPA 3.9</div>
          </div>`,
        alt: 'UC Berkeley MIDS Degree'
      },

      'patent-filing': {
        html: `
          <div class="placeholder-container patent-filing">
            <div class="patent-content">
              <div class="patent-label">US PATENT FILED</div>
              <div class="patent-title">ML-DRIVEN OPTIMIZATION SYSTEM</div>
              <ul class="patent-features">
                <li>Predictive capacity planning</li>
                <li>Real-time resource allocation</li>
                <li>Anomaly detection pipeline</li>
              </ul>
            </div>
          </div>`,
        alt: 'Patent-Pending Innovation'
      },

      // Philosophy
      'methodology-framework': {
        html: `
          <div class="placeholder-container methodology-venn">
            <div class="venn-circles">
              <div class="venn-circle">Data</div>
              <div class="venn-circle">Engineering</div>
              <div class="venn-circle">Business</div>
              <div class="venn-intersection">VALUE</div>
            </div>
          </div>`,
        alt: 'Value Creation Framework'
      },

      'innovation-cycle': {
        html: `
          <div class="placeholder-container innovation-cycle">
            <div class="cycle-container">
              <div class="cycle-step">Observe</div>
              <div class="cycle-step">Ideate</div>
              <div class="cycle-step highlight">Build</div>
              <div class="cycle-step">Measure</div>
              <div class="cycle-center">Iterate</div>
              <div class="cycle-arrows"></div>
            </div>
          </div>`,
        alt: 'Innovation Process Cycle'
      },

      'principles-list': {
        html: `
          <div class="placeholder-container principles-list">
            <div class="principles-content">
              <div class="principles-title">CORE PRINCIPLES</div>
              <div class="principle-item">
                <span class="principle-number">1.</span> Data drives decisions
              </div>
              <div class="principle-item">
                <span class="principle-number">2.</span> Automation over repetition
              </div>
              <div class="principle-item">
                <span class="principle-number">3.</span> Simplicity scales
              </div>
              <div class="principle-item">
                <span class="principle-number">4.</span> Impact matters
              </div>
            </div>
          </div>`,
        alt: 'Core Principles'
      },

      // Hero & Contact
      'hero-banner': {
        html: `
          <div class="placeholder-container hero-banner">
            <div class="hero-title">Building Intelligence</div>
            <div class="hero-subtitle">Data • Engineering • Impact</div>
            <div class="hero-accent"></div>
          </div>`,
        alt: 'Building Intelligence - Data, Engineering, Impact'
      },

      'contact-card': {
        html: `
          <div class="placeholder-container contact-card">
            <div class="contact-heading">Let's Build Together</div>
            <div class="contact-email">mark@example.com</div>
            <div class="contact-links">
              <a href="#">GitHub</a>
              <span>|</span>
              <a href="#">LinkedIn</a>
              <span>|</span>
              <a href="#">Resume</a>
            </div>
          </div>`,
        alt: 'Contact Information'
      },

      'process-flow': {
        html: `
          <div class="placeholder-container process-flow">
            <div class="process-steps">
              <span class="process-step">Define</span>
              <span class="process-arrow">→</span>
              <span class="process-step">Research</span>
              <span class="process-arrow">→</span>
              <span class="process-step">Design</span>
              <span class="process-arrow">→</span>
              <span class="process-step highlight">Build</span>
              <span class="process-arrow">→</span>
              <span class="process-step">Deploy</span>
            </div>
            <div class="process-footer">ITERATIVE • AGILE • DATA-DRIVEN</div>
          </div>`,
        alt: 'Development Process Flow'
      }
    };
  }

  /**
   * Replace an img tag with a CSS placeholder
   * @param {string|Element} selector - Image selector or element
   * @param {string} placeholderName - Name of the placeholder to use
   */
  replaceImage(selector, placeholderName) {
    const element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;

    if (!element) {
      console.warn(`Element not found: ${selector}`);
      return;
    }

    const placeholder = this.placeholders[placeholderName];
    if (!placeholder) {
      console.warn(`Placeholder not found: ${placeholderName}`);
      return;
    }

    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'portfolio-placeholder-wrapper';
    wrapper.innerHTML = placeholder.html;
    wrapper.setAttribute('aria-label', placeholder.alt);

    // Replace the image
    element.parentNode.replaceChild(wrapper, element);
  }

  /**
   * Replace all images with data-placeholder attribute
   */
  replaceAll() {
    document.querySelectorAll('img[data-placeholder]').forEach(img => {
      const placeholderName = img.getAttribute('data-placeholder');
      this.replaceImage(img, placeholderName);
    });
  }

  /**
   * Get placeholder HTML for embedding
   * @param {string} placeholderName - Name of the placeholder
   * @returns {string} HTML string
   */
  getHTML(placeholderName) {
    const placeholder = this.placeholders[placeholderName];
    return placeholder ? placeholder.html : '';
  }

  /**
   * Check if real images exist, use placeholders as fallback
   */
  async setupFallbacks() {
    const images = document.querySelectorAll('img[data-placeholder]');

    for (const img of images) {
      const placeholderName = img.getAttribute('data-placeholder');

      // Check if image loads successfully
      img.onerror = () => {
        console.log(`Image failed to load, using placeholder: ${placeholderName}`);
        this.replaceImage(img, placeholderName);
      };
    }
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PortfolioPlaceholders;
}

// Auto-initialize if DOM is ready
if (typeof window !== 'undefined') {
  window.PortfolioPlaceholders = PortfolioPlaceholders;

  // Auto-setup on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    const placeholders = new PortfolioPlaceholders();

    // Check for auto-replace flag
    if (document.querySelector('[data-use-placeholders="auto"]')) {
      placeholders.replaceAll();
    }

    // Setup fallbacks for missing images
    placeholders.setupFallbacks();
  });
}