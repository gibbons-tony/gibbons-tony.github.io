---
layout: page
title: AI-Powered Commodity Trading Platform
description: Algorithmic trading system achieving 23.7% returns with 1.19 Sharpe ratio
img: assets/img/mids/trading_platform.png
importance: 5
category: academic
github: https://github.com/gibbons-tony/project-demos-public
redirect: https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_5_CAPSTONE_TRADING_REVISED.md
---

## The Challenge

Building a complete algorithmic trading system from scratch - solving the prediction paradox, backtest trap, computational nightmare, and balancing risk vs return.

## Innovation

Four-layer intelligence system:
1. **Market Regime Detection**: Adapts strategy to market conditions
2. **Feature Engineering**: Domain-specific features for commodities
3. **Ensemble Predictions**: Meta-learning to weight 5 models dynamically
4. **Risk Management**: Kelly Criterion position sizing with volatility adjustment

## Results

| Metric | My System | Buy & Hold | S&P GSCI |
|--------|-----------|------------|----------|
| Annual Return | **23.7%** | 9.5% | 11.2% |
| Sharpe Ratio | **1.19** | 0.34 | 0.46 |
| Max Drawdown | -12.4% | -28.7% | -31.2% |
| Win Rate | 58.2% | 52.1% | 53.3% |

## Technical Highlights

```python
class MarketRegimeDetector:
    def detect_regime(self, market_data):
        # Volatility regime (calm vs volatile)
        volatility = market_data['returns'].rolling(20).std().iloc[-1]
        vol_regime = 'high_vol' if volatility > 1.5 * historical_vol else 'normal_vol'

        # Trend regime (trending vs mean-reverting)
        if sma_20.iloc[-1] > sma_50.iloc[-1] * 1.02:
            trend_regime = 'strong_uptrend'

        # Map to optimal strategy
        return self.map_regime_to_strategy(vol_regime, trend_regime, corr_regime)
```

## Key Discoveries

- **Most alpha comes from risk management**, not predictions
- **Fractional Kelly (25%)** prevents ruin vs full Kelly
- **Cross-commodity ratios** (oil/gold) more predictive than individual prices
- **Walk-forward validation** shows 30% degradation from backtest to reality

## The Meta Learning

Systems that survive beat systems that optimize. The best results came from intelligently combining statistics, ML, finance, and engineering into a cohesive system.

[→ **Read Full Technical Case Study**](https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_5_CAPSTONE_TRADING_REVISED.md)