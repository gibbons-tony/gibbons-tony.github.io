---
layout: casestudy
title: "$30B+ Revenue Platform Built from Zero"
description: Creating unified revenue truth after year-long engineering failure, scaling to 8,000+ daily users
summary: After a formal engineering team spent a full year building a failed solution, I personally coded the SQL pipeline prototype that unified revenue reporting, went from deep skepticism to 8,000+ ecstatic users, and enabled 32% Y/Y growth
img: assets/img/casestudies/revenue/result.jpg
importance: 3
category: Professional
metrics:
  - value: "0 → 8,000"
    label: "Daily Active Users"
  - value: "$30B+"
    label: "Revenue Tracked"
  - value: "32% Y/Y"
    label: "Growth Enabled (Outpacing AWS)"
---

## The Challenge

{% include figure.liquid path="assets/img/casestudies/revenue/situation.jpg" class="img-fluid rounded z-depth-1" style="max-width: 45%; float: right; margin: 0 0 20px 20px;" zoomable=true %}

**The crisis was escalating:** Different teams were reporting different revenue numbers for the same products. Even Finance product teams and GTM teams had conflicting numbers. These conflicting reports had reached the **Cloud CEO and other top leaders, whose frustration was visibly building**.

<div class="pull-quote float-left">
"From deep skepticism to ecstatic users—transforming failed engineering project into company-wide platform"
</div>

**The failed attempt:** A formal Business Engineering team had just spent a **full year building a solution, and it was a massive failure**—users rebelled and the analytics tool achieved **zero user engagement**. They built a reliable pipeline with granular billing details, but it didn't tie back to SAP, making it unusable for any official reporting.

As someone with both finance and engineering background, **I knew from experience that if a report is not reconcilable, it is not usable**. The organization needed a single source of truth that everyone could trust.

## My Approach: The Unconventional Builder's Path

{% include figure.liquid path="assets/img/casestudies/revenue/task.jpg" class="img-fluid rounded z-depth-1" style="max-width: 50%; float: left; margin: 0 20px 20px 0;" zoomable=true %}

**The unconventional path of building a prototype myself** was the only way to prove the solution was possible and regain momentum quickly after the failed project. This exemplified my "insatiably curious builder" approach—I wasn't going to wait for perfect conditions.

### 1. Personal Technical Build

**I personally architected and built the initial end-to-end data pipeline prototype**. This wasn't delegation—I wrote the code myself:

- **Complex SQL joins:** I personally wrote the complex transformation logic required to correctly join our transactional billing data with our SAP general ledger and Salesforce CRM data
- **Tribal knowledge wrangling:** It took extensive research to engage SMEs and **wrangle 'tribal-knowledge'** to figure out how to connect the systems without data leakage or duplication
- **Reconciliation focus:** Built reconciliation checks at every step—my finance background taught me this was non-negotiable

### 2. Three Pillars Framework

My hypothesis: The platform **must be reconcilable, granular, and easy to use**. This became the north star for every decision:

- **Reconcilable:** Every number tied back to SAP general ledger (official books)
- **Granular:** Drill down to individual transactions and customers
- **Easy to use:** Self-service without SQL knowledge required

### 3. Political Navigation: Building the Landing Pad While the Rocket Launches

{% include figure.liquid path="assets/img/casestudies/revenue/action.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
<div class="caption">
From failed engineering project to successful platform through fast iterations and continuous user engagement
</div>

This is where the real challenge lay—**some leaders who had been skeptical and had tried to kill our project**. I applied my **"Rocket & Landing Pad" principle**: If you're launching a rocket (the solution), you need a landing pad (prepared users) ready.

**Building the Landing Pad Through Engagement:**
- **Building coalition:** Started with friendly early adopters who desperately needed the solution
- **Fast iterations:** Weekly demos showing tangible progress and momentum
- **UAT as investment strategy:** Had SMEs validate the data worked for THEIR specific use cases
- **User empowerment:** Made users feel their voice was heard and shaped the product
- **Managing skeptics:** Converted loudest critics into biggest champions through 1:1 sessions
- **Creating pull:** Each iteration built more demand for the next release
- **Executive air cover:** Kept Cloud leadership informed of progress to maintain support

The **UAT program was genius for creating buy-in**: We had subject matter experts validate that the data worked for their specific use cases. By the time we launched, they'd already done the leg work to integrate it into their workflows. They weren't just users—they were investors who'd validated their own success criteria.

The key insight: **Keep users engaged throughout the entire process**, not just at requirements gathering and launch. By delivering fast iterations that showed momentum, we built anticipation and readiness. When the platform was ready, we had 8,000 users waiting on the landing pad—many having already validated it would solve their exact problems.

## The Technical Implementation

### Data Architecture
```sql
-- Example of the complex join logic I personally wrote
WITH revenue_base AS (
  SELECT
    billing.*,
    sap.gl_account,
    sap.cost_center,
    sf.opportunity_id,
    sf.account_executive
  FROM transactional_billing billing
  LEFT JOIN sap_general_ledger sap
    ON billing.invoice_id = sap.reference_id
    AND billing.period = sap.fiscal_period
  LEFT JOIN salesforce_data sf
    ON billing.customer_id = sf.account_id
  WHERE
    -- Complex business rules from tribal knowledge
    billing.revenue_type IN ('subscription', 'usage', 'support')
    AND sap.gl_account LIKE '4%' -- Revenue accounts
)
```

The magic wasn't just in the SQL—it was understanding the business logic that no one had documented.

## The Outcome

{% include figure.liquid path="assets/img/casestudies/revenue/result.jpg" class="img-fluid rounded z-depth-1" style="max-width: 50%; float: right; margin: 0 0 20px 20px;" zoomable=true %}

### Immediate Impact

**We went from deep skepticism to ecstatic users** in just 6 months:

- **0 → 8,000 daily active users:** Organic adoption without mandates
- **Single source of truth:** Ended the era of conflicting revenue reports
- **32% Y/Y growth enabled:** Better visibility drove better decisions, outpacing AWS growth
- **CEO satisfaction:** Cloud CEO personally thanked the team for solving this

### Political Transformation: From Killers to Champions

The most satisfying outcome demonstrated the power of creating pull versus pushing solutions:

**Leaders who tried to kill our project early out of territorialism were now competing to be on the Steering and Governance committee.**

This wasn't luck—it was strategy. By building value incrementally and letting success create demand, we transformed the political landscape. As I learned: **"You can't push a rope up a hill."** Instead, we aligned the opportunity, showed the path, and let natural pull do the work. Once the train was in motion, even our former opponents wanted to board.

### Long-Term Value

- **Foundation for growth:** Became the bedrock for all revenue analytics and forecasting
- **M&A enablement:** Critical for acquisition integration and synergy tracking
- **Org-wide standard:** Replaced dozens of shadow analytics efforts
- **Still in use today:** The core architecture remains the backbone of revenue reporting

## Key Lessons

**Technical Excellence + Political Savvy = Success**

This project taught me that building great technology is only half the battle. Success required:
1. **Personal hands-on building** when stakes are high
2. **Political navigation** to overcome organizational antibodies
3. **User obsession** to drive organic adoption
4. **Persistence** through skepticism and opposition

The Revenue Platform exemplifies my approach: **I'm an insatiably curious builder** who thrives on zero-to-one challenges, especially when others have failed. The combination of personally coding the solution, wrangling tribal knowledge, and converting skeptics into champions created lasting organizational value that continues to drive billions in revenue decisions.

**The Builder's Mindset:** "I'm really not the person you hire to optimize a mature system by 2%. My passion is building the system—especially when everyone says it can't be done."