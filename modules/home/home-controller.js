﻿'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$window', '$anchorScroll', '$location', '$timeout',
        function ($scope, $window, $anchorScroll, $location, $timeout) {
            var winElement = angular.element($window);
            var screenWidth = winElement.width();
            winElement.bind('resize', function () {
                screenWidth = winElement.width();
            });
            //'undpData' is object with side data defined inside 'allcontentdata.js' file
            var siteData = undpData;
            ///####################################################################################
            /* #region COUNTRIES RELATED CODE */
            //object with currently selected country data
            $scope.selectedCountry = {};
            //we are defining list of active countries (this 'listOfActiveCountries' is also defined inside 'index-controller.js' file)
            var listOfActiveCountries = [
              { "id": "AL", "title": "Albania" },
              { "id": "AM", "title": "Armenia" },
              { "id": "AZ", "title": "Azerbaijan" },
              { "id": "BY", "title": "Belarus" },
              { "id": "BA", "title": "Bosnia and Herzegovina" },
              { "id": "MK", "title": "FYR Macedonia" },
              { "id": "GE", "title": "Georgia" },
              { "id": "KZ", "title": "Kazakhstan" },
              { "id": "XK", "title": "Kosovo" },
              { "id": "KG", "title": "Kyrgyz Republic" },
              { "id": "MD", "title": "Moldova" },
              { "id": "ME", "title": "Montenegro" },
              { "id": "RS", "title": "Serbia" },
              { "id": "TJ", "title": "Tajikistan" },
              { "id": "TR", "title": "Turkey" },
              { "id": "TM", "title": "Turkmenistan" },
              { "id": "UA", "title": "Ukraine" },
              { "id": "UZ", "title": "Uzbekistan" }
            ];
            /* #region On country map click */
            //we are calling 'countryClickedFunc' from external file 'index-controller.js' and passing name of country that has been clicked
            $scope.countryClickedFunc = function (countryOfInterestId) {
                for (var i = 0; i < siteData.countries.length; i++) {
                    if (siteData.countries[i].id == countryOfInterestId) {
                        $scope.selectedCountry = siteData.countries[i];
                        $scope.dataBindBAC = $scope.selectedCountry.backgroundData;
                        $scope.dataBindStatement = $scope.selectedCountry.statement;
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                        $scope.$apply();
                    }
                }
            }
            /* #endregion On country map click */
            /* #region Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            $scope.dataBindBAC = {};
            $scope.dataBindStatement = {};
            $scope.currentBACindex = 0;
            $scope.enumBAC = {
                backgroundData: 0,
                assistanceData: 1,
                challengesData: 2
            }
            $scope.changeCountryBACData = function (buttonIndex) {
                if (buttonIndex == $scope.enumBAC.backgroundData) {
                    $scope.dataBindBAC = $scope.selectedCountry.backgroundData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.assistanceData) {
                    $scope.dataBindBAC = $scope.selectedCountry.assistanceData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.challengesData) {
                    $scope.dataBindBAC = $scope.selectedCountry.challengesData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                }
            }
            /* #endregion Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            /* #endregion COUNTRIES RELATED CODE */

            /* #region Content Visibility */
            $scope.ctrlVars = {                
                isInterestCountryClicked: false,
                //Key Result (Baskcground, Assistance.. Challanges..) = BAC
                isOpenCountryBACdata_lg: false,
                isOpenCountryBACdata_xs: false,
                //Focus Areas (Overview, Key trends, What we..) = OKW
                isOpenCountryOKWdata: false,
                //keeps visibility for Infographics SVG
                areInfographicsReady: false
            }
            $scope.toggleKeyContent = function (callerName) {
                if (callerName == 'closeInterestCountry') {
                    $scope.ctrlVars.isInterestCountryClicked = false;
                    if ($scope.ctrlVars.isOpenCountryBACdata_lg == true) {
                        $scope.ctrlVars.isOpenCountryBACdata_lg = false;
                    }
                    if ($scope.ctrlVars.isOpenCountryBACdata_xs == true) {
                        $scope.ctrlVars.isOpenCountryBACdata_xs = false;
                    }
                } else if (callerName == 'isOpenCountryBACdata_lg') {
                    $scope.ctrlVars.isOpenCountryBACdata_lg = !$scope.ctrlVars.isOpenCountryBACdata_lg;
                } else if (callerName == 'isOpenCountryBACdata_xs') {
                    $scope.ctrlVars.isOpenCountryBACdata_xs = !$scope.ctrlVars.isOpenCountryBACdata_xs;
                }
            }
            /* #endregion Content Visibility */

            /* #region FOCUS AREAS RELATED CODE */
            $scope.focusData = siteData.focusAreas;
            //object with currently selected Focus Area data
            $scope.selectedFocusArea = {};
            $scope.dataBindOKW = {};
            $scope.currentOKWindex = 0;
            //called from home.html
            $scope.currentFocusAreaIndex = null;
            var visibleFocusArea = [false, false, false, false];
            $scope.toggleFocusAreaVisibility = function (focusAreaIndex) {
                for (var i = 0; i < visibleFocusArea.length; i++) {
                    if (visibleFocusArea[i] == false) {
                        $scope.ctrlVars.isOpenCountryOKWdata = true;
                        $scope.currentFocusAreaIndex = focusAreaIndex;
                        visibleFocusArea[i] = true;
                        $scope.changeCountryOKWData(0);
                        for (var j = 0; j < $scope.focusData.length; j++) {
                            if (j == focusAreaIndex) {
                                $scope.selectedFocusArea = $scope.focusData[j];
                                $timeout(function () {
                                    $location.hash('cid-anchor-OKW-content');
                                    // call $anchorScroll()
                                    $anchorScroll();
                                }, 100);
                            }
                        }
                    } else {
                        $scope.ctrlVars.isOpenCountryOKWdata = false;
                        $scope.currentFocusAreaIndex = null;
                        visibleFocusArea[i] = false;
                    }
                }
            }
            $scope.enumOKW = {
                overviewData: 0,
                keyTrendsData: 1,
                whatWeDoData: 2
            }
            $scope.changeCountryOKWData = function (buttonIndex) {
                if (buttonIndex == $scope.enumOKW.overviewData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.overviewData;
                    $scope.currentOKWindex = buttonIndex;
                } else if (buttonIndex == $scope.enumOKW.keyTrendsData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.keyTrendsData;
                    $scope.currentOKWindex = buttonIndex;
                } else if (buttonIndex == $scope.enumOKW.whatWeDoData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.whatWeDoData;
                    $scope.currentOKWindex = buttonIndex;
                }
            }
            /* #endregion FOCUS AREAS RELATED CODE */
        }
    ]
);