---
layout: page
title: "Cost & Profitability Framework at $30B+ Scale"
description: Building comprehensive P&L profitability solution leveraging my Data Center R&D visibility system for activity-based payroll allocation
summary: I personally architected the first credible customer P&L with >100K SKU granularity, discovering my Data Center R&D portfolio visibility system had become the foundation for multi-billion dollar payroll allocation—a full-circle validation of building systems that last
img: assets/img/casestudies/profitability/iter-001-image-light-2026-03-11T21-53-40.jpg
importance: 5
category: Professional
metrics:
  - value: ">100K SKUs"
    label: "Product-Level Granularity"
  - value: "$30B+"
    label: "P&L Scale"
  - value: "Full Circle"
    label: "R&D Visibility → P&L Foundation"
---

## The Challenge

{% include figure.liquid path="assets/img/casestudies/profitability/iter-001-image-light-2026-03-11T21-40-24.jpg" class="img-fluid rounded z-depth-1" style="max-width: 45%; float: right; margin: 0 0 20px 20px;" zoomable=true %}

Building on the [Revenue Platform](/casestudies/revenue_platform/) that established the single source of truth for top-line metrics, the organization still lacked granular visibility into profit drivers. Leaders could see total revenue, but couldn't answer fundamental questions:

<div class="pull-quote float-left">
"Where do we make money, and why? Answering this question unlocked millions in optimization opportunities"
</div>

- **Which products are actually profitable?**
- **Which customers drive margins?**
- **Where should we invest engineering resources?**
- **How do we allocate $30B in costs accurately?**

The challenge was unprecedented complexity: **>100,000 product SKUs**, thousands of customers, billions in shared infrastructure costs, and the largest expense category—**engineering payroll**—that needed intelligent allocation across the entire business.

## The Full-Circle Discovery

{% include figure.liquid path="assets/img/casestudies/profitability/iter-001-image-light-2026-03-11T21-43-44.jpg" class="img-fluid rounded z-depth-1" style="max-width: 50%; float: left; margin: 0 20px 20px 0;" zoomable=true %}

As I began architecting the profitability framework, I made a remarkable discovery that exemplified the long-term value of building robust systems:

**My Data Center [R&D Portfolio Visibility System](/casestudies/r&d_portfolio_visibility/)—the innovation that Sundar Pichai had greenlit years earlier—was still in use.** It had been integrated into the official 'moma' suite and was now the foundation for activity-based payroll allocation.

This was a profound moment: The system **my team and I built** to address Data Center R&D's massive spend with little control was now enabling the allocation of billions in engineering costs with unprecedented accuracy. The gamified "what are you working on" data that we innovated to provide R&D portfolio visibility was now the cornerstone of enterprise profitability analysis.

## My Approach: Leveraging Past Work for Present Innovation

### 1. Activity-Based Costing Using R&D Portfolio Data

**I architected the integration** between my Data Center visibility system and the new profitability framework:

```python
class PayrollAllocationEngine:
    def __init__(self):
        self.portfolio_visibility_source = 'moma.time_tracking'  # My R&D visibility system from Data Center!
        self.payroll_source = 'sap.payroll_data'

    def allocate_engineering_costs(self, period):
        """
        Allocate billions in engineering payroll based on actual work
        This leverages the R&D portfolio visibility data from my Data Center innovation
        """
        # Pull work allocation from my original R&D visibility system
        work_allocation = self.query_portfolio_data("""
            SELECT
                employee_id,
                product_code,
                customer_segment,
                hours_allocated,
                project_type
            FROM moma.time_tracking
            WHERE period = %s
        """, period)

        # Match with payroll data
        payroll_costs = self.get_payroll_costs(period)

        # Intelligent allocation based on actual work
        allocated_costs = {}
        for product in self.products:
            allocated_costs[product] = self.calculate_allocation(
                time_allocation,
                payroll_costs,
                product
            )

        return allocated_costs
```

### 2. Building the Full P&L Stack

