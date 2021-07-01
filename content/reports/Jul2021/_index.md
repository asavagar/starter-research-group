﻿---
title: Report July 2021
linktitle: July 2021
toc: true
type: docs
date: "2021-07-01T00:00:00+01:00"
draft: false
menu:
  reports:
#    parent: Reports 2021
    weight: 7

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 7
---

## In a nutshell

We analyse Companies House ["basic company data"](http://download.companieshouse.gov.uk/en_output.html) up to the June 30th, 2021. We note a slowdown in company registration relative to June 2020. However, firm creation remains stronger than the same period in 2019. 

## <i class="far fa-lightbulb"></i>  <span class="ml-1">Highlights</span>
1. Business creation decreased 4.6% between May 2021 and June 2021.
2. Business creation was 18% lower in June 2021 than in June 2020.
3. The largest number of company registrations occurs in 'Wholesale and retail trade; repair of motor vehicles and motorcycles', 'Manufacturing' and ‘Financial and insurance activities’ sectors. 


## <i class="fas fa-bullseye"></i> <span class="ml-1">Aggregate Analysis</span>
### Daily 
The chart below shows the daily company incorporations in the UK since January 2020. The lockdown periods correspond to our key dates [timeline](https://uk-firm-dynamics.netlify.app/reports/#timeline). [Lockdown-III eases further]( https://www.bbc.co.uk/news/uk-56641596) on April 12, 2021 (pubs, restaurants, hairdressers, gyms and non-essential shops can reopen). In terms of restrictions, no changes occur since May 2021.

{{< chart data="dailyagg" >}}
<small>Download histogram data as: <a href="data/01histogram.csv" download="01histogram.csv"><i class="fas fa-file-csv"></i></a>
  <br>
Download statistics as: <a href="data/02statsLockdown.xlsx" download="02statistics.xlsx"><i class="fas fa-file-excel"></i></a></small>

- Business creation decreased 4.6% between May and June 2021. 
- 21,475 additional companies were registered in June 2021 relative to June 2019. 
- 13,406 less company registrations are noticed in June 2021 relative to June 2020.
- The median daily registrations were 43% higher in June 2021 than June 2019. 

The chart below shows the rolling average of firm creation since January 2019. Shaded areas correspond to lockdown periods as shown our key dates [timeline](https://uk-firm-dynamics.netlify.app/reports/#timeline).

{{< chart data="rollAv" >}}
Download rolling average data as: <a href="data/08rollingAverage.csv" download="08rollingAverage.csv"><i class="fas fa-file-excel"></i></a></small>



### Relative  

Company registrations persistently exceed their 2019levels. This effect is strong regardless the third national lockdown. However, a slowdown is noticed in June 2021 relative to June 2020.  

{{< chart data="total" >}}
<small>Download data as: <a href="data/04ratio.csv" download="03ratio.csv"><i class="fas fa-file-csv"></i></a></small>

### June
Daily average company registrations in June 2021 are 18% lower than June 2020, but 54.22% higher than June 2019.

{{< chart data="may" >}}
<small>Download data as: <a href="data/03statsJune.csv" download="04may.csv"><i class="fas fa-file-csv"></i></a></small>

## <i class="fas fa-map-marker-alt"></i>  <span class="ml-1">Regional Analysis</span>

### Postcode Area
The map shows the percentage change in new registrations in June 2021 compared to June 2019.  

<iframe src="mapJune2021Av.html" style="height:600px;width:100%;border:none;overflow:hidden;"></iframe>

### Country 
The following graph aggregates business creation by country. London, followed by England, dominates business registrations. 

{{< chart data="country" >}}
<small>Download data as: <a href="data/05country.csv" download="05country.csv"><i class="fas fa-file-csv"></i></a></small>

### London
Within London, most of the business creation in June 2021 comes from Central, East and North London. 

{{< chart data="london" >}}
<small>Download data as: <a href="data/06London.csv" download="06london.csv"><i class="fas fa-file-csv"></i></a></small>


## <i class="fas fa-industry"></i> <span class="ml-1">Sectoral Analysis</span>
### SIC Sections
The graph illustrates company registrations in June 2021 relative to 2019 by industrial sector. It compares the percentage change in 2021 relative to 2019 for each week of the year. We use 4-digit SIC levels (ONS "Classes") and group them into broader sectors (ONS "Sections"). We use the [ONS classification](https://onsdigital.github.io/dp-classification-tools/standard-industrial-classification/ONS_SIC_hierarchy_view.html). We show a selection of sectors that present notable changes. 

{{< chart data="sectors" >}}
<small>Download data as: <a href="data/07sections.csv" download="07sections.csv"><i class="fas fa-file-csv"></i></a></small>

- June 2021 retains higher firm creation in most sectors than June 2019.
- 'Wholesale, and Retail Trade', 'Manufacturing', and ‘Financial and insurance activities’ sectors keep showing the greatest increase in firm creation in June 2021. 
- Compared to June 2019, in June 2021 there is more than a 300% increase in business creation for ‘Removal services’, ‘Wholesale on a fee or contract basis’^[It regards the classes of ‘Agents involved in the sale of furniture, household goods, hardware and ironmongery’ and ‘Agents involved in the sale of agricultural raw materials, live animals, textile raw materials and semi-finished goods’.], ‘Retail sale via mail order houses or via Internet’ and ‘Wholesale of electrical household appliances’. 
- There are lower registrations relative to June 2019 in ‘Packaging activities’, ‘Warehousing and storage’ and ‘Service activities incidental to land transportation’. 


{{< cta cta_text="Snapshot" cta_link="/reports/jul2021/July2021.pdf" cta_new_tab="true" >}}