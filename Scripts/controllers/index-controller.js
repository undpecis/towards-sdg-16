//used scripts:
//- jquery (for DOM manipulation)
//- ScrollMagic (for detecting scroll events)
//- TweenMax (GreenSock GSAP) (for animation)
//
$(document).ready(function () {
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
    /* #region AMCharts Map */
    var undpWorldMap = AmCharts.makeChart("mapdiv", {
        /**
         * this tells amCharts it's a map
         */
        "type": "map",
        "allowClickOnSelectedObject": false,
        "smallMap": {
            "enabled": false
        },
        "zoomControl": {
            "zoomFactor": 1.5,
            "maxZoomLevel": 15
        },
        /**
         * create data provider object
         * map property is usually the same as the name of the map file.
         * getAreasFromMap indicates that amMap should read all the areas available
         * in the map data and treat them as they are included in your data provider.
         * in case you don't set it to true, all the areas except listed in data
         * provider will be treated as unlisted.
         */
        //"mouseWheelZoomEnabled": true,
        "dataProvider": {
            "map": "worldLow",
            "getAreasFromMap": true,
            "areas": [
              { "id": "AL", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Albania" },
              { "id": "AM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Armenia" },
              { "id": "AZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Azerbaijan" },
              { "id": "BA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Bosnia and Herzegovina" },
              { "id": "MK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "FYR Macedonia" },
              { "id": "GE", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Georgia" },
              { "id": "KZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kazakhstan" },
              { "id": "XK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kosovo" },
              { "id": "KG", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kyrgyzstan" },
              { "id": "MD", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Moldova" },
              { "id": "ME", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Montenegro" },
              { "id": "RS", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Serbia" },
              { "id": "TJ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Tajikistan" },
              { "id": "TR", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkey" },
              { "id": "TM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkmenistan" },
              { "id": "UZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Uzbekistan" },
              { "id": "UA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Ukraine" }
            ]
        },

        /**
         * create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        "areasSettings": {
            "autoZoom": true,
            "color": "#c94b58",
            "outlineColor": "#c94b58",
            "outlineThickness": 1,
            //"outlineColor": "#243338",
            "rollOverColor": "#b0414c",
            "rollOverOutlineColor": "#b0414c",
            "selectedColor": "#00699e",
            "selectedOutlineColor": "#00699e",
            "selectable": false
        },
        /**
         * let's say we want a small map to be displayed, so let's create it
         */
        "listeners": [
            {
                "event": "clickMapObject",
                "method": function (event) {
                    var countryOfInterest = false;
                    for (var i = 0; i < listOfActiveCountries.length; i++) {
                        if (listOfActiveCountries[i].id == event.mapObject.id) {
                            countryOfInterest = true;
                        }
                    }
                    if (countryOfInterest == true) {
                        //'mainContainerId' is id of main html container; we need it to access angular controller and send the id of country that has been clicked; ID of country is defined in this controller in 'listOfActiveCountries' object AND IT SHOULD BE DEFINED ALSO in 'home-controller.js'
                        angular.element(document.getElementById('mainContainerId')).scope().countryClickedFunc(event.mapObject.id);
                        var titleObjects = document.getElementsByClassName('c-dynamic-country-title');
                        for (var i = 0; i < titleObjects.length; i++) {
                            titleObjects[i].innerHTML = event.mapObject.title;
                        }
                        $(".c-country-key-txxt-wrap").show();
                    } else {
                        return false;
                    }
                    //Resolution depending function
                    if ($(window).width() > 992) {
                        console.log("I'm calling function above 992 = large");
                        //$('div.c-country-title.c-show-when-lg').show();
                    }
                    else {
                        console.log("I'm calling function below 992 = small");
                        //$('div.c-country-title.c-show-when-xs').show();
                    }
                    //// Ignore any click not on area
                    //if (e.mapObject.objectType !== "MapArea")
                    //    return;

                    //var area = e.mapObject;

                    //// Toggle showAsSelected
                    //area.showAsSelected = !area.showAsSelected;
                    //e.chart.returnInitialColor(area);

                    //// Update the list
                    //document.getElementById("selected").innerHTML = JSON.stringify(getSelectedCountries());
                }
            },
            {
                "event": "init",
                "method": function (event) {
                    //console.log('zoomLatitude methods: ' + event.chart.getObjectById("KZ").zoomLatitude );"));
                    event.chart.zoomToLongLat(2, 69.8885, 35.3864);
                }
            }
        ]
    });
    //
    //undpWorldMap.addListener("click", function (e) {
    //    console.log('console clog clicke here is true::  ' + e.mapObject.objectType);
    //});
    //function preSelectCountries(list) {
    //    for (var i = 0; i < list.length; i++) {
    //        var area = map.getObjectById(list[i]);
    //        area.showAsSelected = true;
    //        map.returnInitialColor(area);
    //    }
    //}
    /* #endregion AMCharts Map */
    /* #region CUTSOM JAVASCRIPT */
    /* #region Open key results with country flag */
    $("div.c-country-title.c-show-when-lg").click(function () {
        $("div.c-key-results-content-flag.c-show-when-lg").toggle();
    });
    $("div.c-country-title.c-show-when-xs").click(function () {
        $("div#c-ng-expandable-content-01").toggle();
        //$("div.c-expandable-content-wrap").toggle();
    });
    /* #endregion Open key results with country flag */
    /* #region Open key results EXTRA content  */
    $(".c-key-results-learn-more").click(function () {
        $("div#c-ng-expandable-content-01").show();
        //$("div.c-expandable-content-wrap").show();
        console.log("dafafaf++++++e");
    });
    /* #endregion Open key results EXTRA content  */
    /* #region Open FOCUS AREAS extra content  */
    $(".c-ng-bttn-focus").click(function () {
        $("#c-ng-expandable-content-02").toggle();
    });
    /* #endregion Open FOCUS AREAS extra content  */

    //$("#c-ng-bttn-map-country-when-lg").click(function () {
    //    //$("#c-ng-expandable-content-01").toggle();
    //    $("#cid-country-key-txxt-wrap").toggle();
    //    //$("#c-ng-flag-content-01-lg").toggle();
    //    $("#cid-title-arrow-up").toggle();
    //    $("#cid-title-arrow-down").toggle();
    //});
    //$("#c-ng-bttn-map-country-when-xs").click(function () {
    //    //$("#c-ng-expandable-content-01").toggle();
    //    $("#cid-country-key-txxt-wrap").toggle();
    //    $("#cid-title-arrow-up").toggle();
    //    $("#cid-title-arrow-down").toggle();
    //});
    //$("#cid-key-results-learn-more-bttn").click(function () {
    //    //$("#c-ng-expandable-content-01").toggle();
    //});
    //$(".c-ng-bttn-focus").click(function () {
    //    $("#c-ng-expandable-content-02").toggle();
    //});
    ///* #region Key content when small resolutions */
    //$("#c-bttn-key-results-01").click(function () {
    //    $("#c-content-key-results-01").toggle();
    //});
    //$("#c-bttn-key-results-02").click(function () {
    //    $("#c-content-key-results-02").toggle();
    //});
    //$("#c-bttn-key-results-03").click(function () {
    //    $("#c-content-key-results-03").toggle();
    //});
    /* #endregion Key content when small resolutions */
    /* #region Inclusive political processes when small resolutions */
    $("#c-bttn-inclusive-political-01").click(function () {
        $("#c-content-inclusive-political-01").toggle();
    });
    $("#c-bttn-inclusive-political-02").click(function () {
        $("#c-content-inclusive-political-02").toggle();
    });
    $("#c-bttn-inclusive-political-03").click(function () {
        $("#c-content-inclusive-political-03").toggle();
    });
    $("#c-bttn-inclusive-political-04").click(function () {
        $("#c-content-inclusive-political-04").toggle();
    });
    /* #endregion Inclusive political processes when small resolutions */
    /* #region Footer controlls */
    $("#c-bttn-footer-one").click(function () {
        $("#c-footer-expand-one").toggle();
    });
    $("#c-bttn-footer-two").click(function () {
        $("#c-footer-expand-two").toggle();
    });
    $("#c-bttn-footer-three").click(function () {
        $("#c-footer-expand-three").toggle();
    });
    $("#c-bttn-footer-four").click(function () {
        $("#c-footer-expand-four").toggle();
    });
    /* #endregion Footer controlls */
    /* #endregion CUTSOM JAVASCRIPT */
    /* #region SCROLL MAGIC setup */
    // init controller
    var controller = new ScrollMagic.Controller();
    // build scene // Infographic Dots
    var sceneForDots = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-dots", duration: 200 })
    sceneForDots.triggerHook("onCenter")
    .addTo(controller)
    .on("start", function (e) {
        animateDots();
    })
    // build scene // Infographic Female
    var sceneForFemale = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-female", duration: 200 })
    .addTo(controller)
    .on("start", function (e) {
        animateFemale();
    })
    // build scene // Infographic Legal
    var sceneForLegal = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-legal", duration: 200 })
    .addTo(controller)
    .on("start", function (e) {
        animateLegal();
    })
    // build scene // Infographic People figures
    var sceneForLegal = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-people", duration: 200 })
    .addTo(controller)
    .on("start", function (e) {
        animatePeopleFigures();
        //var titleObject = document.getElementById('test-text-people');
        //titleObject.innerHTML = 'FIRED+++';
    })
    // build scene // Infographic Legal
    var sceneForLegal = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-bullets", duration: 200 })
    .addTo(controller)
    .on("start", function (e) {
        animateBullets();
        //var titleObject = document.getElementById('test-text-bullets');
        //titleObject.innerHTML = 'FIRED+++';
    })
    // build scene // Infographic Legal
    var sceneForLegal = new ScrollMagic.Scene({ triggerElement: "#trigger-infographic-flower", duration: 200 })
    .addTo(controller)
    .on("start", function (e) {
        animateFlower();
        //var titleObject = document.getElementById('test-text-flower');
        //titleObject.innerHTML = 'FIRED+++';
    })
    //.on("update", function (e) {
    //    console.log('its on update >>');
    //})
    //.on("enter", function (e) {
    //    console.log('its on enter >>');
    //})
    //.on("leave", function (e) {
    //    console.log('its on leave >>');
    //})
    //.on("start", function (e) {
    //    //console.log('its on start >>');
    //    animateDots();
    //})
    //.on("end", function (e) {
    //    console.log('its on end >>');
    //})
    //.on("progress", function (e) {
    //    console.log('its on progress >> ' + e.progress);
    //});
    /* #endregion SCROLL MAGIC setup */
    //-------------------------------------------------------//
    /* #region SVG animation - Infographic Dots */
    var graphicDots;
    var graphicDotsSVGdocument;
    graphicDots_Interval = setInterval(graphicDots_setup, 300);
    function graphicDots_setup() {
        graphicDots = document.getElementById("cid-infographic-dots");
        // Get the SVG document inside the Object tag
        graphicDotsSVGdocument = graphicDots.contentDocument;
        if (graphicDotsSVGdocument != null) {
            clearInterval(graphicDots_Interval); // stop the interval
        }
    }
    //state of animation
    var graphicDotsFired = false;
    function animateDots() {
        if (graphicDotsFired == false && graphicDotsSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var circleGroup = graphicDotsSVGdocument.getElementById('ASHE');
            var svgItems = $(circleGroup).find('circle');
            var allCircles = $(graphicDotsSVGdocument).find('circle');
            graphicDotsFired = true;
            var delayNumber = 0.015;
            for (var i = 0; i < svgItems.length; i++) {
                var newDelayValue = delayNumber * i;
                TweenMax.to(svgItems[i], 0.05, { fill: "#05679a", ease: Power2.easeInOut, delay: newDelayValue });
                TweenMax.to(svgItems[i], 0.05, { scaleX: 1.5, scaleY: 1.5, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%", onComplete: returnScaleCircle, onCompleteParams: [i], delay: newDelayValue });
                function returnScaleCircle(completedi) {
                    TweenMax.to(svgItems[completedi], 0.05, { scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%" });
                }
            }
            for (var i = 0; i < allCircles.length; i++) {
                var newDelayValue = delayNumber * i;
                TweenMax.from(allCircles[i], 0.15, { opacity: 0, ease: Power2.easeInOut, transformOrigin: "50% 50%", delay: newDelayValue });
            }
        }
    }
    /* #endregion SVG animation - Infographic Dots */
    /* #region SVG animation - Infographic Female */
    var graphicFemale;
    var graphicFemaleSVGdocument;
    graphicFemale_Interval = setInterval(graphicFemale_setup, 300);
    function graphicFemale_setup() {
        graphicFemale = document.getElementById("cid-infographic-female");
        // Get the SVG document inside the Object tag
        graphicFemaleSVGdocument = graphicFemale.contentDocument;
        if (graphicFemaleSVGdocument != null) {
            clearInterval(graphicFemale_Interval); // stop the interval
        }
    }
    //state of animation
    var graphicFemaleFired = false;
    function animateFemale() {
        if (graphicFemaleFired == false && graphicFemaleSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var idFemaleMiddle = 'femaleMiddle';
            var idFemaleLeft = 'femaleLeft';
            var idFemaleRight = 'femaleRight';
            var femaleItems = [];
            femaleItems.push(graphicFemaleSVGdocument.getElementById(idFemaleMiddle));
            femaleItems.push(graphicFemaleSVGdocument.getElementById(idFemaleLeft));
            femaleItems.push(graphicFemaleSVGdocument.getElementById(idFemaleRight));
            //
            graphicFemaleFired = true;
            var delayNumber = 0.03;
            for (var i = 0; i < femaleItems.length; i++) {
                var newDelayValue = delayNumber * i;
                /* #region Animating position */
                var currentItemId = $(femaleItems[i]).attr("id");
                var itemStartPositionX;
                if (currentItemId == idFemaleMiddle) {
                    itemStartPositionX = 0;
                } else if (currentItemId == idFemaleLeft) {
                    itemStartPositionX = 30;
                } else if (currentItemId == idFemaleRight) {
                    itemStartPositionX = -30;
                }
                TweenMax.from(femaleItems[i], 1.5, { x: itemStartPositionX, ease: Power2.easeInOut, delay: newDelayValue });
                TweenMax.from(femaleItems[i], 0.75, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", ease: Power2.easeInOut, delay: newDelayValue });
                /* #endregion Animating position */
                var actualIconPath = $(femaleItems[i]).find('path');
                TweenMax.to(actualIconPath, 0.5, { fill: "#05679a", ease: Power2.easeInOut, delay: newDelayValue });
            }
        }
    }
    /* #endregion SVG animation - Infographic Female */
    /* #region SVG animation - Infographic Legal */
    /* #region SVG animation - Infographic Female */
    var graphicLegal;
    var graphicLegalSVGdocument;
    graphicLegal_Interval = setInterval(graphicLegal_setup, 300);
    function graphicLegal_setup() {
        graphicLegal = document.getElementById("cid-infographic-legal");
        // Get the SVG document inside the Object tag
        graphicLegalSVGdocument = graphicLegal.contentDocument;
        if (graphicLegalSVGdocument != null) {
            clearInterval(graphicLegal_Interval); // stop the interval
        }
    }
    //state of animation
    var graphicLegalFired = false;
    function animateLegal() {
        if (graphicLegalFired == false && graphicLegalSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var idRoof = 'roof';
            var idColumnLeft = 'columnLeft';
            var idColumnRight = 'columnRight';
            var idBaseOne = 'baseOne';
            var idBaseTwo = 'baseTwo';
            var legalItems = [];
            legalItems.push(graphicLegalSVGdocument.getElementById(idRoof));
            legalItems.push(graphicLegalSVGdocument.getElementById(idColumnLeft));
            legalItems.push(graphicLegalSVGdocument.getElementById(idColumnRight));
            legalItems.push(graphicLegalSVGdocument.getElementById(idBaseOne));
            legalItems.push(graphicLegalSVGdocument.getElementById(idBaseTwo));
            //
            graphicLegalFired = true;
            var delayNumber = 0.02;
            for (var i = 0; i < legalItems.length; i++) {
                var newDelayValue = delayNumber * i;
                /* #region Animating position */
                var currentItemId = $(legalItems[i]).attr("id");
                var itemStartPositionX;
                if (currentItemId == idColumnLeft) {
                    itemStartPositionX = -200;
                } else if (currentItemId == idColumnRight) {
                    itemStartPositionX = 200;
                } else if (currentItemId == idBaseOne) {
                    itemStartPositionX = -200;
                } else if (currentItemId == idBaseTwo) {
                    itemStartPositionX = 200;
                } else {
                    newDelayValue = delayNumber * 20;
                }
                TweenMax.from(legalItems[i], 1.5, { x: itemStartPositionX, ease: Power2.easeInOut, delay: newDelayValue });
                TweenMax.from(legalItems[i], 0.75, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", ease: Power2.easeInOut, delay: newDelayValue });
                /* #endregion Animating position */
                TweenMax.to(legalItems[i], 0.5, { fill: "#05679a", ease: Power2.easeInOut, delay: newDelayValue });
            }
        }
    }
    /* #endregion SVG animation - Infographic Legal */
    /* #region SVG animation - Infographic People figures */
    // Get the Object by ID
    var graphicPeopleFigures;
    var graphicPeopleFiguresSVGdocument;
    graphicPeopleFigures_Interval = setInterval(graphicPeopleFigures_setup, 300);
    function graphicPeopleFigures_setup() {
        graphicPeopleFigures = document.getElementById("cid-infographic-people");
        // Get the SVG document inside the Object tag
        graphicPeopleFiguresSVGdocument = graphicPeopleFigures.contentDocument;
        if (graphicPeopleFiguresSVGdocument != null) {
            clearInterval(graphicPeopleFigures_Interval); // stop the interval
        }
    }
    //state of animation
    var graphicPeopleFiguresFired = false;
    function animatePeopleFigures() {
        if (graphicPeopleFiguresFired == false && graphicPeopleFiguresSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var peopleFiguresItems = [];
            peopleFiguresItems.push(graphicPeopleFiguresSVGdocument.getElementById('figure1'));
            peopleFiguresItems.push(graphicPeopleFiguresSVGdocument.getElementById('figure2'));
            peopleFiguresItems.push(graphicPeopleFiguresSVGdocument.getElementById('figure3'));
            peopleFiguresItems.push(graphicPeopleFiguresSVGdocument.getElementById('figure4'));
            peopleFiguresItems.push(graphicPeopleFiguresSVGdocument.getElementById('figure5'));
            //
            graphicPeopleFiguresFired = true;
            var delayNumber = 0.03;
            for (var i = 0; i < peopleFiguresItems.length; i++) {
                var newDelayValue = delayNumber * i;
                /* #region Animating position */
                var itemStartPositionX;
                if (i == 0) {
                    itemStartPositionX = -200;
                } else if (i == 1) {
                    itemStartPositionX = -200;
                } else if (i == 2) {
                    itemStartPositionX = 0;
                } else if (i == 3) {
                    itemStartPositionX = 200;
                } else if (i == 4) {
                    itemStartPositionX = 200;
                }
                TweenMax.from(peopleFiguresItems[i], 1.5, { x: itemStartPositionX, ease: Power2.easeInOut, delay: newDelayValue });
                TweenMax.from(peopleFiguresItems[i], 0.75, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", ease: Power2.easeInOut, delay: newDelayValue });
                /* #endregion Animating position */
                var actualIconPath = $(peopleFiguresItems[i]).find('path');
                TweenMax.to(actualIconPath, 0.5, { fill: "#f2605f", ease: Power2.easeInOut, delay: newDelayValue });
            }
        }
    }
    /* #endregion SVG animation - Infographic People figures */
    /* #region SVG animation - Infographic Bullets */
    // Get the Object by ID
    var graphicBullets;
    var graphicBulletsSVGdocument;
    graphicBullets_Interval = setInterval(graphicBullets_setup, 300);
    function graphicBullets_setup() {
        graphicBullets = document.getElementById("cid-infographic-bullets");
        // Get the SVG document inside the Object tag
        graphicBulletsSVGdocument = graphicBullets.contentDocument;
        if (graphicBulletsSVGdocument != null) {
            clearInterval(graphicBullets_Interval); // stop the interval
        }
    }
    //bulletItems.push(graphicBulletsSVGdocument.getElementById('bullet2'));
    //bulletItems.push(graphicBulletsSVGdocument.getElementById('bullet3'));
    //bulletItems.push(graphicBulletsSVGdocument.getElementById('bullet4'));
    //bulletItems.push(graphicBulletsSVGdocument.getElementById('bullet5'));
    //state of animation
    var graphicBulletsFired = false;
    function animateBullets() {
        if (graphicBulletsFired == false && graphicBulletsSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var bulletItems = [];
            for (var i = 0; i < 5; i++) {
                bulletItems.push(graphicBulletsSVGdocument.getElementById('bullet' + (i + 1)));
            }
            //
            graphicBulletsFired = true;
            var delayNumber = 0.03;
            for (var i = 0; i < bulletItems.length; i++) {
                var newDelayValue = delayNumber * i;
                /* #region Animating position */
                var itemStartPositionX = -100 * i;
                TweenMax.from(bulletItems[i], 0.75, { x: itemStartPositionX, ease: Power2.easeInOut, delay: newDelayValue });
                TweenMax.from(bulletItems[i], 1.5, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", ease: Power2.easeInOut, delay: newDelayValue });
                /* #endregion Animating position */
                if (i < bulletItems.length - 1) {
                    var actualIconPoligon = $(bulletItems[i]).find('polygon');
                    TweenMax.to(actualIconPoligon, 0.25, { fill: "#f2605f", ease: Power2.easeInOut, delay: newDelayValue });
                    var actualIconPath = $(bulletItems[i]).find('path');
                    TweenMax.to(actualIconPath, 0.25, { fill: "#f2605f", ease: Power2.easeInOut, delay: newDelayValue });
                }
            }
        }
    }
    /* #endregion SVG animation - Infographic Bullets */
    /* #region SVG animation - Infographic Flower */
    var graphicFlower;
    var graphicFlowerSVGdocument;
    graphicFlower_Interval = setInterval(graphicFlower_setup, 300);
    function graphicFlower_setup() {
        graphicFlower = document.getElementById("cid-infographic-flower");
        // Get the SVG document inside the Object tag
        graphicFlowerSVGdocument = graphicFlower.contentDocument;
        if (graphicFlowerSVGdocument != null) {
            clearInterval(graphicFlower_Interval); // stop the interval
        }
    }
    //state of animation
    var graphicFlowerFired = false;
    function animateFlower() {
        if (graphicFlowerFired == false && graphicFlowerSVGdocument != null) {
            // Get one of the SVG items by ID; 
            var flowerItems = [];
            for (var k = 0; k < 10; k++) {
                flowerItems.push(graphicFlowerSVGdocument.getElementById('active' + (k + 1)));
            }
            var allFlowerItems = [];
            for (var k = 0; k < 10; k++) {
                allFlowerItems = $(graphicFlowerSVGdocument).find('path');
            }
            //
            graphicFlowerFired = true;
            var delayNumber = 0.03;
            var circleItem = $(graphicFlowerSVGdocument).find('circle');
            TweenMax.from(circleItem, 1, { scaleX: 0.01, scaleY: 0.01, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), onComplete: animateCircleColor });
            function animateCircleColor() {
                TweenMax.to(circleItem, 0.25, { fill: "#f2605f", ease: Power2.easeInOut });
            }
            //fill: "#f2605f",
            for (var i = 0; i < allFlowerItems.length; i++) {
                var newDelayValue = delayNumber * i;
                var itemStartPositionX = -100 * i;
                TweenMax.from(allFlowerItems[i], 1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", ease: Power2.easeInOut, delay: newDelayValue });
                if (i < flowerItems.length - 1) {
                    TweenMax.to(flowerItems[i], 0.25, { fill: "#fdd5b1", ease: Power2.easeInOut, delay: newDelayValue });
                }
            }
        }
    }
    /* #endregion SVG animation - Infographic Flower */
});






//GSAP
// Get the Object by ID
//var graphicDots = document.getElementById("cid-infographic-dots");
//// Get the SVG document inside the Object tag
//var graphicDotsSVGdocument = graphicDots.contentDocument;
//// Get one of the SVG items by ID; 
//var svgItems = $(graphicDotsSVGdocument).find('.cvg-should-be-blue');
////state of animation
//var graphicDotsFired = false;
//function animateDots() {
//    console.log("Hit start point of scene. + " + svgItems.length);
//    if (graphicDotsFired == false) {
//        graphicDotsFired = true;
//        var delayNumber = 0.03;
//        for (var i = 0; i < svgItems.length; i++) {
//            var newDelayValue = delayNumber * i;
//            TweenMax.to(svgItems[i], 0.05, { fill: "#05679a", ease: Power2.easeInOut, delay: newDelayValue });
//            TweenMax.to(svgItems[i], 0.05, { scaleX: 1.8, scaleY: 1.8, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%", onComplete: returnScaleCircle, onCompleteParams: [i], delay: newDelayValue });
//            function returnScaleCircle(completedi) {
//                TweenMax.to(svgItems[completedi], 0.05, { scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%" });
//            }
//        }
//    }
//}


//triggerElement: "#cid-infographic-dots"
//*****
//function animateDots() {
//    console.log("Hit start point of scene.");
//    // Get the Object by ID
//    var graphicDots = document.getElementById("cid-infographic-dots");
//    // Get the SVG document inside the Object tag
//    var graphicDotsSVGdocument = graphicDots.contentDocument;
//    // Get one of the SVG items by ID;    
//    var svgItems = $(graphicDotsSVGdocument).find('.cvg-should-be-blue');
//    TweenMax.to(svgItems, 7, { fill: "#05679a", ease: Power2.easeInOut});
//}