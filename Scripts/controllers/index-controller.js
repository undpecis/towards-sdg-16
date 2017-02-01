//used scripts:
//- jquery (for DOM manipulation)
//- ScrollMagic (for detecting scroll events)
//- TweenMax (GreenSock GSAP) (for animation)
//
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
        "allowClickOnSelectedObject": true,
        "smallMap": {
            "enabled": false
        },
        "zoomControl": {
            "zoomFactor": 1.5,
            "maxZoomLevel": 7
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
            //"getAreasFromMap": true,
            "areas": [
              { "id": "AL", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Albania" },
              { "id": "AM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Armenia" },
              { "id": "AZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Azerbaijan" },
              { "id": "BA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Bosnia and Herzegovina" },
              { "id": "BY", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Belarus" },
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
            "unlistedAreasColor": "#c94b58",
            "unlistedAreasOutlineColor": "#c94b58",
            "balloonText": "[[title]]"
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
                        //var titleObjects = document.getElementsByClassName('c-dynamic-country-title');
                        //for (var i = 0; i < titleObjects.length; i++) {
                        //    titleObjects[i].innerHTML = event.mapObject.title;
                        //}
                        //$(".c-country-key-txxt-wrap").show();
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
            },
            {
                "event": "homeButtonClicked",
                "method": function (event) {
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
    //-------------------------------------------------------//
    /* #region SVG animation - Global Variables */
    var scrollMagicInitController = new ScrollMagic.Controller();
    var startingOpacity = 0.2;
    /* #endregion SVG animation - Global Variables */
    /* #region SVG animation - Albania */
    window.setScrollMagicScene_albania = function () {
        console.log('setScrollMagicScene_albania');
        var graphicAlbania_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-albania-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicAlbania_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicAlbania_object;
    //contains <svg> element with graphics
    var graphicAlbania_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicAlbania_interval = setInterval(graphicAlbania_setup, 300);
    function graphicAlbania_setup() {
        // Get the div holding svg object
        graphicAlbania_object = document.getElementById("cid-infographic-albania-object");
        if (graphicAlbania_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicAlbania_svgDocument = graphicAlbania_object.contentDocument;
            if (graphicAlbania_svgDocument != null) {
                clearInterval(graphicAlbania_interval); // stop the interval
                //initial hide of svg
                graphicAlbania_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicAlbania_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicAlbania_animate() {
        console.log('graphicAlbania_animate');
        if (graphicAlbania_fired == false && graphicAlbania_svgDocument != null) {
            graphicAlbania_fired = true;
            /* #region Defining Elements - Grayed Lines */
            var objects_allGrayedLines = [];            
            objects_allGrayedLines = graphicAlbania_svgDocument.getElementById("group-grayed").querySelectorAll("path");
            for (var i = 0; i < objects_allGrayedLines.length; i++) {
                TweenMax.to(objects_allGrayedLines[i], 0.1, { opacity: 0, scaleX: 0.01, scaleY: 0.01, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #endregion Defining Elements - Grayed Lines */
            /* #region Defining Elements - Colored Lines */
            var objects_allColoredLines = [];
            objects_allColoredLines = graphicAlbania_svgDocument.getElementById("group-colored").querySelectorAll("path");
            for (var i = 0; i < objects_allColoredLines.length; i++) {
                TweenMax.to(objects_allColoredLines[i], 0.1, { opacity: 0, scaleX: 0.01, scaleY: 0.01, transformOrigin: "50% 50%", });
            }
            /* #endregion Defining Elements - Colored Lines */
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_allColoredLines.length) {
                    TweenMax.to(graphicAlbania_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_allGrayedLines });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_allGrayedLines() {
                for (var i = 0; i < objects_allGrayedLines.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_allGrayedLines[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forColored });
                }
            }
            var counter_forColored = 0;
            function countdown_forColored() {
                counter_forColored++;
                if (counter_forColored == objects_allGrayedLines.length) {
                    for (var i = 0; i < objects_allGrayedLines.length; i++) {
                        var animDelay = delayNumber * i;
                        TweenMax.to(objects_allColoredLines[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay });
                    }
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Albania */
    /* #region SVG animation - Armenia */
    window.setScrollMagicScene_armenia = function () {
        console.log('setScrollMagicScene_armenia');
        var graphicArmenia_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-armenia-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicArmenia_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicArmenia_object;
    //contains <svg> element with graphics
    var graphicArmenia_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicArmenia_interval = setInterval(graphicArmenia_setup, 300);
    function graphicArmenia_setup() {
        // Get the div holding svg object
        graphicArmenia_object = document.getElementById("cid-infographic-armenia-object");
        if (graphicArmenia_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicArmenia_svgDocument = graphicArmenia_object.contentDocument;
            if (graphicArmenia_svgDocument != null) {
                clearInterval(graphicArmenia_interval); // stop the interval
                //initial hide of svg
                graphicArmenia_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicArmenia_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicArmenia_animate() {
        console.log('graphicArmenia_animate');
        if (graphicArmenia_fired == false && graphicArmenia_svgDocument != null) {
            graphicArmenia_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicArmenia_svgDocument.getElementById("building"));
            objects_all.push(graphicArmenia_svgDocument.getElementById("person"));
            objects_all.push(graphicArmenia_svgDocument.getElementById("left-number-group"));
            objects_all.push(graphicArmenia_svgDocument.getElementById("right-number-group"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #endregion Defining Elements */
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicArmenia_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Armenia */
    /* #region SVG animation - Azerbaijan */
    window.setScrollMagicScene_azerbaijan = function () {
        console.log('setScrollMagicScene_azerbaijan');
        var graphicAzerbaijan_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-azerbaijan-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicAzerbaijan_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicAzerbaijan_object;
    //contains <svg> element with graphics
    var graphicAzerbaijan_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicAzerbaijan_interval = setInterval(graphicAzerbaijan_setup, 300);
    function graphicAzerbaijan_setup() {
        // Get the div holding svg object
        graphicAzerbaijan_object = document.getElementById("cid-infographic-azerbaijan-object");
        if (graphicAzerbaijan_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicAzerbaijan_svgDocument = graphicAzerbaijan_object.contentDocument;
            if (graphicAzerbaijan_svgDocument != null) {
                clearInterval(graphicAzerbaijan_interval); // stop the interval
                //initial hide of svg
                graphicAzerbaijan_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicAzerbaijan_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicAzerbaijan_animate() {
        console.log('graphicArmenia_animate');
        if (graphicAzerbaijan_fired == false && graphicAzerbaijan_svgDocument != null) {
            graphicAzerbaijan_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicAzerbaijan_svgDocument.getElementById("document-back"));
            objects_all.push(graphicAzerbaijan_svgDocument.getElementById("document-front"));
            objects_all.push(graphicAzerbaijan_svgDocument.getElementById("monkey"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #endregion Defining Elements */
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicAzerbaijan_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Azerbaijan */
    /* #region SVG animation - Belarus */
    window.setScrollMagicScene_belarus = function () {
        console.log('setScrollMagicScene_belarus');
        var graphicBelarus_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-belarus-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicBelarus_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicBelarus_object;
    //contains <svg> element with graphics
    var graphicBelarus_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicBelarus_interval = setInterval(graphicBelarus_setup, 300);
    function graphicBelarus_setup() {
        // Get the div holding svg object
        graphicBelarus_object = document.getElementById("cid-infographic-belarus-object");
        if (graphicBelarus_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicBelarus_svgDocument = graphicBelarus_object.contentDocument;
            if (graphicBelarus_svgDocument != null) {
                clearInterval(graphicBelarus_interval); // stop the interval
                //initial hide of svg
                graphicBelarus_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicBelarus_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicBelarus_animate() {
        if (graphicBelarus_fired == false && graphicBelarus_svgDocument != null) {
            graphicBelarus_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicBelarus_svgDocument.getElementById("left-group"));
            objects_all.push(graphicBelarus_svgDocument.getElementById("right-group"));
            objects_all.push(graphicBelarus_svgDocument.getElementById("calendar"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #endregion Defining Elements */
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicBelarus_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Belarus */
    /* #region SVG animation - Bosnia */
    window.setScrollMagicScene_bosnia = function () {
        console.log('setScrollMagicScene_bosnia');
        var graphicBosnia_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-bosnia-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicBosnia_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicBosnia_object;
    //contains <svg> element with graphics
    var graphicBosnia_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicBosnia_interval = setInterval(graphicBosnia_setup, 300);
    function graphicBosnia_setup() {
        // Get the div holding svg object
        graphicBosnia_object = document.getElementById("cid-infographic-bosnia-object");
        if (graphicBosnia_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicBosnia_svgDocument = graphicBosnia_object.contentDocument;
            if (graphicBosnia_svgDocument != null) {
                clearInterval(graphicBosnia_interval); // stop the interval
                //initial hide of svg
                graphicBosnia_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicBosnia_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicBosnia_animate() {
        if (graphicBosnia_fired == false && graphicBosnia_svgDocument != null) {
            graphicBosnia_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            for (var i = 0; i < 9; i++) {
                objects_all.push(graphicBosnia_svgDocument.getElementById("person-" + (i + 1)));
            }            
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #endregion Defining Elements */
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicBosnia_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Bosnia */
    /* #region SVG animation - Georgia */
    window.setScrollMagicScene_georgia = function () {
        console.log('setScrollMagicScene_georgia');
        var graphicGeorgia_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-georgia-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicGeorgia_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicGeorgia_object;
    //contains <svg> element with graphics
    var graphicGeorgia_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicGeorgia_interval = setInterval(graphicGeorgia_setup, 300);
    function graphicGeorgia_setup() {
        // Get the div holding svg object
        graphicGeorgia_object = document.getElementById("cid-infographic-georgia-object");
        if (graphicGeorgia_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicGeorgia_svgDocument = graphicGeorgia_object.contentDocument;
            if (graphicGeorgia_svgDocument != null) {
                clearInterval(graphicGeorgia_interval); // stop the interval
                //initial hide of svg
                graphicGeorgia_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicGeorgia_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicGeorgia_animate() {
        if (graphicGeorgia_fired == false && graphicGeorgia_svgDocument != null) {
            graphicGeorgia_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicGeorgia_svgDocument.getElementById("hammer"));
            objects_all.push(graphicGeorgia_svgDocument.getElementById("base"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicGeorgia_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Georgia */
    /* #region SVG animation - Kazakhstan */
    window.setScrollMagicScene_kazakhstan = function () {
        console.log('setScrollMagicScene_kazakhstan');
        var graphicKazakhstan_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-kazakhstan-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicKazakhstan_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicKazakhstan_object;
    //contains <svg> element with graphics
    var graphicKazakhstan_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicKazakhstan_interval = setInterval(graphicKazakhstan_setup, 300);
    function graphicKazakhstan_setup() {
        // Get the div holding svg object
        graphicKazakhstan_object = document.getElementById("cid-infographic-kazakhstan-object");
        if (graphicKazakhstan_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicKazakhstan_svgDocument = graphicKazakhstan_object.contentDocument;
            if (graphicKazakhstan_svgDocument != null) {
                clearInterval(graphicKazakhstan_interval); // stop the interval
                //initial hide of svg
                graphicKazakhstan_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicKazakhstan_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicKazakhstan_animate() {
        console.log('graphicKazakhstan_animate');
        if (graphicKazakhstan_fired == false && graphicKazakhstan_svgDocument != null) {
            graphicKazakhstan_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicKazakhstan_svgDocument.getElementById("building"));
            objects_all.push(graphicKazakhstan_svgDocument.getElementById("person-left"));
            objects_all.push(graphicKazakhstan_svgDocument.getElementById("person-right"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicKazakhstan_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Kazakhstan */
    /* #region SVG animation - Kosovo */
    window.setScrollMagicScene_kosovo = function () {
        console.log('setScrollMagicScene_kosovo');
        var graphicKosovo_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-kosovo-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicKosovo_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicKosovo_object;
    //contains <svg> element with graphics
    var graphicKosovo_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicKosovo_interval = setInterval(graphicKosovo_setup, 300);
    function graphicKosovo_setup() {
        // Get the div holding svg object
        graphicKosovo_object = document.getElementById("cid-infographic-kosovo-object");
        if (graphicKosovo_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicKosovo_svgDocument = graphicKosovo_object.contentDocument;
            if (graphicKosovo_svgDocument != null) {
                clearInterval(graphicKosovo_interval); // stop the interval
                //initial hide of svg
                graphicKosovo_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicKosovo_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicKosovo_animate() {
        if (graphicKosovo_fired == false && graphicKosovo_svgDocument != null) {
            graphicKosovo_fired = true;
            /* #region Defining Elements */
            var objects_all = [];            
            for (var i = 0; i < 5; i++) {
                objects_all.push(graphicKosovo_svgDocument.getElementById("bullet-"+(i+1)));
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicKosovo_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Kosovo */
    /* #region SVG animation - Kyrgyz */
    window.setScrollMagicScene_kyrgyz = function () {
        console.log('setScrollMagicScene_kyrgyz');
        var graphicKyrgyz_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-kyrgyz-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicKyrgyz_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicKyrgyz_object;
    //contains <svg> element with graphics
    var graphicKyrgyz_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicKyrgyz_interval = setInterval(graphicKyrgyz_setup, 300);
    function graphicKyrgyz_setup() {
        // Get the div holding svg object
        graphicKyrgyz_object = document.getElementById("cid-infographic-kyrgyz-object");
        if (graphicKyrgyz_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicKyrgyz_svgDocument = graphicKyrgyz_object.contentDocument;
            if (graphicKyrgyz_svgDocument != null) {
                clearInterval(graphicKyrgyz_interval); // stop the interval
                //initial hide of svg
                graphicKyrgyz_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicKyrgyz_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicKyrgyz_animate() {
        if (graphicKyrgyz_fired == false && graphicKyrgyz_svgDocument != null) {
            graphicKyrgyz_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicKyrgyz_svgDocument.getElementById("lybra"));
            objects_all.push(graphicKyrgyz_svgDocument.getElementById("hand"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicKyrgyz_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Kyrgyz */
    /* #region SVG animation - Macedonia */
    window.setScrollMagicScene_macedonia = function () {
        console.log('setScrollMagicScene_macedonia');
        var graphicMacedonia_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-macedonia-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicMacedonia_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicMacedonia_object;
    //contains <svg> element with graphics
    var graphicMacedonia_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicMacedonia_interval = setInterval(graphicMacedonia_setup, 300);
    function graphicMacedonia_setup() {
        // Get the div holding svg object
        graphicMacedonia_object = document.getElementById("cid-infographic-macedonia-object");
        if (graphicMacedonia_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicMacedonia_svgDocument = graphicMacedonia_object.contentDocument;
            if (graphicMacedonia_svgDocument != null) {
                clearInterval(graphicMacedonia_interval); // stop the interval
                //initial hide of svg
                graphicMacedonia_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicMacedonia_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicMacedonia_animate() {
        if (graphicMacedonia_fired == false && graphicMacedonia_svgDocument != null) {
            graphicMacedonia_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicMacedonia_svgDocument.getElementById("hammer"));
            objects_all.push(graphicMacedonia_svgDocument.getElementById("base"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicMacedonia_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Macedonia */
    /* #region SVG animation - Moldova */
    window.setScrollMagicScene_moldova = function () {
        console.log('setScrollMagicScene_moldova');
        var graphicMoldova_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-moldova-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicMoldova_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicMoldova_object;
    //contains <svg> element with graphics
    var graphicMoldova_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicMoldova_interval = setInterval(graphicMoldova_setup, 300);
    function graphicMoldova_setup() {
        // Get the div holding svg object
        graphicMoldova_object = document.getElementById("cid-infographic-moldova-object");
        if (graphicMoldova_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicMoldova_svgDocument = graphicMoldova_object.contentDocument;
            if (graphicMoldova_svgDocument != null) {
                clearInterval(graphicMoldova_interval); // stop the interval
                //initial hide of svg
                graphicMoldova_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicMoldova_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicMoldova_animate() {
        if (graphicMoldova_fired == false && graphicMoldova_svgDocument != null) {
            graphicMoldova_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicMoldova_svgDocument.getElementById("phone"));
            objects_all.push(graphicMoldova_svgDocument.getElementById("sos"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicMoldova_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Moldova */
    /* #region SVG animation - Montenegro */
    window.setScrollMagicScene_montenegro = function () {
        console.log('setScrollMagicScene_montenegro');
        var graphicMontenegro_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-montenegro-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicMontenegro_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicMontenegro_object;
    //contains <svg> element with graphics
    var graphicMontenegro_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicMontenegro_interval = setInterval(graphicMontenegro_setup, 300);
    function graphicMontenegro_setup() {
        // Get the div holding svg object
        graphicMontenegro_object = document.getElementById("cid-infographic-montenegro-object");
        if (graphicMontenegro_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicMontenegro_svgDocument = graphicMontenegro_object.contentDocument;
            if (graphicMontenegro_svgDocument != null) {
                clearInterval(graphicMontenegro_interval); // stop the interval
                //initial hide of svg
                graphicMontenegro_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicMontenegro_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicMontenegro_animate() {
        if (graphicMontenegro_fired == false && graphicMontenegro_svgDocument != null) {
            graphicMontenegro_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            for (var i = 0; i < 16; i++) {
                objects_all.push(graphicMontenegro_svgDocument.getElementById("petal-"+(i+1)));
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicMontenegro_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Montenegro */
    /* #region SVG animation - Serbia */
    window.setScrollMagicScene_serbia = function () {
        console.log('setScrollMagicScene_serbia');
        var graphicSerbia_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-serbia-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicSerbia_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicSerbia_object;
    //contains <svg> element with graphics
    var graphicSerbia_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicSerbia_interval = setInterval(graphicSerbia_setup, 300);
    function graphicSerbia_setup() {
        // Get the div holding svg object
        graphicSerbia_object = document.getElementById("cid-infographic-serbia-object");
        if (graphicSerbia_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicSerbia_svgDocument = graphicSerbia_object.contentDocument;
            if (graphicSerbia_svgDocument != null) {
                clearInterval(graphicSerbia_interval); // stop the interval
                //initial hide of svg
                graphicSerbia_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicSerbia_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicSerbia_animate() {
        if (graphicSerbia_fired == false && graphicSerbia_svgDocument != null) {
            graphicSerbia_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicSerbia_svgDocument.getElementById("document-back"));
            objects_all.push(graphicSerbia_svgDocument.getElementById("document-front"));
            objects_all.push(graphicSerbia_svgDocument.getElementById("checkmark"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicSerbia_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Serbia */
    /* #region SVG animation - Tajikistan */
    window.setScrollMagicScene_tajikistan = function () {
        console.log('setScrollMagicScene_tajikistan');
        var graphicTajikistan_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-tajikistan-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicTajikistan_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicTajikistan_object;
    //contains <svg> element with graphics
    var graphicTajikistan_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicTajikistan_interval = setInterval(graphicTajikistan_setup, 300);
    function graphicTajikistan_setup() {
        // Get the div holding svg object
        graphicTajikistan_object = document.getElementById("cid-infographic-tajikistan-object");
        if (graphicTajikistan_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicTajikistan_svgDocument = graphicTajikistan_object.contentDocument;
            if (graphicTajikistan_svgDocument != null) {
                clearInterval(graphicTajikistan_interval); // stop the interval
                //initial hide of svg
                graphicTajikistan_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicTajikistan_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicTajikistan_animate() {
        console.log('graphicTajikistan_animate');
        if (graphicTajikistan_fired == false && graphicTajikistan_svgDocument != null) {
            graphicTajikistan_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicTajikistan_svgDocument.getElementById("person-left"));
            objects_all.push(graphicTajikistan_svgDocument.getElementById("person-right"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicTajikistan_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Tajikistan */
    /* #region SVG animation - Turkey */
    window.setScrollMagicScene_turkey = function () {
        console.log('setScrollMagicScene_turkey');
        var graphicTurkey_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-turkey-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicTurkey_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicTurkey_object;
    //contains <svg> element with graphics
    var graphicTurkey_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicTurkey_interval = setInterval(graphicTurkey_setup, 300);
    function graphicTurkey_setup() {
        // Get the div holding svg object
        graphicTurkey_object = document.getElementById("cid-infographic-turkey-object");
        if (graphicTurkey_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicTurkey_svgDocument = graphicTurkey_object.contentDocument;
            if (graphicTurkey_svgDocument != null) {
                clearInterval(graphicTurkey_interval); // stop the interval
                //initial hide of svg
                graphicTurkey_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicTurkey_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicTurkey_animate() {
        if (graphicTurkey_fired == false && graphicTurkey_svgDocument != null) {
            graphicTurkey_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicTurkey_svgDocument.getElementById("group-left"));
            objects_all.push(graphicTurkey_svgDocument.getElementById("group-right"));
            objects_all.push(graphicTurkey_svgDocument.getElementById("person"));
            objects_all.push(graphicTurkey_svgDocument.getElementById("document"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicTurkey_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Turkey */
    /* #region SVG animation - Turkmenistan */
    window.setScrollMagicScene_turkmenistan = function () {
        console.log('setScrollMagicScene_turkmenistan');
        var graphicTurkmenistan_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-turkmenistan-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicTurkmenistan_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicTurkmenistan_object;
    //contains <svg> element with graphics
    var graphicTurkmenistan_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicTurkmenistan_interval = setInterval(graphicTurkmenistan_setup, 300);
    function graphicTurkmenistan_setup() {
        // Get the div holding svg object
        graphicTurkmenistan_object = document.getElementById("cid-infographic-turkmenistan-object");
        if (graphicTurkmenistan_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicTurkmenistan_svgDocument = graphicTurkmenistan_object.contentDocument;
            if (graphicTurkmenistan_svgDocument != null) {
                clearInterval(graphicTurkmenistan_interval); // stop the interval
                //initial hide of svg
                graphicTurkmenistan_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicTurkmenistan_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicTurkmenistan_animate() {
        console.log('graphicTurkmenistan_animate');
        if (graphicTurkmenistan_fired == false && graphicTurkmenistan_svgDocument != null) {
            graphicTurkmenistan_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicTurkmenistan_svgDocument.getElementById("shield-outer"));
            objects_all.push(graphicTurkmenistan_svgDocument.getElementById("shield-inner"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicTurkmenistan_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Turkmenistan */
    /* #region SVG animation - Ukraine */
    window.setScrollMagicScene_ukraine = function () {
        console.log('setScrollMagicScene_ukraine');
        var graphicUkraine_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-ukraine-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicUkraine_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicUkraine_object;
    //contains <svg> element with graphics
    var graphicUkraine_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicUkraine_interval = setInterval(graphicUkraine_setup, 300);
    function graphicUkraine_setup() {
        // Get the div holding svg object
        graphicUkraine_object = document.getElementById("cid-infographic-ukraine-object");
        if (graphicUkraine_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicUkraine_svgDocument = graphicUkraine_object.contentDocument;
            if (graphicUkraine_svgDocument != null) {
                clearInterval(graphicUkraine_interval); // stop the interval
                //initial hide of svg
                graphicUkraine_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicUkraine_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicUkraine_animate() {
        if (graphicUkraine_fired == false && graphicUkraine_svgDocument != null) {
            graphicUkraine_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicUkraine_svgDocument.getElementById("person"));
            objects_all.push(graphicUkraine_svgDocument.getElementById("building"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicUkraine_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Ukraine */
    /* #region SVG animation - Uzbekistan */
    window.setScrollMagicScene_uzbekistan = function () {
        console.log('setScrollMagicScene_uzbekistan');
        var graphicUzbekistan_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: "#cid-infographic-uzbekistan-trigger", duration: 200,
                triggerHook: "onCenter",
            }
        ).addTo(
            scrollMagicInitController
        ).on("start", function (e) {
                console.log('animate++');
                graphicUzbekistan_animate();
            }
        )
    }
    //contains <object> element with desired id
    var graphicUzbekistan_object;
    //contains <svg> element with graphics
    var graphicUzbekistan_svgDocument;
    //interval that will keep fireing until we get desired id element
    var graphicUzbekistan_interval = setInterval(graphicUzbekistan_setup, 300);
    function graphicUzbekistan_setup() {
        // Get the div holding svg object
        graphicUzbekistan_object = document.getElementById("cid-infographic-uzbekistan-object");
        if (graphicUzbekistan_object != undefined) {
            // Get the SVG document inside the Object tag
            graphicUzbekistan_svgDocument = graphicUzbekistan_object.contentDocument;
            if (graphicUzbekistan_svgDocument != null) {
                clearInterval(graphicUzbekistan_interval); // stop the interval
                //initial hide of svg
                graphicUzbekistan_object.style.opacity = startingOpacity;
            }
        }
    }
    //contains state of animation (fired/not fired)
    var graphicUzbekistan_fired = false;
    //function fired by 'ScrollMagic' controller
    function graphicUzbekistan_animate() {
        console.log('graphicUzbekistan_animate');
        if (graphicUzbekistan_fired == false && graphicUzbekistan_svgDocument != null) {
            graphicUzbekistan_fired = true;
            /* #region Defining Elements */
            var objects_all = [];
            objects_all.push(graphicUzbekistan_svgDocument.getElementById("document-3"));
            objects_all.push(graphicUzbekistan_svgDocument.getElementById("document-2"));
            objects_all.push(graphicUzbekistan_svgDocument.getElementById("document-1"));
            objects_all.push(graphicUzbekistan_svgDocument.getElementById("magnify"));
            for (var i = 0; i < objects_all.length; i++) {
                TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
            }
            /* #region INITAL function caller */
            var counter_initial = 0;
            function countdown_initial() {
                counter_initial++;
                if (counter_initial == objects_all.length) {
                    TweenMax.to(graphicUzbekistan_object, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                }
            }
            /* #endregion INITAL function caller */
            /* #region MAIN ANIMATIONS */
            var delayNumber = 0.02;
            function animate_initial() {
                for (var i = 0; i < objects_all.length; i++) {
                    var animDelay = delayNumber * i;
                    TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, });
                }
            }
            /* #endregion MAIN ANIMATIONS */
        }
    }
    /* #endregion SVG animation - Uzbekistan */

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