# AI Image Generation Prompts for Project Demos
# Architecture Diagrams & Technical Visualizations

**Created:** November 16, 2025
**Purpose:** Detailed prompts for AI image generators to create missing technical diagrams
**Target:** Phase 2-3 enhancements for project_demos portfolio

---

## HOW TO USE THIS FILE

Each image below has:
1. **Priority** - Which phase it belongs to
2. **File Name** - Where to save the generated image
3. **Dimensions** - Recommended size
4. **Style Guide** - Visual style requirements
5. **Detailed Prompt** - Copy this into your AI image generator (DALL-E, Midjourney, Stable Diffusion, etc.)
6. **Alternative Text Description** - For manual creation or diagram tools

---

## PHASE 2: ARCHITECTURE DIAGRAMS (HIGH PRIORITY)

### 1. RAG SYSTEM ARCHITECTURE DIAGRAM ⭐ TOP PRIORITY

**File Name:** `/Users/markgibbons/github/project_demos/rag_demo/assets/rag_architecture_diagram.png`
**Dimensions:** 1200×800px (landscape)
**Style:** Clean, professional technical diagram with modern flat design

**AI Image Generator Prompt:**
```
Create a professional technical architecture diagram for a RAG (Retrieval-Augmented Generation) system. The diagram should show the following flow from left to right:

LEFT SIDE (Input):
- User icon with a speech bubble containing "What is our policy on X?"
- Label: "User Query"

STAGE 1 (Document Processing - Top Path):
- Stack of document icons (PDFs, Word docs)
- Arrow pointing to "Chunking Engine" box (256-token chunks)
- Arrow to "Embedding Model" box (multi-qa-mpnet-base-dot-v1)
- Arrow to "Vector Database" cylinder (Qdrant/FAISS)
- Use muted blue color scheme for this path

STAGE 2 (Query Processing - Middle Path):
- User query goes to "Embedding Model" (same model)
- Arrow to "Vector Search" box
- Label: "Top-K Retrieval (k=8)"
- Use green color scheme for this path

STAGE 3 (Generation - Bottom Path):
- Retrieved chunks (8 documents) flow into "Context Assembler"
- Combine with "Persona Prompt" (Marketing/Engineering)
- Feed into "LLM" box (Cohere/Mistral-7B)
- Arrow to response bubble
- Use purple/orange color scheme for this path

RIGHT SIDE (Output):
- Response bubble with generated answer
- Metrics shown: ROUGE-L, BLEU, BERTScore, Semantic Similarity

STYLE REQUIREMENTS:
- Clean, modern flat design
- Rounded rectangles for processing boxes
- Cylinders for databases
- Smooth arrows showing data flow
- Color-coded paths (blue, green, purple)
- Icons for documents, users, and databases
- Professional font (sans-serif)
- White/light gray background
- Subtle drop shadows on boxes
```

