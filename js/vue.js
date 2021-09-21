const app = new Vue(
    {
        el: "#root",
        data: {
            debug: "Prova 1"
        },
        methods: {
            getDebug: function () {
                return this.debug;
            }
        }
    }
);