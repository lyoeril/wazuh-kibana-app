export default [{
    _id: 'Wazuh-App-Overview-THREAT-Events-over-time',
    _type: 'visualization',
    _source: {
      title: 'Events over time',
      visState:
        '{"title":"Events over time","type":"area","params":{"scale":"linear","yAxis":{},"smoothLines":true,"addTimeMarker":false,"interpolate":"linear","addLegend":true,"shareYAxis":true,"mode":"overlap","defaultYExtents":false,"setYExtents":false,"addTooltip":true,"times":[],"type":"area","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal","setYExtents":false,"defaultYExtents":false},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"area","mode":"normal","data":{"label":"Count","id":"1"},"interpolate":"cardinal","valueAxis":"ValueAxis-1"}],"legendPosition":"right"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"group","params":{"field":"data.alert.category","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","size":20,"order":"desc","orderBy":"1"}},{"id":"3","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}}]}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Unknown Traffic, Not Suspicious Traffic","params":["Unknown Traffic","Not Suspicious Traffic"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Unknown Traffic"}},{"match_phrase":{"data.alert.category":"Not Suspicious Traffic"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
      }
    }
  },
  ]