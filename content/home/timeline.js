({ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('plot1') 

        var resizeDebounce = null; 


        function resizePlot() { 

          var bb = gd.getBoundingClientRect(); 

          Plotly.relayout(gd, { 

            width: bb.width, 

              height: bb.height 

            }); 

          } 


          Plotly.plot(gd,  

              {
  "data": [
    {
      "x": [18209.6, 18680.4],
      "y": [0, 0],
      "text": "",
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.13385826771654,
        "color": "rgba(0,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18262, 18262, null, 18292, 18292, null, 18337, 18337, null, 18341, 18341, null, 18344, 18344, null, 18447, 18447, null, 18571, 18571, null, 18598, 18598, null, 18604, 18604, null, 18616, 18616, null, 18626, 18626, null, 18632, 18632],
      "y": [0, 0, null, -0.8, 0, null, 0.5, 0, null, -0.5, 0, null, 1, 0, null, -1, 0, null, 1.25, 0, null, -1.2, 0, null, 1.5, 0, null, -1.9, 0, null, 2.3, 0, null, -1.5, 0],
      "text": ["date: 18262<br />date: 2020-01-01<br />Milestones: ", "date: 18262<br />date: 2020-01-01<br />Milestones: ", null, "date: 18292<br />date: 2020-01-31<br />Milestones: First 2 confirmed cases", "date: 18292<br />date: 2020-01-31<br />Milestones: First 2 confirmed cases", null, "date: 18337<br />date: 2020-03-16<br />Milestones: Non-essential travel prohibited", "date: 18337<br />date: 2020-03-16<br />Milestones: Non-essential travel prohibited", null, "date: 18341<br />date: 2020-03-20<br />Milestones: Pubs etc. closed", "date: 18341<br />date: 2020-03-20<br />Milestones: Pubs etc. closed", null, "date: 18344<br />date: 2020-03-23<br />Milestones: Lockdown #1", "date: 18344<br />date: 2020-03-23<br />Milestones: Lockdown #1", null, "date: 18447<br />date: 2020-07-04<br />Milestones: End Lockdown #1", "date: 18447<br />date: 2020-07-04<br />Milestones: End Lockdown #1", null, "date: 18571<br />date: 2020-11-05<br />Milestones: Lockdown #2", "date: 18571<br />date: 2020-11-05<br />Milestones: Lockdown #2", null, "date: 18598<br />date: 2020-12-02<br />Milestones: End Lockdown #2", "date: 18598<br />date: 2020-12-02<br />Milestones: End Lockdown #2", null, "date: 18604<br />date: 2020-12-08<br />Milestones: First Pfizer/BioNTech  Vaccine", "date: 18604<br />date: 2020-12-08<br />Milestones: First Pfizer/BioNTech  Vaccine", null, "date: 18616<br />date: 2020-12-20<br />Milestones: New Tier-4 scheme", "date: 18616<br />date: 2020-12-20<br />Milestones: New Tier-4 scheme", null, "date: 18626<br />date: 2020-12-30<br />Milestones: EU-UK Trade and Cooperation Agreement", "date: 18626<br />date: 2020-12-30<br />Milestones: EU-UK Trade and Cooperation Agreement", null, "date: 18632<br />date: 2021-01-05<br />Milestones: Lockdown #3", "date: 18632<br />date: 2021-01-05<br />Milestones: Lockdown #3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 0.755905511811024,
        "color": "rgba(0,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18292, 18337, 18341],
      "y": [-0.8, 0.5, -0.5],
      "text": ["date: 2020-01-31<br />Milestones: First 2 confirmed cases", "date: 2020-03-16<br />Milestones: Non-essential travel prohibited", "date: 2020-03-20<br />Milestones: Pubs etc. closed"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(235,203,139,1)",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "rgba(235,203,139,1)"
        }
      },
      "hoveron": "points",
      "name": "M",
      "legendgroup": "M",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18344, 18571, 18616, 18632],
      "y": [1, 1.25, -1.9, -1.5],
      "text": ["date: 2020-03-23<br />Milestones: Lockdown #1", "date: 2020-11-05<br />Milestones: Lockdown #2", "date: 2020-12-20<br />Milestones: New Tier-4 scheme", "date: 2021-01-05<br />Milestones: Lockdown #3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(191,97,106,1)",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "rgba(191,97,106,1)"
        }
      },
      "hoveron": "points",
      "name": "R",
      "legendgroup": "R",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18447, 18598],
      "y": [-1, -1.2],
      "text": ["date: 2020-07-04<br />Milestones: End Lockdown #1", "date: 2020-12-02<br />Milestones: End Lockdown #2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(163,190,140,1)",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "rgba(163,190,140,1)"
        }
      },
      "hoveron": "points",
      "name": "G",
      "legendgroup": "G",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18604],
      "y": [1.5],
      "text": "date: 2020-12-08<br />Milestones: First Pfizer/BioNTech  Vaccine",
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(94,129,172,1)",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "rgba(94,129,172,1)"
        }
      },
      "hoveron": "points",
      "name": "B",
      "legendgroup": "B",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18626],
      "y": [2.3],
      "text": "date: 2020-12-30<br />Milestones: EU-UK Trade and Cooperation Agreement",
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(59,66,82,1)",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "rgba(59,66,82,1)"
        }
      },
      "hoveron": "points",
      "name": "EU",
      "legendgroup": "EU",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18262],
      "y": [0],
      "text": "date: 2020-01-01<br />Milestones: ",
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "transparent",
        "opacity": 1,
        "size": 11.3385826771654,
        "symbol": "circle",
        "line": {
          "width": 1.88976377952756,
          "color": "transparent"
        }
      },
      "hoveron": "points",
      "name": "NA",
      "legendgroup": "NA",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18231, 18262, 18293, 18322, 18353, 18383, 18414, 18444, 18475, 18506, 18536, 18567, 18597, 18628, 18659],
      "y": [-0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15, -0.15],
      "text": ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      "hovertext": ["date: 2019-12-01<br />Milestones: Dec", "date: 2020-01-01<br />Milestones: Jan", "date: 2020-02-01<br />Milestones: Feb", "date: 2020-03-01<br />Milestones: Mar", "date: 2020-04-01<br />Milestones: Apr", "date: 2020-05-01<br />Milestones: May", "date: 2020-06-01<br />Milestones: Jun", "date: 2020-07-01<br />Milestones: Jul", "date: 2020-08-01<br />Milestones: Aug", "date: 2020-09-01<br />Milestones: Sep", "date: 2020-10-01<br />Milestones: Oct", "date: 2020-11-01<br />Milestones: Nov", "date: 2020-12-01<br />Milestones: Dec", "date: 2021-01-01<br />Milestones: Jan", "date: 2021-02-01<br />Milestones: Feb"],
      "textfont": {
        "size": 13.2283464566929,
        "color": "rgba(0,0,0,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18262],
      "y": [-0.3],
      "text": "2020",
      "hovertext": "date: 2020-01-01<br />Milestones: 2020",
      "textfont": {
        "size": 13.2283464566929,
        "color": "rgba(0,0,0,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18292, 18337, 18341],
      "y": [-1, 0.7, -0.7],
      "text": ["First 2 confirmed cases", "Non-essential travel prohibited", "Pubs etc. closed"],
      "hovertext": ["date: 2020-01-31<br />Milestones: First 2 confirmed cases", "date: 2020-03-16<br />Milestones: Non-essential travel prohibited", "date: 2020-03-20<br />Milestones: Pubs etc. closed"],
      "textfont": {
        "size": 11.3385826771654,
        "color": "rgba(235,203,139,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "M",
      "legendgroup": "M",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18344, 18571, 18616, 18632],
      "y": [1.2, 1.45, -2.1, -1.7],
      "text": ["Lockdown #1", "Lockdown #2", "New Tier-4 scheme", "Lockdown #3"],
      "hovertext": ["date: 2020-03-23<br />Milestones: Lockdown #1", "date: 2020-11-05<br />Milestones: Lockdown #2", "date: 2020-12-20<br />Milestones: New Tier-4 scheme", "date: 2021-01-05<br />Milestones: Lockdown #3"],
      "textfont": {
        "size": 11.3385826771654,
        "color": "rgba(191,97,106,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "R",
      "legendgroup": "R",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18447, 18598],
      "y": [-1.2, -1.4],
      "text": ["End Lockdown #1", "End Lockdown #2"],
      "hovertext": ["date: 2020-07-04<br />Milestones: End Lockdown #1", "date: 2020-12-02<br />Milestones: End Lockdown #2"],
      "textfont": {
        "size": 11.3385826771654,
        "color": "rgba(163,190,140,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "G",
      "legendgroup": "G",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18604],
      "y": [1.7],
      "text": "First Pfizer/BioNTech  Vaccine",
      "hovertext": "date: 2020-12-08<br />Milestones: First Pfizer/BioNTech  Vaccine",
      "textfont": {
        "size": 11.3385826771654,
        "color": "rgba(94,129,172,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "B",
      "legendgroup": "B",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18626],
      "y": [2.5],
      "text": "EU-UK Trade and Cooperation Agreement",
      "hovertext": "date: 2020-12-30<br />Milestones: EU-UK Trade and Cooperation Agreement",
      "textfont": {
        "size": 11.3385826771654,
        "color": "rgba(59,66,82,1)"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "EU",
      "legendgroup": "EU",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [18262],
      "y": [0.2],
      "text": "",
      "hovertext": "date: 2020-01-01<br />Milestones: ",
      "textfont": {
        "size": 11.3385826771654,
        "color": "transparent"
      },
      "type": "scatter",
      "mode": "text",
      "hoveron": "points",
      "name": "NA",
      "legendgroup": "NA",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    }
  ],
  "layout": {
    "margin": {
      "t": 23.3059360730594,
      "r": 7.30593607305936,
      "b": 10.958904109589,
      "l": 10.958904109589
    },
    "plot_bgcolor": "rgba(255,255,255,1)",
    "paper_bgcolor": "rgba(255,255,255,1)",
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.6118721461187
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [18209.6, 18680.4],
      "tickmode": "array",
      "ticktext": ["Jan 2020", "Apr 2020", "Jul 2020", "Oct 2020", "Jan 2021"],
      "tickvals": [18262, 18353, 18444, 18536, 18628],
      "categoryorder": "array",
      "categoryarray": ["Jan 2020", "Apr 2020", "Jul 2020", "Oct 2020", "Jan 2021"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 3.65296803652968,
      "tickwidth": 0,
      "showticklabels": false,
      "tickfont": {
        "color": null,
        "family": null,
        "size": 0
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": false,
      "gridcolor": null,
      "gridwidth": 0,
      "zeroline": false,
      "anchor": "y",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "yaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [-2.33, 2.73],
      "tickmode": "array",
      "ticktext": ["-2", "-1", "0", "1", "2"],
      "tickvals": [-2, -1, 0, 1, 2],
      "categoryorder": "array",
      "categoryarray": ["-2", "-1", "0", "1", "2"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 3.65296803652968,
      "tickwidth": 0,
      "showticklabels": false,
      "tickfont": {
        "color": null,
        "family": null,
        "size": 0
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": false,
      "gridcolor": null,
      "gridwidth": 0,
      "zeroline": false,
      "anchor": "x",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "shapes": [
      {
        "type": "rect",
        "fillcolor": null,
        "line": {
          "color": null,
          "width": 0,
          "linetype": []
        },
        "yref": "paper",
        "xref": "paper",
        "x0": 0,
        "x1": 1,
        "y0": 0,
        "y1": 1
      }
    ],
    "showlegend": false,
    "legend": {
      "bgcolor": "rgba(255,255,255,1)",
      "bordercolor": "transparent",
      "borderwidth": 1.88976377952756,
      "font": {
        "color": "rgba(0,0,0,1)",
        "family": "",
        "size": 11.689497716895
      }
    },
    "hovermode": "closest",
    "barmode": "relative"
  },
  "config": {
    "doubleClick": "reset",
    "showSendToCloud": false
  },
  "source": "A",
  "attrs": {
    "84d8587d5119": {
      "yintercept": {},
      "type": "scatter"
    },
    "84d822e151d8": {
      "y": {},
      "yend": {},
      "xend": {},
      "x": {},
      "y.1": {},
      "colour": {},
      "label": {}
    },
    "84d876247567": {
      "y": {},
      "x": {},
      "y.1": {},
      "colour": {},
      "label": {}
    },
    "84d823ac6f71": {
      "x": {},
      "y": {},
      "label": {},
      "x.1": {},
      "y.1": {},
      "colour": {},
      "label.1": {}
    },
    "84d83f802e87": {
      "x": {},
      "y": {},
      "label": {},
      "fontface": {},
      "x.1": {},
      "y.1": {},
      "colour": {},
      "label.1": {}
    },
    "84d810fe3f64": {
      "x": {},
      "y": {},
      "label": {},
      "x.1": {},
      "y.1": {},
      "colour": {},
      "label.1": {}
    },
    "84d866192b53": {
      "x": {},
      "y": {},
      "label": {},
      "fontface": {},
      "x.1": {},
      "y.1": {},
      "colour": {},
      "label.1": {}
    },
    "84d845b832ea": {
      "y": {},
      "label": {},
      "x": {},
      "y.1": {},
      "colour": {},
      "label.1": {}
    }
  },
  "cur_data": "84d8587d5119",
  "visdat": {
    "84d8587d5119": ["function (y) ", "x"],
    "84d822e151d8": ["function (y) ", "x"],
    "84d876247567": ["function (y) ", "x"],
    "84d823ac6f71": ["function (y) ", "x"],
    "84d83f802e87": ["function (y) ", "x"],
    "84d810fe3f64": ["function (y) ", "x"],
    "84d866192b53": ["function (y) ", "x"],
    "84d845b832ea": ["function (y) ", "x"]
  },
  "highlight": {
    "on": "plotly_click",
    "persistent": false,
    "dynamic": false,
    "selectize": false,
    "opacityDim": 0.2,
    "selected": {
      "opacity": 1
    },
    "debounce": 0
  },
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot", "plotly_sunburstclick"],
  "base_url": "https://plot.ly"
}
           

                  ); 

           }()); 

  
