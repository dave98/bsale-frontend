export function DOMHandler(parentSelector){
        const parent = document.querySelector(parentSelector);
        return {
            module: null,
            load: function(module){
                console.log("Loading module on ", parentSelector);
                this.module = module;
                parent.innerHTML = module.toString(); // Incoming element must be overload on toString func.
                this.module.removeListeners(); // When element needs to be rerendered, current listeners will be re instantiated
                this.module.addListeners();
            },
            reload: function(){
                this.load(this.module);
            }
        }
}