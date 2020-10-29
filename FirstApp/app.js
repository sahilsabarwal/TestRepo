/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SampleApp.Application',

    name: 'SampleApp',

    requires: [
        // This will automatically load all classes in the SampleApp namespace
        // so that application classes do not need to require each other.
        'SampleApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SampleApp.view.main.Main'
});
