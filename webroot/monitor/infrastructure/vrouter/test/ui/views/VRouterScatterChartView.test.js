/*
 * Copyright (c) 2016 Juniper Networks, Inc. All rights reserved.
 */
define([
    'co-test-constants',
    'co-test-runner',
    'ct-test-utils',
    'ct-test-messages',
    'monitor/infrastructure/vrouter/test/ui/unit/VRouterScatterChartView.mock.data',
    'co-chart-view-zoom-scatter-test-suite'
], function (cotc,cotr, cttu, cttm, TestMockdata, ZoomScatterChartTestSuite) {

    debugger;
    
    var moduleId = cttm.VROUTER_ZOOM_SCATTER_CHART_TEST_MODULE;

    var testType = cotc.VIEW_TEST;

    var fakeServerConfig = cotr.getDefaultFakeServerConfig();

    var fakeServerResponsesConfig = function() {
        var responses = [];
        responses.push(cotr.createFakeServerResponse( {
            url: /api\/admin\/monitor\/infrastructure\/vrouters\/summary*$/,
            body: JSON.stringify(TestMockdata.VRouterScatterChartMockdata)
        }));
        
        return responses;
    };
    fakeServerConfig.getResponsesConfig = fakeServerResponsesConfig;

    var pageConfig = cotr.getDefaultPageConfig();
    pageConfig.hashParams = {
        p: 'mon_infra_vrouter'
    };
    pageConfig.loadTimeout = cotc.PAGE_LOAD_TIMEOUT * 5;

    var getTestConfig = function() {
        return {
            rootView: ctBaseDir + '/monitor/infrastructure/vrouter/ui/js/views/VRouterView.js',
            tests: [
                {
                    viewId: ctwl.VROUTER_SUMMARY_CHART_ID,
                    suites: [
                        {
                            class: ZoomScatterChartTestSuite,
                            groups: ['all']
                        }
                    ]
                }
            ]
        };
    };

    var pageTestConfig = cotr.createPageTestConfig(moduleId, testType, fakeServerConfig, pageConfig, getTestConfig);
    cotr.startTestRunner(pageTestConfig);

    console.log("*********************************************************************");
    console.log("                  DONE WITH VROUTER CALLBACK");
    console.log("*********************************************************************");
});
