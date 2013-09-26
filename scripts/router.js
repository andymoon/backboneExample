define([
    'app/core/router',
    'app/samples/router'
], function (CoreRouter, SamplesRouter) {
    "use strict";
    var coreRouter, samplesRouter;
    return function (ContainerView) {

        //Start the core router.
        coreRouter = new CoreRouter(ContainerView);

        //Start the samples router.
        samplesRouter = new SamplesRouter(ContainerView);

        //Add your other routers here.
    }
});