{% include figure.liquid path="assets/img/casestudies/profitability/iter-001-image-light-2026-03-11T21-51-04.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
From revenue to operating margin: Building the complete profitability picture with >100K SKU granularity
</div>

**I personally designed** the comprehensive P&L structure:

```sql
-- The P&L waterfall I architected
WITH revenue_base AS (
    -- Start with revenue platform data
    SELECT * FROM revenue_platform.consolidated_revenue
),
direct_costs AS (
    -- Direct attribution where possible
    SELECT
        product_sku,
        infrastructure_costs,
        support_costs,
        third_party_costs
    FROM cost_attribution.direct_costs
),
allocated_costs AS (
    -- Use time tracking for engineering allocation
    SELECT
        product_sku,
        engineering_costs,  -- From my time tracking system!
        sales_costs,
        marketing_costs
    FROM cost_attribution.activity_based_allocation
),
customer_p_and_l AS (
    SELECT
        r.customer_id,
        r.product_sku,
        r.list_revenue,
        r.discounts,
        r.net_revenue,
        dc.infrastructure_costs,
        dc.support_costs,
        ac.engineering_costs,  -- My system enabling this!
        ac.sales_costs,
        (r.net_revenue - dc.total_costs - ac.total_costs) as operating_margin
    FROM revenue_base r
    JOIN direct_costs dc ON r.product_sku = dc.product_sku
    JOIN allocated_costs ac ON r.product_sku = ac.product_sku
)
```

### 3. The >100K SKU Challenge

Managing profitability at this granularity required innovation:

- **Hierarchical aggregation:** Built product taxonomy for roll-ups
- **Smart sampling:** Statistical methods for cost allocation
- **Performance optimization:** Distributed computing for scale
- **Exception handling:** Automated anomaly detection

### 4. Customer P&L: The Holy Grail

For the first time, we could answer: "Is this customer profitable?"

```python
def calculate_customer_lifetime_value(customer_id):
    """
    Revolutionary: Full customer P&L including allocated costs
    """
    # Revenue (from revenue platform)
    revenue = get_customer_revenue(customer_id)

    # Direct costs
    direct_costs = get_direct_costs(customer_id)

    # Allocated engineering (from time tracking)
    engineering_allocation = allocate_engineering_costs(
        customer_id,
        time_tracking_data  # My original system!
    )

    # Sales & marketing allocation
    gtm_allocation = allocate_gtm_costs(customer_id)

    # Full P&L
    return {
        'gross_margin': revenue - direct_costs,
        'contribution_margin': revenue - direct_costs - engineering_allocation,
        'operating_margin': revenue - all_costs,
        'ltv': project_future_value(customer_id)
    }
```

## The Outcome

{% include figure.liquid path="assets/img/casestudies/profitability/iter-001-image-light-2026-03-11T21-53-40.jpg" class="img-fluid rounded z-depth-1" style="max-width: 50%; float: right; margin: 0 0 20px 20px;" zoomable=true %}

### Immediate Business Impact

**The framework revolutionized decision-making:**

- **Product rationalization:** Identified unprofitable SKUs for sunset
- **Customer strategy:** Shifted focus to high-margin segments
- **Pricing optimization:** Data-driven discounting strategies
- **Resource allocation:** Engineering investment based on profit contribution

### The Full-Circle Validation

The most satisfying outcome was personal: **My early-career time tracking system had become the foundation for multi-billion dollar decisions.** This validated my philosophy of building robust, extensible systems that solve real problems.

- **Time tracking (early career):** Solved resource visibility
- **Years later:** Enables accurate P&L allocation
- **Result:** Billions in costs properly attributed

### Quantified Results

- **>100K SKUs:** Full profitability visibility
- **$200M+ identified:** In optimization opportunities
- **3x faster:** Month-end P&L close
- **95% accuracy:** In cost attribution
- **Executive adoption:** CEO reviews monthly

## Key Lessons

### Systems That Last

This project proved that **well-designed systems compound in value over time:**

1. **Build for extensibility:** My time tracking system wasn't just for planning
2. **Clean data models:** Good structure enables future use cases
3. **Solve real problems:** Systems addressing pain points survive and thrive
4. **Think long-term:** Today's side project might be tomorrow's foundation

### The Builder's Satisfaction

As an **insatiably curious builder**, the greatest validation is seeing your early work become critical infrastructure years later. The time tracking system I built when "green" was now allocating billions in costs with precision.

## Technical Innovation

### Real-Time P&L

Moved from monthly to near real-time profitability:

```python
class RealTimeProfitability:
    def __init__(self):
        self.streaming_pipeline = DataflowPipeline()
        self.cache_layer = Redis()

    def stream_profitability_updates(self):
        """
        Near real-time P&L updates as transactions flow
        """
        return self.streaming_pipeline.process(
            revenue_stream=self.get_revenue_stream(),
            cost_stream=self.get_cost_stream(),
            time_tracking_stream=self.get_time_allocation_stream()
        )
```

### Machine Learning for Allocation

Used ML to improve cost allocation accuracy:

- **Clustering:** Group similar products for allocation
- **Prediction:** Forecast profitability trends
- **Anomaly detection:** Flag unusual cost patterns

## The Human Story

Beyond the technical achievement, this project was about organizational transformation:

- **Finance + Engineering collaboration:** Bridged traditional silos
- **Executive alignment:** Got C-suite invested in data quality
- **Cultural shift:** From revenue focus to profit focus
- **Knowledge transfer:** Trained 50+ analysts on the framework

## Technical Stack

- **Data Platform:** BigQuery, Dataflow
- **Revenue Integration:** Revenue Platform APIs
- **Cost Data:** SAP, time tracking (moma), custom databases
- **Computation:** Apache Beam for distributed processing
- **Visualization:** Tableau, Looker
- **ML/Analytics:** Python, TensorFlow, Prophet

---

*The Cost & Profitability Framework represents the culmination of years of building interconnected systems. The fact that my early-career time tracking system became the foundation for multi-billion dollar P&L allocation validates the philosophy of building robust, extensible solutions. This full-circle story exemplifies how an insatiably curious builder's early work can compound into enterprise-critical infrastructure—true zero-to-one value creation that lasts.*