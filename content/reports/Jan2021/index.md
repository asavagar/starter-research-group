---
title: Report January 2021
linktitle: January 2021
toc: true
type: docs
date: "2021-01-08T00:00:00+01:00"
draft: false
menu:
  reports:
    parent: Reports
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

## <i class="far fa-lightbulb"></i>  Highlights
1. Daily business creation increases by 18.5 % between the first and second lockdown.
2. 16.9% more companies incorporations in the second lockdown, relative to the first one.
3. 17,167 additional companies registered in December 2020 than in December 2019.
4. 2,465 new daily registrations since the first Pfizer/BioNTech vaccine.
5. Manufacturing, retail and wholesale sectors outperform in December 2020 relative to 2019 levels. Accommodation and Food services sector’s recovery, occurred after the initial lockdown, worsens as certain areas enter the new Tier-4 scheme.

We analyse Companies House ["basic company data"](http://download.companieshouse.gov.uk/en_output.html) up to the December 31st, 2020 to understand the effect of COVID-19 policies on business creation, and hence, economic activity. We find that daily business creation increases by 18.5 % after the first, but before the second, lockdown. 17,167 additional companies registered on December 2020 than in the equivalent period last year. On average terms, retail and wholesale sectors outperform in December 2020 relative to the same period a year ago. Catering's earlier recovery worsens as certain areas enter the new Tier-4 scheme.

## Daily Aggregate Company Incorporations
The charts below show daily company incorporations in the UK for 2020 and their distribution.

{{< chart data="dailyagg" >}}
{{< chart data="density" >}}

The following table summarises the median and the mean of daily new registrations in different periods. The sharp decline of new incorporations, observed during the first lockdown implementation, recovers. The shock of the initial lockdown anticipates over time. Relative to the period before and during the lockdown, registrations increase by 18.5 % and 16.9 %, respectively.
We notice a moderate shock during the second lockdown. The daily median goes from 3057 incorporations during lockdown-II is implemented to 2675 incorporations per day after lockdown-II is implemented, but before lockdown-III. This is a fall in business creation of 1.9 %.
London, South East and East of England move to tier 4 on December 20th, under the [new Tier scheme](https://www.bbc.co.uk/news/uk-55379220). The data for the latter period concern the last 12 days of December. Daily median business creation shrinks by 7.5 % and 20.8 % relative to the period during the first and second lockdown, respectively. Most of the business creation occurs the last week of 2020 and concerns the manufacturing sector. This over-creation may be related to Brexit and more specifically to the EU-UK Trade and Cooperation Agreement (TCA).

**Table:** Median and Mean of new daily companies Incorporations in 2020

||<td colspan=3 style="text-align:center;"> Lockdown I</td> <td colspan=2 style="text-align:center;"> Lockdown II</td> <td colspan=1 style="text-align:center;">New Tier-4 Scheme</td> |
|---------|:----------:|:------------:|:----------:|:--------:|:-------------:|:--------:|:-------------------:|:---------------------:|
|         | Total    | Before     | During   | After  | During      | After  | During            | since first vaccine  |
| Median  | 2848.5   | 2581       | 2616     | 3058   | 3057        | 2675   | 2420              | 2563                 |
| Mean    | 2662.076 | 2397.662   | 2582.545 | 2849.6 | 2942.905    | 2572.4 | 2529              | 2465.353             |

*Source: Authors' Calculations*

### Total Effect 

In total, a persistent recovery in business creation has been seen since June. Lockdown-I ended on the 4th of July, when non-essential businesses opened again. Forward that period up until the end of 2020, company registrations exceed their 2019 levels. Over 2020, on average, 2848 daily new companies register. The peak of this ratio is noticed during the week 19-25.08.2020. 

Looking at the distribution of registrations, the majority or new registrations occurs after the end of the lockdown-I. In fact, similar performance is observed between the end of the first and during the second lockdown (July - early December). This may be, mostly, attributed to the less restrictions attached to the second lockdown, since the duration of these two periods differs. 16.9 % more companies incorporations noted during the second lockdown than the first one. 

{{< chart data="total" >}}

## <i class="fas fa-map-marker-alt"></i>  Regional Analysis

The following map[^1] shows the average percentage change of new registrations occurred in December, relative to the same week in December 2019. To see the values, hoover your mouse over each bubble.

{{< chart data="bubbles" >}}

A similar illustration follows in a form of a heatmap to associate areas and their percentage change between December 2020 and 2019.
{{< chart data="map" >}}

The following graph aggregates the business creation by country. In England, we exclude London, which we see separately. Northern Ireland, Scotland and Wales experience the largest declines in new business registrations relative to their 2019 levels. Following lockdown-I, an uneven recovery is observed. Since the end of June, Scotland and Wales maintain a positive business creation relative to the equivalent period of 2019. Northern Ireland's recovery commences the same period. It faces, though, several fluctuations until the end of lockdown-II. In London, firm creation escapes the initial lockdown shock quickly and catches up 2019 levels since April. The remaining English regions perform better than the three countries under devolved administration; their recovery occurs faster.

{{< chart data="country" >}}

## <i class="fas fa-industry"></i> Sectoral Change

The following graph illustrates the cumulative company registrations in 2020 by industrial sector relative to 2019 values. For the analysis, we use the 2-digit SIC level and convert it to sectors, following the [ONS classification](https://www.ons.gov.uk/methodology/classificationsandstandards/ukstandardindustrialclassificationofeconomicactivities/uksic2007).

A variation among different industries exists. In the post-lockdown-I period, all industries recover to their 2019 equivalent levels. On average terms, retail and wholesale sectors outperform in December 2020 relative to the same period a year ago. Catering's recovery, occurred after the initial lockdown, worsens as certain areas in the UK enter the new Tier-4 scheme.


{{< chart data="sector" >}}


[^1]: Daily maps with all the new established firms, by full postcode, are available upon request in .gif format.
