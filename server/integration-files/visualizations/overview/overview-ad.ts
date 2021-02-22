/*
 * Wazuh app - Module for Overview/PM visualizations
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
export default [
    {
      _id: 'Wazuh-App-Overview-AD-Events-over-time',
      _type: 'visualization',
      _source: {
        title: 'Events over time',
        visState:
          '{"title":"Events over time","type":"area","params":{"scale":"linear","yAxis":{},"smoothLines":true,"addTimeMarker":false,"interpolate":"linear","addLegend":true,"shareYAxis":true,"mode":"overlap","defaultYExtents":false,"setYExtents":false,"addTooltip":true,"times":[],"type":"area","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal","setYExtents":false,"defaultYExtents":false},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"area","mode":"normal","data":{"label":"Count","id":"1"},"interpolate":"cardinal","valueAxis":"ValueAxis-1"}],"legendPosition":"right"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"group","params":{"field":"rule.description","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","size":10,"order":"desc","orderBy":"1"}},{"id":"3","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}}]}',
        uiStateJSON: '{}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
            '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
        }
      }
    },
    {
      _id: 'Wazuh-App-Overview-AD-Top-5-rules',
      _type: 'visualization',
      _source: {
        title: 'Rule distribution',
        visState:
          '{"title":"Rule distribution","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"sum","schema":"metric","params":{"field":"rule.level"}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"rule.description","size":5,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
        uiStateJSON: '{}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
            '{"index":"wazuh-alerts","query":{"query":"","language":"lucene"},"filter":[]}'
        }
      }
    },
    {
      _id: 'Wazuh-App-Overview-AD-Top-5-agents-pie',
      _type: 'visualization',
      _source: {
        title: 'Top 5 agents',
        visState:
          '{"title":"Top 5 agents","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"agent.name","size":5,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
        uiStateJSON: '{}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
            '{"index":"wazuh-alerts","query":{"language":"lucene","query":""},"filter":[]}'
        }
      }
    },
    {
      _id: 'Wazuh-App-Overview-AD-Events-per-agent-evolution',
      _source: {
        title: 'Events per control type evolution',
        visState:
          '{"title":"Events per control type evolution","type":"line","params":{"type":"line","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"line","mode":"normal","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":true,"type":"terms","schema":"group","params":{"field":"data.title","size":5,"order":"desc","orderBy":"1"}},{"id":"2","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}}]}',
        uiStateJSON: '{}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
            '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
        }
      },
      _type: 'visualization'
    },
    {
      _id: 'Wazuh-App-Overview-AD-Created-Users',
      _type: 'visualization',
      _source: {
        title: 'Created users',
        visState:
        '{"title":"Created Users","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.subjectUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Executed By"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.targetUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Targeted Username"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"}}]}',
        uiStateJSON:
          '{"vis":{"params":{"sort":{"columnIndex":3,"direction":"desc"}}}}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"lucene"},"filter":[{"meta":{"type":"phrases","key":"rule.groups","value":"account_created","params":["account_created"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"rule.groups":"account_created"}}],"minimum_should_match":1}},"$state":{"store":"appState"}},{"meta":{"type":"phrases","key":"data.win.eventdata.subjectUserName","value":"ANONYMOUS LOGON","params":["ANONYMOUS LOGON"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.win.eventdata.subjectUserName":"ANONYMOUS LOGON"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'      }
      }
    },
     {
      _id: 'Wazuh-App-Overview-AD-Changed-Users',
      _type: 'visualization',
      _source: {
        title: 'Changed Users Accounts',
        visState:
        '{"title":"Changed Users Accounts","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.subjectUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Executed By"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.targetUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Targeted Username"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"}}]}',
        uiStateJSON:
          '{"vis":{"params":{"sort":{"columnIndex":1,"direction":"desc"}}}}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"lucene"},"filter":[{"meta":{"type":"phrases","key":"rule.groups","value":"account_edited","params":["account_edited"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"rule.groups":"account_edited"}}],"minimum_should_match":1}},"$state":{"store":"appState"}},{"meta":{"type":"phrases","key":"data.win.eventdata.subjectUserName","value":"ANONYMOUS LOGON","params":["ANONYMOUS LOGON"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.win.eventdata.subjectUserName":"ANONYMOUS LOGON"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
         }
      }
    },
    {
      _id: 'Wazuh-App-Overview-AD-Deleted-Users',
      _type: 'visualization',
      _source: {
        title: 'Deleted Users',
        visState:
        '{"title":"Deleted Users","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.subjectUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Executed By"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.win.eventdata.targetUserName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Targeted Username"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"}}]}',
        uiStateJSON:
          '{"vis":{"params":{"sort":{"columnIndex":1,"direction":"desc"}}}}',
        description: '',
        version: 1,
        kibanaSavedObjectMeta: {
          searchSourceJSON:
          '{"index":"wazuh-alerts","query":{"query":"","language":"lucene"},"filter":[{"meta":{"type":"phrases","key":"rule.groups","value":"account_deleted","params":["account_deleted"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"rule.groups":"account_deleted"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
        }
      }
    }
  ];
  