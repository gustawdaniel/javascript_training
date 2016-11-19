(function () {

    var con = document.getElementById("con-navigator"),
        card = con.querySelector(".card-text");

    // console.log(navigator);


    function log(str) {
        let el = document.createElement("pre");
        el.innerHTML = str;
        card.appendChild(el);
    }

    navigator.getBattery().then(function(battery) {
        function updateAllBatteryInfo(){
            updateChargeInfo();
            updateLevelInfo();
            updateChargingInfo();
            updateDischargingInfo();
        }
        updateAllBatteryInfo();

        battery.addEventListener('chargingchange', function(){
            updateChargeInfo();
        });
        function updateChargeInfo(){
            log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
        }

        battery.addEventListener('levelchange', function(){
            updateLevelInfo();
        });
        function updateLevelInfo(){
            log("Battery level: "
                + battery.level * 100 + "%");
        }

        battery.addEventListener('chargingtimechange', function(){
            updateChargingInfo();
        });
        function updateChargingInfo(){
            log("Battery charging time: "
                + battery.chargingTime + " seconds");
        }

        battery.addEventListener('dischargingtimechange', function(){
            updateDischargingInfo();
        });
        function updateDischargingInfo(){
            log("Battery discharging time: "
                + battery.dischargingTime + " seconds");
        }

    });

})();