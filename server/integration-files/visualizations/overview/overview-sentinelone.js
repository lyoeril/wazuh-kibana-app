export default [{
    _id: 'Wazuh-App-Overview-SentinelOne-Pie',
    _type: 'visualization',
    _source: {
      title: 'Alert Level',
      visState:
        '{"title":"Alert Level","type":"pie","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Rule"},"schema":"segment"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.level","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Level"},"schema":"segment"}],"params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100},"row":true}}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  },{
    _id: 'Wazuh-App-Overview-SentinelOne-Overview',
    _type: 'visualization',
    _source: {
      title: 'Overview',
      visState:
        '{"title":"Overview","type":"histogram","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-15m","to":"now"},"useNormalizedEsInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{},"customLabel":"Timestamp"},"schema":"segment"},{"id":"6","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":4,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Rule"},"schema":"group"}],"params":{"type":"histogram","grid":{"categoryLines":false,"valueAxis":""},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100,"rotate":0},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"histogram","mode":"stacked","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{"show":false},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"},"row":false}}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  },{
    _id: 'Wazuh-App-Overview-SentinelOne-Table-All',
    _type: 'visualization',
    _source: {
      title: 'Collection of events',
      visState:
        '{"title":"Collection of events","type":"table","aggs":[{"id":"6","enabled":true,"type":"max","params":{"field":"rule.level","customLabel":"Level"},"schema":"metric"},{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"agent.name","orderBy":"1","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"System"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"},{"id":"7","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.reason","orderBy":"6","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":true,"missingBucketLabel":"-","customLabel":"Reason"},"schema":"bucket"},{"id":"8","enabled":true,"type":"terms","params":{"field":"data.win.system.severityValue","orderBy":"6","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Type"},"schema":"bucket"}],"params":{"perPage":10,"percentageCol":"","showMetricsAtAllLevels":false,"showPartialRows":false,"showTotal":false,"sort":{"columnIndex":null,"direction":null},"totalFunc":"sum"}}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  },{
    _id: 'Wazuh-App-Overview-SentinelOne-Table-Threat',
    _type: 'visualization',
    _source: {
      title: 'Threats',
      visState:
        '{"title":"Threats","type":"table","aggs":[{"id":"6","enabled":true,"type":"max","params":{"field":"rule.level","customLabel":"Level"},"schema":"metric"},{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"agent.name","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"System"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"},{"id":"4","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.name","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"-","customLabel":"Process"},"schema":"bucket"},{"id":"7","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.path","orderBy":"6","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Path"},"schema":"bucket"},{"id":"9","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.detectionEngine","orderBy":"6","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Engine"},"schema":"bucket"},{"id":"8","enabled":true,"type":"terms","params":{"field":"data.win.system.threadID","orderBy":"6","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Thread ID"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  },{
    _id: 'Wazuh-App-Overview-SentinelOne-Table-Solved',
    _type: 'visualization',
    _source: {
      title: 'Event Resolution',
      visState:
        '{"title":"Event Resolution","type":"table","aggs":[{"id":"6","enabled":true,"type":"max","params":{"field":"rule.level","customLabel":"Level"},"schema":"metric"},{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"agent.name","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"System"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"},{"id":"8","enabled":false,"type":"terms","params":{"field":"data.win.system.threadID","orderBy":"6","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Thread ID"},"schema":"bucket"},{"id":"4","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.action","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"-","customLabel":"Process"},"schema":"bucket"},{"id":"7","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.result","orderBy":"6","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"-","customLabel":"Path"},"schema":"bucket"}],"params":{"perPage":10,"percentageCol":"","showMetricsAtAllLevels":false,"showPartialRows":false,"showTotal":false,"sort":{"columnIndex":null,"direction":null},"totalFunc":"sum"}}',
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
      }
    }
  }

  ]