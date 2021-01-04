define([
    'jq',
    'jqui',
    'mgr'
], function (jq, jqui, mgr) {
    'use strict';
    $(function () {

        /**
         * Inititalize the data-manager object
         */
        let mgr = new datamgr();
        /**
         * start-form user controls definitions
         */

        //spinner
        ////definition
        let yearSpinner = $('#yearselector').spinner({
            incremental: true,
            max: (new Date()).getFullYear() + 20,
            min: 2000,
            step: 1,
            spin: (e, ui) => {
                mgr.setYear(parseInt(ui.value));
                // console.log(mgr.getYear());
            }
        });
        ////default value assignment
        yearSpinner.spinner('value',
            (new Date()).getFullYear());

        //radio-buttons
        let qtrRadios =
            document.getElementsByClassName('form-check-input');
        ////event-handlers
        for (let i = 0; i < qtrRadios.length; i++) {
            qtrRadios.item(i)
                .addEventListener('change', (e) => {
                    mgr.setQtr(parseInt(e.target.value));
                    // console.log(mgr.getQtr());
                });
        }

        //submit-btn
        let idSubmit = document.getElementById('idsubmit');
        ///event-handlers
        idSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            mgr.setId();
            console.log('next btn click event: ' + mgr.getId());
        });

        //initial object assignment (in case the user chooses the default)
        mgr.setYear(yearSpinner.spinner('value'))
            .setQtr((Array.from(qtrRadios)
                .filter(i => i.checked === true))[0]
                .value)
            .setId();

        console.log('page load event' + mgr.getId());
        // The end  
    });
});