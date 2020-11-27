export default [{
    _id: 'Wazuh-App-Overview-SONICWALL-Events-over-time',
    _type: 'visualization',
    _source: {
      title: 'Events over time',
      visState:
        '{"title":"Events over time","type":"area","params":{"scale":"linear","yAxis":{},"smoothLines":true,"addTimeMarker":false,"interpolate":"linear","addLegend":true,"shareYAxis":true,"mode":"overlap","defaultYExtents":false,"setYExtents":false,"addTooltip":true,"times":[],"type":"area","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal","setYExtents":false,"defaultYExtents":false},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"area","mode":"normal","data":{"label":"Count","id":"1"},"interpolate":"cardinal","valueAxis":"ValueAxis-1"}],"legendPosition":"right"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"group","params":{"field":"data.action","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","size":20,"order":"desc","orderBy":"1"}},{"id":"3","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.action","value":"Unknown Traffic, Not Suspicious Traffic","params":["Unknown Traffic","Not Suspicious Traffic"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.action":"Unknown Traffic"}},{"match_phrase":{"data.action":"Not Suspicious Traffic"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
      }
    }
  },
  {
    _id: 'Wazuh-App-Overview-SONICWALL-Top-5-rules',
    _type: 'visualization',
    _source: {
      title: 'Top 5 rules',
      visState:
        '{"title":"Export rule distr","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"sum","schema":"metric","params":{"field":"rule.level"}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"data.action","size":20,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.action","value":"Unknown Traffic, Not Suspicious Traffic","params":["Unknown Traffic","Not Suspicious Traffic"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.action":"Unknown Traffic"}},{"match_phrase":{"data.action":"Not Suspicious Traffic"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
      }
    }
  },
  {
    _id: 'Wazuh-App-Overview-SONICWALL-Website-Table-Split',
    _type: 'visualization',
    _source: {
      title: 'Website Table',
      visState:
        '{"title":"Website Hit Table","type":"table","params":{"perPage":5,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":true,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":3,"format":{"id":1},"params":{},"aggType":"count"}],"buckets":[{"accessor":2,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":true,"type":"terms","schema":"split","params":{"field":"data.Category","orderBy":"1","order":"desc","size":50,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":" ","row":true}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.dstname","orderBy":"1","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"alias":null,"negate":false,"disabled":false,"type":"phrase","key":"data.action","params":{"query":"Web site hit"},"index":"wazuh-alerts"},"query":{"match":{"data.action":{"query":"Web site hit","type":"phrase"}}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
      }
    }
  },  
  {
    _id: 'Wazuh-App-Overview-SONICWALL-Category-Pie',
    _type: 'visualization',
    _source: {
      title: 'Category Overview',
      visState:
      '{"title":"Category Overview","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100},"dimensions":{"metric":{"accessor":1,"format":{"id":1},"params":{},"aggType":"count"},"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{"customLabel":""}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"data.Category","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Action"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"alias":null,"negate":false,"disabled":false,"type":"phrase","key":"data.action","params":{"query":"Web site hit"},"index":"wazuh-alerts"},"query":{"match":{"data.action":{"query":"Web site hit","type":"phrase"}}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
      }
    }
  },
  {
    _id: 'Wazuh-App-Overview-SONICWALL-Vertical-Bar',
    _type: 'visualization',
    _source: {
      title: 'Vertical Bar Sonicwall',
      visState:
      '{"title":"Horizontal Bar Chart","type":"horizontal_bar","params":{"type":"histogram","grid":{"categoryLines":false,"valueAxis":""},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"left","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"rotate":0,"filter":true,"truncate":200},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"bottom","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":true,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"histogram","mode":"normal","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true,"interpolate":"linear"}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#34130C"}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"group","params":{"field":"data.dstname","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  },

]