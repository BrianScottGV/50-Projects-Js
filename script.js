const App = (() => {

    const htmlElements = {
        panels: document.querySelectorAll('.panel')
    };

    const handlers = {
        onPanelClick() {
            htmlElements.panels.forEach(panel => {
                panel.addEventListener('click', () => {
                    handlers.removeActiveClasses();  // Corrección: se llama a la función desde `handlers`
                    panel.classList.add('active');
                });
            });
        },

        removeActiveClasses() {
            htmlElements.panels.forEach(panel => {  // Corrección: usar `htmlElements.panels`
                panel.classList.remove('active');
            });
        }
    }
    
    return {
        init() {
            handlers.onPanelClick();  // Llamar al manejador de eventos de los paneles
        }
    }
})();

// Inicializar la aplicación
App.init();