**Alternative (For Diagram Tools like draw.io):**
- Use flowchart template
- 3 horizontal swim lanes: Document Ingestion, Query Processing, Response Generation
- Connect boxes with labeled arrows
- Add numbered steps (1-7)
- Use corporate blue (#1E88E5), green (#43A047), purple (#8E24AA)

---

### 2. KUBERNETES CLOUD DEPLOYMENT ARCHITECTURE ⭐ HIGH PRIORITY

**File Name:** `/Users/markgibbons/github/project_demos/cloud_app_demo/assets/kubernetes_architecture.png`
**Dimensions:** 1400×900px (landscape)
**Style:** Professional cloud architecture diagram similar to AWS/Azure diagrams

**AI Image Generator Prompt:**
```
Create a professional Kubernetes cloud architecture diagram showing ML API deployment. The diagram should illustrate:

TOP LAYER (Internet):
- Cloud icon labeled "Internet/Users"
- Arrow pointing down

LAYER 1 (Ingress):
- Istio Gateway icon (purple)
- Label: "Istio Ingress Gateway"
- Horizontal line representing cluster boundary

LAYER 2 (Kubernetes Cluster - Main):
Large rounded rectangle labeled "EKS Cluster (us-west-2)" containing:

LEFT SECTION - API Pods:
  - 3 pod icons in a horizontal row
  - Label: "FastAPI Sentiment API"
  - Each pod shows: Python logo, "DistilBERT Model" text
  - Horizontal Pod Autoscaler indicator (1-5 replicas)

CENTER SECTION - Services:
  - Kubernetes service icon
  - Load balancer indicator
  - Label: "Service (LoadBalancer)"

RIGHT SECTION - Cache:
  - Redis cylinder icon (red)
  - Label: "Redis Cache"
  - Note: "98% hit rate"

BOTTOM SECTION - Monitoring:
  - Grafana icon
  - Prometheus icon
  - Istio service mesh visualization
  - Arrows showing metrics collection

LAYER 3 (External Services):
- Docker Hub icon (image registry)
- GitHub Actions icon (CI/CD pipeline)
- AWS ECR icon

ANNOTATIONS:
- "Auto-scales 1→5 pods based on CPU"
- "Redis caches predictions (<5ms response)"
- "Istio: traffic management + observability"
- "Zero-downtime deployments with rolling updates"

COLOR SCHEME:
- Kubernetes blue (#326CE5)
- Istio purple (#466BB0)
- Redis red (#DC382D)
- FastAPI teal (#009688)
- AWS orange (#FF9900)

STYLE:
- Clean, modern cloud architecture style
- Icons for each technology
- Dotted lines for logical groupings
- Solid arrows for data flow
- Dashed arrows for monitoring
- Light background with subtle grid
```

**Alternative (Manual Creation):**
- Use Lucidchart or AWS Architecture Icons
- Download Kubernetes, Docker, Redis, FastAPI icons
- Create 3-tier architecture: Ingress → Application → Data
- Add monitoring layer at bottom
- Use official brand colors for each technology

---

### 3. NLP EXPERIMENTAL METHODOLOGY FLOWCHART

**File Name:** `/Users/markgibbons/github/project_demos/nlp_demo/assets/experimental_design_flow.png`
**Dimensions:** 1000×1200px (portrait)
**Style:** Academic research flowchart with clear methodology

**AI Image Generator Prompt:**
```
Create a professional academic research methodology flowchart for an NLP experiment. The flow should proceed vertically from top to bottom:

TOP (Dataset):
- Cylinder icon labeled "Financial Sentiment Dataset"
- "5,842 labeled sentences" annotation
- Arrow pointing down

STAGE 1 (Data Splitting):
- Split into two branches:
  LEFT: "Phase 1 (60%)" - green box
    - Subdivide: Train (60%), Val (20%), Test (20%)
  RIGHT: "Phase 2 (40%)" - blue box
    - Subdivide: Train (60%), Val (20%), Test (20%)

STAGE 2 (Base Model Training):
- Box: "Train Base Model"
- "FinBERT on Phase 1 Train"
- Accuracy: 77.6%
- Arrow to "Hyperparameter Optimization (Optuna)"

STAGE 3 (Pseudo-Label Generation):
- Three parallel boxes (3 different strategies):
  1. "Unfiltered Pseudo-Labels" (orange)
  2. "Confidence-Filtered (threshold=0.5)" (yellow)
  3. "Ensemble Filtered (2-of-3 consensus)" (purple)
- Each shows: FinBERT + DistilBERT + RoBERTa icons

STAGE 4 (Retraining):
- Three parallel training boxes matching above colors
- Each shows "Phase 1 + Pseudo Phase 2"
- Training icon

STAGE 5 (Evaluation):
- Three result boxes showing:
  1. 80.6% accuracy (unfiltered) ⭐
  2. 80.0% accuracy (confidence)
  3. 80.0% accuracy (ensemble, -50% Class 0 errors) ⭐

BOTTOM (Comparison):
- Bar chart showing:
  - Baseline: 77.6%
  - Pseudo (best): 80.6%
  - Improvement: +3.0%

ANNOTATIONS:
- "Self-training with pseudo-labeling"
- "Semi-supervised learning"
- "Class imbalance addressed with RandomOverSampler"

COLOR CODING:
- Phase 1: Green (#4CAF50)
- Phase 2: Blue (#2196F3)
- Unfiltered: Orange (#FF9800)
- Confidence: Yellow (#FFC107)
- Ensemble: Purple (#9C27B0)

STYLE:
- Clean academic flowchart
- Rounded rectangles for processes
- Cylinders for data
- Arrows with labels
- Subtle shadows
- White background
- Professional sans-serif font
```

**Alternative:**
- Use academic paper flowchart template
- Create in PowerPoint or Google Slides
- Export as high-res PNG
- Use icons from Noun Project for data, training, evaluation

---

## PHASE 3: PERFORMANCE VISUALIZATIONS (MEDIUM PRIORITY)

### 4. RAG PERFORMANCE COMPARISON INFOGRAPHIC

**File Name:** `/Users/markgibbons/github/project_demos/rag_demo/assets/performance_comparison.png`
**Dimensions:** 800×600px (landscape)
**Style:** Modern infographic with before/after comparison

**AI Image Generator Prompt:**
```
Create a professional before-and-after performance comparison infographic for a RAG system:

LEFT SIDE (BEFORE):
- Title: "Baseline RAG System"
- Icon: Simple document + LLM
- Large number: "0.554"
- Label: "Weighted Evaluation Score"
- Technology: "Mistral-7B"
- Configuration: "Default settings"
- Subdued colors (gray/blue)

CENTER (Arrow):
- Large arrow pointing right
- Text: "Optimized"
- Icons showing improvements:
  - Chunking icon: "256 tokens"
  - User icon: "Persona prompts"
  - Model icon: "Cohere API"

RIGHT SIDE (AFTER):
- Title: "Optimized RAG System"
- Icon: Enhanced document + LLM with stars
- Large number: "0.571"
- Label: "Weighted Evaluation Score"
- Improvement badge: "+3% gain"
- Technology: "Cohere"
- Configuration: "Marketing persona + 256-token chunks + k=8 retrieval"
- Vibrant colors (green/gold)

BOTTOM METRICS:
- 4 small boxes showing evaluation metrics:
  1. ROUGE-L (25% weight)
  2. Semantic Similarity (35% weight) ⭐
  3. BLEU (10% weight)
  4. BERTScore (30% weight)

STYLE:
- Modern infographic design
- Bold numbers for scores
- Icons for technologies
- Green checkmarks for improvements
- Clean white background
- Blue-to-green color gradient
- Professional corporate style
```

---

### 5. CLOUD APP AUTOSCALING VISUALIZATION

**File Name:** `/Users/markgibbons/github/project_demos/cloud_app_demo/assets/autoscaling_visualization.png`
**Dimensions:** 1200×600px (landscape)
**Style:** Timeline visualization showing scaling events

**AI Image Generator Prompt:**
```
Create a timeline visualization showing Kubernetes autoscaling during a traffic spike:

HORIZONTAL TIMELINE (bottom to top shows time):

TIME 0-5 MIN (Normal Traffic):
- 1 pod icon (green)
- Traffic line: low/steady (100 req/min)
- CPU meter: 30%
- Label: "Baseline: 1 replica"

TIME 5-10 MIN (Traffic Increase):
- Traffic line: rising sharply (500 req/min)
- CPU meter: 75% (orange)
- HPA triggers icon
- Label: "HPA detects high CPU"

TIME 10-20 MIN (Scaling Out):
- Pod count increases: 1 → 2 → 3 → 5
- Show pods appearing with upward arrows
- Traffic line: peaks at 1,000 req/min
- CPU meter: stabilizes at 70%
- Label: "Auto-scaled to 5 replicas"
- Redis cache indicator: "98% hit rate"
- Response time: "<5ms cached, 200ms uncached"

TIME 20-30 MIN (Traffic Decreases):
- Traffic line: declining (300 req/min)
- CPU meter: drops to 40%
- Label: "Traffic subsides"

TIME 30-40 MIN (Scale In):
- Pod count decreases: 5 → 3 → 2 → 1
- Pods disappearing with downward arrows
- Traffic line: returns to baseline
- CPU meter: 30%
- Label: "Scale down to 1 replica"

ANNOTATIONS:
- "HPA Config: Target CPU 70%"
- "Min: 1 pod, Max: 5 pods"
- "Pod startup time: <10 seconds (model baked in)"
- "Zero dropped requests during scaling"

COLOR SCHEME:
- Normal state: Green
- Warning state: Orange (>70% CPU)
- Critical state: Red (>90% CPU)
- Kubernetes blue for pods
- Redis red for cache

STYLE:
- Clean timeline with horizontal axis
- Line chart for traffic
- Meter/gauge for CPU
- Pod icons that multiply/shrink
- Smooth color transitions
- Light background
- Professional font
```

---

### 6. COMPUTER VISION FEATURE ENGINEERING 4-PANEL

**File Name:** `/Users/markgibbons/github/project_demos/computer_vision_demo/assets/feature_engineering_panel.png`
**Dimensions:** 1600×400px (wide landscape, 4 panels side-by-side)
**Style:** Technical visualization comparing different feature extraction methods

**AI Image Generator Prompt:**
```
Create a 4-panel side-by-side comparison showing different computer vision feature extraction methods applied to a chest X-ray:

PANEL 1 (Original Image):
- Title: "Original X-Ray"
- Chest X-ray silhouette (grayscale)
- Size: 512×512px visualization
- Clean, unprocessed medical image
- White/gray tones

PANEL 2 (HOG Features):
- Title: "HOG Features"
- Same X-ray with gradient orientation overlays
- Show directional lines/arrows indicating gradients
- Highlight edge structures
- Color: Green overlays on grayscale
- Technical look

PANEL 3 (Fourier Transform):
- Title: "Frequency Domain"
- Fourier spectrum visualization
- Central bright spot with radiating patterns
- Show high/low frequency components
- Color: False-color heatmap (blue to red)
- Frequency patterns visible

PANEL 4 (Local Binary Pattern):
- Title: "LBP Texture"
- Texture pattern extraction
- Show local neighborhood patterns
- Highlight texture variations in lung fields
- Color: Blue-yellow colormap
- Pattern emphasis

BOTTOM ROW (Under each panel):
- Small text describing purpose:
  1. "Raw pixel data"
  2. "Edge & shape detection"
  3. "Global structure"
  4. "Local texture patterns"

STYLE:
- Scientific visualization style
- Consistent image dimensions across panels
- Clean separation between panels (thin borders)
- Dark background for contrast
- Medical imaging aesthetic
- Technical/academic presentation
```

---

### 7. NLP CLASS IMBALANCE SOLUTION DIAGRAM

**File Name:** `/Users/markgibbons/github/project_demos/nlp_demo/assets/class_imbalance_solution.png`
**Dimensions:** 1000×700px
**Style:** Before/after bar chart with visual data balancing

**AI Image Generator Prompt:**
```
Create a before-and-after visualization showing class imbalance problem and solution:

LEFT PANEL - "Imbalanced Dataset":
- 3 stacked bar chart showing class distribution:
  - Negative (Class 0): 860 samples (RED, shortest bar)
  - Neutral (Class 1): 3,130 samples (GRAY, tallest bar)
  - Positive (Class 2): 1,852 samples (GREEN, medium bar)
- Y-axis: "Sample Count" (0-3,500)
- Visual imbalance obvious
- Warning icon: "⚠️ Class imbalance"
- Label: "Risk: Model bias toward majority class"

CENTER - Transformation Arrow:
- Large arrow pointing right
- Icon: "RandomOverSampler"
- Label: "Oversampling"
- Python scikit-learn logo

RIGHT PANEL - "Balanced Dataset":
- 3 equal-height bars:
  - Negative (Class 0): 3,130 samples (RED)
  - Neutral (Class 1): 3,130 samples (GRAY)
  - Positive (Class 2): 3,130 samples (GREEN)
- Y-axis: same scale
- All bars equal height
- Checkmark icon: "✓ Balanced"
- Label: "Result: Fair representation across classes"

BOTTOM SECTION - Impact Metrics:
- Small comparison table:
  - "Before: Class 0 F1 = 0.42"
  - "After: Class 0 F1 = 0.68"
  - "Improvement: +62%"

STYLE:
- Clean statistical visualization
- Bold colors for classes (red, gray, green)
- Clear labels on axes
- Professional business chart style
- White background
- Modern sans-serif font
- Subtle grid lines
```

---

## ADDITIONAL DIAGRAMS TO CREATE (OPTIONAL)

### 8. REDIS CACHING ARCHITECTURE (Cloud App)

**Prompt:**
```
Create a flowchart showing request flow with Redis caching:
- Request enters API
- Check: "Prediction in cache?" (diamond)
- YES path (green): Return from Redis (<5ms) - 98% of requests
- NO path (red): Run ML model (200ms) → Cache result → Return
- Show cache hit rate meter: 98%
- Color code by latency (green fast, yellow medium, red slow)
```

### 9. MODEL BAKING COMPARISON (Cloud App)

**Prompt:**
```
Side-by-side comparison infographic:

LEFT: "Model Download at Runtime"
- Pod starts (0s)
- Download model from S3 (45s)
- Load model into memory (15s)
- Ready (60s total)
- Icon: Slow/hourglass

RIGHT: "Baked Model in Image"
- Pod starts (0s)
- Model already in container (0s)
- Load model into memory (8s)
- Ready (8s total)
- Icon: Fast/rocket

Trade-off box:
- Image size: 500MB → 1.5GB
- Build time: 2min → 8min
- Startup time: 60s → 8s ⭐
```

### 10. RAG EVALUATION METRICS DASHBOARD

**Prompt:**
```
Create a metrics dashboard showing 4 evaluation scores:
- Circular gauge/meter for each metric
- ROUGE-L: 0.65 (yellow gauge, 25% label)
- Semantic Similarity: 0.72 (blue gauge, 35% label) ⭐
- BLEU: 0.48 (green gauge, 10% label)
- BERTScore: 0.69 (purple gauge, 30% label)
- Center shows weighted average: 0.571
- Clean dashboard UI style, dark mode
```

---

## STYLE GUIDE REFERENCE

### Color Palette (Consistent Across All Images):

**Technology Colors:**
- Kubernetes: #326CE5 (blue)
- Docker: #2496ED (bright blue)
- Python: #3776AB (medium blue) & #FFD43B (yellow)
- Redis: #DC382D (red)
- FastAPI: #009688 (teal)
- AWS: #FF9900 (orange)
- Istio: #466BB0 (purple)

**Status/State Colors:**
- Success/Good: #4CAF50 (green)
- Warning: #FF9800 (orange)
- Error/Critical: #F44336 (red)
- Neutral: #9E9E9E (gray)
- Info: #2196F3 (blue)

**Chart Colors (Colorblind-Safe):**
- Primary: #1E88E5 (blue)
- Secondary: #43A047 (green)
- Tertiary: #FB8C00 (orange)
- Quaternary: #8E24AA (purple)

### Typography:
- Headings: Roboto Bold or Inter Bold
- Body: Roboto Regular or Inter Regular
- Code: Fira Code or JetBrains Mono
- Sizes: Title 24pt, Heading 18pt, Body 14pt, Caption 12pt

### Layout Guidelines:
- Margins: 40px minimum
- Spacing between elements: 20px
- Icon size: 48×48px (small), 96×96px (large)
- Arrows: 4px stroke, rounded caps
- Boxes: 8px corner radius
- Drop shadows: 0 2px 8px rgba(0,0,0,0.1)

---

## FILE ORGANIZATION

Save all generated images to:
```
/Users/markgibbons/github/project_demos/{project_name}/assets/
```

### Folder Structure:
```
rag_demo/assets/
  - rag_architecture_diagram.png
  - performance_comparison.png
  - evaluation_metrics_dashboard.png

cloud_app_demo/assets/
  - kubernetes_architecture.png
  - autoscaling_visualization.png
  - redis_caching_flow.png
  - model_baking_comparison.png

nlp_demo/assets/
  - experimental_design_flow.png
  - class_imbalance_solution.png

computer_vision_demo/assets/
  - feature_engineering_panel.png
```

---

## USAGE NOTES

1. **For DALL-E / Midjourney / Stable Diffusion:**
   - Copy the "AI Image Generator Prompt" exactly
   - Specify dimensions in your generation settings
   - May need to iterate 2-3 times for best results
   - Add "--ar 3:2" (aspect ratio) for Midjourney

2. **For Diagram Tools (draw.io, Lucidchart):**
   - Use the "Alternative" instructions
   - Download icons from The Noun Project or use built-in
   - Export as PNG at 2x resolution for clarity
   - Maintain color scheme from style guide

3. **For Manual Creation (PowerPoint/Keynote):**
   - Use 1920×1080 slide size
   - Follow color palette exactly
   - Use vector shapes (not photos)
   - Export as PNG with transparent background if needed

4. **Quality Checklist:**
   - ✓ Text is readable at 50% zoom
   - ✓ Colors match brand guide
   - ✓ No pixelation or blur
   - ✓ Consistent style with other diagrams
   - ✓ File size < 1MB (optimize if needed)

---

**Total Images Needed:** 10 diagrams (7 priority, 3 optional)
**Estimated Generation Time:** 2-4 hours (including iterations)
**Priority Order:** Items 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
