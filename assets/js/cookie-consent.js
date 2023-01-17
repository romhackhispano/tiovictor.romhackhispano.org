window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#252e39"
    },
    "button": {
      "background": "#14a7d0"
    }
  },
  "theme": "classic",
  "type": "opt-in",
  "content": {
    "message": "Me dicen en Europa que si no digo que esta página web utiliza cookies únicamente con fines analíticos y os dejo elegir si las queréis o no, podría morir un gatito.",
    // PERSONALIZACION PARA TRADUCIR EL BOTON DE RECHAZAR DE UNA SANTA VEZ.
    "deny": "Rechazar cookies",
    "allow": "Aceptar cookies",
    "link": "Más información",
    "href": "https://tiovictor.romhackhispano.org/cookies/"
  },
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAOnConsent();
      loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAOnConsent();
      loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAOnConsent();
      loadDisqusOnConsent();
    }
  }
});