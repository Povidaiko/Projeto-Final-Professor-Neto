const dataNotas = [
  { materia: "Algoritmo", nota: 9, cor: am5.color("#69b3e1") },
  { materia: "Banco de Dados", nota: 7, cor: am5.color("#518acb") },
  { materia: "Eng. de Software", nota: 10, cor: am5.color("#5a5ab5") },
  { materia: "Sis. Operacionais", nota: 5, cor: am5.color("#5e5eaaff") },
  { materia: "Desen. Web", nota: 10, cor: am5.color("#a958c2") },
  { materia: "Design Dig.", nota: 8, cor: am5.color("#d059c2") }
];

/*document.addEventListener('DOMContentLoaded', function() {
  am5.ready(function() {
    createHorizontalBarChart();
    createLineChart();
    createPieChart();
    createRadarChart();
    createVerticalBarChart();
  })
});*/

function createHorizontalBarChart(){
  const root = am5.Root.new("chartdiv3");
  root.setThemes([ am5themes_Animated.new(root) ]);
  const chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false, panY: false, wheelX: "none", wheelY: "none", layout: root.verticalLayout
  }));

  const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "materia",
      renderer: am5xy.AxisRendererY.new(root, { cellStartLocation: 0.1, cellEndLocation: 0.9, minGridDistance: 10 }),
      tooltip: null
  }));
  yAxis.data.setAll(dataNotas);
  
  const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      min: 0, max: 10,
      renderer: am5xy.AxisRendererX.new(root, {})
  }));
  
  const series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis, yAxis: yAxis, valueXField: "nota", categoryYField: "materia",
      tooltip: am5.Tooltip.new(root, { labelText: "{categoryY}: {valueX}" })
  }));

  series.columns.template.adapters.add("fill", (fill, target) => target.dataItem.dataContext.cor);
  series.columns.template.adapters.add("stroke", (stroke, target) => target.dataItem.dataContext.cor);
  series.data.setAll(dataNotas);
  
  series.appear(1000);
  chart.appear(1000, 100);
}

function createLineChart(){
      const root = am5.Root.new("chartdiv5");
      root.setThemes([ am5themes_Animated.new(root) ]);
      const chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: false, panY: false, wheelX: "none", wheelY: "none", paddingLeft: 0
      }));
      
      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          min: 3, max: 11,
          renderer: am5xy.AxisRendererY.new(root, {})
      }));
      
      const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          categoryField: "materia",
          renderer: am5xy.AxisRendererX.new(root, { cellStartLocation: 0.1, cellEndLocation: 0.9, minGridDistance: 20 }),
          tooltip: null
      }));
      xAxis.data.setAll(dataNotas);
      
      const series = chart.series.push(am5xy.LineSeries.new(root, {
          xAxis: xAxis, yAxis: yAxis, valueYField: "nota", categoryXField: "materia",
          tooltip: am5.Tooltip.new(root, { labelText: "{categoryX}: {valueY}" })
      }));
      
      series.bullets.push(function () { 
          return am5.Bullet.new(root, {
              sprite: am5.Circle.new(root, {
                  radius: 5,
                  fill: series.get("stroke")
              })
          });
      });
      
      series.data.setAll(dataNotas);
      series.appear(1000);
      chart.appear(1000, 100);
}

function createPieChart() {
  const root = am5.Root.new("chartdiv2");
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      endAngle: 270
    })
  );

  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "nota",
      categoryField: "materia",
      endAngle: 270,
      radius: am5.percent(60)
    })
  );

  series.states.create("hidden", {
    endAngle: -90
  });

  series.data.setAll(dataNotas);
  series.appear(1000, 100);
}

function createRadarChart(){
  const root = am5.Root.new("chartdiv4");
  root.setThemes([ am5themes_Animated.new(root) ]);
  const chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: false, panY: false, wheelX: "none", wheelY: "none"
  }));

  const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxZoomCount: 1,
      categoryField: "materia",
      renderer: am5radar.AxisRendererCircular.new(root, { minGridDistance: 50 })
  }));

  const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0, max: 10,
      renderer: am5radar.AxisRendererRadial.new(root, {})
  }));

  const series = chart.series.push(am5radar.RadarLineSeries.new(root, {
      name: "Notas",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "nota",
      categoryXField: "materia",
      stroke: am5.color("#a958c2"),
      fill: am5.color("#a958c2"),
      tooltip: am5.Tooltip.new(root, { labelText: "{categoryX}: {valueY}" })
  }));

  series.bullets.push(function () {
      return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
              radius: 6,
              fill: series.get("stroke")
          })
      });
  });

  series.strokes.template.set("strokeOpacity", 2);
  series.fills.template.setAll({
      fill: am5.color("#a958c2"),
      fillOpacity: 0.5
  });

  xAxis.data.setAll(dataNotas);
  series.data.setAll(dataNotas);
  series.appear(1000);
  chart.appear(1000, 100);
  }

  function createVerticalBarChart() {
      const root = am5.Root.new("chartdiv");
      root.setThemes([am5themes_Animated.new(root)]);
      
      const chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1
      }));
  
      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);
      
      const xRenderer = am5xy.AxisRendererX.new(root, { 
        minGridDistance: 30, 
        minorGridEnabled: true
      });
      
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });
      
      xRenderer.grid.template.setAll({ location: 1 });
      
      const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "materia",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      const yRenderer = am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 });
      
      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 11,
        maxDeviation: 0.3,
        renderer: yRenderer
      }));
      
      const series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Notas por MatÃ©ria",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "nota",
        sequencedInterpolation: true,
        categoryXField: "materia",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));
      
      series.columns.template.setAll({ 
        cornerRadiusTL: 5, 
        cornerRadiusTR: 5, 
        strokeOpacity: 0 
      });
      
      series.columns.template.adapters.add("fill", function(fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });
      
      series.columns.template.adapters.add("stroke", function(stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });
  
      xAxis.data.setAll(dataNotas);
      series.data.setAll(dataNotas);
      series.appear(1000);
      chart.appear(1000, 100);
  }