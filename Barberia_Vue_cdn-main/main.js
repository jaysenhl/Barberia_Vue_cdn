const sandboxApp = Vue.createApp({
    data() {
        return {
            title: "Team1 VS Team2",
            customerName: "",
            barber: "",
            Barber1: [],
            b1count: 0,
            b1Total: 0,
            b1Atendidos: 0,
            b1Eliminados: 0,
            b1isVisible: false,
            Barber2: [],
            b2count: 0,
            b2Atendidos: 0,
            b2Total: 0,
            b2Eliminados: 0,
            b2isVisible: false,
            totalEnEspera: 0,
            eliminados: 0,
        };
    },
    methods: {
        addCustomer() {
            if (this.barber === "") {
                Swal.fire("Escoje un Barbero!");
                return;
            }
            if (this.customerName === "") {
                Swal.fire("Escribe tu nombre!!");
                return;
            }
            Swal.fire("Si al ser llamado no estas perderas tu turno!");
            if (this.barber === "Barber 1") {
                this.Barber1.push(this.customerName);
                this.b1count++;
                this.b1Total++;
                this.totalEnEspera++;
                this.customerName = "";
            } else if (this.barber === "Barber 2") {
                this.Barber2.push(this.customerName);
                this.b2count++;
                this.b2Total++;
                this.totalEnEspera++;
                this.customerName = "";
            }
        },
        b1Atender(index) {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Digite el código de seguridad",
                    input: "password",
                    inputLabel: "Para atender al Cliente",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 4,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado!`);
                    this.Barber1.splice(index, 1);
                    this.totalEnEspera--;
                    this.b1count--;
                    this.b1Atendidos++;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
        b1Deletes(index) {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Digite el código de seguridad",
                    input: "password",
                    inputLabel: "Para borrar Cliente",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 4,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado!`);
                    this.Barber1.splice(index, 1);
                    this.totalEnEspera--;
                    this.b1count--;
                    this.b1Eliminados++;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
        b1toggleTotal() {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Entre el código",
                    input: "password",
                    inputLabel: "Para ver sus totales",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 10,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado`);
                    this.b1isVisible = !this.b1isVisible;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
        b2Atender(index) {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Digite el código de seguridad",
                    input: "password",
                    inputLabel: "Para atender al Cliente",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 4,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado!`);
                    this.Barber2.splice(index, 1);
                    this.totalEnEspera--;
                    this.b2count--;
                    this.b2Atendidos++;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
        b2Deletes(index) {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Digite el código de seguridad",
                    input: "password",
                    inputLabel: "Para borrar Cliente",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 4,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado!`);
                    this.Barber2.splice(index, 1);
                    this.totalEnEspera--;
                    this.b2count--;
                    this.b2Eliminados++;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
        b2toggleTotal() {
            (async () => {
                const { value: password } = await Swal.fire({
                    title: "Entre el código",
                    input: "password",
                    inputLabel: "Para ver sus totales",
                    inputPlaceholder: "Digite el código aquí",
                    inputAttributes: {
                        maxlength: 10,
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                });

                if (password === "1234") {
                    Swal.fire(`Confirmado`);
                    this.b2isVisible = !this.b2isVisible;
                } else {
                    Swal.fire("Codigo Incorrecto!");
                    return;
                }
            })();
        },
    },
});

sandboxApp.mount("#main");
